import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../socket';

interface Message {
  type: 'message' | 'notification';
  count?: number;
  status?: string;
  username?: string;
  message?: string;
  time?: string;
  id?: string;
}
@Component({
  selector: 'app-chat',
  imports: [CommonModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  messages = signal<Message[]>([]);
  username = signal('');
  message = signal('');
  users = signal(0);
  error = signal({ username: false, message: false });

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.getSocket().on('message', (msg) => {
      if (msg.type === 'notification') {
        this.users.set(msg.count || 0);
      }
      this.messages.update((prev) => [msg, ...prev]);
    });
  }

  updateUsername(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username.set(input.value);
    if (this.error().username && input.value) {
      this.error.update((prev) => ({ ...prev, username: false }));
    }
  }
  updateMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
    if (this.error().message && input.value) {
      this.error.update((prev) => ({ ...prev, message: false }));
    }
  }

  sendMessage() {
    if (!this.username()) {
      this.error.update((prev) => ({ ...prev, username: true }));
      return;
    }
    if (!this.message()) {
      this.error.update((prev) => ({ ...prev, message: true }));
      return;
    }

    this.socketService.getSocket().emit('message', {
      username: this.username(),
      message: this.message(),
      type: 'message',
    });
    this.message.set('');
  }

  isCurrentUser(msg: Message) {
    return msg.id === this.socketService.getSocket().id;
  }
}

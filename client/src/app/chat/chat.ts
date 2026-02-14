import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../socket';

interface Message {
  username: string;
  message: string;
  time: string;
  id: string;
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

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.getSocket().on('message', (msg) => {
      this.messages.update((prev) => [msg, ...prev]);
    });
    this.socketService.getSocket().on('users', (count) => {
      this.users.set(count);
    });
  }

  updateUsername(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username.set(input.value);
  }
  updateMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

  sendMessage() {
    this.socketService.getSocket().emit('message', {
      username: this.username(),
      message: this.message(),
      id: this.socketService.getSocket().id,
      time: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    });
    this.message.set('');
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [CommonModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  messages = [
    {
      username: 'andrei',
      message: 'mesaj1',
      time: '22:22',
    },
    {
      username: 'andrei',
      message: 'mesaj2',
      time: '22:22',
    },
    {
      username: 'andrei',
      message: 'mesaj3',
      time: '22:22',
    },
    {
      username: 'andrei',
      message: 'mesaj4',
      time: '22:22',
    },
  ];
}

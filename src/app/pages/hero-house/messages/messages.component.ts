import { Component, OnInit } from '@angular/core';
import { MessgaesService } from './messgaes.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages: string[];
  constructor(
    private  MessageService: MessgaesService
  ) {
  }

  ngOnInit() {
this.messages = this.MessageService.messages;
  }
clear() {
  this.MessageService.clear();
}
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../utils/models/user";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent  {

  @Input() show_delete: boolean = true;
  @Input() user_input? : User;
  //        nom de l'événement      <type de sortie>
  @Output() message_event = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.message_event.emit('Hello from User Card !')
  }


}

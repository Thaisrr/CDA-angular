import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../utils/models/user";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent  {

  @Input() user_input? : User;

  constructor() { }


}

import { Component } from '@angular/core';
import {User} from "../../utils/models/user";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {

  user_data : User = {
    id: 1,
    nom: 'Jane Doe',
    email: 'jdoe@mail.fr'
  }

  users_list: User[] = [
    {id: 10, nom: 'Jane Doe 10', email: 'jdoe@mail.fr'},
    {id: 11, nom: 'Jane Doe 11', email: 'jdoe@mail.fr'},
    {id: 12, nom: 'Jane Doe 12', email: 'jdoe@mail.fr'},
    {id: 13, nom: 'Jane Doe 13', email: 'jdoe@mail.fr'},
  ];

  constructor() { }

  handleMessage(event: string) {
    console.warn(event)
  }

}

import { Component } from '@angular/core';
import {User} from "../../utils/models/user";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {

  user_data : User = {
    nom: 'Jane Doe',
    email: 'jdoe@mail.fr'
  }

  constructor() { }


}

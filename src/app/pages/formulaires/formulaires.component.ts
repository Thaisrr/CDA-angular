import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent {


  search_str = '';
  user : User = new User();
  saved_user?: User;

  saveUser() {
    this.saved_user = {...this.user}
    // Object.assign(this.saved_user, this.user) -> pour faire une copie
    this.user = new User();
  }
}

class User {
  nom : string = '';
  email: string = '';
}

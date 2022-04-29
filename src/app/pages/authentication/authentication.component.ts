import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../utils/services/authentication.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  sign_group! : FormGroup;
  login_user = {email: '', password: ''};
  isLogged : boolean = false;

  constructor(private auth_service: AuthenticationService) { }

  ngOnInit(): void {
    this.sign_group = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    this.isLogged = this.auth_service.isLogged();
  }

  register() {
    this.auth_service.register(this.sign_group.value)
      .subscribe(res => {
        alert('Bienvenue, veuillez vous connecter');
        this.sign_group.reset();
      });
  }

  login() {
    this.auth_service.login(this.login_user)
      .subscribe(res => {
        alert('Bienvenue ' + res.email);
        this.login_user = {email: '', password: ''};
        this.isLogged = true;
        // Dans la vrai vie : on gère les erreurs
        // TODO : rediriger
      });
  }

  logout() {
    this.auth_service.logout()
  }

}

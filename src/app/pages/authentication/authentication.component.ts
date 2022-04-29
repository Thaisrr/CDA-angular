import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../utils/services/authentication.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  sign_group! : FormGroup;
  login_user = {email: '', password: ''};
  isLogged : boolean = false;
  subscription!: Subscription;
  url? : string;


  constructor(
    private auth_service: AuthenticationService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if(params['return_url']) {
        this.url = params['return_url'];
      }
    })

    this.sign_group = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    this.subscription = this.auth_service.is_logged$.subscribe(bool => this.isLogged = bool); // Flux
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
        if(this.url) {
          this.router.navigate([this.url]);
        } else {
          // naviguer ailleur
        }
      });
  }

  logout() {
    this.auth_service.logout()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

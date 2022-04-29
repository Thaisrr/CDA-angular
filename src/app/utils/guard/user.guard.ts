import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private router : Router,
    private auth: AuthenticationService
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Attention si le token n'est plus valide
    // Retourner true si on peut passer ( si connecté )
    if(sessionStorage.getItem('token') ) {
      return true;
    }

    console.warn("Nope, navigation interdite !")
    this.router.navigate(['/auth'], {queryParams:  {'return_url': state.url}})
    return false;
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  api_url = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.api_url + 'register', user)
  }

  login(user: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(this.api_url + 'login', user).pipe(
      tap(res => {sessionStorage.setItem('token', res.accessToken)}),
      map(res => res.user),
      catchError(err => {
        if(err.status === 400)
          throw "Erreur d'authentification !"
        else
          throw "Quelque chose s'est mal passé, veuillez recommencé."
      })
    )
  }

  isLogged(): boolean {
    console.log("is logged : " + !!sessionStorage.getItem('token'))
    return !!sessionStorage.getItem('token');
    // !! retourne true si la valeur testée est truthy, et false si falsy
    // dans la vrai vie : vérifier également via requête si le token est toujours bon
    // ( au moins 1 fois dans ngInit de app )
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
    // Version facile pour tout recharger
  }

}

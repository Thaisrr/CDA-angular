import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  api_url = "http://localhost:3000/";
  is_logged$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    if(sessionStorage.getItem('token')) {
      this.is_logged$.next(true);
    }
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.api_url + 'register', user)
  }

  login(user: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(this.api_url + 'login', user).pipe(
      tap(res => {
        sessionStorage.setItem('token', res.accessToken);
        this.is_logged$.next(true);
      }),
      map(res => res.user),
      catchError(err => {
        if(err.status === 400)
          throw "Erreur d'authentification !"
        else
          throw "Quelque chose s'est mal passé, veuillez recommencé."
      })
    )
  }
/*
  isLogged(): boolean {
    console.log("is logged : " + !!sessionStorage.getItem('token'))
    return !!sessionStorage.getItem('token');
    // !! retourne true si la valeur testée est truthy, et false si falsy
    // dans la vrai vie : vérifier également via requête si le token est toujours bon
    // ( au moins 1 fois dans ngInit de app )
  }
*/
  logout() {
    sessionStorage.clear();
    this.is_logged$.next(false);

   // window.location.reload();
    // Version facile pour tout recharger
    // Attention : si application en SSR : ne fonctionnera pas
  }

}

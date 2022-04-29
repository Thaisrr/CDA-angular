import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Joke} from "../models/Joke";

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  // ng g service
  api_url = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode';

  constructor(
    private http: HttpClient
  ) { }

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.api_url)

  }

  getJokeString(): Observable<string>  {
    return this.http.get<Joke>(this.api_url, {
      headers: new HttpHeaders({
        "Authentication" : "Bearer fjkdlsfjlsjfdlsfjdlsfjldsjfl"
      })
    })
      .pipe(
        map(res => res.joke),
        catchError(err => {
          console.warn(err);
          throw "Quelque chose n'a pas fonctionné 😕"
        })
      )
  }

  getAllJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.api_url + '/monchemin');
  }

  create(): any {
    return this.http.post('http://localhost:3000/register', {email: 'toto@mail.fr', password: '1234'})
  }
}

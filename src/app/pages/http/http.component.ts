import { Component, OnInit } from '@angular/core';
import {JokeService} from "../../utils/services/joke.service";
import {finalize, Subscription} from "rxjs";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  joke?: string;
  is_loading = true;

  constructor(
    private joke_service: JokeService
  ) { }

  ngOnInit(): void {

   this.joke_service.getJoke()
      .subscribe({
        next: value => console.log(value),
        error: err => console.warn(err),
        complete: () => console.info('Finito !')
      });



    this.joke_service.getJokeString()
      .pipe(
        // se déclanche à la fin de la requête, qu'il y ait une réponse ou une erreur
        finalize(() => this.is_loading = false)
      )
      .subscribe(val => this.joke = val);


    this.joke_service.getAllJokes()
      .subscribe(jokes => console.log('un tableau de jokes'))

    this.joke_service.create().subscribe(
        (val: any) => console.log(val)
    )

  }
}

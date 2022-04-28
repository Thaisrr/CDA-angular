import {Component, OnDestroy, OnInit} from '@angular/core';
import {catchError, filter, interval, map, observable, Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy{

  data$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.error(new Error('Boom...'))
    observer.next(3);
    observer.next(4);
    observer.complete();
  });


  flux$ = interval(1000);

  subscription: Subscription;
  interval?: number;


  constructor() {
    console.warn('Constructeur du composant')
    this.data$.subscribe({
      next: value => console.log(value),
      error: err => console.warn(err.toString()),
      complete: () => console.info('Terminé !')
    });

    // Si pas de complete ( en cas de flux )
    this.subscription = this.flux$.subscribe({
      next: value => console.log(value)
    });

    this.data$.pipe(
      filter(val => Number(val) % 2 === 0), // retourne une condition
      map( val => val + '-- mapped' ), // doit retourner qqch,
      /* catchError : pour gérer l'erreur en amont,
      -> retourner une donnée sous forme d'observable of(donnée )
            => traité dans le next du subscribe
      -> lancer une erreur, avec un message personnalisé
            => traité dans "error"
       */
     // catchError(err => of("Erreur detectée")),  // retourne un observable
      catchError(err => {throw "Erreur detectée"}), // PAS de retour !
    ).subscribe({
        next: value => console.info(value),
        error: err => console.error(err)
      })
  }

  ngOnInit() {
    console.warn("Initialisation du composant");
    this.interval = setInterval(() => {
      console.log('coucou')
    }, 1000);
  }

  ngOnDestroy() {
    console.warn("destruction du composant");
    clearInterval(this.interval);
    this.subscription.unsubscribe();
  }

}

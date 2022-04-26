import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  title = 'Formation Angular';

  user = {
    nom: 'John Snow',
    age: 'unknown'
  }

  video_games = ['Horizon', 'The Witcher', 'Mario']

  characters = [
    {nom: 'Link'},
    {nom: 'Geralt de Riv'},
    {nom: 'Aloy'}
  ]

  // @ts-ignore
  users;

  is_logged = false;

  image_source = 'https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg';

  image = {
    source : "https://www.derelictspacesheep.com/wp-content/uploads/2014/10/cropped-Derelict-Space-Sheep2.png",
    alt: 'Space Sheep'
  }



  constructor() {
    console.log('Création du composant App');
  }

  handleClic(e: Event) {
    e.stopPropagation()
    console.warn('BOOM !')
  }

  handleMouseOver() {
    console.log('Overing p')
  }

  handleParentClic() {
    console.log('Clic sur le parent')
  }

  handleChildClic(e : Event) {
    e.stopPropagation();
    console.log("Clic sur l'enfant")
  }

  signIn() : void {
    this.is_logged = !this.is_logged;
  }

  sum(a : number, b : number) : number {
    return a + b;
  }

  soustraction(a : number | string, b: number | string): number {
    a = +a;
    b = Number(b);
    if(isNaN(a) || isNaN(b)) {
      return 0;
    }
    return a - b;
  }

  bidule(a : any) {
    console.log(typeof a);
  }

}

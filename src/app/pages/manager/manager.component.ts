import { Component } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent  {

  calls_answered = 0;

  handleCall(message: string) {
    console.warn('Décroche');
    console.info(message);
    this.calls_answered++;
  }



}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Output() call_event = new EventEmitter<string>();
  @Input() employee? : string;

  callManager() {
    console.log('Dring Dring')
    this.call_event.emit('Message Urgent de ' + this.employee);
  }

}

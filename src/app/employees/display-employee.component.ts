import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input () employee: Employee;
  /* with @Output call child component methods and properties  */
  @Output () notify: EventEmitter<string> = new EventEmitter<string>();
  handleClick() {
    this.notify.emit(this.employee.name);
  }

  constructor(private router: Router) { }
  ngOnInit() { }
  onClick(employeeId: number) {
    this.router.navigate(['/employees', employeeId]);
  }
   /* with template reference call child component methods and properties*/
  //  public getEmail(): string {
  //   return this.employee.email;
  // }
}

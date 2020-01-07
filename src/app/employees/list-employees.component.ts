import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [{
    id: 1,
    name: 'Mark',
    gender: 'Male',
    email: 'mark123@gmail.com',
    contactPreference: 'Email',
    dateOfBirth: new Date('07/05/1988'),
    department: 'IT',
    isActive: true
    // photoPath?: string;
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Female',
    phoneNumber: '9876543210',
    contactPreference: 'Phone',
    dateOfBirth: new Date('05/07/1979'),
    department: 'HR',
    isActive: true
  },
  {
    id: 3,
    name: 'John',
    gender: 'Male',
    phoneNumber: '9873214560',
    contactPreference: 'Phone',
    dateOfBirth: new Date('09/09/1976'),
    department: 'IT',
    isActive: false
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}

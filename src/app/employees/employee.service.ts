import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public listemployees: Employee[] = [{
    id: 1,
    name: 'Mark',
    gender: 'Male',
    email: 'mark123@gmail.com',
    contactPreference: 'Email',
    dateOfBirth: new Date('07/05/1988'),
    department: 'IT',
    isActive: true
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

  public getEmployees(): Employee[] {
    return this.listemployees;
  }

  public getEmployee(id: number): Employee {
    return this.listemployees.find(e => e.id === id);
  }

  public saveEmp(employee: EmployeeService) {
    this.listemployees.push();
  }
  constructor() { }
}

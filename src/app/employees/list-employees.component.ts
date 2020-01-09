import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }
  clickEventBtn(){
    console.log('button Clicked');
  }
  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}

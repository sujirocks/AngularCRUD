import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    // Used for angular 2
    // const id = +this.route.snapshot.params['id'];
    // Used for angular 4+
      this.route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this.employeeService.getEmployee(this._id);
    });
  }

  viewNextEmployee() {
    if ( this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this.router.navigate(['/employees', this._id]);
  }

}

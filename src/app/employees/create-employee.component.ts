import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  isMobile = false;
  isEmail = true;
  gender = 'male';
  contactpreference = 'emailid';
  departments = [{
    id: 1,
    name: 'HR'
  },
  {
    id: 2,
    name: 'IT'
  },
  {
    id: 3,
    name: 'Payroll'
  },
  {
    id: 4,
    name: 'Helpdesk'
  }
];
colorTheme = 'theme-dark-blue';
bsConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.bsConfig = Object.assign({}, {
      containerClass: this.colorTheme,
      adaptivePosition: true,
      dateInputFormat: 'DD-MM-YYYY',
      showWeekNumbers: false
    });
  }

  ngOnInit() { }

  empForm(emp: NgForm): void {
    console.log(emp.value);
  }

  isMPref() {
    if (!this.isMobile) {
      this.isMobile = !this.isMobile;
    }
  }
  isEPref() {
    if (this.isMobile) {
      this.isMobile = !this.isMobile;
    }
  }
}

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeecandeactivateService implements CanDeactivate<CreateEmployeeComponent> {

  constructor() { }
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
        return confirm('Are you sure you want to leave this page?');
    }
    return true;
  }
}

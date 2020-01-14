import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {

  constructor(private employeeService: EmployeeService,
              private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const employeeExists = !!this.employeeService.getEmployee(+route.paramMap.get('id'));
    if (employeeExists) {
      return true;
    } else {
      this.router.navigate(['/notfound']);
      return false;
    }
  }
}

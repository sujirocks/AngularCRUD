import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectReqValidatorDirective } from './shared/select-req-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeecandeactivateService } from './employees/create-employeecandeactivate.service';
import { EmployeedetailsComponent } from './employees/employeedetails.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';

const appRoutes: Routes = [{
  path: 'list',
  component: ListEmployeesComponent
},
{
  path: 'create',
  component: CreateEmployeeComponent,
  canDeactivate: [CreateEmployeecandeactivateService]
},
{
  path: 'employees/:id',
  component: EmployeedetailsComponent,
  canActivate: [EmployeeDetailsGuardService]
},
{
  path: '',
  redirectTo : '/list',
  pathMatch : 'full'
},
{
  path: 'notfound',
  component: PageNotFoundComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectReqValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeedetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditEmployeeComponent } from './home/add-edit-employee/add-edit-employee.component';
import { ViewEmployeesComponent } from './home/view-employees/view-employees.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ViewEmployeesComponent
      },
      {
        path: 'addOrEdit',
        component: AddEditEmployeeComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

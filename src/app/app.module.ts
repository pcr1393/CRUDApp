import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewEmployeesComponent } from './home/view-employees/view-employees.component';
import { EmployeeFilterPipe } from './Filters/employee-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AddEditEmployeeComponent } from './home/add-edit-employee/add-edit-employee.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewEmployeesComponent,
    EmployeeFilterPipe,
    AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

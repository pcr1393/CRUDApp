import { Component, OnInit, ViewChild } from '@angular/core';
import { employee } from '../../Models/employee.model';
import { Router } from '@angular/router';
import { EmployeesListService } from 'src/app/Services/employees-list.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: employee[];
  queryString: string;
  employeeIndexToBeDeleted: number;
  constructor(private router: Router, private employeeService: EmployeesListService) { }

  ngOnInit() {
    
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
        this.employeeService.setAllEmployees(data);
      }
    );
  }

  deleteEmployee(){
    this.employees.splice(this.employeeIndexToBeDeleted, 1);
  }

  storeEmployeeIndex(index){
    this.employeeIndexToBeDeleted = index;
  }

  removeDeletionIndex(){
    this.employeeIndexToBeDeleted = undefined;
  }

  addEmployee(){
    this.employeeService.actionChosen('Add');
    this.router.navigate(['addOrEdit']);
  }

  editEmployee(employee, index){
    this.employeeService.setEmployeeDetails(employee);
    this.employeeService.setEmployeeIndexForEditing(index);
    this.employeeService.actionChosen('Edit');
    this.router.navigate(['addOrEdit']);
  }

}

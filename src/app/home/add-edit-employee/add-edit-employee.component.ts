import { Component, OnInit } from '@angular/core';
import { EmployeesListService } from 'src/app/Services/employees-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  actionChosen: string;
  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });
  constructor(private employeesService: EmployeesListService, private router: Router) { }

  ngOnInit() {
    this.actionChosen = this.employeesService.getActionSelected();
    if(this.actionChosen.toLowerCase() === 'edit'){
      let employeeDetail = this.employeesService.getEmployeeDetails();
      this.employeeForm.patchValue({
        name: employeeDetail.name,
        designation: employeeDetail.designation,
        salary: employeeDetail.salary
      });
    }
  }

  saveAndRedirect(){
    if(this.actionChosen.toLowerCase() === 'add'){
      this.employeesService.addEmployee(this.employeeForm.value);
    }
    else{
      this.employeesService.editEmployee(this.employeeForm.value);
    }
    this.cancelAndRedirect();
  }

  cancelAndRedirect(){
    this.router.navigate(['']);
  }

}

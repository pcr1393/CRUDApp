import { Injectable } from '@angular/core';
import { employee } from '../Models/employee.model';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesListService {

  public employeesList: employee[] = []; 
  public actionSelected: string = 'Add';
  public selectedEmployeeDetails: employee = {};
  public editEmployeeIndex: number;
  private _url: string = '/assets/employees.json'

  constructor(private httpService: HttpClient) { }

  getAllEmployees(): Observable<any>{
    if(this.employeesList.length > 0){
      return of(this.employeesList);     
    }
    else{
      return this.httpService.get(this._url);
    }
  }

  setAllEmployees(list){
    this.employeesList = list;
  }

  actionChosen(param){
    this.actionSelected = param;
  }

  getActionSelected(){
    return this.actionSelected;
  }

  setEmployeeDetails(param){
    this.selectedEmployeeDetails = param;
  }

  getEmployeeDetails(){
    return this.selectedEmployeeDetails;
  }

  addEmployee(payload){
    this.employeesList.push(payload);
  }

  editEmployee(payload){
    this.employeesList[this.editEmployeeIndex] = payload;
  }

  setEmployeeIndexForEditing(index){
    this.editEmployeeIndex = index;
  }

}

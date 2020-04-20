import { Pipe, PipeTransform } from '@angular/core';
import { employee } from '../Models/employee.model';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(items: employee[], value: string): any {
    if (!items) return [];
    // add
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e =>

      e['name'].toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      e['designation'].toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      e['salary'].toLowerCase().indexOf(value.toLowerCase()) > -1

      );
  }

}

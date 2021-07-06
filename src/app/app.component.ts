import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private es: EmployeeService) {}
response;
  getData() {
    this.es.getEmp().subscribe(res =>{
      this.response = res;
      console.log(this.response)
    })
  }
}

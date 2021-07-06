import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getEmp(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      timeout(15000),
      catchError(e => {
        // do something on a timeout
        return of(error);
      })
    );
  }
}

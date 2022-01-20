import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseURL="http://localhost:8080/employees";
  constructor(private httpClient:HttpClient) { }


  getEmployeesList():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  private createURL="http://localhost:8080/save/employee";

  createEmployee(employee:Employee):Observable<Object>{

    return this.httpClient.post(`${this.createURL}`,employee);
  }

  private getURL="http://localhost:8080/get/employee";
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.getURL}/${id}`);
  }


  private updateURL="http://localhost:8080/update/employee";
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.updateURL}/${id}`, employee);
  }


  private deleteURL="http://localhost:8080/delete/employee";

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }
}

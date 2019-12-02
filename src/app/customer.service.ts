import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  private baseUrl = 'http://127.0.0.1:8000/customers';
 
  constructor(private http: HttpClient) { }
  
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
 

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createCustomer(customer: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/`, customer);
  }
 
  updateCustomer(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
 
 
  getCustomersByphone(phone: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/telefono/${phone}/`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }
}

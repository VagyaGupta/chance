import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

 
  createCustomer(customerData: any): Observable<any> {
    return this.http.post(this.apiUrl, customerData);
  }

  // getAllCustomers(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/customers`);
  // }
  

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // getCustomerById(customerId: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/customers/${customerId}`);
  // }



  
  getCustomerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  


  updateCustomer(customerData: any) {
    return this.http.put(`${this.apiUrl}/${customerData.customerId}`, customerData);
  }
  
  




  // updateCustomer(customerData: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${customerData.id}`, customerData);
  // }
 
  // updateCustomer(customerData: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${customerData.customerId}`, customerData);
  // }
}



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../pages/table-customer/table-customer.component';
import { Customer } from '../modelo/Customer';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  _url = 'http://localhost:8090/clients'
  _urlput = 'http://localhost:8090/clients/post'
  constructor(
    private http: HttpClient,
  ) {

  }
  getClients() {
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this._url, { headers: header });
  }
  createCustomer(customer: Customer) {
    return this.http.post<UserData>(this._urlput, customer);
  }
}

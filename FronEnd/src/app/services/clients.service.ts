import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../pages/table-customer/table-customer.component';
import { Customer } from '../modelo/Customer';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  [x: string]: any;
  _url = 'http://localhost:8090/clients'
  _urldelete = 'http://localhost:8090/clients/delete'
  _urlput = 'http://localhost:8090/clients/post'
  status!: string;
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

  deleteCustomerById(customer: Customer) {

    return this.http.delete(`${this._urldelete}/${customer.id_client}`)
      .subscribe({
        next: data => {
          this.status = 'Delete successful';
        },
        error: error => {
          this['errorMessage'] = error.message;
          console.error('There was an error!', error);
        }
      })


  }
}



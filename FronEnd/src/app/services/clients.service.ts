import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  _urlP = 'http://localhost:8090/clients/put'
  status!: string;
  constructor(
    private http: HttpClient,
  ) {

  }

  getClients() {
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get<Customer[]>(this._url, { headers: header });
  }

  createCustomer(customer: Customer) {
    return this.http.post<Customer>(this._urlput, customer);
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
  putCustomer(customer: Customer) {
    return this.http.put(`${this._urlP}/${customer.id_client}`, customer)

  }
}



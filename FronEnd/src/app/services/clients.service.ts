import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  _url = 'http://localhost:8090/clients'
  constructor(
    private http: HttpClient,
  ) {
    console.log('ClientsService');
  }
  getClients() {
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this._url, { headers: header });
  }
}

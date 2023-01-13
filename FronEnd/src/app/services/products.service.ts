import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../pages/table-customer/table-customer.component';
import { Products } from '../modelo/Customer';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _url = 'http://localhost:8090/Products'
  _urlP = 'http://localhost:8090/Products/CC'
  _urlput = 'http://localhost:8090/Products/post'

  status!: string;
  errorMessage!: string;

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this._url, { headers: header });
  }



  createProducts(products: Products) {
    return this.http.post<UserData>(this._urlput, products);
  }
  deleteProductsById(products: Products) {

    return this.http.delete(`${this._url}/delete/${products.id_account}`)
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
  findPrudctsByCC(products: Products) {
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(`${this._urlP}/${products}`, { headers: header });

  }

}

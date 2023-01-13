import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TProducts } from '../modelo/Customer';
import { TproductData } from '../pages/table-tproducts/table-tproducts.component';

@Injectable({
  providedIn: 'root'
})
export class TproductsService {
  _url = 'http://localhost:8090/Products'
  _urlP = 'http://localhost:8090/transactions/CC'
  _urlput = 'http://localhost:8090/transactions/post'
  _urlputr = 'http://localhost:8090/transactions/r'
  _urlputT = 'http://localhost:8090/transactions/t'

  status!: string;
  errorMessage!: string;
  constructor(
    private http: HttpClient,
  ) { }
  findTPrudctsByCC(Tproducts: TProducts) {
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(`${this._urlP}/${Tproducts}`, { headers: header });

  }
  createProducts(Tproducts: TProducts) {
    return this.http.post<TproductData>(this._urlput, Tproducts);
  }
  createProductsR(Tproducts: TProducts) {
    return this.http.post<TproductData>(this._urlputr, Tproducts);
  }
  createProductsT(Tproducts: TProducts) {
    return this.http.post<TproductData>(this._urlputT, Tproducts);
  }
  deleteProductsById(Tproducts: TProducts) {

    return this.http.delete(`${this._url}/delete/${Tproducts.id_Transaction}`)
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

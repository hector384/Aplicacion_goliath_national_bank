import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/modelo/Customer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsForm = new FormGroup({
    gmf_on: new FormControl("", Validators.required),
    type_account: new FormControl("", Validators.required),
    estate_account: new FormControl("", Validators.required),
    available_balance: new FormControl("", Validators.required),
    number_Identification: new FormControl('', Validators.required),
  })

  constructor(
    private productService: ProductsService,
    private router: Router,
  ) {
  }

  onSaveNewProduct(form: any) {
    this.productService.createProducts(form)
      .subscribe(data => {
        console.log(data);
        //this.router.navigate(['/table-customer'])
      })

  }

}

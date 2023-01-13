import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { TproductsService } from '../../services/tproducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-consignment',
  templateUrl: './new-consignment.component.html',
  styleUrls: ['./new-consignment.component.css']
})
export class NewConsignmentComponent {

  newTransactionForm = new FormGroup({
    transaction_description: new FormControl('', Validators.required),
    valueOfTransaction: new FormControl('', Validators.required),
    movement_type: new FormControl('', Validators.required),
    balance: new FormControl('', Validators.required),
    available_balance: new FormControl('', Validators.required),
    emiterAccount: new FormControl('', Validators.required),
    reciberAccount: new FormControl('', Validators.required),
    transaction_tipe: new FormControl('', Validators.required),

  })
  constructor(
    private transactionService: TproductsService,
    private router: Router
  ) {

  }

  onSaveNewconsignment(form: any) {
    this.transactionService.createProductsT(form)
      .subscribe(data => {
        console.log(data);

      })

  }

}

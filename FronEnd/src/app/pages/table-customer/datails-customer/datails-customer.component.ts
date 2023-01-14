import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../services/clients.service';
import { Customer } from 'src/app/modelo/Customer';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-datails-customer',
  templateUrl: './datails-customer.component.html',
  styleUrls: ['./datails-customer.component.css']
})
export class DatailsCustomerComponent {
  customer!: Customer | undefined;

  idCustomer!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientsService

  ) {
    this.idCustomer = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getCustomer()
  }
  getCustomer() {
    this.clienteService.getClients().pipe(
      filter(response => response !== undefined),
      tap(response => {
        if (response) {
          this.customer = response.find((customer: Customer) => customer.id_client === this.idCustomer)
          console.log(this.customer)
        }
      })
    ).subscribe()
  }
  editCustomer(form: Customer) {

    console.log(form)
    this.clienteService.putCustomer({ ...form, id_client: this.idCustomer }).subscribe(response => {
      console.log(response)
    })

  }

}

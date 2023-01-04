import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCustomerRoutingModule } from './table-customer-routing.module';
import { TableCustomerComponent } from './table-customer.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    TableCustomerComponent
  ],
  imports: [
    CommonModule,
    TableCustomerRoutingModule,
    MaterialModule
  ]
})
export class TableCustomerModule { }

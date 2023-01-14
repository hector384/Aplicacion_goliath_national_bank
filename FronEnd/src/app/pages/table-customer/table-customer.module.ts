import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCustomerRoutingModule } from './table-customer-routing.module';
import { TableCustomerComponent } from './table-customer.component';
import { MaterialModule } from 'src/app/material.module';
import { FormComponent } from '../form-user/components/form/form.component';
import { FormUserModule } from '../form-user/form-user.module';


@NgModule({
  declarations: [
    TableCustomerComponent
  ],
  imports: [
    CommonModule,
    TableCustomerRoutingModule,
    MaterialModule,
    FormUserModule
  ]
})
export class TableCustomerModule { }

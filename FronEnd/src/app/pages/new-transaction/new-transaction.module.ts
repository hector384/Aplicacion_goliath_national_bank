import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTransactionRoutingModule } from './new-transaction-routing.module';
import { NewTransactionComponent } from './new-transaction.component';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    NewTransactionComponent
  ],
  imports: [
    CommonModule,
    NewTransactionRoutingModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class NewTransactionModule { }

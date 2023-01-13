import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableProductsRoutingModule } from './table-products-routing.module';
import { TableProductsComponent } from './table-products.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableProductsComponent
  ],
  imports: [
    CommonModule,
    TableProductsRoutingModule,
    MaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class TableProductsModule { }

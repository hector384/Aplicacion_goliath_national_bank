import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableTproductsRoutingModule } from './table-tproducts-routing.module';
import { TableTproductsComponent } from './table-tproducts.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableTproductsComponent
  ],
  imports: [
    CommonModule,
    TableTproductsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TableTproductsModule { }

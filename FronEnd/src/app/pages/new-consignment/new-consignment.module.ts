import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewConsignmentRoutingModule } from './new-consignment-routing.module';
import { NewConsignmentComponent } from './new-consignment.component';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    NewConsignmentComponent
  ],
  imports: [
    CommonModule,
    NewConsignmentRoutingModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class NewConsignmentModule { }

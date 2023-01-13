import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewWithdrawalRoutingModule } from './new-withdrawal-routing.module';
import { NewWithdrawalComponent } from './new-withdrawal.component';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    NewWithdrawalComponent
  ],
  imports: [
    CommonModule,
    NewWithdrawalRoutingModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule

  ]
})
export class NewWithdrawalModule { }

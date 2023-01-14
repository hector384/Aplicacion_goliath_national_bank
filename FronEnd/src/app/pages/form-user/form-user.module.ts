import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormUserRoutingModule } from './form-user-routing.module';
import { FormUserComponent } from './form-user.component';
import { MaterialModule } from '../.././material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    FormUserComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormUserRoutingModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    FormUserComponent,
    FormComponent
  ]
})
export class FormUserModule { }

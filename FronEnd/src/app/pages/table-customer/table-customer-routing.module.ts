import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCustomerComponent } from './table-customer.component';

const routes: Routes = [{ path: '', component: TableCustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableCustomerRoutingModule { }

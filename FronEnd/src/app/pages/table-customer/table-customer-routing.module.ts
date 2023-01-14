import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCustomerComponent } from './table-customer.component';
import { DatailsCustomerComponent } from './datails-customer/datails-customer.component';

const routes: Routes = [
  { path: '', component: TableCustomerComponent },
  { path: 'detail-customer/:id', component: DatailsCustomerComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableCustomerRoutingModule { }

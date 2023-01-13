import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableProductsComponent } from './table-products.component';

const routes: Routes = [{ path: '', component: TableProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableProductsRoutingModule { }

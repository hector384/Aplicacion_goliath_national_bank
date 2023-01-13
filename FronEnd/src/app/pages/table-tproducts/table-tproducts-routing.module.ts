import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableTproductsComponent } from './table-tproducts.component';

const routes: Routes = [{ path: '', component: TableTproductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTproductsRoutingModule { }

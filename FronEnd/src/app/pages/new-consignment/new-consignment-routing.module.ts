import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewConsignmentComponent } from './new-consignment.component';

const routes: Routes = [{ path: '', component: NewConsignmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewConsignmentRoutingModule { }

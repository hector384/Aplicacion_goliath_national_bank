import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWithdrawalComponent } from './new-withdrawal.component';

const routes: Routes = [{ path: '', component: NewWithdrawalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewWithdrawalRoutingModule { }

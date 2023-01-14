import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'form-user', loadChildren: () => import('./pages/form-user/form-user.module').then(m => m.FormUserModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
{ path: 'table-customer', loadChildren: () => import('./pages/table-customer/table-customer.module').then(m => m.TableCustomerModule) },
{ path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
{ path: 'table-products', loadChildren: () => import('./pages/table-products/table-products.module').then(m => m.TableProductsModule) },
{ path: 'table-Tproducts', loadChildren: () => import('./pages/table-tproducts/table-tproducts.module').then(m => m.TableTproductsModule) },
{ path: 'new-transaction', loadChildren: () => import('./pages/new-transaction/new-transaction.module').then(m => m.NewTransactionModule) },
{ path: 'new-Withdrawal', loadChildren: () => import('./pages/new-withdrawal/new-withdrawal.module').then(m => m.NewWithdrawalModule) },
{ path: 'new-consignment', loadChildren: () => import('./pages/new-consignment/new-consignment.module').then(m => m.NewConsignmentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

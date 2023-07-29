import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'customer', loadChildren: () => import('./customer-data/customer-data.module').then(m => m.CustomerDataModule) },
  { path: 'product-data', loadChildren: () => import('./product-data/product-data.module').then(m => m.ProductDataModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

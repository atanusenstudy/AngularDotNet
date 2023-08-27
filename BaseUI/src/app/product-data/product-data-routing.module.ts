import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { ProductHomepageComponent } from './product-homepage/product-homepage.component';

const routes: Routes = [
  { path: '', component: ProductHomepageComponent },
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDataRoutingModule { }

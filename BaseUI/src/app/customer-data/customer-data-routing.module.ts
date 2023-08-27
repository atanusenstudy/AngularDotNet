import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';

const routes: Routes = [
  { path: '', component: CustomerHomepageComponent },
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDataRoutingModule { }

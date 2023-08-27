import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDataRoutingModule } from './customer-data-routing.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    CustomerHomepageComponent
  ],
  imports: [
    CommonModule,
    CustomerDataRoutingModule
  ]
})
export class CustomerDataModule { }

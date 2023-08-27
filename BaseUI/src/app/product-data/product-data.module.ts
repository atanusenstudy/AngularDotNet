import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDataRoutingModule } from './product-data-routing.module';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { ProductHomepageComponent } from './product-homepage/product-homepage.component';


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    ProductHomepageComponent
  ],
  imports: [
    CommonModule,
    ProductDataRoutingModule
  ]
})
export class ProductDataModule { }

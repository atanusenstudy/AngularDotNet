import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDataRoutingModule } from './product-data-routing.module';
import { Component2Component } from './component2/component2.component';


@NgModule({
  declarations: [
    Component2Component
  ],
  imports: [
    CommonModule,
    ProductDataRoutingModule
  ]
})
export class ProductDataModule { }

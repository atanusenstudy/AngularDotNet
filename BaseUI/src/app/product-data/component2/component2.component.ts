import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
    // Inject the CustomerDataService
    constructor(private productDataService: ProductDataService){
    // Use the service methods to fetch customer data

    }

    ngOnInit(): void{

    }
}

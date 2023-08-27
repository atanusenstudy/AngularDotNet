import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
    // Inject the CustomerDataService
    constructor(private productDataService: ProductDataService){
      // Use the service methods to fetch customer data
  
      }
  
      ngOnInit(): void{
  
      }
  }

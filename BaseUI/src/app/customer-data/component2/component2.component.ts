import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';
@Component({
  selector: 'app-customer-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  // Inject the CustomerDataService
  constructor(private customerDataSercice : CustomerDataService){

  }

  ngOnInit(): void{
        // Use the service methods to fetch customer data
  }
}


import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  // Inject the CustomerDataService
  constructor(private customerDataSercice : CustomerDataService){

  }

  ngOnInit(): void{
        // Use the service methods to fetch customer data
  }
}

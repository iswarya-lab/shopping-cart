import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;

  constructor(private myService: ProductServiceService) { }

  ngOnInit() {
    this.myService.getProducts().subscribe((result) => {
      this.data = result;
    })
  }


  // heading = "Welcome to Shopping Cart";
  // number = 3000;
  // // itemList = ["Apple", "Mango", "Orange", "Jackfruit"];
  // @Input() detailsFromParent;
  @Output() cartQty = new EventEmitter();

  AddToCart(item){
    this.myService.addProductsToCart(item).subscribe((result) => {
      console.log("Updated successfully!!!");
    })
  }
}

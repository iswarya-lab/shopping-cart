import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      "id": 1,
      "mobile": "Ericson",
      "num": [
        "../assets/images/Car1.jpg", "../assets/images/Car2.jpg", "../assets/images/Car3.jpg"
      ],
      "image": "../assets/images/Car1.jpg",
      "Price": 35000,
      "features": {
        "bluetooth": true,
        "wifi": false
      }
    },
    {
      "id": 2,
      "mobile": "Vivo",
      "num": [
        "../assets/images/Car2.jpg", "../assets/images/Car4.jpg"
      ],
      "image": "../assets/images/Car2.jpg",
      "Price": 35000,
      "features": {
        "bluetooth": false,
        "wifi": true
      }
    },
    {
      "id": 3,
      "mobile": "Vivo",
      "num": [
        "../assets/images/Car3.jpg"
      ],
      "image": "../assets/images/Car3.jpg",
      "Price": 35000,
      "features": {
        "bluetooth": true,
        "wifi": true
      }
    },
    {
      "id": 4,
      "mobile": "Vivo",
      "num": [
        "../assets/images/Car4.jpg"
      ],
      "image": "../assets/images/Car4.jpg",
      "Price": 35000,
      "features": {
        "bluetooth": true,
        "wifi": true
      }
    }
  ]
  // heading = "Welcome to Shopping Cart";
  // number = 3000;
  // // itemList = ["Apple", "Mango", "Orange", "Jackfruit"];
  // @Input() detailsFromParent;
  // @Output() cartQty = new EventEmitter();
  // selectedItems = [];

  // AddToCart(item){
  //   this.selectedItems.push(item);
  //   this.cartQty.emit(this.selectedItems.length);
  // }

}

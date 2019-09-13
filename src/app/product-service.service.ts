import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

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

  selectedItems = [];

  getProducts() {
    return this.data;
  }

  addProductsToCart(item){
    this.selectedItems.push(item);
  }

  getProductsFromCart(){
    return this.selectedItems;
  }
}

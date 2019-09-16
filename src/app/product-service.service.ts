import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  data = [];

  // data = [
  //   {
  //     "id": 1,
  //     "mobile": "Ericson",
  //     "num": [
  //       "../assets/images/Car1.jpg", "../assets/images/Car2.jpg", "../assets/images/Car3.jpg"
  //     ],
  //     "image": "../assets/images/Car1.jpg",
  //     "Price": 35000,
  //     "features": {
  //       "bluetooth": true,
  //       "wifi": false
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "mobile": "Vivo",
  //     "num": [
  //       "../assets/images/Car2.jpg", "../assets/images/Car4.jpg"
  //     ],
  //     "image": "../assets/images/Car2.jpg",
  //     "Price": 35000,
  //     "features": {
  //       "bluetooth": false,
  //       "wifi": true
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "mobile": "Vivo",
  //     "num": [
  //       "../assets/images/Car3.jpg"
  //     ],
  //     "image": "../assets/images/Car3.jpg",
  //     "Price": 35000,
  //     "features": {
  //       "bluetooth": true,
  //       "wifi": true
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "mobile": "Vivo",
  //     "num": [
  //       "../assets/images/Car4.jpg"
  //     ],
  //     "image": "../assets/images/Car4.jpg",
  //     "Price": 35000,
  //     "features": {
  //       "bluetooth": true,
  //       "wifi": true
  //     }
  //   }
  // ]

  selectedItems = [];

  getProducts() {
    return this.http.get("http://localhost:3000/data"); //this.data;
  }

  addProductsToCart(item){
    return this.http.post("http://localhost:3001/selectedItems", item);
  }

  getProductsFromCart(){
    return this.http.get("http://localhost:3001/selectedItems");
  }
}

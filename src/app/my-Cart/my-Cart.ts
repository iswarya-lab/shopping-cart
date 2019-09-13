import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component ({
    selector: 'my-Cart',
    templateUrl: 'my-Cart.component.html',
    styleUrls: ['my-Cart.component.css']
})

export class MyCartComponent {

    cartDetails = [];
    total = 0;
    constructor(private myService: ProductServiceService){

    }

    ngOnInit(){
       console.log(this.cartDetails = this.myService.getProductsFromCart());
    }

    getTotal(){
        for(let i = 0; i < this.cartDetails.length; i++){
            this.total = this.total + this.cartDetails[i].Price;
        }
        return this.total;
    }

}
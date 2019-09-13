import { Component } from '@angular/core';
import { Car } from './myCar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  showDashboard = true;
  myCartQty = 0;

  itemList = [{
    name: "IPhone",
    price: 55000,
    features: {
      bluetooth: "yes",
      wifi: "yes",
      camera: "yes"
    }
  },
  {
    name: "Samsung",
    price: 45000,
    features: {
      bluetooth: "yes",
      wifi: "no",
      camera: "no"
    }
  },
  {
    name: "One Plus One",
    price: 25000,
    features: {
      bluetooth: "no",
      wifi: "yes",
      camera: "yes"
    }
  }]

 constructor(private router : Router){
  //  var mydata = new Car();
  //  mydata.carName = "Honda";
   
  //  var obj1 = new Car();

  //  console.log(mydata.carName);
  //  console.log(obj1.carName);
 }

//  swapView(){
//   this.showDashboard = this.showDashboard == true ? false: true;  
//  }

//  fnFromChild(value){
//   this.myCartQty = value;
//  }

  fnSwapCart(){
    this.router.navigateByUrl('/cart');
  }
}

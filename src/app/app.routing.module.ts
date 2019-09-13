import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCartComponent } from './my-Cart/my-Cart';

const router : Routes = [
    { path: '', component: DashboardComponent },
    { path: 'cart', component: MyCartComponent }
  ]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
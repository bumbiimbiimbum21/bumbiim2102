import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {CreateproductComponent} from './home/create-product/create-product.component';
import {CreateBmiComponent} from './home/create-bmi/create-bmi.component';

import { HomeComponent} from './home/home.component';

const routes:Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'create-product',component:CreateproductComponent},
{ path: 'home/edit/:id', component: CreateproductComponent},
{path:'create-bmi',component:CreateBmiComponent}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    HomescreenComponent,
    NavbarComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  exports: [NavbarComponent],
})
export class FeatureModule { }

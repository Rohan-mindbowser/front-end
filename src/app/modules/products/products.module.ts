import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

import { FeatureModule } from '../feature/feature.module';
import { AllproductsComponent } from './allproducts/allproducts.component';

@NgModule({
  declarations: [
    SingleproductComponent,
    AllproductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FeatureModule
  ]
})
export class ProductsModule { }

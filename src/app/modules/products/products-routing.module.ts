import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
const routes: Routes = [
  {
    path: 'singleproduct/:id/:row/:page',
    component: SingleproductComponent,
  },
  {
    path: 'singleproduct/:id/:row',
    component: SingleproductComponent,
  },
  {
    path: 'allproducts/bracelets/:row',
    component: AllproductsComponent,
  },
  {
    path: 'allproducts/earrings/:row',
    component: AllproductsComponent,
  },
  {
    path: 'allproducts/necklace/:row',
    component: AllproductsComponent,
  },
  {
    path: 'allproducts/rings/:row',
    component: AllproductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

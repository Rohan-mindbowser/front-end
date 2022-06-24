import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomescreenComponent,
  },
  {
    path: 'checkout',
    pathMatch: 'full',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}

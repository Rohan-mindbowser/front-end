import { Component, OnInit } from '@angular/core';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';
import { ProductCartService } from 'src/app/services/product-cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(private _productCartService: ProductCartService) {}

  allCartProducts!: any;
  totalProduct!: any;
  totalPrice:number = 0;
  ngOnInit(): void {
    this.allCartProducts = this._productCartService.getProducts();
    this.totalProduct = this.allCartProducts.length;
    this.allCartProducts.forEach((element:any) => {
      this.totalPrice += element['original_price']
    });
  }
}

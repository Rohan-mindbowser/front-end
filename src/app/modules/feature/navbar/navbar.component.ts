import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductCartService } from 'src/app/services/product-cart.service';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _productCart: ProductCartService,
    private _productWishListService: WishlistServiceService
  ) {}
  cartProductList!: any;
  wishList!: any;
  ngOnInit(): void {}

  cartLength: number = 0;
  wishEmpty:any;
  viewCartProduct() {
    this.cartProductList = this._productCart.getProducts();
    this.cartLength = this.cartProductList.length;
    // console.log()
    // console.log('From cart modal', this.cartProductList);
  }

  viewWishList() {
    this.wishList = this._productWishListService.getWishList();
    this.wishEmpty = this.wishList.length
    // console.log(this.wishList.length)
  }

  removeProduct(productId: any) {
    // console.log(productId)
    this._productCart.removeProduct(productId);
    // this.viewCartProduct();
  }

  removeWishListProduct(productId:any){
    this._productWishListService.removeWishListProduct(productId);
  }
}

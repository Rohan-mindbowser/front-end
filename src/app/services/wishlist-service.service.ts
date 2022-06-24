import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root',
})
export class WishlistServiceService {
  wishList: any = [];

  getWishListLocalData!: any;
  constructor(private toast: NgToastService) {}

  getWishList() {
    this.getWishListLocalData = localStorage.getItem('wishListData');
    // console.log(this.getWishListLocalData)
    return JSON.parse(this.getWishListLocalData);
  }

  setWishList(product: any) {
    let previousList = localStorage.getItem('wishListData');
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.wishList = JSON.parse(previousList);
    }
    this.wishList.push(product);
    // this.cartProductList.next(product);
    localStorage.setItem('wishListData', JSON.stringify(this.wishList));
    // localStorage.removeItem('wishListData');
  }

  removeWishListProduct(productId: any) {
    let previousList = localStorage.getItem('wishListData');
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.wishList = JSON.parse(previousList);
      this.wishList.map((item: any, index: any) => {
        if (item._id == productId) {
          this.wishList.splice(index, 1);
        }
      });
    }
    localStorage.setItem('wishListData', JSON.stringify(this.wishList));
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Removed',
      duration: 5000,
    });
  }
}

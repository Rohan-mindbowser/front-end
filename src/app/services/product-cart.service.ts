import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  cartItemList: any = [];
  cartProductList = new BehaviorSubject<any>([]);
  constructor(private toast: NgToastService) {}

  getLocalData!: any;

  getProducts() {
    // this.cartProductList.asObservable();
    this.getLocalData = localStorage.getItem('cartData');
    // console.log(JSON.parse(this.getLocalData));
    return JSON.parse(this.getLocalData);
  }

  setProduct(product: any) {
    let previousList = localStorage.getItem('cartData');

    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
    }
    this.cartItemList.push(product);
    // this.cartProductList.next(product);
    localStorage.setItem('cartData', JSON.stringify(this.cartItemList));
    // localStorage.removeItem('cartData');
  }

  editedCartList: any = [];

  removeProduct(productId: any) {
    let previousList = localStorage.getItem('cartData');
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
      this.cartItemList.map((item: any, index: any) => {
        if (item._id == productId) {
          this.cartItemList.splice(index, 1);
        }
      });
    }
    localStorage.setItem('cartData', JSON.stringify(this.cartItemList));
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Removed',
      duration: 5000,
    });
  }
}

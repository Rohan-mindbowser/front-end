import { Component, OnInit } from '@angular/core';
import { ProductCartService } from 'src/app/services/product-cart.service';
import { ProductapiService } from 'src/app/services/productapi.service';
import { NgToastService } from 'ng-angular-popup';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {
  braceletData!: [];
  earringsData!: [];
  necklaceData!: [];
  ringsData!: [];

  constructor(
    private _productApiService: ProductapiService,
    private _productCartService: ProductCartService,
    private toast: NgToastService,
    private _productWishListService: WishlistServiceService
  ) {}

  ngOnInit(): void {
    this.getAllBraceletData();
    this.getAllEarringsData();
    this.getAllNecklaceData();
    this.getAllRingsData();
  }

  //Get Bracelet data from service
  getAllBraceletData() {
    this._productApiService.getBraceletData().subscribe(
      (data) => {
        this.braceletData = data;
        // console.log(this.braceletData);
      },
      (error: any) => {
        console.log('error :', error.error['message']);
      }
    );
  }

  //Get Earrings data from service
  getAllEarringsData() {
    this._productApiService.getEaringData().subscribe(
      (data) => {
        this.earringsData = data;
        // console.log(this.braceletData);
      },
      (error: any) => {
        console.log('error :', error.error['message']);
      }
    );
  }

  //Get Earrings data from service
  getAllNecklaceData() {
    this._productApiService.getNecklaceData().subscribe(
      (data) => {
        this.necklaceData = data;
        // console.log(this.braceletData);
      },
      (error: any) => {
        console.log('error :', error.error['message']);
      }
    );
  }

  //Get Earrings data from service
  getAllRingsData() {
    this._productApiService.getRingData().subscribe(
      (data) => {
        this.ringsData = data;
        // console.log(this.braceletData);
      },
      (error: any) => {
        console.log('error :', error.error['message']);
      }
    );
  }

  pushProductToCart!: any;
  addToCart(row: any, productId: any) {
    if (row == '0') {
      this.pushProductToCart = this.braceletData.filter((element) => {
        return element['_id'] == productId;
      });
      this._productCartService.setProduct(this.pushProductToCart[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Cart',
        duration: 5000,
      });
    }
    if (row == '1') {
      this.pushProductToCart = this.earringsData.filter((element) => {
        return element['_id'] == productId;
      });
      // console.log(productId)
      this._productCartService.setProduct(this.pushProductToCart[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Cart',
        duration: 5000,
      });
    }
    if (row == '2') {
      // console.log(productId)
      this.pushProductToCart = this.necklaceData.filter((element) => {
        return element['_id'] == productId;
      });
      this._productCartService.setProduct(this.pushProductToCart[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Cart',
        duration: 5000,
      });
    }
    if (row == '3') {
      // console.log(productId)
      this.pushProductToCart = this.ringsData.filter((element) => {
        return element['_id'] == productId;
      });
      this._productCartService.setProduct(this.pushProductToCart[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Cart',
        duration: 5000,
      });
    }
  }

  pushProductToWishList!: any;
  addToWishList(row: any, productId: any) {
    if (row == '0') {
      console.log(productId)
      this.pushProductToWishList = this.braceletData.filter((element) => {
        return element['_id'] == productId;
      });
      this._productWishListService.setWishList(this.pushProductToWishList[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Wish List',
        duration: 5000,
      });
    }

    if (row == '1') {
      console.log(productId)

      this.pushProductToWishList = this.earringsData.filter((element) => {
        return element['_id'] == productId;
      });
      this._productWishListService.setWishList(this.pushProductToWishList[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Wish List',
        duration: 5000,
      });
    }


    if (row == '2') {
      console.log(productId)

      this.pushProductToWishList = this.necklaceData.filter((element) => {
        return element['_id'] == productId;
      });
      this._productWishListService.setWishList(this.pushProductToWishList[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Wish List',
        duration: 5000,
      });
    }


    if (row == '3') {
      console.log(productId)

      this.pushProductToWishList = this.ringsData.filter((element) => {
        return element['_id'] == productId;
      });
      this._productWishListService.setWishList(this.pushProductToWishList[0]);
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Product Added In Wish List',
        duration: 5000,
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductapiService } from 'src/app/services/productapi.service';
import { Router, ActivatedRoute, ChildActivationStart } from '@angular/router';
import { ProductCartService } from 'src/app/services/product-cart.service';
import { NgToastService } from 'ng-angular-popup';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss'],
})
export class SingleproductComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private _productApi: ProductapiService,
    private _productCart: ProductCartService,
    private toast: NgToastService,
    private _productWishListService: WishlistServiceService
  ) {}
  rowNumber!: any;
  productId!: any;
  singleProduct!: any;
  page: string = 'nopage';
  ngOnInit(): void {
    this.rowNumber = this.activeRouter.snapshot.params['row'];
    this.productId = this.activeRouter.snapshot.params['id'];
    // this.page = this.activeRouter.snapshot.params['page'];
    if (this.activeRouter.snapshot.params['page']) {
      this.page = this.activeRouter.snapshot.params['page'];
    }
    // console.log(this.rowNumber);

    //If row number is 0 fetch single bracelet data
    if (this.rowNumber === '0') {
      this._productApi.getSingleBracelet(this.productId).subscribe((res) => {
        this.singleProduct = res;
      });
    }

    //If row number is 1 fetch single Earring data
    if (this.rowNumber === '1') {
      this._productApi.getSinglEarring(this.productId).subscribe((res) => {
        this.singleProduct = res;
      });
    }

    //If row number is 2 fetch single Necklace data
    if (this.rowNumber === '2') {
      this._productApi.getSingleNecklace(this.productId).subscribe((res) => {
        this.singleProduct = res;
      });
    }

    //If row number is 3 fetch single ring data
    if (this.rowNumber === '3') {
      this._productApi.getSingleRing(this.productId).subscribe((res) => {
        this.singleProduct = res;
      });
    }
  }

  addToCart() {
    this._productCart.setProduct(this.singleProduct);
    // console.log(typeof this.singleProduct);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Added In Cart',
      duration: 5000,
    });
    // this._productCart.getProducts();
  }

  addToWishList() {
    this._productWishListService.setWishList(this.singleProduct);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Added In Wish List',
      duration: 5000,
    });
  }
}

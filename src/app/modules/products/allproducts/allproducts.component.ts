import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCartService } from 'src/app/services/product-cart.service';
import { ProductapiService } from 'src/app/services/productapi.service';
import { NgToastService } from 'ng-angular-popup';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private _productApi: ProductapiService,
    private _productCartService: ProductCartService,
    private toast: NgToastService,
    private _productWishListService: WishlistServiceService
  ) {}
  rowNumber!: any;
  allProducts!: any;

  ngOnInit(): void {
    this.rowNumber = this.activeRouter.snapshot.params['row'];
    // console.log(this.rowNumber)

    //If row number is 0 fetch all bracelet data
    if (this.rowNumber === '0') {
      this._productApi.getBraceletData().subscribe((res) => {
        this.allProducts = res;
        // console.log(typeof(this.rowNumber))
        // console.log(this.allProducts);
      });
    }

    //If row number is 0 fetch all earrings data
    if (this.rowNumber === '1') {
      this._productApi.getEaringData().subscribe((res) => {
        this.allProducts = res;
        // console.log(this.allProducts);
      });
    }

    //If row number is 0 fetch all necklace data
    if (this.rowNumber === '2') {
      this._productApi.getNecklaceData().subscribe((res) => {
        this.allProducts = res;
        // console.log(this.allProducts);
      });
    }

    //If row number is 0 fetch all bracelet data
    if (this.rowNumber === '3') {
      this._productApi.getRingData().subscribe((res) => {
        this.allProducts = res;
        // console.log(this.allProducts);
      });
    }
  }

  singleProduct!: any;
  addToCart(productId: any) {
    this.singleProduct = this.allProducts.filter((element: any) => {
      return element['_id'] == productId;
    });
    this._productCartService.setProduct(this.singleProduct[0]);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Added In Cart',
      duration: 5000,
    });
  }

  wishListProduct!:any
  addToWishList(productId: any){
    this.wishListProduct = this.allProducts.filter((element: any)=>{
      return element['_id']==productId;
    })
    this._productWishListService.setWishList(this.wishListProduct[0]); 
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Added In Wish List',
      duration: 5000,
    });  
  }
}

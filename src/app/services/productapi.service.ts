import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private http: HttpClient) { }

  getBraceletData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/bracelet');
  }

  getEaringData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/earing');
  }

  getNecklaceData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/necklace');
  }
  getRingData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/ring');
  }

  //SingleProductBracelet
  getSingleBracelet(id:any):Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/products/viewproductbracelet?id=${id}`)
  }

  //SingleProductBracelet
  getSinglEarring(id:any):Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/products/viewproductearring?id=${id}`)
  }

  //SingleProductBracelet
  getSingleNecklace(id:any):Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/products/viewproductnecklace?id=${id}`)
  }

  //SingleProductBracelet
  getSingleRing(id:any):Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/products/viewproductring?id=${id}`)
  }
}

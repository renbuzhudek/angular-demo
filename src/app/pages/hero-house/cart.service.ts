import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(
   private http: HttpClient
  ) {
 }
 getItem(){
    return new Promise((resolve,reject)=>{
      resolve([{
        a:1,
        b:2,
        c:3
      }])
    })
}
clearCart(){
  return []
}
getShippingPrices() {
  return this.http.get('/assets/shipping.json');
}
}

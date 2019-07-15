import { Component, OnInit ,AfterContentInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Hero} from '@class'

import { CartService} from './cart.service'
class item{
  a:string
  b:string
  c:string
}


@Component({
  selector: 'app-hero-house',
  templateUrl: './hero-house.component.html',
  styleUrls: ['./hero-house.component.less']
})
export class HeroHouseComponent implements OnInit,AfterContentInit {
  title = 'Tour of Heroes';
   items :item[] = []//商品
   shippingCosts
  checkoutForm
  text='中国'
  email
  heros:Hero[]=[{
    name:'jim',id:12
    },
    {
      name:'tom',id:155
      },
      {
        name:'bob',id:233
        }]
  selectedHero:Hero ={
    name:'',
    id:''
  }
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    
    this.shippingCosts=this.cartService.getShippingPrices()
  this.checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  console.log(this,this.shippingCosts)
  }
  ngAfterContentInit(){
  console.log('组件挂载啦')
  }
  onclick(e:Event){
  // console.log(e)
  this.cartService.getItem()
  .then((res :item[])=>{
    this.items =res
    console.log(res)
  })
  setTimeout(()=>{this.email=11111; console.log(this)},1000)
  }
  onInput(e){
  console.log(e.target.value)
  }
  onSelect(hero:Hero){
    this.selectedHero=hero;
console.log('当前点击的 hero:',hero)
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}

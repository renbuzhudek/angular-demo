import { Component, OnInit , AfterContentInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Hero} from '@class';

import { CartService} from './cart.service';
interface Item {
  a: string;
  b: string;
  c: string;
}


@Component({
  selector: 'app-hero-house',
  templateUrl: './hero-house.component.html',
  styleUrls: ['./hero-house.component.less']
})
export class HeroHouseComponent implements OnInit, AfterContentInit {
  title = 'Tour of Heroes';
   items: Item[] = []; // 商品
   shippingCosts;
  checkoutForm;
  text = '中国';
  email;
  heros: Hero[] = [{
    name: 'jim', id: 12
    },
    {
      name: 'tom', id: 155
      },
      {
        name: 'bob', id: 233
        }];
  selectedHero: Hero = {
    name: '',
    id: undefined
  };
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {

    this.cartService.getHeroes()
    .subscribe(res => {this.heros = res; });
    this.cartService.getShippingPrices()
    .subscribe(res => {
      console.log('res', res);
      this.shippingCosts = res;
    });
    this.checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  // console.log(this,this.shippingCosts)
  }
  ngAfterContentInit() {
  console.log('组件挂载啦');
  }
  onclick(e: Event) {
  // console.log(e)
  this.cartService.getItem()
  .then((res: Item[]) => {
    this.items = res;
    console.log(res);
  });
  setTimeout(() => {this.email = 11111; console.log(this); }, 1000);
  }
  onInput(e) {
  console.log(e.target.value);
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('当前点击的 hero:', hero);
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}

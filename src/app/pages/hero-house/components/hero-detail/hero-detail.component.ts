import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import {Hero} from '@class';
import { CartService} from '../../cart.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
@Input() hero: Hero;
@Input() name: string;
@Output() nameChange = new EventEmitter(); // 对应输入属性name的输出属性跟上Change
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }
  change(e) {
// console.log(e);
this.nameChange.emit(e.target.value);
  }
  save(): void {
    this.cartService.updateHero(this.hero)
      .subscribe(() => {});
  }
}

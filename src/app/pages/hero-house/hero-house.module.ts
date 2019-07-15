import { NgModule } from '@angular/core';
import { CommonModule ,registerLocaleData} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroHouseRoutingModule } from './hero-house-routing.module';
import { HeroHouseComponent } from './hero-house.component';
import { NgZorroAntdModule  ,NZ_I18N, zh_CN   } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh'

registerLocaleData(zh);
@NgModule({
  declarations: [HeroHouseComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HeroHouseRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class HeroHouseModule { }

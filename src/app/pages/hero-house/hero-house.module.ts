import { NgModule } from '@angular/core';
import { CommonModule , registerLocaleData} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroHouseRoutingModule } from './hero-house-routing.module';
import { HeroHouseComponent } from './hero-house.component';
import { NgZorroAntdModule  , NZ_I18N, zh_CN   } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@src/app/InMemoryData.service';

registerLocaleData(zh);
@NgModule({
  declarations: [HeroHouseComponent, HeroDetailComponent, MessagesComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HeroHouseRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class HeroHouseModule { }

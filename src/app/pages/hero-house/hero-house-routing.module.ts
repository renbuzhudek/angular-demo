import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroHouseComponent} from './hero-house.component'
const routes: Routes = [{path:'hero',component:HeroHouseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroHouseRoutingModule { }

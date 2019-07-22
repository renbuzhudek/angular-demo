import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroHouseComponent} from './hero-house.component';
// import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
const routes: Routes = [
  {path: 'hero/:id', component: HeroHouseComponent},
  // {path:'heroDetail',component:HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroHouseRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MilestonesComponent} from "./milestones/milestones.component";
import {BalanceModelComponent} from "./balance-model/balance-model.component";
import {WeeksInLifeComponent} from "./weeks-in-life/weeks-in-life.component";

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'milestones', component: MilestonesComponent},
  {path: 'balance-model', component: BalanceModelComponent},
  {path: 'weeks-in-life', component: WeeksInLifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

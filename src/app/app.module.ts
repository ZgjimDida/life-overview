import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { BalanceModelComponent } from './balance-model/balance-model.component';
import { WeeksInLifeComponent } from './weeks-in-life/weeks-in-life.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MilestonesComponent,
    BalanceModelComponent,
    WeeksInLifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo01TimerComponent } from './exo01-timer/exo01-timer.component';
import { SharedModule } from '../shared/shared.module';
import { Exo02ShoppingList1Component } from './exo02-shopping-list1/exo02-shopping-list1.component';
import { Exo02EnfantComponent } from './exo02-shopping-list1/exo02-enfant/exo02-enfant.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01TimerComponent,
    Exo02ShoppingList1Component,
    Exo02EnfantComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo01TimerComponent } from './exo01-timer/exo01-timer.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01TimerComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo01TimerComponent } from './exo01-timer/exo01-timer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01TimerComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }

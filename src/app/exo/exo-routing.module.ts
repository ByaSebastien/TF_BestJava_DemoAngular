import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoComponent } from './exo.component';
import { Exo01TimerComponent } from './exo01-timer/exo01-timer.component';

const routes: Routes = [
  {
    path: '', component: ExoComponent, children: [
      { path: 'exo01', component: Exo01TimerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }

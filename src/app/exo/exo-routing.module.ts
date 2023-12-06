import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoComponent } from './exo.component';
import { Exo01TimerComponent } from './exo01-timer/exo01-timer.component';
import { Exo02ShoppingList1Component } from './exo02-shopping-list1/exo02-shopping-list1.component';
import { Exo03ShoppingList2Component } from './exo03-shopping-list2/exo03-shopping-list2.component';

const routes: Routes = [
  {
    path: '', component: ExoComponent, children: [
      { path: 'exo01', component: Exo01TimerComponent },
      { path: 'exo02', component: Exo02ShoppingList1Component },
      { path: 'exo03', component: Exo03ShoppingList2Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }

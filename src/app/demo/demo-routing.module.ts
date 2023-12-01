import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01BindingsComponent } from './demo01-bindings/demo01-bindings.component';
import { Demo02PipesComponent } from './demo02-pipes/demo02-pipes.component';

const routes: Routes = [
  { path: 'demo01', component: Demo01BindingsComponent },
  { path: 'demo02', component: Demo02PipesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

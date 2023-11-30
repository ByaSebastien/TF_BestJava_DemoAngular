import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01BindingsComponent } from './demo01-bindings/demo01-bindings.component';

const routes: Routes = [
  { path: 'demo01', component: Demo01BindingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01BindingsComponent } from './demo01-bindings/demo01-bindings.component';
import { Demo02PipesComponent } from './demo02-pipes/demo02-pipes.component';
import { Demo03ComponentDirectivesComponent } from './demo03-component-directives/demo03-component-directives.component';
import { Demo04StructuralDirectivesComponent } from './demo04-structural-directives/demo04-structural-directives.component';
import { Demo05InputOutputComponent } from './demo05-input-output/demo05-input-output.component';

const routes: Routes = [
  { path: 'demo01', component: Demo01BindingsComponent },
  { path: 'demo02', component: Demo02PipesComponent },
  { path: 'demo03', component: Demo03ComponentDirectivesComponent },
  { path: 'demo04', component: Demo04StructuralDirectivesComponent },
  { path: 'demo05', component: Demo05InputOutputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

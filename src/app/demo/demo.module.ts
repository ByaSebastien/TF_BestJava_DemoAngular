import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01BindingsComponent } from './demo01-bindings/demo01-bindings.component';
import { Demo02PipesComponent } from './demo02-pipes/demo02-pipes.component';
import { SharedModule } from '../shared/shared.module';
import { Demo03ComponentDirectivesComponent } from './demo03-component-directives/demo03-component-directives.component';
import { Demo04StructuralDirectivesComponent } from './demo04-structural-directives/demo04-structural-directives.component';
import { Demo05InputOutputComponent } from './demo05-input-output/demo05-input-output.component';
import { Demo05EnfantComponent } from './demo05-input-output/demo05-enfant/demo05-enfant.component';
import { Demo06ServicesComponent } from './demo06-services/demo06-services.component';
import { Demo07FormulairesComponent } from './demo07-formulaires/demo07-formulaires.component';


@NgModule({
  declarations: [
    Demo01BindingsComponent,
    Demo02PipesComponent,
    Demo03ComponentDirectivesComponent,
    Demo04StructuralDirectivesComponent,
    Demo05InputOutputComponent,
    Demo05EnfantComponent,
    Demo06ServicesComponent,
    Demo07FormulairesComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }

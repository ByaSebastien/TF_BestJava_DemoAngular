import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01BindingsComponent } from './demo01-bindings/demo01-bindings.component';


@NgModule({
  declarations: [
    Demo01BindingsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }

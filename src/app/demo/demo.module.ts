import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01BindingsComponent } from './demo01-bindings/demo01-bindings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Demo01BindingsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }

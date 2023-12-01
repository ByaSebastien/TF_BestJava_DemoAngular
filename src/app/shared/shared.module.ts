import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { FormsModule } from '@angular/forms';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';



@NgModule({
  //Tout les elements declarés dans mon SharedModule
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe
  ],
  //Tout les elements importés depuis l'exterieur dans mon SharedModule
  imports: [
    CommonModule,
    FormsModule
  ],
  //Tout les elements que je rend accessible depuis l'exterieur aux modules qui importeront SharedModule
  exports: [
    FormsModule,
    ToFahrenheitPipe,
    ConvertTempPipe
  ]
})
export class SharedModule { }

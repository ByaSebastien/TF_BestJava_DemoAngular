import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { FormsModule } from '@angular/forms';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';



@NgModule({
  //Tout les elements declarés dans mon SharedModule
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe
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
    ConvertTempPipe,
    ConvertTimePipe
  ]
})
export class SharedModule { }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(temperature: number, unit: string = 'F'): string {

    switch (unit.toUpperCase()) {
      case 'C':
        return ((temperature - 32) * 5 / 9) + 'C°'
      case 'F':
        return ((temperature * 9 / 5) + 32) + 'F°'
      default:
        return temperature + ' ' + unit + '°';
    }
  }

}

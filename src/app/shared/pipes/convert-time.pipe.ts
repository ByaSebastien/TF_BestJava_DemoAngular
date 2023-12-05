import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(totalSeconds: number): string {
    let min = Math.floor(totalSeconds / 60).toString();
    let sec = totalSeconds % 60;

    return `${min.padStart(2, '0')} : ${sec < 10 ? '0' : ''}${sec}`;
  }
}

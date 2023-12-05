import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01-timer',
  templateUrl: './exo01-timer.component.html',
  styleUrls: ['./exo01-timer.component.scss']
})
export class Exo01TimerComponent {

  totalSeconds: number = 0;
  timer: any = null;
  isActive: boolean = false;

  start(): void {
    if (this.isActive) {
      return;
    }
    this.timer = setInterval(() => {
      this.totalSeconds += 1;
    }, 1000)
    this.isActive = true;
  }
  stop(): void {
    clearInterval(this.timer);
    console.log(this.timer);
    this.isActive = false;
  }
  reset(): void {
    this.stop();
    this.totalSeconds = 0;
  }
}

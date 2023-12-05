import { Component } from '@angular/core';

@Component({
  selector: 'app-demo05-input-output',
  templateUrl: './demo05-input-output.component.html',
  styleUrls: ['./demo05-input-output.component.scss']
})
export class Demo05InputOutputComponent {
  name: string = '';
  envieEnfant: string = '';

  setEnvieEnfant(envie: string) {
    this.envieEnfant = envie;
  }
}

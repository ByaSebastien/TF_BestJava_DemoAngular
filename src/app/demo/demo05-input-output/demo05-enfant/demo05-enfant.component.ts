import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo05-enfant',
  templateUrl: './demo05-enfant.component.html',
  styleUrls: ['./demo05-enfant.component.scss']
})
export class Demo05EnfantComponent {


  @Input() parentName!: string;
  @Output() envieEvent!: EventEmitter<string>;

  constructor() {
    this.envieEvent = new EventEmitter<string>();
  }

  sendEnvie(envie: string) {
    this.envieEvent.next(envie);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02-pipes',
  templateUrl: './demo02-pipes.component.html',
  styleUrls: ['./demo02-pipes.component.scss']
})
export class Demo02PipesComponent {

  myString: string = "Hello world!!!";
  myDate: Date = new Date();
  myNumber: number = 42;

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo01-bindings',
  templateUrl: './demo01-bindings.component.html',
  styleUrls: ['./demo01-bindings.component.scss']
})
export class Demo01BindingsComponent {

  myString: string = 'Hello World!!!';
  name: string = '';


  sayThanks(): void {
    alert('Thanks my friend!')
  }
}

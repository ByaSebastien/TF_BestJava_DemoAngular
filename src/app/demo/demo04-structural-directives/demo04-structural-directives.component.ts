import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-demo04-structural-directives',
  templateUrl: './demo04-structural-directives.component.html',
  styleUrls: ['./demo04-structural-directives.component.scss']
})
export class Demo04StructuralDirectivesComponent {

  isDayTime: boolean = false;
  books!: Book[];
  day!: number;
  constructor() {
    this.books = [
      {
        id: '123',
        title: "L'art de la guerre",
        author: 'Sun tzu',
        description: '...',
        nbPages: 200
      },
      {
        id: '123',
        title: "L'art du java",
        author: 'Sun tzu',
      },
      {
        id: '123',
        title: "L'art d'angular'",
        author: 'Sun tzu',
        nbPages: 100
      }
    ];
    this.day = new Date().getDay();
  }

  toggleIsDayTime() {
    this.isDayTime = !this.isDayTime;
  }
}

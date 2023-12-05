import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03-component-directives',
  templateUrl: './demo03-component-directives.component.html',
  styleUrls: ['./demo03-component-directives.component.scss']
})
export class Demo03ComponentDirectivesComponent implements OnInit {

  //Style aplliqué via ngStyle
  currentStyle: any;
  //Style appliqué via ngClass
  currentClass: string = 'red';

  isItalic: boolean = false;
  isBold: boolean = false;
  isBig: boolean = false;

  ngOnInit(): void {
    this.setCurrentStyle();
    setInterval(() => {
      this.currentClass = this.currentClass === 'red' ? 'green' : 'red';
    }, 500);
  }

  setCurrentStyle() {
    this.currentStyle = {
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-size': this.isBig ? '36px' : '18px'
    }
  }

  toggleIsItalic() {
    this.isItalic = !this.isItalic;
    this.setCurrentStyle();
  }

  toggleIsBold() {
    this.isBold = !this.isBold;
    this.setCurrentStyle();
  }

  toggleIsBig() {
    this.isBig = !this.isBig;
    this.setCurrentStyle();
  }
}

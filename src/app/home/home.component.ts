import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  //Instanciation de la class HomeComponent
  //S'execute en premier dès l'appel du composant
  constructor() {
    console.log('In home constructor');
  }
  //Initialisation du composant
  //S'execute apres le constructeur mais avant que le composant ne s'affiche
  ngOnInit(): void {
    console.log('In home OnInit');
  }
  //Destruction du composant
  //S'execute quand on quite le composant
  ngOnDestroy(): void {
    console.log('In home OnDestroy');
  }
}

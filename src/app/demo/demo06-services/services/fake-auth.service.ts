import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isConnected: boolean = false;

  constructor() { }

  login() {
    this.isConnected = true;
    console.log('login');

  }

  logout() {
    this.isConnected = false;
    console.log('logout');
  }
}

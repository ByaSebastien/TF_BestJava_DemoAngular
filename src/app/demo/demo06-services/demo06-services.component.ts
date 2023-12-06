import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-demo06-services',
  templateUrl: './demo06-services.component.html',
  styleUrls: ['./demo06-services.component.scss']
})
export class Demo06ServicesComponent implements OnInit {

  isConnected!: boolean;

  constructor(
    private readonly _fakeAuthService: FakeAuthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this._fakeAuthService.isConnected;
  }

  login() {
    this._fakeAuthService.login();
    this.isConnected = this._fakeAuthService.isConnected;
  }
  logout() {
    this._fakeAuthService.logout();
    this.isConnected = this._fakeAuthService.isConnected;
  }
}

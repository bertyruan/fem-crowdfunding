import { Component } from '@angular/core';
import { Pledges } from './shared/models/mock-pledges';
import { Pledge } from './shared/models/pledge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pledges = Pledges;

  openPopup(reward: string): void {

  }
}

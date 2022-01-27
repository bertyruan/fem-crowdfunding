import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PledgeButton } from './shared/directives/pledge-button/pledge-button.directive';
import { CheckoutPledgeComponent } from './components/checkout-pledge/checkout-pledge.component';

@NgModule({
  declarations: [
    AppComponent,
    PledgeButton,
    CheckoutPledgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

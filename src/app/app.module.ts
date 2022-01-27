import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PledgeButton } from './shared/directives/pledgeButton.directive';
import { CheckoutPledgeComponent } from './components/checkoutPledge/pledges.component';

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

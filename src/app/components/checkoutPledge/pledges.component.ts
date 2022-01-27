import { Component, Input, OnInit } from '@angular/core';
import { DefaultPledge } from 'src/app/shared/models/mock-pledges';
import { Pledge } from 'src/app/shared/models/pledge';

@Component({
  selector: 'app-checkout-pledge',
  templateUrl: './checkoutPledge.component.html',
  styleUrls: ['./checkoutPledge.component.css']
})
export class CheckoutPledgeComponent implements OnInit {

  @Input()
  pledges: Pledge[] = [DefaultPledge];

  isPledgeSelected = true;

  constructor() { }

  ngOnInit(): void {
  }

}

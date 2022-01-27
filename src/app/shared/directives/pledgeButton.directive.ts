import { Directive, Input } from "@angular/core";

@Directive({
    selector: 'button[pledgeButton]'
})
export class PledgeButton {
    @Input("pledgeButton")
    pledgeAmount = 0;
}
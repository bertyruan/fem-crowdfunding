import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector: 'button[pledgeButton]'
})
export class PledgeButton {
    @Input("pledgeButton")
    pledgeAmount = 0;

    @HostBinding("innerText")
    get buttonText(): string {
        if(this.pledgeAmount > 0) {
            return "Select Reward";
        }
        return "Out of stock";
    }
}
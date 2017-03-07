import {Component, Input} from "@angular/core";

@Component({
    selector: 'spinner',
    template: `<div *ngIf="visible"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>`

})

export class SpinnerComponent {

    @Input() isvisible = true;


}
import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


    @Input() name;
    @Input() text;


    constructor() {
    }

    ngOnInit() {
    }

}
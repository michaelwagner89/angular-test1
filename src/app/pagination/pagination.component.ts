import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {


    @Input() items = [];
    @Input() pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter;

    numberOfPages = 0;
    activePage = 1;
    pages: any[];

    constructor() {
    }


    ngOnChanges() {
        this.activePage = 1;
        this.calcNumberOfPages();

    }


    private calcNumberOfPages() {

        this.pages = [];

        this.numberOfPages = this.items.length / this.pageSize;

        if (this.numberOfPages > 1) {

            for (var _i = 1; _i <= this.numberOfPages; _i++) {
                this.pages.push(_i);
            }
        }

    }

    showPage(pageNumber) {
        this.activePage = pageNumber;
        this.pageChanged.emit(pageNumber);
    }

    showNextPage() {

        if (this.activePage == this.pages.length)
            return;

        this.showPage(++this.activePage);
    }

    showLastPage() {

        if (this.activePage == 1)
            return;

        this.showPage(--this.activePage);
    }


}

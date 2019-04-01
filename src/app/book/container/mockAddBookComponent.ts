import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-book',
    template: '<button id=\'mockBtn\' (click)=addNewBook()>add</button>'
})
export class MockAddBookComponent {
    @Output() addBook = new EventEmitter();
    constructor() { }
    addNewBook() {
        this.addBook.emit('new book');
    }
}

import { Action } from '@ngrx/store';
import { Book } from '../book.model';


export enum BookActionTypes {
    AddBook = '[Book] Add BOOK'
}

export class AddBook implements Action {
    readonly type = BookActionTypes.AddBook;
    constructor(public payLoad: Book) {}
}

export type BookActions = AddBook;


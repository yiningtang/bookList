import { Book } from '../book.model';
import { BookActions, BookActionTypes } from './book.actions';

export interface BookState {
    books: Book[];
}

export const initialBookState: BookState = {
    books: []
};


export function bookReducer(state = initialBookState, action: BookActions): BookState {
    switch (action.type) {
        case BookActionTypes.AddBook:
            const books: Book[] = [...state.books, action.payLoad];
            return Object.assign({}, state, { books });
        default:
            return state;
    }
}




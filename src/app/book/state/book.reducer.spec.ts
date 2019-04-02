import { bookReducer } from './book.reducer';
import { AddBook } from './book.actions';
import { Book } from '../book.model';

describe('Add a New Book', () => {
    it('should return book list', () => {
        const initialBookState = {
            books: [{
                id: '1',
                title: 'book1',
                category: 'comedy',
                description: 'testtest'
            }]
        };
        const newBook: Book = {
            id: '0',
            title: 'test',
            category: 'sport',
            description: 'testtest'
        };
        const action = { ...new AddBook(newBook) };
        const state = bookReducer(initialBookState, action);
        const expectedState = {
            books: [...initialBookState.books, newBook]
        };
        expect(state).toEqual(expectedState);
    });
});

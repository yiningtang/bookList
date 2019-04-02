import { AddBook, BookActionTypes } from './book.actions';
import { Book } from '../book.model';

describe('Add a New Book', () => {
    it('should create an action', () => {
        const book: Book = {
            id: '0',
            title: 'test',
            category: 'category',
            description: 'testtest'
        };
        const action = new AddBook(book);
        const expectedAction = {
            type: BookActionTypes.AddBook,
            payLoad: book
        };
        expect({ ...action }).toEqual(expectedAction);
    });
});

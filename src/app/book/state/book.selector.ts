import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book.reducer';

const getBookFeatureState = createFeatureSelector<BookState>('book');

export const getBooks = createSelector(
    getBookFeatureState,
    state => state.books
);

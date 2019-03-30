import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Store, select } from '@ngrx/store';
import { getBooks } from '../state/book.selector';
import { BookState } from '../state/book.reducer';
import { Observable } from 'rxjs';
import { AddBook } from '../state/book.actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  public books$: Observable<Book[]>;
  constructor(private store: Store<BookState>) { }

  ngOnInit() {
    this.books$ = this.store.pipe(select(getBooks));
  }

  onAddBook(newBook) {
    this.store.dispatch(new AddBook(newBook));
  }

}

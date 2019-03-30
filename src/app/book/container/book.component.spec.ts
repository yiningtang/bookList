import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book.component';
import { AddBookComponent } from '../components/add-book/add-book.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { BehaviorSubject, Observable, AsyncSubject, observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookState } from '../state/book.reducer';
import { Book } from '../book.model';

export class TestStore<T> {
  private state: AsyncSubject<T> = new AsyncSubject();

  setState(data: T) {
    this.state.next(data);
  }

  select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  dispatch(action: any) { }

  pipe(selector?: any) {
    return this.select(selector);
  }

}

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookComponent,
        AddBookComponent,
        BookListComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DropdownModule
      ],
      providers: [
        { provide: Store, useClass: TestStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: TestStore<BookState>) => {
    store = testStore;                            // save store reference for use in tests
    store.setState({ books: [] }); // set default state
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('book component should create', () => {
    expect(component).toBeTruthy();
  });

  it('books component should get books from store', () => {
    const books: Book[] =   [{id: '1', title: 'test', category: 'sport', description: 'testest'}];
    store.setState(
     books
    );
    fixture.detectChanges();
    component.books$.subscribe(booksArray => {
      expect(booksArray).toBe(books);
    });
  });
});

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { TestStore } from './mockStore';
import { Store } from '@ngrx/store';
import { BookState } from '../state/book.reducer';
import { Book } from '../book.model';
import { MockAddBookComponent } from './mockAddBookComponent';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookComponent,
        MockAddBookComponent,
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
    store = testStore;
    store.setState({ books: [] });
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
    const books: Book[] = [{ id: '1', title: 'test', category: 'sport', description: 'testest' }];
    store.setState(
      books
    );
    fixture.detectChanges();
    component.books$.subscribe(booksArray => {
      expect(booksArray).toBe(books);
    });
  });

  it('New book form should be passed after user adds', () => {
    spyOn(component, 'onAddBook');
    const addBtn = fixture.debugElement.nativeElement.querySelector('button#mockBtn');
    addBtn.click();
    fixture.detectChanges();
    expect(component.onAddBook).toHaveBeenCalled();
  });
});

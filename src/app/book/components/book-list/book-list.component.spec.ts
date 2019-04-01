import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { Book } from '../../book.model';
import { of } from 'rxjs/internal/observable/of';
import { Component } from '@angular/core';


@Component({
  selector: 'app-book-component',
  template: `<app-book-list [books]="books$"></app-book-list>`
})
class MockBookComponent {
  public books$: Book[];
}


describe('BookListComponent', () => {
  let component: MockBookComponent;
  let fixture: ComponentFixture<MockBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent, MockBookComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show book list', () => {
    const book: Book = {
      id: '0',
      title: 'test',
      category: 'sport',
      description: 'testtest'
    };
    const books: Book[] = [book];
    component.books$ = books;
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.card-title');
    const subTitleElment = fixture.nativeElement.querySelector('.card-subtitle');
    const descElement = fixture.nativeElement.querySelector('p.card-text');
    expect(titleElement.innerText).toContain(book.title);
    expect(subTitleElment.innerText).toBe(`(${book.category})`);
    expect(descElement.innerText).toContain(`${book.description}`);
  });
});

import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { Book } from '../../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit, OnChanges{
  @Input() books: Book[];
  public count: number;
  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(item) {
    return item;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.books && changes.books.currentValue) {
      this.count = this.books.length;
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BookComponent } from './container/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { bookReducer } from './state/book.reducer';



export const routes: Routes = [
  {
    path: '',
    component: BookComponent
  }
];

@NgModule({
  declarations: [BookComponent, BookListComponent, AddBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('book', bookReducer),
    DropdownModule,
    ReactiveFormsModule
  ],
  exports: [BookComponent, AddBookComponent]
})
export class BookModule { }

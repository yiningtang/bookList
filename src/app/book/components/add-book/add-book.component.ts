import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  public bookOptions = [
    { label: '', value: '' },
    { label: 'Drama', value: 'drama' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Sports', value: 'sports' }];
  @Output() addBook = new EventEmitter();

  public addBookForm: FormGroup;
  public id = 0;

  constructor(private fb: FormBuilder) {
    this.addBookForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get formTitle() {
    return this.addBookForm.controls.title;
  }

  get formCategory() {
    return this.addBookForm.controls.category;
  }

  get formDescription() {
    return this.addBookForm.controls.description;
  }

  ngOnInit() {

  }

  addNewBook() {
    if (this.addBookForm.status.toLocaleLowerCase() === 'valid') {
      const newBook = {
        ...this.addBookForm.value,
        id: this.id++
      };
      this.addBook.emit(newBook);
      this.clearBookForm();
    }
  }

  clearBookForm() {
    this.addBookForm.reset();
  }

}


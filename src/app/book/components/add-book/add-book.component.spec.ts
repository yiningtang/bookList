import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book.component';
import { DropdownModule } from 'primeng/dropdown';


describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DropdownModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable the button when the form is valid', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('button');
    expect(component.addBookForm.status).toEqual('INVALID');
    expect(btn.disabled).toBeTruthy();
    component.addBookForm.controls.title.setValue('test');
    component.addBookForm.controls.category.setValue('sport');
    component.addBookForm.controls.description.setValue('testtest');
    fixture.detectChanges();
    expect(component.addBookForm.status).toEqual('VALID');
    expect(btn.disabled).toBeFalsy();
  });

});

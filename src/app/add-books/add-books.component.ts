import { Component, OnInit ,NgZone } from '@angular/core';
import { FormGroup , FormBuilder  } from '@angular/forms';
import { BookService } from './../service/bookService/book.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  bookForm : FormGroup

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private bookService: BookService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })

  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.bookService.createBook(this.bookForm.value)
      .subscribe(() => {
        console.log('Data added succesfully');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      }, (err) => {
        console.log(err);
      })
  }
}

import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../service/bookService/book.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activateRoute: ActivatedRoute,
    private booksService: BookService) {
    this.getId = this.activateRoute.snapshot.paramMap.get('id');
    this.booksService.getBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description']
      })
    })

    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })

  }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.booksService.updateBook(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Data updated sucessfully');
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    }, (err) => {
      console.log(err);

    })
  }
}

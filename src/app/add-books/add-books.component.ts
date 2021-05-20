import { Component, OnInit ,NgZone } from '@angular/core';
import { FormGroup , FormBuilder  } from '@angular/forms';
import { BookService } from './../service/bookService/book.service';
import {HtmlsService} from './../service/htmlService/htmls.service'
import { Router } from '@angular/router'




@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  bookForm : FormGroup
  Htmls : any = [];

  product:any={
    fullDescription : '<p class="font-bold">Template <script>alert("evil never sleeps")</script> Syntax</p> <p class="font-bold">Template <script>alert("evil never sleeps")</script> Syntax</p>'

  }
  test:any
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private bookService: BookService,
    private htmlsService : HtmlsService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })

  }

  ngOnInit(): void {

    // console.log( encodeURI('<div class="d-flex justify-content between flex-md-nowarp align-items-center pt-3 pb-2 mb-3 border-bottom"><h1>Add Book</h1></div>'));
    // console.log( decodeURI(encodeURI('<div class="d-flex justify-content between flex-md-nowarp align-items-center pt-3 pb-2 mb-3 border-bottom"><h1>Add Book</h1></div>')))
    this.test = decodeURI(encodeURI('<div class="d-flex justify-content between flex-md-nowarp align-items-center pt-3 pb-2 mb-3 border-bottom"><h1>Add Book</h1></div>'))

    this.htmlsService.getHtmlAll().subscribe(res =>{
      this.Htmls = res;
      console.log(decodeURI(this.Htmls[0].contents))
      this.Htmls[0].contents = decodeURI(this.Htmls[0].contents)
    })
    // console.log(new DOMParser().parseFromString('&lt;div align="justify"&gt;&lt;span&gt;', "text/html").documentElement.textContent);
  }

  toHTML() : any {
    return new DOMParser().parseFromString(this.product.fullDescription, "text/html").documentElement.textContent;
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

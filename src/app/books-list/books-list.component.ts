import { Component, OnInit } from '@angular/core';

import { BookService } from './../service/bookService/book.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Books: any = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(res => {
      console.log(res)
      this.Books = res
    })
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead ?')) {
      this.bookService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }

}

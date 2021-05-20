import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './books-list/books-list.component'
import { AddBooksComponent } from './add-books/add-books.component'
import { UpdateBookComponent } from './update-book/update-book.component'

const routes: Routes = [
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-books', component: AddBooksComponent },
  { path: 'edit-book/:id', component: UpdateBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';

import { UpdateBookComponent } from './update-book/update-book.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { AddBooksComponent } from './add-books/add-books.component';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    UpdateBookComponent,
    NavComponent,
    ContentComponent,
    AddBooksComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

export class Book{
  name!:String;
  gender!:String;
  height!:String;
  mass!:String;
}



@Injectable({
  providedIn: 'root'
})
export class BookService {

  REST_API = 'http://localhost:3000';

  // Http header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }


  createBook(bookForm : Book): Observable<any>{
    let API_URL = this.REST_API+'/book'
    console.log(bookForm)
    return this.http.post(API_URL,bookForm).pipe(catchError(this.handleError))
  }

  getAll() {
    return this.http.get(this.REST_API + "/book").pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  deleteBook(id:any):Observable<any>{
    let API_URL = this.REST_API+'/book/'+id;
    return this.http.delete(API_URL , {headers:this.httpHeaders})
    .pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError))
  }

  getBook(id:any):Observable<any>{
    let API_URL = this.REST_API+'/book/'+id;
    return this.http.get(API_URL , {headers:this.httpHeaders})
    .pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError))
  }

  updateBook(id:any , bookForm:any):Observable<any>{
    let API_URL = this.REST_API+'/book/'+id
    return this.http.put(API_URL,bookForm , {headers:this.httpHeaders})
  }


  //error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //handle client erro
      errorMessage = error.error.message;
    }
    else {
      //handle server error
      errorMessage = `Error code : ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

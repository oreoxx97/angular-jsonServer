import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HtmlsService {
  REST_API = 'http://localhost:3000';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }
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

  getHtmlAll(): Observable<any> {
    let API_URL = this.REST_API + '/htmlEditor'
    return this.http.get(API_URL).pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError)
    )
  }
}

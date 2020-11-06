import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'c31z' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getListOfGroup(url: string): Observable<any> {

    // Call the http GET
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}

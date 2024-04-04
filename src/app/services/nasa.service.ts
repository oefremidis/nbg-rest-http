import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Nasa } from '../models/nasa';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor() { }

  http = inject(HttpClient);

  // url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  url = 'https://api.nasa.gov/planetary/apod';
  // delete a letter to show the error or do not send the api_key

  options = {
    headers: {
      'Content-Type': 'application/json',
      'crossDomain': 'true'
    }, 
    params: {
      'api_key': 'DEMO_KEY'
    }
  }

  get(): Observable<Nasa>{
    return this.http.get<Nasa>(this.url, this.options).pipe(
      retry(1),
      catchError(error => throwError(() => 'Something is wrong...'))
    );
  }
}


// const headers = new HttpHeader().set(...); // const if inside a method
// const params new HttpParams().set(...).set(...).set(...);
// return this.http.get<Nasa>(this.url, {headers: headers, params: params})...
// or
// return this.http.get<Nasa>(this.url, {headers, params})...
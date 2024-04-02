import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor() { }

  http = inject(HttpClient);

  url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  // delete a letter to show the error

  get(){
    return this.http.get(this.url).pipe(
      retry(1),
      catchError(error => throwError(() => 'Something is wrong...'))
    );
  }


}

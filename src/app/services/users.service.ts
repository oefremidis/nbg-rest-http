import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // constructor(private http: HttpClient) { }

  private http = inject(HttpClient);

  private url = 'https://reqres.in/api/users';

  getUsers() {
    return this.http.get(this.url);
  }

  post(data: any) {

    // ---------------------------------------
    // data are here just from demonstration
    // they come from the component

    // json
    // const data = {
    //   "name": "morpheus",
    //   "job": "leader"
    // };

    // javascript object
    // const data = {
    //   name: "morpheus",
    //   job: "leader"
    // };
    // ----------------------------------------
    
    // when stringify you must follow the http protocol

    // set multiple headers key-values
    // const myHeaders = new HttpHeaders()
    //   .set('Content-Type', 'application/json')
    //   .set('crossDomain', 'true');

    // return this.http.post(this.url, JSON.stringify(data), {headers: myHeaders})

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url, JSON.stringify(data), {headers}).pipe(
      retry(1),
      catchError(error => throwError(() => 'Something is wrong'))
    );

  }

}

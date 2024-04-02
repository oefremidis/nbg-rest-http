import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // constructor(private http: HttpClient) { }

  private http = inject(HttpClient);

  private ulr = 'https://reqres.in/api/users';

  getUsers(){
    return this.http.get(this.ulr);
  }



}

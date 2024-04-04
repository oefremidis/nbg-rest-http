import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  http = inject(HttpClient);

  getAllPosts(){
    return this.http.get(this.url);
  }
  
}

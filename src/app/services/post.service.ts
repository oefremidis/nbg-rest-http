import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../models/post.model';
import { BasePost } from '../models/base-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  http = inject(HttpClient);

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url).pipe(
      map((posts: BasePost[]) => posts.map(post => new Post(post)))
    );
  }
  
}

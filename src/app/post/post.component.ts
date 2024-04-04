import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  posts: any;
  errormessage!: string;

  service = inject(PostService);

  ngOnInit(): void {
    this.service.getAllPosts().subscribe({
      next: response => {
        this.posts = response;
        console.log(this.posts);
      },
      error: error => this.errormessage = error
    });
  }

}

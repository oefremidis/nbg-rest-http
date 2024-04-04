import { BasePost } from "./base-post";

export class Post implements BasePost {
  userId!: number;
  id!: number;
  title!: string;
  body!: string;

  constructor(post: BasePost){
    this.id = post.id;
    this.title = post.title.toUpperCase();
  }
}
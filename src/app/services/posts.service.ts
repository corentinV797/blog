import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Post from '../post.model';

@Injectable()
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.posts = [
      {
        title: "Mon premier post",
        content: "contenu de mon premier post",
      },
      {
        title: "Mon deuxième post",
        content: "contenu de mon deuxième post",
      },
      {
        title: "Encore un post",
        content: "contenu de mon dernier post",
      }
    ];
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    this.emitPosts();
    return this.posts;
  }
}

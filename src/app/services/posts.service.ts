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
        id: 0,
        title: "Mon premier post",
        content: "contenu de mon premier post",
        loveVoteCount: 0
      },
      {
        id: 1,
        title: "Mon deuxième post",
        content: "contenu de mon deuxième post",
        loveVoteCount: 0
      },
      {
        id: 2,
        title: "Encore un post",
        content: "contenu de mon dernier post",
        loveVoteCount: 0
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

  loveIt(i: number) {
    this.posts[i].loveVoteCount++;
    this.emitPosts();
  }

  dontLoveIt(i: number) {
    this.posts[i].loveVoteCount--;
    this.emitPosts();
  }
}

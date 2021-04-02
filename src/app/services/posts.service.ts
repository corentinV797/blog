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
        loveVoteCount: 0
      },
      {
        title: "Mon deuxième post",
        content: "contenu de mon deuxième post",
        loveVoteCount: 0
      },
      {
        title: "Encore un post",
        content: "contenu de mon dernier post",
        loveVoteCount: 0
      }
    ];
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  loveIt(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        } else {
          return false;
        }
      }
    )
    this.posts[postIndexToRemove].loveVoteCount++;
    this.emitPosts();
  }

  dontLoveIt(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        } else {
          return false;
        }
      }
    )
    this.posts[postIndexToRemove].loveVoteCount--;
    this.emitPosts();
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.emitPosts;
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        } else {
          return false;
        }
      }
    )
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }
}

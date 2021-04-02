import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Post from '../post.model';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  posts: Post[] = [];
  postSubscription: Subscription = Subscription.EMPTY;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}

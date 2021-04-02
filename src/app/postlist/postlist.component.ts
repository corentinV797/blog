import { Component, Input, OnInit } from '@angular/core';
import Post from '../post.model';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  posts: Post[];

  constructor(postsService: PostsService) {
    this.posts = postsService.getPosts();
  }

  ngOnInit(): void {
  }

}

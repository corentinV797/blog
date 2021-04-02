import { Component, Input, OnInit } from '@angular/core';
import Post from '../post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() post!: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  getLoveVoteCount() {
    return this.post.loveVoteCount;
  }

  getLastUpdate() {
    return this.post.lastUpdate;
  }

  getTitle() {
    return this.post.title;
  }

  getContent() {
    return this.post.content;
  }

  downVote() {
    this.postsService.dontLoveIt(this.post);
  }

  upVote() {
    this.postsService.loveIt(this.post);
  }

  deletePost() {
    this.postsService.removePost(this.post);
  }
}

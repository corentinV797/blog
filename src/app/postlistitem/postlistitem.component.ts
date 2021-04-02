import { Component, Input, OnInit } from '@angular/core';
import Post from '../post.model';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() post!: Post;
  loveVoteCount: number = 0;
  lastUpdate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  getLoveVoteCount() {
    return this.loveVoteCount;
  }

  getLastUpdate() {
    return this.lastUpdate;
  }

  getTitle() {
    return this.post.title;
  }

  getContent() {
    return this.post.content;
  }

  downVote() {
    this.loveVoteCount--;
  }

  upVote() {
    this.loveVoteCount++;
  }
}

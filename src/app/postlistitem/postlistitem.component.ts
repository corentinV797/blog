import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  loveVoteCount = 0;
  lastUpdate = new Date();

  constructor() {
    this.title = '';
    this.content = '';
  }

  ngOnInit(): void {
  }

  getLoveVoteCount() {
    return this.loveVoteCount;
  }

  getLastUpdate() {
    return this.lastUpdate;
  }

  getTitle() {
    return this.title;
  }

  getContent() {
    return this.content;
  }

  downVote() {
    this.loveVoteCount--;
  }

  upVote() {
    this.loveVoteCount++;
  }
}

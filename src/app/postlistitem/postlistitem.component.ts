import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
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

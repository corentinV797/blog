import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Post from '../post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private postsService: PostsService, private router: Router, private formBuilder: FormBuilder)
  {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ''
    })
  }

  ngOnInit(): void {
  }

  onSavePost() {
    const title = this.postForm.get('title')?.value;
    const content = this.postForm.get('content')?.value;
    const post = new Post(title, content);
    this.postsService.createNewPost(post);
    this.router.navigate(['/posts']);
  }
}

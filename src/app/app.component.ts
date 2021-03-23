import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts = [
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

  getPost() {
    return this.posts;
  }
}

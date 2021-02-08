import { Component } from '@angular/core';
import { Post } from '../post/Post';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  postagens: Post[];

  constructor(private servico: PostService) { }

  ngOnInit() {
    this.servico.listar().subscribe(x => this.postagens = x);
  }
}

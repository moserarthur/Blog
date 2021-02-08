import { Component, OnInit } from '@angular/core';
import { Post } from '../post/Post';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-criarpost',
  templateUrl: './criarpost.component.html',
  styleUrls: ['./criarpost.component.css']
})
export class CriarpostComponent implements OnInit {

  post: Post = new Post;

  constructor(private servico: PostService) { }

  ngOnInit() {
  }
  enviar(): void {
    this.servico.incluir(this.post).subscribe(x => this.post = new Post());

  }
}

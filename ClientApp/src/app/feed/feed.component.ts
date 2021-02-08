import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post/Post';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input("post")
  public post: Post;

  constructor(private servico:PostService) { }

  ngOnInit() {
  }
  like(): void {
    let avaliacao = new avaliacao();
    avaliacao.postid = this.post.id;
    avaliacao.tipo = 0;
    this.servico.avaliar()

  }
  dislike(): void {

  }

}

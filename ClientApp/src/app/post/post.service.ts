import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { avaliacao } from './avaliacao';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  listar(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + "api/Posts");
  }

  incluir(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl + "api/Posts", post);
  }
  avaliar(avaliacao : avaliacao): Observable<avaliacao> {
    return this.http.post<avaliacao>(this.baseUrl + "api/Avaliacoes", avaliacao);
  }
}

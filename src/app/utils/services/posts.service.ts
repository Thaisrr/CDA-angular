import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  api_url = "http://localhost:3000/posts";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api_url);
  }

  getById(id: number) : Observable<Post> {
    return this.http.get<Post>(`${this.api_url}/${id}`);
  }

  getByText(text: string): Observable<Post> {
    return this.http.get<Post>(this.api_url, {
      params: new HttpParams()
        .set('text', text) // ?text="valeur de text"
      // peut être utilisé pour spécifier les page, numéro de pages, ect...
    })
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.api_url, post);
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.api_url}/${post.id}`, post);
  }

  // Json Server renvoie un objet vide après le delete
  delete(id: number) : Observable<{}> {
    return this.http.delete<{}>(`${this.api_url}/${id}`);
  }

}

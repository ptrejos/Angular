import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/token`);
  }

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${id}`);
  }
}

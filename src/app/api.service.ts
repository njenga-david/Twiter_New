import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User,Comment,Post } from './Models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${userId}`);
  }

  getPostComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments?postId=${postId}`);
  }
}

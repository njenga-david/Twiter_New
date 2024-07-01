import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { User, Post, Comment } from './Models/models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AppComponent implements OnInit {
  users: User[] = [];
  selectedUserId: number = 1; // Initialize with a default value that's definitely a number
  selectedUser: User | undefined;
  posts: Post[] = [];
  comments: { [key: number]: Comment[] } = {};
  showComments: { [key: number]: boolean } = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
      // Select the first user initially
      if (this.users.length > 0) {
        this.selectUser(this.selectedUserId);
      }
    });
  }

  selectUser(userId: number): void {
    this.selectedUserId = userId;
    this.apiService.getUser(userId).subscribe(user => {
      this.selectedUser = user;
      this.apiService.getUserPosts(userId).subscribe(posts => {
        this.posts = posts;

        // Fetch comments for each post
        posts.forEach(post => {
          this.apiService.getPostComments(post.id).subscribe(comments => {
            this.comments[post.id] = comments;
          });
        });
      });
    });
  }

  toggleComments(postId: number): void {
    if (this.showComments[postId]) {
      this.showComments[postId] = false;
    } else {
      this.showComments[postId] = true;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Post,Comment, } from '../Models/models';
import { CommentsComponent } from "../comments/comments.component"; 
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    imports: [CommonModule,FormsModule, CommentsComponent]
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;
  comments: Comment[] = [];
  showComments: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  toggleComments() {
    this.showComments = !this.showComments;
    if (this.showComments && this.post) {
      this.apiService.getPostComments(this.post.id).subscribe(comments => this.comments = comments);
    }
  }
}

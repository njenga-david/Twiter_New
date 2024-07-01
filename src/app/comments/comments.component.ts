import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../Models/models'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];

  constructor() { }

  ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tweet-box',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {
  tweetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tweetForm = this.fb.group({
      tweet: ['']
    });
  }

  ngOnInit(): void {
  }

  submitTweet() {
    console.log(this.tweetForm.value);
  }
}

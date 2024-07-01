import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'posts', component: PostComponent },
  { path: 'tweet', component: TweetBoxComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];

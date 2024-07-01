import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Assuming ApiService handles HTTP requests
import { User } from '../Models/models'; // Assuming User model is defined
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedUserId: number | undefined; // To store the selected user ID
  selectedUser: User | undefined; // To store the selected user object retrieved from API
user: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Initialize component, fetch default user (if needed)
    this.selectedUserId = 1; // Default user ID, change as per your logic
    this.fetchUserDetails(this.selectedUserId);
  }

  selectUser(userId: number): void {
    // Method triggered on user selection change
    this.selectedUserId = userId;
    this.fetchUserDetails(userId);
  }

  private fetchUserDetails(userId: number): void {
    // Method to fetch user details from API based on userID
    this.apiService.getUser(userId).subscribe(
      (user: User) => {
        this.selectedUser = user;
      },
      (error) => {
        console.error('Error fetching user details:', error);
        // Handle error as needed (e.g., show error message)
      }
    );
  }
}

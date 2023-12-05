import { Component } from '@angular/core';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css']
})
export class VerifiedComponent {
  userProfile = {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isVerified: false // Set as true if verified
  };

  // Method to toggle verification status
  toggleVerification() {
    this.userProfile.isVerified = !this.userProfile.isVerified;
  }
}

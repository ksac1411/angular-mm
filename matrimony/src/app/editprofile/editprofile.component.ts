import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  ageOptions: number[] = Array.from({ length: 53 }, (_, i) => i + 18); // Generates an array from 18 to 70
  heightOptions: string[] = [];

  user: User = new User(); // Initialize the user object with empty values
  currentStep = 1;
  selectedProfilePhoto!: File | null;
  userId: any;
  // user = {
  //   userId: 'defaultUserID' // Set the default value for user ID here
  //   // Other user properties...
  // };

  isDisabled = true; // Set this based on your condition to disable/enable the field

  // Example condition to toggle the disabled state
  toggleDisable() {
    this.isDisabled = !this.isDisabled; // Toggle the disabled state
  }
  constructor(
    private userservice: UserserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private shareservice: ShareService
  )  {
    

    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });
  
  

    // Initialize height options
    for (let feet = 4; feet <= 7; feet++) {
      for (let inches = 0; inches <= 11; inches++) {
        const height = `${feet}'${inches}"`;
        this.heightOptions.push(height);
      }
    }
  }

  ngOnInit() {
    //  
    // Retrieve the userId query parameter
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      
      if (this.userId) {
        
        this.userservice.getUserById(this.userId).subscribe(
          (data: User) => {
            this.user = data; // Assuming your service returns user data
          },
          (error: any) => {
            console.error('Error fetching user data', error);
          }
        );
      }
    });
  }

  onFileSelected(event: any) {
    const file: File | null = event.target.files[0];
    this.selectedProfilePhoto = file;
  }

  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  update() {
    console.log('Updating user:', this.user);

    // Send a PUT request to update the user data using this.userService
    this.userservice.updateUser(this.user).subscribe(
      response => {
        // Handle success response
        console.log('User updated successfully', response);
        this.router.navigate(['/dashboard']);
        
      },
      error => {
        // Handle errors here
        console.error('Error updating user', error);
      }
    );
    
     
  }

  deleteProfile() {
    // Send an HTTP request to delete the user's profile
    this.userservice.deleteUser(this.user.userId).subscribe(
      (response: any) => {
        // Handle the success response, e.g., show a confirmation message
        console.log('Profile deleted successfully:', response);
        // You can also navigate the user to a different page after deletion if needed.
      },
      (error: any) => {
        // Handle the error response, e.g., show an error message
        console.error('Error deleting profile:', error);
      }
    );
  }
}

 
import { Component } from '@angular/core';
 
import { Router, ActivatedRoute } from '@angular/router';
 
import { UserserviceService } from '../userservice.service';
 
import { Logindata } from '../logindata';
 
import { OTP } from '../otp';
import { ShareService } from '../ShareService';
 
 
 
@Component({
 
  selector: 'app-signup',
 
  templateUrl: './signup.component.html',
 
  styleUrls: ['./signup.component.css']
 
})
 
export class SignupComponent {
 
  verifyStatus: any;
 
  logindata: Logindata = new Logindata ();
 
  otp: OTP = new OTP ();
 
  showOTPForm = false;
 
  errorMessage: any;
 
 
 
  constructor(
 
    private router: Router,
 private shareservice :ShareService ,
  //   private route: ActivatedRoute,
 
    private userService: UserserviceService
 
  ) {}
 
 
 
  togglePassword() {
 
    const newPasswordInput = document.getElementById('newPassword') as HTMLInputElement;
 
    newPasswordInput.type = newPasswordInput.type === 'password' ? 'text' : 'password';
 
  }
 
 
 
  toggleConfirmPassword() {
 
    const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;
 
    confirmPasswordInput.type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
 
  }
 
 
 
 
 
 
 
 
 
 
 
 
 
  onOtpSubmit() {
 
  console.log(this.otp)
 
        // Make an API request to verify the OTP using the user object
 
        this.userService.verifyOtp(this.otp).subscribe(
 
          (data) => {
 
   
 
            console.log(data);
 
            this.verifyStatus = data;
 
            console.log('OTP verification status:', data);
 
     
 
            if (data.success) {
              
            this.userService.signup(this.logindata).subscribe(
 
              (registrationResponse) => {
 console.log(registrationResponse)



const userId = registrationResponse.user.userId;

this.shareservice.setUserId(userId);
console.log (userId)




                // User registration succeeded
 
                console.log('User created successfully', registrationResponse);
 
     
 
                // Navigate to the desired page after successful sign-up
  // OTP verification succeeded, you can navigate to the next page
 
                this.router.navigate(['/dashboard']);
 
              },
 
              (registrationError) => {
 
                // User registration failed
 
                console.error('Error creating user', registrationError);
 
                // Handle the error here
 
              }
 
            );
 
             
             
 
            } else {
 
              // OTP verification failed, you can display an error message to the user
 
            
 
              this.errorMessage = 'OTP verification failed. Please try again.';
 
            }
 
          },
 
          (error) => {
 
            console.error('Error verifying OTP', error);
 
            // Handle the error here
 
            // For example, you can display an error message to the user
 
            // this.errorMessage = 'An error occurred while verifying OTP. Please try again later.';
 
          }
 
        );
 
      }
 
   
 
   
 
    onSubmit() {
 
     
 
      console.log('User data:', this.logindata);
 
        // 1. First, send the OTP
 
        this.userService.sentOtp(this.logindata).subscribe(
 
          (response) => {
 
            // OTP sent successfully
 
            console.log('OTP sent successfully:', response);
 
     
 
            // Now, you can proceed with user registration
 
            // this.userService.signup(this.logindata).subscribe(
 
            //   (registrationResponse) => {
 
            //     // User registration succeeded
 
            //     console.log('User created successfully', registrationResponse);
 
     
 
            //     // Navigate to the desired page after successful sign-up
 
            //     this.router.navigate(['/createprofile']);
 
            //   },
 
            //   (registrationError) => {
 
            //     // User registration failed
 
            //     console.error('Error creating user', registrationError);
 
            //     // Handle the error here
 
            //   }
 
            // );
 
          },
 
          (otpError) => {
 
            // OTP sending failed
 
            console.error('Error sending OTP', otpError);
 
            // Handle the error here, e.g., display an error message to the user
 
          }
 
        );
 
     
 
        // Assuming the registration is successful, you can show the OTP form
 
        this.showOTPForm = true;
 
      }
 
     
 
  }

import { Component, ElementRef, ViewChild } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { UserserviceService } from '../userservice.service';


import { Logindata } from '../logindata';
import { ShareService } from '../ShareService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent {
  showPassword = false;
  rememberMe = false;
  logindata: Logindata = new Logindata();
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  errorMessage: string | undefined;
  data: any;




  constructor(private router: Router, private userservice: UserserviceService ,private shareservice: ShareService) {}





  submitForm() {
    console.log(this.logindata);

    this.userservice.login(this.logindata).subscribe(
      (data) => {
        // Check if 'data' haIs expected properties before navigating
        if (data && data.userId) {

console.log(data)


       
        
          this.shareservice.setUserId(data.userId);
       const    userid=this.shareservice.getUserId();


          console.log("userid stored" ,userid) // Store the value in the service
          this.data = data;
          // const navigationExtras: NavigationExtras = {
          //   queryParams: { userData: JSON.stringify(this.data) }
          // };
          this.router.navigate(['/dashboard'],
          //  navigationExtras
          );
        } else {
          console.error('Invalid response format:', data);
          this.errorMessage = 'Unexpected response from the server.';
        }
      },
      (error: any) => {
        console.error('Login failed:', error);
        this.errorMessage = "Username and password don't match.";
      }
    );
  }




  togglePassword() {
    const inputType = this.passwordInput.nativeElement.type;
    this.passwordInput.nativeElement.type = inputType === 'password' ? 'text' : 'password';
  }




  navigateToRegister() {
    this.router.navigate(['/signup']);
  }

}
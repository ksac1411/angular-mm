import { Component, OnInit } from '@angular/core';
import { User } from '../user'; // replace 'User' with the actual user interface or model
import { UserserviceService } from '../userservice.service';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit  {
  userList: User[] = [];
  recentlyJoinedUsers: any[] = [];
 // Variable to store the userId

  constructor(private userService: UserserviceService, private shareservice: ShareService) {}
  userId= this.shareservice.getUserId();
  ngOnInit(): void {  
    console.log('Retrieved userId:', this.userId);
    this.fetchUserData();
    this.getRecentlyJoinedUsers(); // Call the renamed function here

    // ...other code
  }

  fetchUserData(): void {
    if (this.userId) {
      this.getAcceptedUsersList(this.userId);
      this.getRecentlyJoinedUsers();
      // Other necessary data fetch calls based on userId
    } else {
      console.error('User ID not available.');

  }
}
  // ngOnInit() {
  //   this.userId = this.shareservice.getUserId();
  //   console.log(this.userId);
  //   this.getRecentlyJoinedUsers();
  // }
  
  getRecentlyJoinedUsers(): void {
    this.userService.getRecentlyJoinedUsers()
      .subscribe(
        (data: any[]) => {
          this.recentlyJoinedUsers = data;
          console.log('Recently joined users:', this.recentlyJoinedUsers);
        },
        (error: any) => {
          console.error('Error fetching recently joined users:', error);
        }
      );
  }
     
  getAcceptedUsersList(userId: string): void {
    this.userService.getAcceptedUsersList(this.userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Accepted User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching accepted users:', error);
      }
    );
  }
  acceptMember() {
    
    // Add your logic here for accepting a member
    console.log('Member accepted');

   
    
    this.getAcceptedUsersList(this.userId); // Call the method here after performing the accept operation

  }
  getDeclinedUsersList(userId: string): void {
    this.userService.getDeclinedUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Declined User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Declined users:', error);
      }
    );
  }

  // Function to handle declining a member
  declineMember() {
    // Add your logic here for declining a member
    console.log('Member declined');
   this. getDeclinedUsersList (this.userId)
  }

  getBlockedUsersList(userId: string): void {
    this.userService.getBlockedUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Blocked User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Blocked users:', error);
      }
    );
  }
  // Function to handle blocking a member
  blockMember() {
    // Add your logic here for blocking a member
    console.log('Member blocked');
    this. getBlockedUsersList (this.userId)

  }
  Shortlisted(){
    console.log('Member blocked');
    this. getShortlistedUsersList (this.userId)

  }
  getShortlistedUsersList(userId: string): void {
    this.userService.getShortlistedUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Shortlisted User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Shortlisted users:', error);
      }
    );
  }
//   trackvisitor(visitedProfileId:any, visitorUserId: any): void {
//   this.userService.trackVisitor(visitedProfileId, visitorUserId).subscribe(
//     () => {
//       console.log('Visitor tracked successfully');
//       // After successfully tracking the visitor, fetch the updated user list
//       this.getAcceptedUsersList('vv1000');
//     },
//     (error) => {
//       console.error('Error while tracking visitor', error);
//     }
//   );
// }


received() {
  console.log('received request sucessfully');
    this. getreceivedUsersList (this.userId)

}
getreceivedUsersList(userId: string): void {
  this.userService.getreceivedUsersList(userId).subscribe(
    (data: User[]) => {
      this.userList = data;
      console.log(' received User List:', this.userList);
    },
    (error: any) => {
      console.error('Error fetching received users:', error);
    }
  );
}

  send() {
    console.log('Send request sucessfully');
      this. getSendUsersList (this.userId)
  
  }

  getSendUsersList(userId: string): void {
    this.userService.getSendUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Send User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Send users:', error);
      }
    );
  }

  recentlyjoined(){}



ProfileVisitors(){}

}



import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service'; // Replace with the actual service path
import { PhonebookItem } from '../phonebookitems'; // Replace with the actual model path
import { ShareService } from '../ShareService';
@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  phonebookList: PhonebookItem[] = [];
  userId: any ; // Variable to store the userId

  constructor(
    private userserviceService: UserserviceService, private shareservice: ShareService
  ) {}

//   ngOnInit() {
//     this.userId = this.shareservice.getUserId();

//     // Call the function to get the dynamic user ID
//     this.fetchPhonebookList();
//   }

//   fetchPhonebookList(): void {
//     // Get the userId from the UserService
//     // this.userId = this.userserviceService.getUserId();

//     this.getPhonebookList(this.userId);
//   }

//   getPhonebookList(userId: string): void {
//     this.userserviceService.getPhonebookList(userId).subscribe(
//       (data: PhonebookItem[]) => {
//         this.phonebookList = data;
//         console.log(data); // Log the data to the console for debugging
//       },
//       (error: any) => {
//         // Handle errors here
//         console.error('Error fetching phonebook list', error);
//       }
//     );
//   }
// }



ngOnInit() {
  this.userId = this.shareservice.getUserId();

  console.log(this.userId)
  this.fetchPhonebookList();
}

fetchPhonebookList(): void {
  this.userserviceService.getPhonebookList(this.userId).subscribe(
    (phonebookList: any[]) => { // Assuming phonebookList is an array of objects
      console.log(phonebookList); // Log the retrieved phonebookList
      this.phonebookList = phonebookList; // Assign the received data to the class property
    },
    (error: any) => {
      console.error('Error fetching phonebook list', error);
    }
  );
}

}



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private loggedInUser: any; // Store logged-in user details here

  userId: any;
  static getUserId() {
    throw new Error('Method not implemented.');
  }
  private userIdSource = new BehaviorSubject<string>('');
  currentUserId = this.userIdSource.asObservable();
 
  setUserId(userId: string) {
    this.userIdSource.next(userId);
  }
 
  getUserId(): string {
    return this.userIdSource.value;
  }
  getLoggedInUser(): any {
    return this.loggedInUser;
  }
  setLoggedInUser(user: any) {
    this.loggedInUser = user;
  }

}
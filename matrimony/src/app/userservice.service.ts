import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
 import { User } from './user';
import { OTP } from './otp';
import { Contact } from './contact';
import { Logindata } from './logindata';
import { PhonebookItem } from './phonebookitems';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private loggedInUser: any; // Store logged-in user details here

  userId: any;
  
  private apiUrl = 'http://localhost:8080/api';
  isLoggedIn: any;
  userservice: any;

  constructor(private http: HttpClient) { }
  
  setUserId(userId: any) {
    this.userId = userId;
  }

  getUserId(): any {
    return this.userId;
  }

//   sentOtp(User :User): Observable<any> {
//  return this.http.post(`${this.apiUrl}/sentOtp`, User);
//  }
sentOtp(logindata: Logindata): Observable<any> {
  return this.http.post(`${this.apiUrl}/sentOtp`, logindata);
}

  verifyOtp(otp: OTP): Observable<any> {
    // Log the OTP for debugging purposes
    console.log(otp, "service otp");
// Make an HTTP POST request to the server to verify the OTP
 return this.http.post(`${this.apiUrl}/verify`, otp);

  }
  signup(logindata: Logindata): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, logindata);
  }
  
  changePassword(password: string): Observable<any> {
    // Implement logic to change password
    return this.http.post(this.apiUrl, { password });
  }
  // signup(User :User): Observable<any> {
  
  //   return this.http.post(`${this.apiUrl}/register`, User);
  // }

  // login(user :User): Observable<any> {
  // console.log(User," service file")
  //   return this.http.post(`${this.apiUrl}/login`, user);
  // }
  login(logindata: Logindata): Observable<any> {
    console.log(logindata, ' service file');
    return this.http.post(`${this.apiUrl}/login`, logindata);
    pipe(
      tap((response: any) => {
        // Assuming the response contains the userId
        if (response && response.userid) {
          this.userservice.setUserId(response.userid); // Set the userId in the userService
        }
      })
    );
}


  
  search(searchCriteria: User): Observable<User[]> {
    // Send the search criteria as JSON in the request body
    return this.http.post<User[]>(`${this.apiUrl}/search`, searchCriteria);
  }

  // getUserById(userId: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/getUser?id=${userId}`);
  // }
  

  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/getUser`;
    const body = { userId: userId };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, body, httpOptions)
      
  }



  resetPassword(usernameOrEmail: string, password: string): Observable<any> {
    const resetPasswordUrl = `${this.apiUrl}/updateUser`; 
    const body = {
      usernameOrEmail,
      password
    };

    return this.http.post(resetPasswordUrl, body);
  }
  // updateUser(user:User): Observable<any> {
  //   // const url = `${this.apiUrl}/updateUser`; // Replace with the actual API endpoint for updating users
  //   return this.http.post(`${this.apiUrl}/updateUser`, user);

  
  // getUserByIdc(userId: number): Observable<any> {

  //   const url = `${this.apiUrl}/getUser?Id=${userId}`;

  //   return this.http.get(url);

  // }
// updateUser(user: User): Observable<User> {
//     const url = `${this.apiUrl}/updateUser`;
//     return this.http.post<User>(url, user);
//   }
updateUser( user: User): Observable<User> {
  const url = `${this.apiUrl}/updateUser`;
  return this.http.post<User>(url, user);
}
  deleteUser(id: number): Observable<string> {
    const url = `${this.apiUrl}/deleteUser?Id=${id}`;
    return this.http.delete<string>(url);
  }

  feedback(feedback: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.apiUrl}/feedback`, feedback);
  }
 
  
  acceptMem(userid: number, accepted_mem: number): Observable<any> {
    const params = new HttpParams()
      .set('userid', userid.toString()) // Convert to string if not already
      .set('accepted_mem', accepted_mem.toString());
  
    return this.http.post(`${this.apiUrl}/accept`, {}, { params });
  }
  
  declineMem(userId: number, declined_mem: number): Observable<any> {
    const params = new HttpParams()
    .set('userId', userId.toString()) // Convert to string if not already
    .set('declined_mem', declined_mem.toString());
  
  return this.http.post(`${this.apiUrl}/decline`, {}, { params });
  }
  
  blockMem(userId: number, blocked_mem: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId.toString()) // Convert to string if not already
      .set('blocked_mem', blocked_mem.toString());
  
    return this.http.post(`${this.apiUrl}/blocked`, {}, { params });
  }
  
  getAcceptedUsersList(userId: string): Observable<User[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/accepteList?userId=${userId}`;
    return this.http.post<User[]>(url, { headers });
  }

  
 
getDeclinedUsersList(userId: string): Observable<User[]> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.apiUrl}/declineList?userId=${userId}`;
  return this.http.post<User[]>(url, { headers });
}
 

// getAcceptedMembers(userid: number): Observable<User[]> {
//   const params = new HttpParams().set('userId', userid.toString());

//   return this.http.post<User[]>(`${this.apiUrl}/accepteList`, null, { params });
// }

// getDeclinedMembers(userId: number): Observable<User[]> {
//   const params = new HttpParams().set('userId', userId.toString());

//   return this.http.post<User[]>(`${this.apiUrl}/declineList`, null, { params });
// }

getBlockedUsersList(userId: string): Observable<User[]> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.apiUrl}/blockList?userId=${userId}`;
  return this.http.post<User[]>(url, { headers });
}
getShortlistedUsersList(userId: string): Observable<User[]> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.apiUrl}/shortList?userId=${userId}`;
  return this.http.post<User[]>(url, { headers });
}



getreceivedUsersList(userId: string): Observable<User[]> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.apiUrl}/receivedList?userId=${userId}`; // Include userId in the URL
  return this.http.post<User[]>(url, { headers }); // Change to GET request
}



receive(userId: string, receivedMem: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/receive`, { userId, received_mem: receivedMem });
}

getSendUsersList(userId: string): Observable<User[]> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.apiUrl}/sendList?userId=${userId}`;
  return this.http.post<User[]>(url,  { headers });
}

send(userId: string, sendMem: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/send`, { userId, send_mem: sendMem });
}
getRecentlyJoinedUsers(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/recently-joined`);
}
getPhonebookList(userId: string): Observable<any> {
  const url = `${this.apiUrl}/phonebookid`;
  const options = {
    params: new HttpParams().set('userId', userId)
  };
  return this.http.post(url, null, options);
}


// getPhonebookList(userId: string): Observable<PhonebookItem[]> {
//   const url = `${this.apiUrl}/phonebookid`;
//   let params = new HttpParams().set('userId', userId); // Send "userId" as a query parameter
//   let headers = new HttpHeaders().set('Content-Type', 'application/json');

//   return this.http.post<PhonebookItem[]>(url, { params, headers }); // Use GET instead of POST
// }



sortUsersByIds(idList: number[]): Observable<User[]> {
  return this.http.post<User[]>(this.apiUrl, idList);
}
getUsersByIds(idList: number[]): Observable<User[]> {
  return this.http.post<User[]>(`${this.apiUrl}/sortby`, idList);
}


}
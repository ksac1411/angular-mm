import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

interface Profile {
  id: number;
  name: string;
  age: number;
  height: number;
  income: number;
  // Add other profile properties
}
@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})

export class SortbyComponent  {
    selectedFilter: string = '';// To store the selected filter option
   // Assuming you have an array of IDs (for demonstration purposes)

// Call the function to fetch users by these IDs

    filterOptions = {
      sortAge: '', // 'lowToHigh' or 'highToLow' for Age sorting
      sortHeight: '', // 'lowToHigh' or 'highToLow' for Height sorting or 'priority' for priority
      // Add other filter options here
      agePriority: 0, // Track Age priority selection
      sortSalary: '', // 'lowToHigh' or 'highToLow' for Salary sorting
      salaryPriority: 0, // Priority for Salary filtering
    };
    
    constructor(private userservice: UserserviceService ) { }
    selectFilter(filter: string): void {
      this.selectedFilter = filter;
      this.resetFilterOptions(); // Reset filter options when a new filter is selected
    }
    sortSalary(order: string) {
      this.filterOptions.sortSalary = order;
      console.log('Sorting by Salary:', order);
      // Add logic to perform sorting by salary
    }
  
    selectSalaryPriority(priority: number) {
      this.filterOptions.salaryPriority = priority;
      console.log('Selected Salary Priority:', priority);
      // Add logic to handle priority selection for salary
    }
    sortAge(order: string): void {
      this.filterOptions.sortAge = order === 'priority' ? 'priority' : order;
      if (order === 'priority') {
        console.log('Sorting Age by Priority');
      } else {
        console.log('Sorting Age:', order);
      }
    }
  
    sortHeight(order: string): void {
      if (order === 'priority') {
        this.filterOptions.sortHeight = 'priority';
        // Logic to handle displaying priority options
        console.log('Sorting Height by Priority');
      } else {
        this.filterOptions.sortHeight = order;
        // Sorting logic based on the selected order for Height
        console.log('Sorting Height:', order);
      }
    }
  
    selectPriority(priority: number): void {
      // Logic for handling priority selection
      console.log('Selected Priority:', priority);
    }
  
    resetFilterOptions(): void {
      this.filterOptions = {
        sortAge: '',
        sortHeight: '',
        agePriority: 0,
        sortSalary: '', // 'lowToHigh' or 'highToLow' for Salary sorting
        salaryPriority: 0, 
        // Reset other filter options here
      };
        }
        sortUsers(): void {
          const idList: number[] = [1, 2, 3]; // Replace with your list of IDs
          this.userservice.sortUsersByIds(idList).subscribe(
            (sortedUsers: User[]) => {
              console.log('Sorted Users:', sortedUsers);
              // Handle the sorted user list here
            },
            (error: any) => {
              console.error('Error fetching sorted users:', error);
              // Handle error if any
            }
          );
        
  }
  getUsersByIds(idList: number[]): void {
    this.userservice.getUsersByIds(idList).subscribe(
      (users: User[]) => {
        // Handle the received user data here
        console.log(users);
      },
      (error: any) => {
        // Handle errors
        console.error('Error fetching users:', error);
      }
    );
  
}
}
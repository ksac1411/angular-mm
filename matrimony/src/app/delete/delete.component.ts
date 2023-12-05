import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
 
  showNotSatisfied: boolean = false;
  showPraivacyissues:boolean = false;
  showifoundmmatch:boolean=false;
  showOthers:boolean=false;
  foundMatch: string = ''; // Define the foundMatch property here

  
    onSubmit() {
      console.log('Selected options:');
      console.log('- I Found My Match:', this.foundMatch);
    
      if (this.foundMatch === 'vivah') {
        console.log('-- Found through Vivah');
        // Implement logic specific to Vivah selection here
      }  if (this.foundMatch === 'other') {
        console.log('-- Found through Other Source');
        // Implement logic specific to Other Source selection here
      }
    
      if (this.showNotSatisfied) {
        console.log('- Not satisfied with service:');
  
        // Logic to handle rest of the checkboxes for the reasons
        // Check if each checkbox is selected and log accordingly
        // Example:
        console.log('-- Irrelevant matches');
        // ... continue with other checkboxes
      }
      if (this.showPraivacyissues) {
        console.log('- Profile/Privacy Issues:');
        // Logic to handle Profile/Privacy Issues options
      }
      if (this.showOthers) {
        console.log('- Other Issues: Some other reason');
        // Logic to handle Other Issues option selected
      }
  
      // Further logic can be added here, like sending the data to an API or performing other actions based on the selected options
    }
  }

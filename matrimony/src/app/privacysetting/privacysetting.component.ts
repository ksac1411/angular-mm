import { Component } from '@angular/core';

@Component({
  selector: 'app-privacysetting',
  templateUrl: './privacysetting.component.html',
  styleUrls: ['./privacysetting.component.css']
})
export class PrivacysettingComponent {
  albumPrivacy: string = '';
  profileVisibility: string = '';
  voiceCallSettings: string = '';
  videoCallSettings: string = '';
  mobileNumberSettings: string = '';

  saveMobileNumberSettings() {
    // Implement logic to save mobile number settings whenever the selection changes
    console.log('Selected mobile number settings:', this.mobileNumberSettings);
    // Perform your save action here
  }
  saveAlbumPrivacy() {
    // Implement logic to save album privacy whenever the selection changes
    console.log('Selected album privacy:', this.albumPrivacy);
    // Perform your save action here
  }
  
  saveProfileVisibility() {
    // Implement logic to save profile visibility whenever the selection changes
    console.log('Selected profile visibility:', this.profileVisibility);
    // Perform your save action here
  }
  saveVoiceCallSettings() {
    // Implement logic to save voice call settings whenever the selection changes
    console.log('Selected voice call settings:', this.voiceCallSettings);
    // Perform your save action here
  }
  saveVideoCallSettings() {
    // Implement logic to save video call settings whenever the selection changes
    console.log('Selected video call settings:', this.videoCallSettings);
    // Perform your save action here
  }
}


import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbyidComponent } from './searchbyid/searchbyid.component';
import { SearchbycriteriaComponent } from './searchbycriteria/searchbycriteria.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { SearchComponent } from './search/search.component';
import { SortbyComponent } from './sortby/sortby.component';
import { FiltersComponent } from './filters/filters.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SettingComponent } from './setting/setting.component';
import { MessengerComponent } from './messenger/messenger.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { DashboardfooterComponent } from './dashboardfooter/dashboardfooter.component';
import { MatchesComponent } from './matches/matches.component';
import { MemberComponent } from './member/member.component';
import { ActivityComponent } from './activity/activity.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import { VerifyidComponent } from './verifyid/verifyid.component';
import { PartnerpreferenceComponent } from './partnerpreference/partnerpreference.component';
import { ReportComponent } from './report/report.component'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PrivacysettingComponent } from './privacysetting/privacysetting.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HideprofileComponent } from './hideprofile/hideprofile.component';
import { DeleteComponent } from './delete/delete.component';
import { NearbyComponent } from './nearby/nearby.component';
import { VerifiedComponent } from './verified/verified.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    SignupComponent,
    ContactusComponent,
    LoginComponent,
    HelpComponent,
    ForgotPasswordComponent,
    
    FooterComponent,
    SearchbyidComponent,
    SearchbycriteriaComponent,
    DashboardComponent,
    EditprofileComponent,
    PhonebookComponent,
    SearchComponent,
    SortbyComponent,
    FiltersComponent,
    SubscriptionComponent,
    SettingComponent,
    MessengerComponent,
    HeaderComponent,
    ChatListComponent,
    ChatWindowComponent,
    DashboardheaderComponent,
    DashboardfooterComponent,
    MatchesComponent,
    MemberComponent,
    ActivityComponent,
    FeedbackComponent,
  
    VerifyidComponent,
    PartnerpreferenceComponent,
    ReportComponent,
    PrivacysettingComponent,
    ChangepasswordComponent,
    HideprofileComponent,
    DeleteComponent,
    NearbyComponent,
    VerifiedComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule.forRoot() ,// Add RatingModule to the imports array
    MatCardModule, // Add other necessary modules here
    MatExpansionModule,
    FlexLayoutModule,
    MatFormFieldModule,
HttpClientModule,
     BrowserAnimationsModule,
     MatSelectModule,
     MatSidenavModule,
     NgbRatingModule,
     MatToolbarModule,
MatCardModule,
MatListModule,
MatIconModule,
MatCheckboxModule,
MatRadioModule,
MatSlideToggleModule,
ReactiveFormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  





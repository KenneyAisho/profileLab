import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../user-profile';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  profile: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}

  // calling a method from this service called setUserProfile
  // passing in this.profile as an argument.
  submitProfile() {
    this.profileService.setUserProfile(this.profile);
    this.router.navigate(['/profile']);
  }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}

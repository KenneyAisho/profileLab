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

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}

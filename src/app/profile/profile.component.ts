import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: UserProfile;

  constructor(private service: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profile = this.service.getUserProfile();
  }
}

import { Injectable } from '@angular/core';
import { UserProfile } from '../user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: UserProfile = {
    name: 'Kenney Aisho',
    contact: 'kenneyaisho@gmail.com',
    bio: 'I deadlift'
  };

  constructor() {}

  getUserProfile(): UserProfile {
    return this.profile;
  }

  setUserProfile(newInfo: UserProfile): void {
    this.profile = newInfo;
  }
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileEntity } from '../entity/profile-entity';
import { ProfileService } from '../services/profile.service';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit, AfterViewInit {

  @ViewChild(ChangePasswordComponent) changePasswordComponent: ChangePasswordComponent;

  changesSaved: boolean = false;
  profileData$: Observable<ProfileEntity> = null;

  constructor(
    private profileService: ProfileService,
  ) { }
  
  ngOnInit(): void {
    this.profileData$ = this.profileService.loadProfile();
  }
  
  ngAfterViewInit(): void {
  }

  onFieldChange({ isChanged, fieldName, fieldValue }): void {
    if (isChanged) {
      this.changesSaved = true;
      this.profileService.updateProfile({ [fieldName]: fieldValue });
    }
  }

  onSaveButtonClick(): void {
    const passwordData = this.changePasswordComponent.getPassword();
    const profileData = this.profileService.getUpdatedProfile();
    console.log({ ...passwordData, ...profileData });
  }
}

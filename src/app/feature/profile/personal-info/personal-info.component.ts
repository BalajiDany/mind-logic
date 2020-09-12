import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ToasterService } from 'src/app/component/custom-toaster/services/toaster.service';
import { ProfileEntity } from '../entity/profile-entity';
import { ProfileService } from '../services/profile.service';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {

  @ViewChild(ChangePasswordComponent) changePasswordComponent: ChangePasswordComponent;

  changesSaved: boolean = false;
  profileData$: Observable<ProfileEntity>;

  constructor(
    private profileService: ProfileService,
    public toastService: ToasterService,
  ) { }
  
  ngOnInit(): void {
    this.profileData$ = this.profileService.loadProfile();
  }

  onFieldCopied({ fieldLabel, fieldValue }): void {
    if (fieldValue !== '') {
      this.toastService.show(`${fieldLabel} Copied`, { classname: 'bg-success text-light' });
    } else {
      this.toastService.show(`${fieldLabel} Not Copied. Please Enter`, { classname: 'bg-danger text-light' });
    }
  }

  onFieldChange({ isChanged, fieldName, fieldValue }): void {
    if (isChanged) {
      this.changesSaved = true;
      this.profileService.updateProfile({ [fieldName]: fieldValue });
      this.toastService.show(`${fieldName} Updated`, { classname: 'bg-success text-light' });
    }
  }

  onSaveButtonClick(): void {
    const passwordData = this.changePasswordComponent.getPassword();
    const profileData = this.profileService.getUpdatedProfile();
    console.log({ ...passwordData, ...profileData });
    this.toastService.show(`Please Check Console.`);
  }
}

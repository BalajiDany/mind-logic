import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TitleService } from 'src/app/feature/services/title.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { PreferencesInfoComponent } from './preferences-info/preferences-info.component';
import { BaseModule } from 'src/app/component/base.module';
import { ChangePasswordComponent } from './personal-info/change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalInfoComponent,
    GeneralInfoComponent,
    PreferencesInfoComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbNavModule,
    BaseModule,
    FormsModule,
  ],
  providers: [
    TitleService,
    ProfileService,
  ]
})
export class ProfileModule { }

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit, AfterViewInit {

  @ViewChild(ChangePasswordComponent) changePasswordComponent: ChangePasswordComponent;

  changesSaved: boolean = false;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
  }

  onFieldChange({ isChanged }): void {
    if (isChanged) {
      this.changesSaved = true;
    }
  }
}

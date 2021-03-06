import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {

  
  activeTabIndex: number = 1;
  constructor(
    private titleService: TitleService,
  ) { }

  ngAfterViewInit(): void {
    this.titleService.changeTitle('Profile');
  }

}

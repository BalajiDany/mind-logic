import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  active = 1;
  constructor(
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.titleService.changeTitle('Profile');
  }

}

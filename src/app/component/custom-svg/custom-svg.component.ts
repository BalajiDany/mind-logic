import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-svg',
  templateUrl: './custom-svg.component.html',
  styleUrls: ['./custom-svg.component.css']
})
export class CustomSvgComponent {

  @Input() icon: string;
  @Input() size: string = '1.2em';

}

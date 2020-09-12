import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {

  constructor(private title: Title) { }

  changeTitle(titleString: string): void {
    this.title.setTitle(titleString);
  }

}

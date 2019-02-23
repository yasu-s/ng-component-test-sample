import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Title */
  title = 'ng-sample';

  /** Name */
  name = '';

  /**
   * AppComponent create
   * @param appService AppService
   */
  constructor(private appService: AppService) {}

  /**
   * Button Click
   */
  onClick(): void {
    this.appService.getData().subscribe(data => {
      this.name = data.name;
    });
  }
}

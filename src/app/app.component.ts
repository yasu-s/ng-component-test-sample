import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /** Title */
  title = 'ng-sample';

  /** Name */
  name = '';

  /** Text */
  text = '';

  /**
   * AppComponent create
   * @param appService AppService
   */
  constructor(private appService: AppService) {}

  /**
   * OnInit
   */
  ngOnInit(): void {
    this.text = 'aaa';
  }

  /**
   * Button Click
   */
  onClick(): void {
    this.appService.getData().subscribe(data => {
      this.name = data.name;
    });
  }
}

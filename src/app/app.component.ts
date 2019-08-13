import { Component, OnInit } from '@angular/core';
import { AngularVibrationService } from 'projects/angular-vibration/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hasVibrationSupport = false;

  constructor(private angularVibration: AngularVibrationService) {}

  ngOnInit() {
    this.hasVibrationSupport = this.angularVibration.hasVibrationSupport();
  }
}

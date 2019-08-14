import { Component, OnInit } from '@angular/core';
import { NgxVibrationService } from 'projects/ngx-vibration/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hasVibrationSupport = false;

  constructor(private vibrationService: NgxVibrationService) {}

  ngOnInit() {
    this.hasVibrationSupport = this.vibrationService.hasVibrationSupport();
  }
}

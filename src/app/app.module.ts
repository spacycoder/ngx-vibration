import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularVibrationModule } from 'angular-vibration';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularVibrationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

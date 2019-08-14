import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxVibrationModule } from 'ngx-vibration';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxVibrationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

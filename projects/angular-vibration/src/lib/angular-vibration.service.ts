import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularVibrationService {

  constructor() { }

  vibrate(vibratePattern: number[]) {
    const supportsVibration = window.navigator.vibrate;
    if (supportsVibration) {
      window.navigator.vibrate(vibratePattern);
    }

    return !!supportsVibration;
  }

  cancelVibration() {
    const supportsVibration = window.navigator.vibrate;
    if (supportsVibration) {
      window.navigator.vibrate(0);
    }

    return !!supportsVibration;
  }
}

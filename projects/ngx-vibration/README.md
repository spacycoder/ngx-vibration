# NgxVibration

## Setup       

* Install with npm:
```bash
npm i ngx-vibration
```

* Import `NgxVibrationModule` in your App Module.
```typescript
import { NgxVibrationModule } from 'ngx-vibration';

@NgModule({
  imports: [..., NgxVibrationModule],
  ...
})
export class AppModule {}
```

## Usage

### Vibration Directive
The vibration directive causes the device to vibrate when the directive has been tapped by the user.

Add the ngxVibration directive to an HTML element. The directive takes a vibration pattern as input. The values of the array describes alternating periods of time in which the device is vibrating and not vibrating. 
```html
<button [ngxVibration]="[200, 100, 200]">VIBRATE</button>
```

### Vibration Service

```typescript
export class AppComponent implements OnInit {
  hasVibrationSupport = false;

  constructor(private vibrationService: NgxVibrationService) {}

  ngOnInit() {
    this.hasVibrationSupport = this.vibrationService.hasVibrationSupport();
  }

  vibrate() {
    this.vibrationService.vibrate([200, 100, 200]);
  }

  cancelVibration() {
    this.vibrationService.cancelVibration();
  }
}
```
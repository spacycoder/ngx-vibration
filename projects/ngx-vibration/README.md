# NgxVibration
Angular directive for the [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)  
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
```html
<button [ngxVibration]="500">VIBRATE</button>
```
Or with the [global config](#global-configuration) _defaultPattern_ set: 
```html
<button ngxVibration>VIBRATE</button>
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

### Global configuration

You can provide a default configuration object when importing the module using the `forRoot()` method.

``` typescript
NgxVibrationModule.forRoot({
  defaultPattern: [100, 0, 100]
})
```

| Property       | Type       | Description                                                  |
| -------------- | ---------- | ------------------------------------------------------------ |
| defaultPattern | `number[]` | The pattern to use by default when no other is specified on the directives |


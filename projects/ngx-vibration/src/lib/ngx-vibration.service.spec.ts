import { TestBed } from '@angular/core/testing';

import { NgxVibrationService } from './ngx-vibration.service';

describe('NgxVibrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxVibrationService = TestBed.get(NgxVibrationService);
    expect(service).toBeTruthy();
  });
});

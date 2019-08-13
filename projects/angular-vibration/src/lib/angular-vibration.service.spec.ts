import { TestBed } from '@angular/core/testing';

import { AngularVibrationService } from './angular-vibration.service';

describe('AngularVibrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularVibrationService = TestBed.get(AngularVibrationService);
    expect(service).toBeTruthy();
  });
});

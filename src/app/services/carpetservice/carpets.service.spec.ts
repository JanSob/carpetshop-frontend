import { TestBed } from '@angular/core/testing';

import { CarpetsService } from './carpets.service';

describe('CarpetserviceService', () => {
  let service: CarpetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

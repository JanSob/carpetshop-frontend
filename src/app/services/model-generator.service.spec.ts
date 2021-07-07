import { TestBed } from '@angular/core/testing';

import { ModelGeneratorService } from './model-generator.service';

describe('ModelGeneratorService', () => {
  let service: ModelGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

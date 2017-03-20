import { TestBed, inject } from '@angular/core/testing';

import { Generate100x100Service } from './generate100x100.service';

describe('Generate100x100Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Generate100x100Service]
    });
  });

  it('should ...', inject([Generate100x100Service], (service: Generate100x100Service) => {
    expect(service).toBeTruthy();
  }));
});

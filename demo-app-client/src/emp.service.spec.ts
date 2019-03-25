import { TestBed, inject } from '@angular/core/testing';

import { empservice } from './emp.service';

describe('empservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [empservice]
    });
  });

  it('should be created', inject([empservice], (service: empservice) => {
    expect(service).toBeTruthy();
  }));
});

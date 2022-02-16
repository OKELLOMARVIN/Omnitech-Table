import { TestBed } from '@angular/core/testing';

import { OmnitechTableService } from './omnitech-table.service';

describe('OmnitechTableService', () => {
  let service: OmnitechTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmnitechTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

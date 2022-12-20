import { TestBed } from '@angular/core/testing';

import { StudDataServiceService } from './stud-data.service.service';

describe('StudDataServiceService', () => {
  let service: StudDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

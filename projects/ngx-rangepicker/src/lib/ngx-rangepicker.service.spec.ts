import { TestBed } from '@angular/core/testing';

import { NgxRangepickerService } from './ngx-rangepicker.service';

describe('NgxRangepickerService', () => {
  let service: NgxRangepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRangepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

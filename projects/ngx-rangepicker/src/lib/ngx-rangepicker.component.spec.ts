import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRangepickerComponent } from './ngx-rangepicker.component';

describe('NgxRangepickerComponent', () => {
  let component: NgxRangepickerComponent;
  let fixture: ComponentFixture<NgxRangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRangepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

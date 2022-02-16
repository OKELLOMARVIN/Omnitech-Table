import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnitechTableComponent } from './omnitech-table.component';

describe('OmnitechTableComponent', () => {
  let component: OmnitechTableComponent;
  let fixture: ComponentFixture<OmnitechTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnitechTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnitechTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetDetailsComponent } from './carpet-details.component';

describe('CarpetDetailsComponent', () => {
  let component: CarpetDetailsComponent;
  let fixture: ComponentFixture<CarpetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

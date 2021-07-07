import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarpetComponent } from './add-carpet.component';

describe('AddCarpetComponent', () => {
  let component: AddCarpetComponent;
  let fixture: ComponentFixture<AddCarpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarpetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

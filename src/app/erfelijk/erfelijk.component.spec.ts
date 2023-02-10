import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErfelijkComponent } from './erfelijk.component';

describe('ErfelijkComponent', () => {
  let component: ErfelijkComponent;
  let fixture: ComponentFixture<ErfelijkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErfelijkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErfelijkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

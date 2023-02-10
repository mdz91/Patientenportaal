import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieenComponent } from './allergieen.component';

describe('AllergieenComponent', () => {
  let component: AllergieenComponent;
  let fixture: ComponentFixture<AllergieenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergieenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergieenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

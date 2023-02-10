import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorcontrastComponent } from './colorcontrast.component';

describe('ColorcontrastComponent', () => {
  let component: ColorcontrastComponent;
  let fixture: ComponentFixture<ColorcontrastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorcontrastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorcontrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

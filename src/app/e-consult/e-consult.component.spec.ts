import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EConsultComponent } from './e-consult.component';

describe('EConsultComponent', () => {
  let component: EConsultComponent;
  let fixture: ComponentFixture<EConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicatieComponent } from './medicatie.component';

describe('MedicatieComponent', () => {
  let component: MedicatieComponent;
  let fixture: ComponentFixture<MedicatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicatieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

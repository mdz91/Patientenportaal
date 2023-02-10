import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoxicatieComponent } from './intoxicatie.component';

describe('IntoxicatieComponent', () => {
  let component: IntoxicatieComponent;
  let fixture: ComponentFixture<IntoxicatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoxicatieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoxicatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

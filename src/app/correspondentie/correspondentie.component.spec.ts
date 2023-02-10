import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondentieComponent } from './correspondentie.component';

describe('CorrespondentieComponent', () => {
  let component: CorrespondentieComponent;
  let fixture: ComponentFixture<CorrespondentieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondentieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

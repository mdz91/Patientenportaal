import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaalselectieComponent } from './taalselectie.component';

describe('TaalselectieComponent', () => {
  let component: TaalselectieComponent;
  let fixture: ComponentFixture<TaalselectieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaalselectieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaalselectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

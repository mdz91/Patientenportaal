import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitslagComponent } from './uitslag.component';

describe('UitslagComponent', () => {
  let component: UitslagComponent;
  let fixture: ComponentFixture<UitslagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UitslagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UitslagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

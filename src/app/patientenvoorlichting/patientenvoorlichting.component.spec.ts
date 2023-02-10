import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientenvoorlichtingComponent } from './patientenvoorlichting.component';

describe('PatientenvoorlichtingComponent', () => {
  let component: PatientenvoorlichtingComponent;
  let fixture: ComponentFixture<PatientenvoorlichtingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientenvoorlichtingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientenvoorlichtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyslexieComponent } from './dyslexie.component';

describe('DyslexieComponent', () => {
  let component: DyslexieComponent;
  let fixture: ComponentFixture<DyslexieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyslexieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyslexieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpnamesComponent } from './opnames.component';

describe('OpnamesComponent', () => {
  let component: OpnamesComponent;
  let fixture: ComponentFixture<OpnamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpnamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

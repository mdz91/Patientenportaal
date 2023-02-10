import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusiebeleidComponent } from './conclusiebeleid.component';

describe('ConclusiebeleidComponent', () => {
  let component: ConclusiebeleidComponent;
  let fixture: ComponentFixture<ConclusiebeleidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConclusiebeleidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusiebeleidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

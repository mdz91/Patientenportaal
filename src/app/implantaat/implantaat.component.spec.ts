import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantaatComponent } from './implantaat.component';

describe('ImplantaatComponent', () => {
  let component: ImplantaatComponent;
  let fixture: ComponentFixture<ImplantaatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplantaatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

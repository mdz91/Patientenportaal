import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehandelbeperkingComponent } from './behandelbeperking.component';

describe('BehandelbeperkingComponent', () => {
  let component: BehandelbeperkingComponent;
  let fixture: ComponentFixture<BehandelbeperkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehandelbeperkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehandelbeperkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

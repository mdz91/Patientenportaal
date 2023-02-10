import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorgeschiedenisComponent } from './voorgeschiedenis.component';

describe('VoorgeschiedenisComponent', () => {
  let component: VoorgeschiedenisComponent;
  let fixture: ComponentFixture<VoorgeschiedenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorgeschiedenisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorgeschiedenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

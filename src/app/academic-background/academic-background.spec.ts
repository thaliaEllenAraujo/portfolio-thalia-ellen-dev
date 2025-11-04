import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicBackground } from './academic-background';

describe('AcademicBackground', () => {
  let component: AcademicBackground;
  let fixture: ComponentFixture<AcademicBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

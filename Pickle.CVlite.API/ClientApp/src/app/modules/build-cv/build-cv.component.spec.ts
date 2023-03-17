import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCvComponent } from './build-cv.component';

describe('BuildCvComponent', () => {
  let component: BuildCvComponent;
  let fixture: ComponentFixture<BuildCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

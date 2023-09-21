import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsFeatureComponent } from './instructions-feature.component';

describe('InstructionsFeatureComponent', () => {
  let component: InstructionsFeatureComponent;
  let fixture: ComponentFixture<InstructionsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

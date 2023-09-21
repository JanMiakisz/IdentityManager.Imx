import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoecomponentsFeatureComponent } from './coecomponents-feature.component';

describe('CoecomponentsFeatureComponent', () => {
  let component: CoecomponentsFeatureComponent;
  let fixture: ComponentFixture<CoecomponentsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoecomponentsFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoecomponentsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

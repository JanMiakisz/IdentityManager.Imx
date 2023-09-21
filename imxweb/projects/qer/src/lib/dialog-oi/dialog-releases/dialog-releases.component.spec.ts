import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReleasesComponent } from './dialog-releases.component';

describe('DialogReleasesComponent', () => {
  let component: DialogReleasesComponent;
  let fixture: ComponentFixture<DialogReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

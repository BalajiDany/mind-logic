import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesInfoComponent } from './preferences-info.component';

describe('PreferencesInfoComponent', () => {
  let component: PreferencesInfoComponent;
  let fixture: ComponentFixture<PreferencesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferencesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

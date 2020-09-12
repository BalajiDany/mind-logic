import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEditFieldComponent } from './simple-edit-field.component';

describe('SimpleEditFieldComponent', () => {
  let component: SimpleEditFieldComponent;
  let fixture: ComponentFixture<SimpleEditFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleEditFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleEditFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericChildComponent } from './generic-child.component';

describe('GenericChildComponent', () => {
  let component: GenericChildComponent;
  let fixture: ComponentFixture<GenericChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

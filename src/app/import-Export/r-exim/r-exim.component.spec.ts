import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REximComponent } from './r-exim.component';

describe('REximComponent', () => {
  let component: REximComponent;
  let fixture: ComponentFixture<REximComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REximComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REximComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

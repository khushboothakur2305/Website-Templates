import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileStoreComponent } from './smile-store.component';

describe('SmileStoreComponent', () => {
  let component: SmileStoreComponent;
  let fixture: ComponentFixture<SmileStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

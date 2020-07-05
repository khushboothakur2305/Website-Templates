import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediHerbalComponent } from './medi-herbal.component';

describe('MediHerbalComponent', () => {
  let component: MediHerbalComponent;
  let fixture: ComponentFixture<MediHerbalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediHerbalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediHerbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndPersonalizationComponent } from './data-and-personalization.component';

describe('DataAndPersonalizationComponent', () => {
  let component: DataAndPersonalizationComponent;
  let fixture: ComponentFixture<DataAndPersonalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAndPersonalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAndPersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

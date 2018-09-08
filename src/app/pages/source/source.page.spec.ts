import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePage } from './source.page';

describe('SourcePage', () => {
  let component: SourcePage;
  let fixture: ComponentFixture<SourcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

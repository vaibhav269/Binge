import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoTopComponent } from './page-two-top.component';

describe('PageTwoTopComponent', () => {
  let component: PageTwoTopComponent;
  let fixture: ComponentFixture<PageTwoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

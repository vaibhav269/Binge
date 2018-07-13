import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoSideNavComponent } from './page-two-side-nav.component';

describe('PageTwoSideNavComponent', () => {
  let component: PageTwoSideNavComponent;
  let fixture: ComponentFixture<PageTwoSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

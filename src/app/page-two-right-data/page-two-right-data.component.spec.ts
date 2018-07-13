import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoRightDataComponent } from './page-two-right-data.component';

describe('PageTwoRightDataComponent', () => {
  let component: PageTwoRightDataComponent;
  let fixture: ComponentFixture<PageTwoRightDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoRightDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoRightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashviewComponent } from './dashview.component';

describe('DashviewComponent', () => {
  let component: DashviewComponent;
  let fixture: ComponentFixture<DashviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHeadComponent } from './row-head.component';

describe('RowHeadComponent', () => {
  let component: RowHeadComponent;
  let fixture: ComponentFixture<RowHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPieComponent } from './widget-pie.component';

describe('WidgetPieComponent', () => {
  let component: WidgetPieComponent;
  let fixture: ComponentFixture<WidgetPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetPieComponent]
    });
    fixture = TestBed.createComponent(WidgetPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

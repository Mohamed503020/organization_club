import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdimoStylePerformanceComponent } from './edimo-style-performance.component';

describe('EdimoStylePerformanceComponent', () => {
  let component: EdimoStylePerformanceComponent;
  let fixture: ComponentFixture<EdimoStylePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdimoStylePerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdimoStylePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

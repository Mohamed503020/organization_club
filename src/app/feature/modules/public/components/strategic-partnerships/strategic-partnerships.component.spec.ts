import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicPartnershipsComponent } from './strategic-partnerships.component';

describe('StrategicPartnershipsComponent', () => {
  let component: StrategicPartnershipsComponent;
  let fixture: ComponentFixture<StrategicPartnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrategicPartnershipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicPartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

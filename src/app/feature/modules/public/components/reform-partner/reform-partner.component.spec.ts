import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformPartnerComponent } from './reform-partner.component';

describe('ReformPartnerComponent', () => {
  let component: ReformPartnerComponent;
  let fixture: ComponentFixture<ReformPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReformPartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReformPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

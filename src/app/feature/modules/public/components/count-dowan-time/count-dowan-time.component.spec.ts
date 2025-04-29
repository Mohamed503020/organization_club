import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDowanTimeComponent } from './count-dowan-time.component';

describe('CountDowanTimeComponent', () => {
  let component: CountDowanTimeComponent;
  let fixture: ComponentFixture<CountDowanTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountDowanTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDowanTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

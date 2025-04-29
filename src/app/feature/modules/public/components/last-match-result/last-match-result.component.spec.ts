import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMatchResultComponent } from './last-match-result.component';

describe('LastMatchResultComponent', () => {
  let component: LastMatchResultComponent;
  let fixture: ComponentFixture<LastMatchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMatchResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

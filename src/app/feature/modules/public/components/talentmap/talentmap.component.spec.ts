import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentmapComponent } from './talentmap.component';

describe('TalentmapComponent', () => {
  let component: TalentmapComponent;
  let fixture: ComponentFixture<TalentmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalentmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

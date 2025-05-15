import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNewsItemComponent } from './side-news-item.component';

describe('SideNewsItemComponent', () => {
  let component: SideNewsItemComponent;
  let fixture: ComponentFixture<SideNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNewsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

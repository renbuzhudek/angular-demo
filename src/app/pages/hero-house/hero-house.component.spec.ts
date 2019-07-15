import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHouseComponent } from './hero-house.component';

describe('HeroHouseComponent', () => {
  let component: HeroHouseComponent;
  let fixture: ComponentFixture<HeroHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

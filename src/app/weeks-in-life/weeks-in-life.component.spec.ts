import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksInLifeComponent } from './weeks-in-life.component';

describe('WeeksInLifeComponent', () => {
  let component: WeeksInLifeComponent;
  let fixture: ComponentFixture<WeeksInLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeksInLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksInLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

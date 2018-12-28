import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceModelComponent } from './balance-model.component';

describe('BalanceModelComponent', () => {
  let component: BalanceModelComponent;
  let fixture: ComponentFixture<BalanceModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

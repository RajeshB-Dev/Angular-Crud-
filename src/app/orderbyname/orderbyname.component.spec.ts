import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbynameComponent } from './orderbyname.component';

describe('OrderbynameComponent', () => {
  let component: OrderbynameComponent;
  let fixture: ComponentFixture<OrderbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderbynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

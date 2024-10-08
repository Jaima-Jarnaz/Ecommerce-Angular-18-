import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagementSystemComponent } from './order-management-system.component';

describe('OrderManagementSystemComponent', () => {
  let component: OrderManagementSystemComponent;
  let fixture: ComponentFixture<OrderManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderManagementSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

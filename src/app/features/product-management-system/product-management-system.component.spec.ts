import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementSystemComponent } from './product-management-system.component';

describe('ProductManagementSystemComponent', () => {
  let component: ProductManagementSystemComponent;
  let fixture: ComponentFixture<ProductManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductManagementSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

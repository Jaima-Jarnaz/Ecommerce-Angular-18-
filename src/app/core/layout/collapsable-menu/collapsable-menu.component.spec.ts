import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableMenuComponent } from './collapsable-menu.component';

describe('CollapsableMenuComponent', () => {
  let component: CollapsableMenuComponent;
  let fixture: ComponentFixture<CollapsableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsableMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

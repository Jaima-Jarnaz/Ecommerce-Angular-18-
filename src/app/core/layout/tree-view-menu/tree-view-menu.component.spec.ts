import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewMenuComponent } from './tree-view-menu.component';

describe('TreeViewMenuComponent', () => {
  let component: TreeViewMenuComponent;
  let fixture: ComponentFixture<TreeViewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeViewMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeViewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

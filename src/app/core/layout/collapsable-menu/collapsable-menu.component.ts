import { Component } from '@angular/core';
import { Collapsable_Menu_Items } from '../../constants/constants';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-collapsable-menu',
  standalone: true,
  imports: [NzIconModule, RouterModule],
  templateUrl: './collapsable-menu.component.html',
  styleUrl: './collapsable-menu.component.scss',
})
export class CollapsableMenuComponent {
  menuItems = Collapsable_Menu_Items;
}

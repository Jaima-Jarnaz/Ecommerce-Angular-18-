import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component } from '@angular/core';

import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Tree_Data } from '../../constants/constants';
import { RouterLink } from '@angular/router';
interface TreeNode {
  title: string;
  icon?: string;
  link?: string;
  isActive?: boolean;
  children?: TreeNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  link?: string;
}

@Component({
  selector: 'app-tree-view-menu',
  standalone: true,
  imports: [NzTreeViewModule, NzIconModule, NzIconModule, RouterLink],
  templateUrl: './tree-view-menu.component.html',
  styleUrls: ['./tree-view-menu.component.scss'],
})
export class TreeViewMenuComponent implements AfterViewInit {
  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.title,
    link: node.link,
    level,
  });

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  showLeafIcon = false;
  constructor() {
    this.dataSource.setData(Tree_Data);
  }

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  ngAfterViewInit(): void {
    this.treeControl.expandAll();
  }

  getNode(name: string): FlatNode | null {
    return this.treeControl.dataNodes.find((n) => n.name === name) || null;
  }
}

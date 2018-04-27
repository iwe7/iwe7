import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
  Input,
  OnChanges
} from '@angular/core';
import { NzTreeNode, NzFormatEmitEvent } from 'iwe7/antd/tree';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';

@Component({
  selector: 'iwe7-tree',
  templateUrl: './tree.html',
  styleUrls: ['./tree.scss']
})
export class TreeComponent implements OnInit {
  expandKeys = ['1001', '10001'];
  checkedKeys = ['10001', '1002'];
  selectedKeys = ['10001', '100011'];
  expandDefault = false;
  nodes = [
    new NzTreeNode({
      title: 'root1',
      key: '1001',
      children: [
        {
          title: 'child1',
          key: '10001',
          children: [
            {
              title: 'child1.1',
              key: '100011',
              children: []
            },
            {
              title: 'child1.2',
              key: '100012',
              children: [
                {
                  title: 'grandchild1.2.1',
                  key: '1000121',
                  isLeaf: true,
                  disabled: true
                },
                {
                  title: 'grandchild1.2.2',
                  key: '1000122',
                  isLeaf: true
                }
              ]
            }
          ]
        },
        {
          title: 'child2',
          key: '10002'
        }
      ]
    }),
    new NzTreeNode({
      title: 'root2',
      key: '1002',
      children: [
        {
          title: 'child2.1',
          key: '10021',
          children: [],
          disableCheckbox: true
        },
        {
          title: 'child2.2',
          key: '10022',
          children: [
            {
              title: 'grandchild2.2.1',
              key: '100221'
            }
          ]
        }
      ]
    }),
    new NzTreeNode({ title: 'root3', key: '1003' })
  ];
  ngOnInit() {}

  mouseAction(name: string, event: NzFormatEmitEvent): void {
    console.log(name, event);
  }
}

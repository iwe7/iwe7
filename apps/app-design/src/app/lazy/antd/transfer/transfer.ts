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
  selector: 'iwe7-transfer',
  templateUrl: './transfer.html',
  styleUrls: ['./transfer.scss']
})
export class TransferComponent implements OnInit {
  list: any = [];
  ngOnInit() {}

  select(e) {}

  change(e) {}
}

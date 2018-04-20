import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Input
} from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';

@Component({
  selector: 'iwe7-slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss']
})
export class SliderComponent implements OnInit {
  nzDisabled: any = {
    type: 'boolean',
    value: false
  };
  nzStep = {
    type: 'number',
    value: 1
  };
  nzMarks = {
    type: 'list',
    value: [
      {
        style: {
          type: 'style',
          value: {}
        },
        label: {
          type: 'string',
          value: 'label'
        },
        position: {
          type: 'number',
          value: 0
        }
      }
    ]
  };

  nzMin = {
    type: 'number',
    value: 0
  };
  nzMax = {
    type: 'number',
    value: 100
  };
  nzDefaultValue: any = {
    type: 'number',
    value: 30
  };

  nzTipFormatter: any = {
    type: 'string',
    value: '${value}%'
  };

  nzVertical: any = {
    type: 'boolean',
    value: false
  };

  nzRange: any = {
    type: 'boolean',
    value: false
  };

  nzDots: any = {
    type: 'boolean',
    value: true
  };

  nzIncluded: any = {
    type: 'boolean',
    value: false
  };

  get marks() {
    let item = {};
    this.nzMarks.value.map(res => {
      item[res.position.value] = {
        style: res.style.value,
        label: res.label.value
      };
    });
    return item;
  }

  _nzTipFormatter = (value: number) => {
    return this.nzTipFormatter.value.replace('${value}', value);
  };
  ngOnInit() {}

  change$: Subject<number> = new Subject();

  nzOnAfterChange(e) {
    this.change$.next(e);
  }
}

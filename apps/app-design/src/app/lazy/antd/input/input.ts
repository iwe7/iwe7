import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostBinding
} from '@angular/core';
import {
  NzInputModule,
  TInputGroupIconClass,
  NzInputGroupSizeType
} from 'iwe7/antd/input';
import { fromEvent, Observable, merge, Subject } from 'rxjs';
import { debounceTime, tap, map } from 'rxjs/operators';
@Component({
  selector: 'iwe7-input',
  templateUrl: 'input.html'
})
export class Iwe7InputComponent implements OnInit, AfterViewInit {
  nzAddOnBeforeIcon: TInputGroupIconClass;
  nzAddOnAfterIcon: TInputGroupIconClass;
  nzPrefixIcon: TInputGroupIconClass;
  nzSuffixIcon: TInputGroupIconClass;

  change$: Subject<any> = new Subject();

  @HostBinding('attr.dragable') dragable: boolean = false;

  nzSize: any = {
    type: 'select',
    value: 'default'
  };
  nzCompact: any = {
    type: 'boolean',
    value: false
  };
  nzSearch: any = {
    type: 'boolean',
    value: false
  };

  disabled: any = {
    type: 'boolean',
    value: false
  };
  nzAutosize: any = {
    type: 'boolean',
    value: false
  };

  // 控制是否显示
  show: any = {
    beforeAddon: {
      type: 'boolean',
      value: true
    },
    afterAddon: {
      type: 'boolean',
      value: false
    },
    prefix: {
      type: 'boolean',
      value: false
    },
    suffix: {
      type: 'boolean',
      value: false
    }
  };

  value: any = {
    type: 'string',
    value: ''
  };

  // 控制显示的内容
  @ViewChild('addOnBefore', { read: ViewContainerRef })
  addonBeforeView: ViewContainerRef;
  @ViewChild('addOnAfter', { read: ViewContainerRef })
  addonAfterView: ViewContainerRef;
  @ViewChild('prefix', { read: ViewContainerRef })
  prefixView: ViewContainerRef;
  @ViewChild('suffix', { read: ViewContainerRef })
  suffixView: ViewContainerRef;

  @ViewChild('addonBeforeRef', { read: TemplateRef })
  addonBeforeRef: TemplateRef<any>;
  @ViewChild('addonAfterRef', { read: TemplateRef })
  addonAfterRef: TemplateRef<any>;
  @ViewChild('previewRef', { read: TemplateRef })
  previewRef: TemplateRef<any>;
  @ViewChild('suffixRef', { read: TemplateRef })
  suffixRef: TemplateRef<any>;

  get _addonBeforeRef() {
    return this.show.beforeAddon.value ? this.addonBeforeRef : null;
  }
  get _addonAfterRef() {
    return this.show.afterAddon.value ? this.addonAfterRef : null;
  }

  get _prefixRef() {
    return this.show.prefix.value ? this.previewRef : null;
  }

  get _suffixRef() {
    return this.show.suffix.value ? this.suffixRef : null;
  }

  @ViewChild('input', { read: ElementRef })
  input: ElementRef;

  constructor() {}

  ngOnInit() {
    merge(
      fromEvent(this.input.nativeElement, 'input'),
      fromEvent(this.input.nativeElement, 'keyup'),
      fromEvent(this.input.nativeElement, 'keydown'),
      fromEvent(this.input.nativeElement, 'propertychange')
    )
      .pipe(
        debounceTime(200),
        map((res: any) => res.target.value),
        tap(res => {
          this.value.value = res;
          this.change$.next(res);
        })
      )
      .subscribe();
  }

  ngAfterViewInit() {}
}

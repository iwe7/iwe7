import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
import { DesignElementsService } from '../design-elements.service';
import { UuidService } from 'iwe7/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IcssService } from 'iwe7/icss';
import { BehaviorSubject } from 'rxjs';

export class DesignElementsProps {
  selector?: string = 'design-elements-add';
  close?: boolean;
  list?: any[] = [
    {
      title: '块元素',
      code: 'block-view'
    },
    {
      title: '行内块元素',
      code: 'inline-block-view'
    }
  ];
}
@Component({
  selector: 'design-elements-add',
  templateUrl: './design-elements-add.component.html',
  styleUrls: ['./design-elements-add.component.scss']
})
export class DesignElementsAddComponent extends Iwe7DesignBase<
  DesignElementsProps
> implements OnInit {
  form: FormGroup;

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() header: EventEmitter<any> = new EventEmitter();

  style$: BehaviorSubject<any> = new BehaviorSubject({});

  _initcss: any;
  constructor(
    cd: ChangeDetectorRef,
    public elements: DesignElementsService,
    public fb: FormBuilder,
    public uuid: UuidService,
    public icss: IcssService,
    public ele: ElementRef
  ) {
    super(cd);
    this.elements.initFromLoacalStorage('__design__elements__add');
    this.elements.onChange().subscribe((res: Map<string, any>) => {
      this.elements.saveToLocalStorage('__design__elements__add');
    });
    this.form = this.fb.group({
      title: '',
      type: '',
      uuid: this.uuid.get()
    });
    this._initcss = this.icss.init(
      {
        design: this.style$
      },
      this.ele
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onPropsChange(res: any) {
    if ('style' in res) {
      this.style$.next(res.style);
    }
  }

  clickHeader(item, index) {
    this.header.next(item);
  }

  addElementToLibs() {
    let element = this.form.value;
    this.elements.set(element.uuid, element);
    this.close.next();
  }
}

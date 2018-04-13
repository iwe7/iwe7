import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
import { SchemaFormItem } from 'iwe7/core';
import { ChangeDetectorRef, Renderer2, ElementRef } from '@angular/core';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { IcssService } from 'iwe7/icss';
import { FormBuilder } from '@angular/forms';
export interface DesignElementsFormProps extends DesignElementsBaseProps {
  fields?: SchemaFormItem;
  url?: string;
  // 提交成功
  success: {
    // 提交成功提醒
    msg?: string;
    // 提交成功跳转
    url?: string;
  };
  // 提交失败
  fail: {
    // 提交失败提醒
    msg?: string;
    url?: string;
  };
}
export class DesignElementsForm<
  T extends DesignElementsFormProps
> extends DesignElementsBase<T> {
  constructor(
    cd: ChangeDetectorRef,
    ele: ElementRef,
    icss: IcssService,
    render: Renderer2,
    loader: LazyLoaderService,
    public fb: FormBuilder
  ) {
    super(cd, ele, icss, render, loader);
  }
}

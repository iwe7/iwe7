import {
  Injectable,
  InjectionToken,
  Type,
  Injector,
  ViewContainerRef,
  NgModuleRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { FieldInputComponent } from './field-input/field-input.component';

export interface FormFieldData {
  type: string;
  component: Type<any>;
}

export const FORM_FIELD_LIBRARY = new InjectionToken<
  Map<string, FormFieldData>
>('FormFieldLibrary', {
  providedIn: 'root',
  factory: () => {
    const map = new Map();
    map.set('input', {
      type: 'input',
      component: FieldInputComponent
    });
    return map;
  }
});
@Injectable()
export class FieldRegisterService {
  constructor(public injector: Injector, private moduleRef: NgModuleRef<any>) {}
  // 通过key索引，得到一个portal
  getComponent(key: string) {
    const libs = this.injector.get(FORM_FIELD_LIBRARY);
    const component = libs.get(key).component;
    return component;
  }
}

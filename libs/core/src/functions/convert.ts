import {
  coerceBooleanProperty,
  coerceNumberProperty
} from '@angular/cdk/coercion';

export function toBoolean(value: boolean | string): boolean {
  return coerceBooleanProperty(value);
}

export function toNumber<D>(value: number | string, fallback: D): number | D {
  return coerceNumberProperty(value, fallback);
}

export function InputBoolean(): any {
  return function InputBooleanPropDecorator(
    target: object,
    name: string
  ): void {
    const privatePropName = `$$__${name}`;
    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(
        `The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`
      );
    }
    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });
    Object.defineProperty(target, name, {
      get(): boolean {
        return this[privatePropName];
      },
      set(value: boolean | string): void {
        this[privatePropName] = toBoolean(value);
      }
    });
  };
}

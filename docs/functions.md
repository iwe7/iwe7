```ts
export function getClosureSafeProperty<T>(objWithPropertyToExtract: T, target: any): string {
  for (let key in objWithPropertyToExtract) {
    if (objWithPropertyToExtract[key] === target) {
      return key;
    }
  }
  throw Error('Could not find renamed property on target object.');
}
```

```ts
export function isPromise(obj: any): obj is Promise<any> {
  return !!obj && typeof obj.then === 'function';
}

export function isObservable(obj: any | Observable<any>): obj is Observable<any> {
  return !!obj && typeof obj.subscribe === 'function';
}
```



```ts
export function stringify(token: any): string {
  if (typeof token === 'string') {
    return token;
  }
  if (token instanceof Array) {
    return '[' + token.map(stringify).join(', ') + ']';
  }
  if (token == null) {
    return '' + token;
  }
  if (token.overriddenName) {
    return `${token.overriddenName}`;
  }
  if (token.name) {
    return `${token.name}`;
  }
  const res = token.toString();
  if (res == null) {
    return '' + res;
  }
  const newLineIndex = res.indexOf('\n');
  return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
```

```ts
export function looseIdentical(a: any, b: any): boolean {
  return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
```


```ts
export function scheduleMicroTask(fn: Function) {
  if (typeof Zone === 'undefined') {
    promise.then(() => { fn && fn.apply(null, null); });
  } else {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
  }
}
```

```ts
export function isDifferent(a: any, b: any): boolean {
  return !(a !== a && b !== b) && a !== b;
}
```

```ts
export function flatten(list: any[]): any[] {
  const result: any[] = [];
  let i = 0;
  while (i < list.length) {
    const item = list[i];
    if (Array.isArray(item)) {
      if (item.length > 0) {
        list = item.concat(list.slice(i + 1));
        i = 0;
      } else {
        i++;
      }
    } else {
      result.push(item);
      i++;
    }
  }
  return result;
}
```





```ts
export function makeDecorator(
  name: string, props?: (...args: any[]) => any, parentClass?: any,
  chainFn?: (fn: Function) => void, typeFn?: (type: Type<any>, ...args: any[]) => void): { new(...args: any[]): any; (...args: any[]): any; (...args: any[]): (cls: any) => any; } {
  const metaCtor = makeMetadataCtor(props);
  function DecoratorFactory(...args: any[]): (cls: any) => any {
    if (this instanceof DecoratorFactory) {
      metaCtor.call(this, ...args);
      return this;
    }
    const annotationInstance = new (<any>DecoratorFactory)(...args);
    const TypeDecorator: TypeDecorator = <TypeDecorator>function TypeDecorator(cls: Type<any>) {
      typeFn && typeFn(cls, ...args);
      const annotations = cls.hasOwnProperty(ANNOTATIONS) ?
        (cls as any)[ANNOTATIONS] :
        Object.defineProperty(cls, ANNOTATIONS, { value: [] })[ANNOTATIONS];
      annotations.push(annotationInstance);
      return cls;
    };
    if (chainFn) chainFn(TypeDecorator);
    return TypeDecorator;
  }
  if (parentClass) {
    DecoratorFactory.prototype = Object.create(parentClass.prototype);
  }
  DecoratorFactory.prototype.ngMetadataName = name;
  (<any>DecoratorFactory).annotationCls = DecoratorFactory;
  return DecoratorFactory as any;
}
```

```ts
function makeMetadataCtor(props?: (...args: any[]) => any): any {
  return function ctor(...args: any[]) {
    if (props) {
      const values = props(...args);
      for (const propName in values) {
        this[propName] = values[propName];
      }
    }
  };
}
```

```ts
export function makeParamDecorator(
  name: string, props?: (...args: any[]) => any, parentClass?: any): any {
  const metaCtor = makeMetadataCtor(props);
  function ParamDecoratorFactory(...args: any[]): any {
    if (this instanceof ParamDecoratorFactory) {
      metaCtor.apply(this, args);
      return this;
    }
    const annotationInstance = new (<any>ParamDecoratorFactory)(...args);
    (<any>ParamDecorator).annotation = annotationInstance;
    return ParamDecorator;
    function ParamDecorator(cls: any, unusedKey: any, index: number): any {
      const parameters = cls.hasOwnProperty(PARAMETERS) ?
        (cls as any)[PARAMETERS] :
        Object.defineProperty(cls, PARAMETERS, { value: [] })[PARAMETERS];
      while (parameters.length <= index) {
        parameters.push(null);
      }
      (parameters[index] = parameters[index] || []).push(annotationInstance);
      return cls;
    }
  }
  if (parentClass) {
    ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
  }
  ParamDecoratorFactory.prototype.ngMetadataName = name;
  (<any>ParamDecoratorFactory).annotationCls = ParamDecoratorFactory;
  return ParamDecoratorFactory;
}
```

```ts
export function makePropDecorator(
  name: string, props?: (...args: any[]) => any, parentClass?: any): any {
  const metaCtor = makeMetadataCtor(props);
  function PropDecoratorFactory(...args: any[]): any {
    if (this instanceof PropDecoratorFactory) {
      metaCtor.apply(this, args);
      return this;
    }
    const decoratorInstance = new (<any>PropDecoratorFactory)(...args);
    return function PropDecorator(target: any, name: string) {
      const constructor = target.constructor;
      const meta = constructor.hasOwnProperty(PROP_METADATA) ?
        (constructor as any)[PROP_METADATA] :
        Object.defineProperty(constructor, PROP_METADATA, { value: {} })[PROP_METADATA];
      meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
      meta[name].unshift(decoratorInstance);
    };
  }
  if (parentClass) {
    PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
  }
  PropDecoratorFactory.prototype.ngMetadataName = name;
  (<any>PropDecoratorFactory).annotationCls = PropDecoratorFactory;
  return PropDecoratorFactory;
}
```

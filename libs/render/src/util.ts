declare var WorkerGlobalScope: any /** TODO #9100 */;
declare var global: any /** TODO #9100 */;
const __window = typeof window !== 'undefined' && window;
const __self =
  typeof self !== 'undefined' &&
  typeof WorkerGlobalScope !== 'undefined' &&
  self instanceof WorkerGlobalScope &&
  self;
const __global = typeof global !== 'undefined' && global;
const _global: { [name: string]: any } = __window || __global || __self;

const promise: Promise<any> = Promise.resolve(0);
export { _global as global };

declare const Symbol: any;
let _symbolIterator: any = null;
export function getSymbolIterator(): string | symbol {
  if (!_symbolIterator) {
    const Symbol = _global['Symbol'];
    if (Symbol && Symbol.iterator) {
      _symbolIterator = Symbol.iterator;
    } else {
      // es6-shim specific logic
      const keys = Object.getOwnPropertyNames(Map.prototype);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (
          key !== 'entries' &&
          key !== 'size' &&
          (Map as any).prototype[key] === Map.prototype['entries']
        ) {
          _symbolIterator = key;
        }
      }
    }
  }
  return _symbolIterator;
}

export function iterateListLike(obj: any, fn: (p: any) => any) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn(obj[i]);
    }
  } else {
    const iterator = obj[getSymbolIterator()]();
    let item: any;
    while (!(item = iterator.next()).done) {
      fn(item.value);
    }
  }
}
export function isListLikeIterable(obj: any): boolean {
  if (!isJsObject(obj)) return false;
  return (
    Array.isArray(obj) || (!(obj instanceof Map) && getSymbolIterator() in obj)
  );
}
import { isEqual } from 'underscore';
export function looseIdentical(a: any, b: any): boolean {
  // a === b 引用对比
  let re = isEqual(a, b);
  return re;
}

export function isObj(object) {
  return (
    object &&
    typeof object == 'object' &&
    Object.prototype.toString.call(object).toLowerCase() == '[object object]'
  );
}

export function isArray(object) {
  return object && typeof object == 'object' && object.constructor == Array;
}

export function getLength(object) {
  let count = 0;
  for (let i in object) count++;
  return count;
}

export function isJsObject(o: any): boolean {
  return o !== null && (typeof o === 'function' || typeof o === 'object');
}

export function getPreviousIndex(
  item: any,
  addRemoveOffset: number,
  moveOffsets: number[] | null
): number {
  const previousIndex = item.previousIndex;
  if (previousIndex === null) return previousIndex;
  let moveOffset = 0;
  if (moveOffsets && previousIndex < moveOffsets.length) {
    moveOffset = moveOffsets[previousIndex];
  }
  return previousIndex + addRemoveOffset + moveOffset;
}

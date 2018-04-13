// tslint:disable-next-line:no-any
export function isNotNil(value: any): boolean {
  return typeof value !== 'undefined' && value !== null;
}

/** 校验对象是否相等 */
export function shallowEqual(objA: {}, objB: {}): boolean {
  if (objA === objB) return true;
  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB)
    return false;
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) return false;
    if (objA[key] !== objB[key]) return false;
  }
  return true;
}

export function isInteger(value: string | number): boolean {
  return (
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value
  );
}

export function isEmpty(element: HTMLElement): boolean {
  const nodes = element.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes.item(i);
    if (
      node.nodeType === 1 &&
      (node as HTMLElement).outerHTML.toString().trim().length !== 0
    ) {
      return false;
    } else if (
      node.nodeType === 3 &&
      node.textContent.toString().trim().length !== 0
    ) {
      return false;
    }
  }
  return true;
}

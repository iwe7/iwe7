const AT_CHARCODE = '@'.charCodeAt(0);
export function checkNoSyntheticProp(name: string, nameKind: string) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new Error(
      `Found the synthetic ${nameKind} ${name}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`);
  }
}


export function decoratePreventDefault(eventHandler: Function): Function {
  return (event: any) => {
    const allowDefaultBehavior = eventHandler(event);
    if (allowDefaultBehavior === false) {
      // TODO(tbosch): move preventDefault into event plugins...
      event.preventDefault();
      event.returnValue = false;
    }
  };
}


const COMPONENT_REGEX = /%COMP%/g;
export const COMPONENT_VARIABLE = '%COMP%';
export const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
export const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;

export function shimContentAttribute(componentShortId: string): string {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}

export function shimHostAttribute(componentShortId: string): string {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}

export function flattenStyles(
  compId: string, styles: Array<any | any[]>, target: string[]): string[] {
  for (let i = 0; i < styles.length; i++) {
    let style = styles[i];
    if (Array.isArray(style)) {
      flattenStyles(compId, style, target);
    } else {
      style = style.replace(COMPONENT_REGEX, compId);
      target.push(style);
    }
  }
  return target;
}

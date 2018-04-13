export function assertNumber(actual: any, msg: string) {
  if (typeof actual != 'number') {
    throwError(msg);
  }
}

export function assertEqual<T>(actual: T, expected: T, msg: string) {
  if (actual != expected) {
    throwError(msg);
  }
}

export function assertNotEqual<T>(actual: T, expected: T, msg: string) {
  if (actual == expected) {
    throwError(msg);
  }
}

export function assertSame<T>(actual: T, expected: T, msg: string) {
  if (actual !== expected) {
    throwError(msg);
  }
}

export function assertLessThan<T>(actual: T, expected: T, msg: string) {
  if (actual >= expected) {
    throwError(msg);
  }
}

export function assertNull<T>(actual: T, msg: string) {
  if (actual != null) {
    throwError(msg);
  }
}

export function assertNotNull<T>(actual: T, msg: string) {
  if (actual == null) {
    throwError(msg);
  }
}

export function assertComponentType(
  actual: any,
  msg: string = "Type passed in is not ComponentType, it does not have 'ngComponentDef' property."
) {
  if (!actual.ngComponentDef) {
    throwError(msg);
  }
}

function throwError(msg: string): never {
  debugger; // Left intentionally for better debugger experience.
  throw new Error(`ASSERTION ERROR: ${msg}`);
}




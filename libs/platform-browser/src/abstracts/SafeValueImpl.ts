import { SafeValue } from '../interfaces/safe';
export abstract class SafeValueImpl implements SafeValue {
  constructor(public changingThisBreaksApplicationSecurity: string) {}
  abstract getTypeName(): string;
  toString() {
    return (
      `SafeValue must use [property]=binding: ${
        this.changingThisBreaksApplicationSecurity
      }` + ` (see http://g.co/ng/security#xss)`
    );
  }
}

import { SafeValueImpl } from '../abstracts/SafeValueImpl';
import {
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl
} from '../interfaces/safe';

export class SafeHtmlImpl extends SafeValueImpl implements SafeHtml {
  getTypeName() {
    return 'HTML';
  }
}
export class SafeStyleImpl extends SafeValueImpl implements SafeStyle {
  getTypeName() {
    return 'Style';
  }
}
export class SafeScriptImpl extends SafeValueImpl implements SafeScript {
  getTypeName() {
    return 'Script';
  }
}
export class SafeUrlImpl extends SafeValueImpl implements SafeUrl {
  getTypeName() {
    return 'URL';
  }
}
export class SafeResourceUrlImpl extends SafeValueImpl implements SafeResourceUrl {
  getTypeName() {
    return 'ResourceURL';
  }
}

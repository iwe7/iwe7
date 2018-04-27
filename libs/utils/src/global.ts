declare var WorkerGlobalScope: any;
declare var global: any;
const __window = typeof window !== 'undefined' && window;
const __self =
  typeof self !== 'undefined' &&
  typeof WorkerGlobalScope !== 'undefined' &&
  self instanceof WorkerGlobalScope &&
  self;
const __global = typeof global !== 'undefined' && global;
const _global: { [name: string]: any } = __window || __global || __self;
export { _global as global };

export function parseURL(): { [k: string]: string } {
  const ret = {};
  const seg = global.location.search
    .replace(/^\?/, '')
    .split('&')
    .filter(function(v, i) {
      if (v !== '' && v.indexOf('=')) {
        return true;
      }
    });
  seg.forEach((element, index) => {
    const idx = element.indexOf('=');
    const key = element.substring(0, idx);
    const val = element.substring(idx + 1);
    ret[key] = val;
  });
  return ret;
}

export function serializeQueryParams(params: { [key: string]: any }): string {
  const strParams: string[] = Object.keys(params).map(name => {
    const value = params[name];
    return Array.isArray(value)
      ? value.map(v => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join('&')
      : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  });
  let str = strParams.length ? `?${strParams.join('&')}` : '';
  return str;
}

function encodeUriQuery(s: string): string {
  return encodeUriString(s).replace(/%3B/gi, ';');
}

function encodeUriString(s: string): string {
  return encodeURIComponent(s)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}

export function parseURL(): { [k: string]: string } {
  const ret = {};
  const seg = location.search
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

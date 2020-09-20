import { coerceNumberProperty } from '@angular/cdk/coercion';

export type Color = string | [number, number, number, number, '%'?] | [number, number, number, '%'?];

export type ColorError = 'invalid red' | 'invalid green' | 'invalid blue' | 'invalid alpha';
export function isColorError(p: any): p is ColorError {
  return ['invalid red', 'invalid green', 'invalid blue', 'invalid alpha'].indexOf(p) >= 0;
}

// tslint:disable: variable-name
export function parsePlainColor([
  _color,
  _hexcolor,
  _rgbabs, _rgbabs_red, _rgbabs_green, _rgbabs_blue,
  _rgbperc, _rgbperc_red, _rgbperc_green, _rgbperc_blue,
  _colorkeyword,
]: string[]): Color | ColorError {
// tslint:enable: variable-name

  if (_hexcolor) {
    return _hexcolor;
  }

  if (_rgbabs) {
    return parsePlainColor0(_rgbabs_red, _rgbabs_green, _rgbabs_blue);
  }

  if (_rgbperc) {
    return parsePlainColor0(_rgbperc_red, _rgbperc_green, _rgbperc_blue, '%');
  }

  if (_colorkeyword) {
    return _colorkeyword;
  }
}

// tslint:disable: variable-name
export function parseAlphaColor([
  _coloralpha,
  _transparent,
  _hexcoloralpha,
  _rgbaabs, _rgbaabs_red, _rgbaabs_green, _rgbaabs_blue, _rgbaabs_alpha,
  _rgbaperc, _rgbaperc_red, _rgbaperc_green, _rgbaperc_blue, _rgbaperc_alpha,
]: string[]): Color | ColorError {
// tslint:enable: variable-name

  if (_transparent) {
    return _transparent;
  }

  if (_hexcoloralpha) {
    return _hexcoloralpha;
  }

  if (_rgbaabs) {
    return parseAlphaColor0(_rgbaabs_red, _rgbaabs_green, _rgbaabs_blue, _rgbaabs_alpha);
  }

  if (_rgbaperc) {
    return parseAlphaColor0(_rgbaperc_red, _rgbaperc_green, _rgbaperc_blue, _rgbaperc_alpha, '%');
  }
}

// tslint:disable: variable-name
function parsePlainColor0(_red, _green, _blue): [number, number, number] | ColorError;
function parsePlainColor0(_red, _green, _blue, suffix: '%'): [number, number, number, '%'] | ColorError;
function parsePlainColor0(_red, _green, _blue, suffix?: '%'): [number, number, number, '%'?] | ColorError {
// tslint:enable: variable-name

  const red = coerceNumberProperty(_red, 'invalid red');
  const green = coerceNumberProperty(_green, 'invalid green');
  const blue = coerceNumberProperty(_blue, 'invalid blue');

  if (red === 'invalid red') {
    return red;
  }

  if (green === 'invalid green') {
    return green;
  }

  if (blue === 'invalid blue') {
    return blue;
  }

  return suffix
    ? [red, green, blue, suffix]
    : [red, green, blue];
}

// tslint:disable: variable-name
function parseAlphaColor0(_red, _green, _blue, _alpha): [number, number, number, number] | ColorError;
function parseAlphaColor0(_red, _green, _blue, _alpha, suffix: '%'): [number, number, number, number, '%'] | ColorError;
function parseAlphaColor0(_red, _green, _blue, _alpha, suffix?: '%'): [number, number, number, number, '%'?] | ColorError {
// tslint:enable: variable-name

  const plainColor = parsePlainColor0(_red, _green, _blue, suffix);
  if (typeof plainColor === 'string') {
    return plainColor;
  }

  const [red, green, blue] = plainColor;
  const alpha = coerceNumberProperty(_alpha, 'invalid alpha');

  if (alpha === 'invalid alpha') {
    return alpha;
  }

  return suffix
    ? [red, green, blue, alpha, suffix]
    : [red, green, blue, alpha];
}

// tslint:disable-next-line: variable-name
export function formatPlainColor(_color: Color): string | ColorError {
  if (typeof _color[3] === 'number') {
    return 'invalid alpha';
  }

  return formatAlphaColor(_color);
}

// tslint:disable-next-line: variable-name
export function formatAlphaColor(_color: Color): string | ColorError {
  if (!_color) {
    return '';
  }

  if (typeof _color === 'string') {
    return _color;
  }

  const perc = _color[_color.length - 1] === '%' ? '%' : '';

  // tslint:disable-next-line: variable-name
  const [_red, _green, _blue, _alpha] = _color;

  const red = coerceNumberProperty(_red, 'invalid red');
  const green = coerceNumberProperty(_green, 'invalid green');
  const blue = coerceNumberProperty(_blue, 'invalid blue');
  const alpha = (_alpha !== undefined && _alpha !== '%')
    ? coerceNumberProperty(_alpha, 'invalid alpha')
    : undefined;

  if (red === 'invalid red') {
    return red;
  }

  if (green === 'invalid green') {
    return green;
  }

  if (blue === 'invalid blue') {
    return blue;
  }

  if (alpha === 'invalid alpha') {
    return alpha;
  }

  const components = [
    ...[red, green, blue].map(coordinate => `${coordinate}${perc}`),
    ...[alpha].filter(a => a !== undefined).map(a => `${a}`),
  ].join(', ');

  return alpha
    ? `rgba(${components})`
    : `rgb(${components})`;
}

function buildRegExp(): [string, string, RegExp] {
  // non-capturing fragments
  const ws = '\\s*';
  const lparen = `${ws}\\(${ws}`;
  const rparen = `${ws}\\)`;
  const comma = `${ws},${ws}`;
  const perc = `${ws}%`;

  const real = '[0-9]*(?:\\.[0-9]+|[0-9]*)?';
  const integer = '[0-9]+';
  const hex = '[0-9a-f]';

  // tslint:disable: align
  // capturing fragments

  /* 1 */ const hexcolor = `(#${hex}{3}(?:${hex}{3})?)`;
  /* 4 */ const rgbabs = `(rgb)${lparen}(${integer})${comma}(${integer})${comma}(${integer})${rparen}`;
  /* 4 */ const rgbperc = `(rgb)${lparen}(${integer})${perc}${comma}(${integer})%${comma}(${integer})${perc}${rparen}`;
  /* 1 */ const colorkeyword = `([a-z]+)`;
  /* *1* */ const color = `(${hexcolor}|${rgbabs}|${rgbperc}|${colorkeyword})`;

  /* 1 */ const transparent = '(transparent)';
  /* 1 */ const hexcoloralpha = `(#${hex}{8})`;
  /* 5 */ const rgbaabs = `(rgba)${lparen}(${integer})${comma}(${integer})${comma}(${integer})${comma}(${real})${rparen}`;
  /* 5 */ const rgbaperc = `(rgba)${lparen}(${integer})${perc}${comma}(${integer})${perc}${comma}(${integer})${perc}${comma}(${real})${rparen}`;
  /* *1* */ const coloralpha = `(${transparent}|${hexcoloralpha}|${rgbaabs}|${rgbaperc})`;

  return [
    color,
    coloralpha,
    new RegExp(`^(?:${coloralpha}|${color})$`, 'i'),
  ];
}

export const [
  colorRegExpPattern,
  colorAlphaRegExpPattern,
  regExp,
] = buildRegExp();

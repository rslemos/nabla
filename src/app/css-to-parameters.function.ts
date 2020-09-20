import { coerceNumberProperty } from '@angular/cdk/coercion';

import { FormFields } from './css-linear-gradient-parameters.component';
import { CssParameters } from './css-linear-gradient-parameters.component';
import { CssStop } from './css-linear-gradient-parameters.component';

import { ColorError } from './color.function';
import { isColorError } from './color.function';
import { colorRegExpPattern } from './color.function';
import { colorAlphaRegExpPattern } from './color.function';
import { parsePlainColor } from './color.function';
import { parseAlphaColor } from './color.function';

// tslint:disable-next-line: variable-name
export function toCssParameters([_angle, _stops]: FormFields): CssParameters {
  const angle = coerceNumberProperty(_angle, 'invalid angle');

  const stops = _stops.split('\n')
    .filter(line => !!line && line.trim().length > 0)
    .map(line => line.toLowerCase())
    .map(toCssStop);

  if (angle === 'invalid angle') {
    throw new Error('Invalid angle');
  }

  const firstInvalidStop = stops.findIndex(stop => typeof stop === 'string');
  if (firstInvalidStop >= 0) {
    throw new Error(`Line ${firstInvalidStop + 1}: ${stops[firstInvalidStop]}`);
  }

  if ((stops[stops.length - 1] as CssStop).midpoint !== undefined) {
    throw new Error(`Line ${stops.length}: invalid midpoint`);
  }

  return {
    angle: (angle / 180 * Math.PI) as number,
    stops: stops as CssStop[],
  };
}

function toCssStop(line: string): CssStop | 'invalid stop' | 'invalid angle' | 'invalid offset' | ColorError {
  const result = regexp.exec(line);

  if (!result) {
    return 'invalid stop';
  }

  // tslint:disable: variable-name
  const [
    /* ignore group 0 (full match) */,
    _offset1perc,
    _offset1abs,
    _offset2perc,
    _offset2abs,
    _midpointperc,
    _midpointabs,
    _coloralpha,
    _transparent,
    _hexcoloralpha,
    _rgbaabs, _rgbaabs_red, _rgbaabs_green, _rgbaabs_blue, _rgbaabs_alpha,
    _rgbaperc, _rgbaperc_red, _rgbaperc_green, _rgbaperc_blue, _rgbaperc_alpha,
    _color,
    _hexcolor,
    _rgbabs, _rgbabs_red, _rgbabs_green, _rgbabs_blue,
    _rgbperc, _rgbperc_red, _rgbperc_green, _rgbperc_blue,
    _colorkeyword,
  ] = result;
  // tslint:enable: variable-name

  const offset1 = parseOffset([_offset1abs, _offset1perc]);
  if (offset1 === 'invalid offset') {
    return offset1;
  }

  const offset2 = parseOffset([_offset2abs, _offset2perc]);
  if (offset2 === 'invalid offset') {
    return offset2;
  }

  const offset: [[number, '%'?]?, [number, '%'?]?] = offset1 !== undefined && offset2 !== undefined
  ? [offset1, offset2]
  : offset1 !== undefined
    ? [offset1]
    : [];

  const midpoint = parseOffset([_midpointabs, _midpointperc]);
  if (midpoint === 'invalid offset') {
    return midpoint;
  }

  if (_coloralpha) {
    const color = parseAlphaColor([
      _coloralpha,
      _transparent,
      _hexcoloralpha,
      _rgbaabs, _rgbaabs_red, _rgbaabs_green, _rgbaabs_blue, _rgbaabs_alpha,
      _rgbaperc, _rgbaperc_red, _rgbaperc_green, _rgbaperc_blue, _rgbaperc_alpha,
    ]);

    if (isColorError(color)) {
      return color;
    }

    return { color, offset, midpoint } as CssStop;
  }

  if (_color) {
    const color = parsePlainColor([
      _color,
      _hexcolor,
      _rgbabs, _rgbabs_red, _rgbabs_green, _rgbabs_blue,
      _rgbperc, _rgbperc_red, _rgbperc_green, _rgbperc_blue,
      _colorkeyword,
    ]);

    if (isColorError(color)) {
      return color;
    }

    return { color, offset, midpoint } as CssStop;
  }

  return 'invalid stop';
}

// tslint:disable-next-line: variable-name
function parseOffset([_offsetabs, _offsetperc]): [number, '%'?] | 'invalid offset' {
  if (_offsetabs) {
    const offsetabs = coerceNumberProperty(_offsetabs, 'invalid offset');

    if (offsetabs === 'invalid offset') {
      return offsetabs;
    }

    return [offsetabs];
  }

  if (_offsetperc) {
    const offsetperc = coerceNumberProperty(_offsetperc, 'invalid offset');

    if (offsetperc === 'invalid offset') {
      return offsetperc;
    }

    return [offsetperc, '%'];
  }

  return undefined;
}

function buildRegExp(): RegExp {
  // non-capturing fragments
  const ws = '\\s*';
  const colon = `${ws}:${ws}`;
  const comma = `${ws},${ws}`;
  const perc = `${ws}%`;

  const real = '-?[0-9]*(?:\\.[0-9]*|[0-9]+)?';

  // tslint:disable: align

  // capturing fragments
  /* 1,  1 */ const offsetabs = `(${real})`;
  /* 1,  2 */ const offsetperc = `(${real})${perc}`;

  // non-capturing fragments
  const offset = `(?:${ws}(?:${offsetperc}|${offsetabs}))`;

  return new RegExp(`^${offset}${offset}?(?:${comma}${offset})?${colon}(?:${colorAlphaRegExpPattern}|${colorRegExpPattern})${ws}$`);
}

const regexp = buildRegExp();

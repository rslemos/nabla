import { coerceNumberProperty } from '@angular/cdk/coercion';

import { FormFields } from './svg-linear-gradient-parameters.component';
import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { SvgStop } from './svg-linear-gradient-parameters.component';

import { ColorError } from './color.function';
import { colorRegExpPattern } from './color.function';
import { colorAlphaRegExpPattern } from './color.function';
import { isColorError } from './color.function';
import { parsePlainColor } from './color.function';
import { parseAlphaColor } from './color.function';

// tslint:disable-next-line: variable-name
export function toSvgParameters([_x1, _y1, _x2, _y2, _gradientUnits, _stops]: FormFields): SvgParameters {
  const x1 = coerceNumberProperty(_x1, 'invalid coordinate');
  const y1 = coerceNumberProperty(_y1, 'invalid coordinate');
  const x2 = coerceNumberProperty(_x2, 'invalid coordinate');
  const y2 = coerceNumberProperty(_y2, 'invalid coordinate');

  const stops = _stops.split('\n')
    .filter(line => !!line && line.trim().length > 0)
    .map(line => line.toLowerCase())
    .map(toSvgStop);

  if ([x1, y1, x2, y2].indexOf('invalid coordinate') >= 0) {
    throw new Error('Invalid coordinates');
  }

  const firstInvalidStop = stops.findIndex(stop => typeof stop === 'string');
  if (firstInvalidStop >= 0) {
    throw new Error(`Line ${firstInvalidStop}: ${stops[firstInvalidStop]}`);
  }

  return {
    x1: x1 as number,
    y1: y1 as number,
    x2: x2 as number,
    y2: y2 as number,
    gradientUnits: _gradientUnits === 'objectBoundingBox' || _gradientUnits === 'userSpaceOnUse'
      ? _gradientUnits
      : null,

    stops: stops as SvgStop[],
  };
}

function toSvgStop(line: string): SvgStop | 'invalid stop' | 'invalid offset' | 'invalid opacity' | ColorError {
  const result = regexp.exec(line);

  if (!result) {
    return 'invalid stop';
  }

  // tslint:disable: variable-name
  const [
    /* ignore group 0 (full match) */,
    _offsetabs,
    _offsetperc,
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
    _opacityabs,
    _opacityperc,
  ] = result;
  // tslint:enable: variable-name

  const offset = (() => {
    if (_offsetabs) {
      const offsetabs = coerceNumberProperty(_offsetabs, 'invalid offset');
      return offsetabs;
    }

    if (_offsetperc) {
      const offsetperc = coerceNumberProperty(_offsetperc, 'invalid offset');
      if (offsetperc === 'invalid offset') {
        return offsetperc;
      }

      return offsetperc / 100;
    }
  })();

  if (offset === 'invalid offset') {
    return offset;
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

    return { offset, color } as SvgStop;
  }

  const opacity = (() => {
    if (_opacityabs) {
      return coerceNumberProperty(_opacityabs, 'invalid opacity');
    }

    if (_opacityperc) {
      const opacityperc = coerceNumberProperty(_opacityperc, 'invalid opacity');
      if (opacityperc === 'invalid opacity') {
        return opacityperc;
      }

      return opacityperc / 100;
    }
  })();

  if (opacity === 'invalid opacity') {
    return opacity;
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

    return opacity !== undefined
      ? { offset, color, opacity } as SvgStop
      : { offset, color } as SvgStop;
  }

  return opacity !== undefined
    ? { offset, opacity } as SvgStop
    : { offset } as SvgStop;
}

function buildRegExp(): RegExp {
  // non-capturing fragments
  const ws = '\\s*';
  const comma = `${ws},${ws}`;
  const colon = `${ws}:${ws}`;
  const perc = `${ws}%`;

  const real = '[0-9]*(?:\\.[0-9]+|[0-9]*)?';

  // tslint:disable: align

  // capturing fragments
  /* 1 */ const offsetabs = `(-?${real})`;
  /* 1 */ const offsetperc = `(-?${real})${perc}`;

  /* 1 */ const opacityabs = `(${real})`;
  /* 1 */ const opacityperc = `(${real})${perc}`;

  // non-capturing fragments
  const offset = `(?:${offsetabs}|${offsetperc})`;
  const opacity = `(?:${opacityabs}|${opacityperc})`;

  return new RegExp(`^${ws}${offset}${colon}(?:${colorAlphaRegExpPattern}|${colorRegExpPattern}?(?:${comma}${opacity})?)${ws}$`);
}

const regexp = buildRegExp();

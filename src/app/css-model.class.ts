import { coerceNumberProperty } from '@angular/cdk/coercion';

import { isColorError } from './color.function';
import { ColorError } from './color.function';
import { parseAlphaColor } from './color.function';
import { parsePlainColor } from './color.function';

import { CssParameters } from './css-linear-gradient-parameters.component';
import { CssStop } from './css-linear-gradient-parameters.component';

export class CssModel {
  private readonly header: string;
  // tslint:disable-next-line: variable-name
  private _linearGradient: string;
  private readonly trailer: string;

  constructor(code?: string) {
    if (code?.trim()) {
      const split = embeddedCssRegExp.exec(code);
      split.splice(3, 106);
      split.splice(0, 1);

      [this.header, this._linearGradient, this.trailer] = split;
    } else {
      [this.header, this._linearGradient, this.trailer] = ['', '', ''];
    }
  }

  public get linearGradient(): string {
    return this._linearGradient;
  }

  // tslint:disable: variable-name
  get parameters(): CssParameters {
    const [
      /* ignore group 0 (full match) */,
      _top,
      _bottom,
      _left2,
      _right2,
      _left,
      _right,
      _top2,
      _bottom2,
      _angle,
      _deg,
      _grad,
      _rad,
      _turn,
      _linearcolorstoplist,
    ] = cssRegExp.exec(this._linearGradient);

    const angle = parseAngle([
      _top, _bottom, _left2, _right2,
      _left, _right, _top2, _bottom2,
      _angle, _deg, _grad, _rad, _turn,
    ]);

    if (angle === 'invalid angle') {
      throw new Error(angle);
    }

    const stops = [] as (CssStop | ColorError | 'invalid offset')[];

    let _remaining = _linearcolorstoplist;
    while (_remaining.length > 0) {
      const split = stopListRegExp.exec(_remaining);
      if (split[31].length < _remaining.length) {
        _remaining = split[31];
      } else {
        split.splice(0, 61);
        console.log('last one', split);
        _remaining = '';
      }
      const [
        /* ignore group 0 (either full match or nothing if last match) */,
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
        _stop1_perc, _stop1_abs, _stop2_perc, _stop2_abs, _stop3_perc, _stop3_abs,
      ] = split;

      stops.push(parseStop([
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
        _stop1_perc, _stop1_abs, _stop2_perc, _stop2_abs, _stop3_perc, _stop3_abs,
      ]));
    }

    const firstInvalidStop = stops.findIndex(stop => typeof stop === 'string');

    if (firstInvalidStop >= 0) {
      throw new Error(`Stop ${firstInvalidStop}: ${stops[firstInvalidStop]}`);
    }

    return { angle, stops } as CssParameters;
  }
  // tslint:enable: variable-name

  public toString(): string {
    return [this.header, this._linearGradient, this.trailer].join('');
  }
}

// tslint:disable: variable-name
function parseAngle([
  _top,
  _bottom,
  _left2,
  _right2,
  _left,
  _right,
  _top2,
  _bottom2,
  _num,
  _deg,
  _grad,
  _rad,
  _turn,
]: string[]): number | 'invalid angle' {
  const top = _top === 'top' || _top2 === 'top';
  const bottom = _bottom === 'bottom' || _bottom2 === 'bottom';
  const left = _left === 'left' || _left2 === 'left';
  const right = _right === 'right' || _right2 === 'right';

  if (top && right) {
    return 1 * Math.PI / 4;
  }

  if (bottom && right) {
    return 3 * Math.PI / 4;
  }

  if (bottom && left) {
    return 5 * Math.PI / 4;
  }

  if (top && left) {
    return 7 * Math.PI / 4;
  }

  if (top) {
    return 0 * Math.PI / 4;
  }

  if (right) {
    return 2 * Math.PI / 4;
  }

  if (bottom) {
    return 4 * Math.PI / 4;
  }

  if (left) {
    return 6 * Math.PI / 4;
  }

  if (_num !== undefined) {
    const num = coerceNumberProperty(_num, 'invalid angle');
    if (num === 'invalid angle') {
      return num;
    }

    if (_deg === 'deg') {
      return num * Math.PI / 180;
    }

    if (_grad === 'grad') {
      return num * Math.PI / 200;
    }

    if (_rad === 'rad') {
      return num;
    }

    if (_turn === 'turn') {
      return num * 2 * Math.PI;
    }
  }

  return Math.PI;
}

function parseStop([
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
  _stop1_perc, _stop1_abs, _stop2_perc, _stop2_abs, _stop3_perc, _stop3_abs,
]: string[]): CssStop | ColorError | 'invalid offset' {
  const offsetAndMidpoint = parseOffsetAndMidpoint([
    _stop1_perc, _stop1_abs, _stop2_perc, _stop2_abs, _stop3_perc, _stop3_abs,
  ]);

  if (offsetAndMidpoint === 'invalid offset') {
    return offsetAndMidpoint;
  }

  const [offset, midpoint] = offsetAndMidpoint;

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
}

function parseOffsetAndMidpoint([
  _stop1_perc, _stop1_abs, _stop2_perc, _stop2_abs, _stop3_perc, _stop3_abs,
]: string[]): [[[number, '%'?]?, [number, '%'?]?], [number, '%'?]?] | 'invalid offset' {
  const offset = [] as [[number, '%'?]?, [number, '%'?]?];

  if (_stop1_perc) {
    const _offset = coerceNumberProperty(_stop1_perc, 'invalid offset');
    if (_offset === 'invalid offset') {
      return _offset;
    }

    offset.push([_offset, '%']);
  } else if (_stop1_abs) {
    const _offset = coerceNumberProperty(_stop1_abs, 'invalid offset');
    if (_offset === 'invalid offset') {
      return _offset;
    }

    offset.push([_offset]);
  }

  if (_stop2_perc) {
    const _offset = coerceNumberProperty(_stop2_perc, 'invalid offset');
    if (_offset === 'invalid offset') {
      return _offset;
    }

    offset.push([_offset, '%']);
  } else if (_stop2_abs) {
    const _offset = coerceNumberProperty(_stop2_abs, 'invalid offset');
    if (_offset === 'invalid offset') {
      return _offset;
    }

    offset.push([_offset]);
  }

  if (_stop3_perc) {
    const _midpoint = coerceNumberProperty(_stop3_perc, 'invalid offset');
    if (_midpoint === 'invalid offset') {
      return _midpoint;
    }

    return [offset, [_midpoint, '%']];
  } else if (_stop3_abs) {
    const _midpoint = coerceNumberProperty(_stop3_abs, 'invalid offset');
    if (_midpoint === 'invalid offset') {
      return _midpoint;
    }

    return [offset, [_midpoint]];
  }

  return [offset];
}

function buildRegExp(): [RegExp, RegExp, RegExp] {
  // non-capturing fragments
  const ws = '\\s*';
  const lparen = `${ws}\\(${ws}`;
  const rparen = `${ws}\\)`;
  const comma = `${ws},${ws}`;
  const perc = `${ws}%`;
  const px = `px`;

  const real = '(?:[0-9]+(?:\\.[0-9]*)?|[0-9]*\\.[0-9]+)';
  const integer = '[0-9]+';
  const hex = '[0-9a-f]';

  // tslint:disable: align
  // capturing fragments

  /* 1 */ const stopabs = `${ws}([-+]?${real})(?:${px})?`;
  /* 1 */ const stopperc = `${ws}([-+]?${real})${perc}`;

  /* 8 */ const sidecorner = `to${ws}(?:(?:(top)|(bottom))(?:${ws}(?:(left)|(right)))?|(?:(left)|(right))(?:${ws}(?:(top)|(bottom)))?)`;
  /* 5 */ const angle = `([-+]?${real})(?:(deg)|(grad)|(rad)|(turn))`;

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

  // non-capturing fragments
  const stop = `(?:(?:${stopperc})|(?:${stopabs}))`;
  const linearcolorstop = `(?:${coloralpha}|${color})(?:${stop}${stop}?)?(?:${comma}${stop})?`;
  const linearcolorstoplast = `(?:${coloralpha}|${color})(?:${stop}${stop}?)?`;
  /* *1* */ const linearcolorstoplist = `(?:${linearcolorstop}${comma})?((?:${linearcolorstop}${comma})*${linearcolorstoplast})`;

  const lineargradient = `linear-gradient${lparen}(?:(?:${sidecorner}|${angle})${comma})?(${linearcolorstoplist})${rparen}`;

  return [
    new RegExp(`^(.*?)(${lineargradient})(.*?)$`),
    new RegExp(`^${lineargradient}$`),
    new RegExp(`^${linearcolorstoplist}$`),
  ];
}

export const [embeddedCssRegExp, cssRegExp, stopListRegExp] = buildRegExp();
console.log(stopListRegExp);


import { coerceNumberProperty } from '@angular/cdk/coercion';

import { isColorError } from './color.function';
import { formatAlphaColor } from './color.function';
import { parseAlphaColor } from './color.function';
import { parsePlainColor } from './color.function';
import { regExp } from './color.function';

import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { SvgStop } from './svg-linear-gradient-parameters.component';

const parser = new DOMParser();
const serializer = new XMLSerializer();

export class SvgModel {
  private readonly doc: XMLDocument;

  constructor(code?: string) {
    this.doc = code?.trim()
      ? parser.parseFromString(code, 'image/svg+xml')
      : document.implementation.createDocument('http://www.w3.org/2000/svg', 'linearGradient', null);
  }

  get linearGradient(): Element {
    const linearGradients = Array.prototype.slice.call(this.doc.getElementsByTagName('linearGradient')) as Element[];
    if (linearGradients.length === 0) {
      throw new Error('no linearGradient element found');
    }

    if (linearGradients.length > 1) {
      throw new Error('more than one linearGradient element found');
    }

    return linearGradients[0];
  }

  // tslint:disable: variable-name
  get parameters(): SvgParameters {
    function parseValue(_value: string): number | 'invalid coordinate' {
      const value = coerceNumberProperty(_value.replace(/%$/, ''), 'invalid coordinate');
      if (value === 'invalid coordinate') {
        return value;
      }

      return /%$/.test(_value)
        ? value / 100
        : value;
    }

    const linearGradient = this.linearGradient;

    const x1 = parseValue(linearGradient.getAttribute('x1') || '0');
    const y1 = parseValue(linearGradient.getAttribute('y1') || '0');
    const x2 = parseValue(linearGradient.getAttribute('x2') || '1');
    const y2 = parseValue(linearGradient.getAttribute('y2') || '0');

    const gradientUnits = linearGradient.getAttribute('gradientUnits') || 'objectBoundingBox';

    if (gradientUnits && ['objectBoundingBox', 'userSpaceOnUse'].indexOf(gradientUnits) < 0) {
      throw new Error('gradientUnits has invalid value');
    }

    const stops = (Array.prototype.slice.call(linearGradient.children) as Element[])
      .map(_stop => {
        if (_stop.tagName !== 'stop') {
          throw new Error('only <stop>');
        }

        const _offset = _stop.getAttribute('offset') || '0';
        const _stopColor = _stop.getAttribute('stop-color') || 'black';
        const _stopOpacity = _stop.getAttribute('stop-opacity') || '1';

        return { _offset, _stopColor, _stopOpacity };
      })
      .map(_stop => {
        const offset = parseValue(_stop._offset);
        if (offset === 'invalid coordinate') {
          return 'invalid coordinate';
        }

        const opacity = _stop._stopOpacity !== undefined
          ? parseFloat(_stop._stopOpacity)
          : undefined;

        const [
          // tslint:disable: variable-name
          /* ignore group 0 (full match) */,
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
                  // tslint:enable: variable-name
        ] = regExp.exec(_stop._stopColor);

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

          return opacity !== undefined
            ? { offset, color, opacity } as SvgStop
            : { offset, color } as SvgStop;
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
      });

    const firstInvalidStop = stops.findIndex(stop => typeof stop === 'string');
    if (firstInvalidStop >= 0) {
      throw new Error(`Line ${firstInvalidStop}: ${stops[firstInvalidStop]}`);
    }

    return { x1, y1, x2, y2, gradientUnits, stops } as SvgParameters;
  }
  // tslint:enable: variable-name

  set parameters(parameters: SvgParameters) {
    if (parameters) {
      const linearGradient = this.linearGradient;

      const x1 = parameters.x1 !== null ? parameters.x1.toString() : '';
      const y1 = parameters.y1 !== null ? parameters.y1.toString() : '';
      const x2 = parameters.x2 !== null ? parameters.x2.toString() : '';
      const y2 = parameters.y2 !== null ? parameters.y2.toString() : '';

      const stops = parameters.stops
        .map(stop => {
          const offset = stop.offset !== undefined ? ` offset="${stop.offset.toString()}"` : '';
          const color = stop.color !== undefined ? ` stop-color="${formatAlphaColor(stop.color)}"` : '';
          const opacity = stop.opacity !== undefined ? ` stop-opacity="${stop.opacity.toString()}"` : '';

          return `<stop ${offset} ${color} ${opacity}/>`;
        })
        .join('\n');

      linearGradient.setAttribute('x1', x1);
      linearGradient.setAttribute('y1', y1);
      linearGradient.setAttribute('x2', x2);
      linearGradient.setAttribute('y2', y2);
      linearGradient.setAttribute('gradientUnits', parameters.gradientUnits);

      linearGradient.innerHTML = stops;
    }
  }

  public toString(): string {
    return serializer.serializeToString(this.doc).replace(/></g, '>\n<');
  }
}

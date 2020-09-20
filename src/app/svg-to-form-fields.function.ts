import { coerceNumberProperty } from '@angular/cdk/coercion';

import { FormFields } from './svg-linear-gradient-parameters.component';
import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { SvgStop } from './svg-linear-gradient-parameters.component';

import { ColorError } from './color.function';
import { isColorError } from './color.function';
import { formatAlphaColor } from './color.function';
import { formatPlainColor } from './color.function';

export function toSvgFormFields(parameters: SvgParameters, defaults: FormFields): FormFields {
  if (!parameters) {
    return defaults;
  }

  const x1 = parameters.x1 && coerceNumberProperty(parameters.x1, 'invalid coordinate');
  const y1 = parameters.y1 && coerceNumberProperty(parameters.y1, 'invalid coordinate');
  const x2 = parameters.x2 && coerceNumberProperty(parameters.x2, 'invalid coordinate');
  const y2 = parameters.y2 && coerceNumberProperty(parameters.y2, 'invalid coordinate');

  const stops = (parameters.stops || []).map(fromSvgStop);

  if ([x1, y1, x2, y2].indexOf('invalid coordinate') >= 0) {
    throw new Error('Invalid coordinates');
  }

  if (['objectBoundingBox', 'userSpaceOnUse'].indexOf(parameters.gradientUnits) > 0) {
    throw new Error('Invalid gradientUnits');
  }

  const firstInvalidStop = stops.findIndex(stop => isSvgStopError(stop));
  if (firstInvalidStop >= 0) {
    throw new Error(`Invalid stop: ${stops[firstInvalidStop]} (${firstInvalidStop})`);
  }

  return [
    x1 !== undefined ? x1.toString() : '',
    y1 !== undefined ? y1.toString() : '',
    x2 !== undefined ? x2.toString() : '',
    y2 !== undefined ? y2.toString() : '',
    parameters.gradientUnits,
    stops.join('\n'),
  ];
}

type SvgStopError = 'invalid offset' | 'invalid opacity' | ColorError;
function isSvgStopError(p: any): p is SvgStopError {
  return isColorError(p) || ['invalid offset', 'invalid opacity'].indexOf(p) >= 0;
}

function fromSvgStop(stop: SvgStop): string | SvgStopError {
  const offset = coerceNumberProperty(stop.offset, 'invalid offset');
  if (offset === 'invalid offset') {
    return offset;
  }

  const opacity = stop.opacity !== undefined
    ? coerceNumberProperty(stop.opacity, 'invalid opacity')
    : undefined;

  if (opacity === 'invalid opacity') {
    return opacity;
  }

  const color = opacity !== undefined
    ? formatPlainColor(stop.color)
    : formatAlphaColor(stop.color);

  if (isColorError(color)) {
    return color;
  }

  const fmtOffset = (offset * 100).toFixed(14).replace(/\.?0+$/, '');
  return opacity !== undefined
    ? `${fmtOffset}%: ${color}, ${opacity}`
    : `${fmtOffset}%: ${color}`;
}

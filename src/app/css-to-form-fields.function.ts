import { coerceNumberProperty } from '@angular/cdk/coercion';

import { FormFields } from './css-linear-gradient-parameters.component';
import { CssParameters } from './css-linear-gradient-parameters.component';
import { CssStop } from './css-linear-gradient-parameters.component';

import { ColorError } from './color.function';
import { isColorError } from './color.function';
import { formatAlphaColor } from './color.function';

export function toCssFormFields(parameters: CssParameters, defaults: FormFields): FormFields {
  if (!parameters) {
    return defaults;
  }

  const angle = parameters.angle !== undefined
    ? coerceNumberProperty(parameters.angle, 'invalid angle')
    : undefined;

  const stops = (parameters.stops || []).map(fromCssStop);

  if (angle === 'invalid angle') {
    throw new Error('Invalid angle');
  }

  const firstInvalidStop = stops.findIndex(stop => isCssStopError(stop));
  if (firstInvalidStop >= 0) {
    throw new Error(`Invalid stop: ${stops[firstInvalidStop]} (${firstInvalidStop})`);
  }

  return [
    angle !== undefined ? formatNumber(angle * 180 / Math.PI) : '',
    stops.join('\n'),
  ];
}

type CssStopError = 'invalid offset' | ColorError;
function isCssStopError(p: any): p is CssStopError {
  return isColorError(p) || ['invalid offset'].indexOf(p) >= 0;
}

function fromCssStop(stop: CssStop): string | CssStopError {
  const color = formatAlphaColor(stop.color);
  if (isColorError(color)) {
    return color;
  }

  const midpoint = stop.midpoint !== undefined ? `,${formatOffset(stop.midpoint)}` : '';

  if (stop.offset.length === 0) {
    return `${midpoint}: ${color}`;
  } else if (stop.offset.length === 1) {
    return `${formatOffset(stop.offset[0])}${midpoint}: ${color}`;
  } else if (stop.offset.length === 2) {
    return `${formatOffset(stop.offset[0])} ${formatOffset(stop.offset[1])}${midpoint}: ${color}`;
  }
}

function formatNumber(n: number): string {
  return n.toFixed(14).replace(/\.?0+$/, '');
}

function formatOffset([n, perc]: [number, '%'?]): string {
  return perc
    ? `${formatNumber(n)}${perc}`
    : formatNumber(n);
}

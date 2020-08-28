import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { CssParameters } from './css-linear-gradient-parameters.component';
import { CssStop } from './css-linear-gradient-parameters.component';

export function fromSvgToCss(width: number, height: number, { x1, y1, x2, y2, gradientUnits, stops: svgStops }: SvgParameters): CssParameters {
  if (gradientUnits !== 'objectBoundingBox') {
    throw new Error(`cannot handle ${gradientUnits} yet`);
  }

  const dx = x2 - x1;
  const dy = y2 - y1;

  const angleInRads = Math.atan2(dx * height, -dy * width);
  const angle = angleInRads;

  const dx2 = dx * dx;
  const dy2 = dy * dy;
  const x2y1 = x2 * y1;
  const x1y2 = x1 * y2;

  const dy0 = 0;
  const dx0 = 0;
  const dy1 = dy;
  const dx1 = dx;

  const alpha1 = (dy0 - dx0 + x2y1 - x1y2) / (dx2 + dy2);
  const alpha2 = (dy1 - dx1 + x2y1 - x1y2) / (dx2 + dy2);

  const p1x = dy * alpha1;
  const p1y = -dx * alpha1;

  const p2x = dy * alpha2;
  const p2y = -dx * alpha2;

  const d1 = Math.sqrt(dx2 + dy2);
  const d2 = Math.sqrt((p1x + x1 - 0) * (p1x + x1 - 0) + (p1y + y1 - 0) * (p1y + y1 - 0));
  const d3 = Math.sqrt((p2x + x2 - 1) * (p2x + x2 - 1) + (p2y + y2 - 1) * (p2y + y2 - 1));
  const d4 = d1 - d2;
  const d100 = d4 + d3;

  const r0 = -d2 / d100;
  const r1 = d4 / d100;

  const cssStops = svgStops.map(svgStop => {
    const offset = (r1 - r0) * svgStop.offset + r0;

    if (typeof svgStop.color === 'string') {
      if (svgStop.color === 'transparent' && svgStop.opacity === 0) {
        return { offset: [[offset*100, '%']], color: svgStop.color } as CssStop;
      }

      if (svgStop.opacity !== undefined && svgStop.opacity !== 1) {
        throw new Error('CSS cannot have both color keyword and opacity');
      }

      return { offset: [[offset*100, '%']], color: svgStop.color } as CssStop;
    }

    const color = svgStop.opacity !== null && svgStop.color[3] === '%'
      ? [...svgStop.color.slice(0, 3), svgStop.opacity, '%'] as [number, number, number, number, '%']
      : svgStop.color;

    return { offset: [[offset*100, '%']], color } as CssStop;
  });

  const cssParameters = { angle, stops: cssStops };
  return cssParameters;
}

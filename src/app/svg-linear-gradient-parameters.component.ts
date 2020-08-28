import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Color } from './color.function';

@Component({
  selector: 'app-svg-linear-gradient-parameters',
  templateUrl: './svg-linear-gradient-parameters.component.html',
  styleUrls: ['./svg-linear-gradient-parameters.component.scss'],
})
export class SvgLinearGradientParametersComponent {
  // tslint:disable-next-line: variable-name
  _x1 = '';
  // tslint:disable-next-line: variable-name
  _y1 = '';
  // tslint:disable-next-line: variable-name
  _x2 = '';
  // tslint:disable-next-line: variable-name
  _y2 = '';
  // tslint:disable-next-line: variable-name
  _gradientUnits = 'objectBoundingBox';
  // tslint:disable-next-line: variable-name
  _stops = '';

  @Input() parameters: SvgParameters;
  @Output() parametersChange = new EventEmitter<SvgParameters>();

  error = '';

}

export interface SvgParameters {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  gradientUnits: 'objectBoundingBox' | 'userSpaceOnUse';
  stops: SvgStop[];
}

export interface SvgStop {
  offset: number;
  color?: Color;
  opacity?: number;
}

export type FormFields = [
  SvgLinearGradientParametersComponent['_x1'],
  SvgLinearGradientParametersComponent['_y1'],
  SvgLinearGradientParametersComponent['_x2'],
  SvgLinearGradientParametersComponent['_y2'],
  SvgLinearGradientParametersComponent['_gradientUnits'],
  SvgLinearGradientParametersComponent['_stops'],
];

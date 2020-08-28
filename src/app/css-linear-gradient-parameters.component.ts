import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Color } from './color.function';

@Component({
  selector: 'app-css-linear-gradient-parameters',
  templateUrl: './css-linear-gradient-parameters.component.html',
  styleUrls: ['./css-linear-gradient-parameters.component.scss'],
})
export class CssLinearGradientParametersComponent {
  // tslint:disable-next-line: variable-name
  _angle = '';
  // tslint:disable-next-line: variable-name
  _stops = '';

  @Input() parameters: CssParameters;
  @Output() parametersChange = new EventEmitter<CssParameters>();

  error = '';

}

export interface CssParameters {
  angle: number;
  stops: CssStop[];
}

export interface CssStop {
  color: Color;
  offset: [[number, '%'?]?, [number, '%'?]?];
  midpoint?: [number, '%'?];
}

export type FormFields = [
  CssLinearGradientParametersComponent['_angle'],
  CssLinearGradientParametersComponent['_stops'],
];

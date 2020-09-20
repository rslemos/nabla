import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

import { Color } from './color.function';

import { toSvgParameters } from './svg-to-parameters.function';
import { toSvgFormFields } from './svg-to-form-fields.function';

@Component({
  selector: 'app-svg-linear-gradient-parameters',
  templateUrl: './svg-linear-gradient-parameters.component.html',
  styleUrls: ['./svg-linear-gradient-parameters.component.scss'],
})
export class SvgLinearGradientParametersComponent implements OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.parameters) {
      try {
        [
          this._x1,
          this._y1,
          this._x2,
          this._y2,
          this._gradientUnits,
          this._stops,
        ] = toSvgFormFields(this.parameters, [ '', '', '', '', 'objectBoundingBox', '' ]);
      } catch (error) {
      }
    }
  }

  @HostListener('change')
  onChange(event: Event): void {
    try {
      this.parameters = toSvgParameters([
        this._x1,
        this._y1,
        this._x2,
        this._y2,
        this._gradientUnits,
        this._stops,
      ]);
      this.error = '';
      this.parametersChange.emit(this.parameters);
    } catch (error) {
      this.error = (error as Error).message;
    }
  }

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

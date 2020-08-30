import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';

import { Color } from './color.function';

import { toCssParameters } from './css-to-parameters.function';

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

  @HostListener('change')
  onChange(event: Event): void {
    try {
      this.parameters = toCssParameters([
        this._angle,
        this._stops,
      ]);
      this.error = '';
      this.parametersChange.emit(this.parameters);
    } catch (error) {
      this.error = (error as Error).message;
    }
  }
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

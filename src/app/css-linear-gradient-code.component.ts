import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { CssParameters } from './css-linear-gradient-parameters.component';
import { CssModel } from './css-model.class';

@Component({
  selector: 'app-css-linear-gradient-code',
  templateUrl: './css-linear-gradient-code.component.html',
  styleUrls: ['./css-linear-gradient-code.component.scss'],
})
export class CssLinearGradientCodeComponent {
  // tslint:disable-next-line: variable-name
  _code = '';
  // tslint:disable-next-line: variable-name
  _model: CssModel;

  @Input() set linearGradient(ignore: string) {}
  @Output() linearGradientChange = new EventEmitter<string>();

  @Input() parameters: CssParameters;
  @Output() parametersChange = new EventEmitter<CssParameters>();

  error = { class: 'empty', message: '' };
}

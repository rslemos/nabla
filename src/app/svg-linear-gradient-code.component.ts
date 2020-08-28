import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { SvgModel } from './svg-model.class';

@Component({
  selector: 'app-svg-linear-gradient-code',
  templateUrl: './svg-linear-gradient-code.component.html',
  styleUrls: ['./svg-linear-gradient-code.component.scss'],
})
export class SvgLinearGradientCodeComponent {
  // tslint:disable-next-line: variable-name
  _code = '';
  // tslint:disable-next-line: variable-name
  _model: SvgModel;

  @Input() set linearGradient(ignore: Element) {}
  @Output() linearGradientChange = new EventEmitter<Element>();

  @Input() parameters: SvgParameters;
  @Output() parametersChange = new EventEmitter<SvgParameters>();

  error = { class: 'empty', message: '' };

}

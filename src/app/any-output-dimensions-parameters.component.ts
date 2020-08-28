import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';

import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-any-output-dimensions-parameters',
  templateUrl: './any-output-dimensions-parameters.component.html',
  styleUrls: ['./any-output-dimensions-parameters.component.scss'],
})
export class AnyOutputDimensionsParametersComponent {
  // tslint:disable-next-line: variable-name
  _width: string;
  // tslint:disable-next-line: variable-name
  _height: string;

  @Input() set width(w: number) {
    this._width = coerceNumberProperty(w).toString();
  }

  @Input() set height(h: number) {
    this._height = coerceNumberProperty(h).toString();
  }

  @Output() widthChange = new EventEmitter<number>();
  @Output() heightChange = new EventEmitter<number>();

  error = '';

  @HostListener('change')
  private onChange(event: Event): void {
    const w = coerceNumberProperty(this._width, 0);
    const h = coerceNumberProperty(this._height, 0);

    if (w > 0 && h > 0 && Math.floor(w) === w && Math.floor(h) === h) {
      this.widthChange.emit(w);
      this.heightChange.emit(h);
      this.error = '';
    } else {
      this.error = 'Either width or height is not a positive integer';
    }
  }
}

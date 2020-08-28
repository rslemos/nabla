import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

import { coerceNumberProperty } from '@angular/cdk/coercion';
import { asapScheduler } from 'rxjs';

import { MuuriGridDirective } from 'muuri-angular';

@Component({
  selector: 'app-css-linear-gradient-output',
  templateUrl: './css-linear-gradient-output.component.html',
  styleUrls: ['./css-linear-gradient-output.component.scss'],
})
export class CssLinearGradientOutputComponent implements OnChanges, AfterViewInit {
  // tslint:disable-next-line: variable-name
  _width: number;
  // tslint:disable-next-line: variable-name
  _height: number;

  @Input() set width(w: number) {
    this._width = coerceNumberProperty(w);
  }

  @Input() set height(h: number) {
    this._height = coerceNumberProperty(h);
  }

  @Input() css = '';

  @ViewChild('style')
  private viewStyle: ElementRef<HTMLElement>;

  constructor(private tileGrid: MuuriGridDirective) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.css && !changes.css.firstChange) {
      this.ngAfterViewInit();
    }

    if (changes.width || changes.height) {
      asapScheduler.schedule(() => this.tileGrid.refresh());
    }
  }

  ngAfterViewInit(): void {
    this.viewStyle.nativeElement.innerHTML = `<style>.gradient { background: ${this.css}; }</style>`;
  }
}

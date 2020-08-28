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
  selector: 'app-svg-linear-gradient-output',
  templateUrl: './svg-linear-gradient-output.component.html',
  styleUrls: ['./svg-linear-gradient-output.component.scss'],
})
export class SvgLinearGradientOutputComponent implements OnChanges, AfterViewInit {
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

  @Input() linearGradient = null as Element;

  @ViewChild('defs')
  private viewDefs: ElementRef<SVGDefsElement>;

  constructor(private tileGrid: MuuriGridDirective) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.linearGradient && !changes.linearGradient.firstChange) {
      this.ngAfterViewInit();
    }

    if (changes.width || changes.height) {
      asapScheduler.schedule(() => this.tileGrid.refresh());
    }
  }

  ngAfterViewInit(): void {
    if (this.linearGradient) {
      this.linearGradient.setAttribute('id', 'gradient');
      this.viewDefs.nativeElement.innerHTML = serializer.serializeToString(this.linearGradient);
    }
  }
}

const serializer = new XMLSerializer();

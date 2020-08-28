import { Component } from '@angular/core';
import { GridOptions } from 'muuri';

import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { CssParameters } from './css-linear-gradient-parameters.component';

import { fromSvgToCss } from './convert-svg-to-css.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public layoutConfig: GridOptions = {
    items: [],
    layoutOnInit: false,
    dragEnabled: true,
    layout: {
        fillGaps: true,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: true,
    },
  };

  width = 500;
  height = 300;

  linearGradient = undefined as Element;
  css = '';

  svgParameters: SvgParameters;
  cssParameters: CssParameters;

  fromSvgToCss(): void {
    this.cssParameters = fromSvgToCss(this.width, this.height, this.svgParameters);
  }
}

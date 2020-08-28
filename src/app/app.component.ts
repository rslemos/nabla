import { Component } from '@angular/core';
import { GridOptions } from 'muuri';

import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { CssParameters } from './css-linear-gradient-parameters.component';

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

  svgParameters: SvgParameters;
  cssParameters: CssParameters;
}

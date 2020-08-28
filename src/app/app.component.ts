import { Component } from '@angular/core';
import { GridOptions } from 'muuri';

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
}

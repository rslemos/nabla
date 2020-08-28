import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { MuuriGridDirective } from 'muuri-angular';

@Component({
  selector: 'app-tool-window',
  templateUrl: './tool-window.component.html',
  styleUrls: ['./tool-window.component.scss'],
})
export class ToolWindowComponent {
  @Input() title = '';
  @Input() open = true;

  constructor(public tileGrid: MuuriGridDirective) { }
}

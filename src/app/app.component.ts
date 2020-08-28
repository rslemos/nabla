import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

function parseValue(value: string): number {
  if (/%$/.test(value)) {
    value = value.slice(0, -1);
    return parseFloat(value) / 100.0;
  } else {
    return parseFloat(value);
  }
}

type GradientUnits = 'objectBoundingBox' | 'userSpaceOnUse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private parser = new DOMParser();

  @ViewChild('defs')
  private viewDefs: ElementRef<SVGDefsElement>;

  @ViewChild('style')
  private viewStyle: ElementRef<HTMLElement>;

  svgModel = '';
  cssModel = '';

  private xmlContent = new Subject<string>();

  svg = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    gradientUnits: '' as GradientUnits,
    stops: '',
  };

  css = {
    width: 500,
    height: 200,
    angle: 90,
    stops: '',
  };

  ngOnInit(): void {
    this.xmlContent
      .pipe(debounceTime(1000))
      .subscribe(content => {
        console.log('xml content\n', content);
        const xml = this.parser.parseFromString(content, 'image/svg+xml');
        console.log('xml document', xml);

        const linearGradient = xml.documentElement;
        if (linearGradient.tagName !== 'linearGradient') {
          throw new Error('only <linearGradient>');
        }

        const x1 = this.svg.x1 = parseValue((linearGradient.attributes as any).x1.value);
        const y1 = this.svg.y1 = parseValue((linearGradient.attributes as any).y1.value);
        const x2 = this.svg.x2 = parseValue((linearGradient.attributes as any).x2.value);
        const y2 = this.svg.y2 = parseValue((linearGradient.attributes as any).y2.value);
        this.svg.gradientUnits = (linearGradient.attributes as any).gradientUnits.value as GradientUnits;

        const nodes = Array.prototype.slice.call(linearGradient.children) as Element[];
        const stops = nodes.map(node => {
          if (node.tagName !== 'stop') {
            throw new Error('only <stop>');
          }

          const offset = parseValue((node.attributes as any).offset.value);
          const stopOpacity = parseValue((node.attributes as any)['stop-opacity'].value);

          return { offset, stopOpacity };
        });

        this.svg.stops = stops.map(stop => `${stop.offset}: ${stop.stopOpacity}`).join('\n');

        const dx = x2 - x1;
        const dy = y2 - y1;
        const dx2 = dx * dx;
        const dy2 = dy * dy;
        const x2y1 = x2 * y1;
        const x1y2 = x1 * y2;

        const dy0 = 0;
        const dx0 = 0;
        const dy1 = dy;
        const dx1 = dx;

        const alpha1 = (dy0 - dx0 + x2y1 - x1y2) / (dx2 + dy2);
        const alpha2 = (dy1 - dx1 + x2y1 - x1y2) / (dx2 + dy2);

        const p1x = dy * alpha1;
        const p1y = -dx * alpha1;

        const p2x = dy * alpha2;
        const p2y = -dx * alpha2;

        const d1 = Math.sqrt(dx2 + dy2);
        const d2 = Math.sqrt((p1x + x1 - 0) * (p1x + x1 - 0) + (p1y + y1 - 0) * (p1y + y1 - 0));
        const d3 = Math.sqrt((p2x + x2 - 1) * (p2x + x2 - 1) + (p2y + y2 - 1) * (p2y + y2 - 1));
        const d4 = d1 - d2;
        const d100 = d4 + d3;

        const r0 = -d2 / d100;
        const r1 = d4 / d100;

        console.log({
          dx, dy, dx2, dy2, x2y1, x1y2, dy0, dx0, dy1, dx1,
          alpha1, alpha2, p1x, p1y, p2x, p2y,
          d1, d2, d3, d4, d100,
          r2: r1, r1: r0,
        });

        linearGradient.setAttribute('id', 'gradient');

        const nx = dx * this.css.height;
        const ny = dy * this.css.width;
        this.css.angle = Math.atan2(nx, -ny) * 180 / Math.PI;
        this.css.stops = stops
          .map(stop => ({ offset: (r1 - r0) * stop.offset + r0, stopOpacity: stop.stopOpacity}))
          .map(stop => `${stop.offset * 100}%: alpha(${stop.stopOpacity})`).join('\n');

        const cssStops = stops
          .map(stop => ({ offset: (r1 - r0) * stop.offset + r0, stopOpacity: stop.stopOpacity}))
          .map(stop => `rgba(0, 0, 0, ${stop.stopOpacity}) ${stop.offset * 100}%`).join(',\n                              ');

        this.cssModel = `
.gradient {
  background: linear-gradient(${this.css.angle}deg,
                              ${cssStops});
}
        `;
        this.updateCSS();
        this.updateSvg(linearGradient);
      });
  }

  onXmlChange(content: string): void {
    this.xmlContent.next(content);
  }

  onCssChange(content: string): void {
    this.updateCSS();
  }

  private updateSvg(content: HTMLElement): void {
    this.viewDefs.nativeElement.innerHTML = content.outerHTML;
  }

  private updateCSS(): void {
    this.viewStyle.nativeElement.innerHTML = `<style>${this.cssModel}</style>`;
  }
}

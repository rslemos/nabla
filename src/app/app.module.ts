import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MuuriModule } from 'muuri-angular';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppComponent } from './app.component';
import { ToolWindowComponent } from './tool-window.component';
import { AnyOutputDimensionsParametersComponent } from './any-output-dimensions-parameters.component';
import { SvgLinearGradientParametersComponent } from './svg-linear-gradient-parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolWindowComponent,
    AnyOutputDimensionsParametersComponent,
    SvgLinearGradientParametersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MuuriModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

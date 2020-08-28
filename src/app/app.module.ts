import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MuuriModule } from 'muuri-angular';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppComponent } from './app.component';
import { ToolWindowComponent } from './tool-window.component';
import { AnyOutputDimensionsParametersComponent } from './any-output-dimensions-parameters.component';
import { SvgLinearGradientParametersComponent } from './svg-linear-gradient-parameters.component';
import { SvgLinearGradientCodeComponent } from './svg-linear-gradient-code.component';
import { SvgLinearGradientOutputComponent } from './svg-linear-gradient-output.component';
import { SvgLinearGradientOutputManyComponent } from './svg-linear-gradient-output-many.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolWindowComponent,
    AnyOutputDimensionsParametersComponent,
    SvgLinearGradientParametersComponent,
    SvgLinearGradientCodeComponent,
    SvgLinearGradientOutputComponent,
    SvgLinearGradientOutputManyComponent,
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

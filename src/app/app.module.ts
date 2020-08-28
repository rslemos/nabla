import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuuriModule } from 'muuri-angular';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppComponent } from './app.component';
import { ToolWindowComponent } from './tool-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolWindowComponent,
  ],
  imports: [
    BrowserModule,
    MuuriModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

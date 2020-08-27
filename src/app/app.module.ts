import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuuriModule } from 'muuri-angular';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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

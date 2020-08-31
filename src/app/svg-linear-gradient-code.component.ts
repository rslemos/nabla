import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { of } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

import { SvgParameters } from './svg-linear-gradient-parameters.component';
import { SvgModel } from './svg-model.class';

@Component({
  selector: 'app-svg-linear-gradient-code',
  templateUrl: './svg-linear-gradient-code.component.html',
  styleUrls: ['./svg-linear-gradient-code.component.scss'],
})
export class SvgLinearGradientCodeComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _code = '';
  // tslint:disable-next-line: variable-name
  _model: SvgModel;

  @Input() set linearGradient(ignore: Element) {}
  @Output() linearGradientChange = new EventEmitter<Element>();

  @Input() parameters: SvgParameters;
  @Output() parametersChange = new EventEmitter<SvgParameters>();

  private codeSubject = new Subject<string>();

  error = { class: 'empty', message: '' };

  ngOnInit(): void {
    this.codeSubject.pipe(
      tap(() => this.error = { class: 'info', message: 'Waiting for input...'}),
      debounceTime(2000),
      switchMap(x => of(x).pipe(
        tap(() => this.error = { class: 'info', message: 'Compiling...'}),
        map(code => new SvgModel(code)),
        tap(model => this._model = model),
        map(model => model?.parameters),
        tap(() => this.error = { class: 'info', message: 'Done'}),
        catchError(err => {
          this.error = { class: 'error', message: err };
          return of(null as SvgParameters);
        }),
        filter(parameters => !!parameters),
      )),
    ).subscribe(parameters => {
      this.linearGradientChange.emit(this._model.linearGradient.cloneNode(true) as Element);
      this.parametersChange.emit(parameters);
    });
  }

  onCodeChange(code: string): void {
    this.codeSubject.next(code);
  }
}

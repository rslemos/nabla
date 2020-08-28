(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/any-output-dimensions-parameters.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/any-output-dimensions-parameters.component.ts ***!
  \***************************************************************/
/*! exports provided: AnyOutputDimensionsParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnyOutputDimensionsParametersComponent", function() { return AnyOutputDimensionsParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class AnyOutputDimensionsParametersComponent {
    constructor() {
        this.widthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.heightChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = '';
    }
    set width(w) {
        this._width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(w).toString();
    }
    set height(h) {
        this._height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(h).toString();
    }
    onChange(event) {
        const w = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this._width, 0);
        const h = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this._height, 0);
        if (w > 0 && h > 0 && Math.floor(w) === w && Math.floor(h) === h) {
            this.widthChange.emit(w);
            this.heightChange.emit(h);
            this.error = '';
        }
        else {
            this.error = 'Either width or height is not a positive integer';
        }
    }
}
AnyOutputDimensionsParametersComponent.ɵfac = function AnyOutputDimensionsParametersComponent_Factory(t) { return new (t || AnyOutputDimensionsParametersComponent)(); };
AnyOutputDimensionsParametersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnyOutputDimensionsParametersComponent, selectors: [["app-any-output-dimensions-parameters"]], hostBindings: function AnyOutputDimensionsParametersComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AnyOutputDimensionsParametersComponent_change_HostBindingHandler() { return ctx.onChange(); });
    } }, inputs: { width: "width", height: "height" }, outputs: { widthChange: "widthChange", heightChange: "heightChange" }, decls: 10, vars: 3, consts: [["type", "text", 3, "ngModel", "ngModelChange"], [1, "error"]], template: function AnyOutputDimensionsParametersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "width ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnyOutputDimensionsParametersComponent_Template_input_ngModelChange_2_listener($event) { return ctx._width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0\u00D7\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "height ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnyOutputDimensionsParametersComponent_Template_input_ngModelChange_6_listener($event) { return ctx._height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0(in pixels) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.error, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  place-content: center;\n  align-items: baseline;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.error[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  margin-top: 8px;\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW55LW91dHB1dC1kaW1lbnNpb25zLXBhcmFtZXRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW55LW91dHB1dC1kaW1lbnNpb25zLXBhcmFtZXRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5lcnJvciB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnyOutputDimensionsParametersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-any-output-dimensions-parameters',
                templateUrl: './any-output-dimensions-parameters.component.html',
                styleUrls: ['./any-output-dimensions-parameters.component.scss'],
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], widthChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], heightChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change']
        }] }); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var muuri_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muuri-angular */ "./node_modules/muuri-angular/__ivy_ngcc__/fesm2015/muuri-angular.js");
/* harmony import */ var _tool_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool-window.component */ "./src/app/tool-window.component.ts");
/* harmony import */ var _svg_linear_gradient_parameters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-linear-gradient-parameters.component */ "./src/app/svg-linear-gradient-parameters.component.ts");
/* harmony import */ var _any_output_dimensions_parameters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./any-output-dimensions-parameters.component */ "./src/app/any-output-dimensions-parameters.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0, a1) { return { width: a0, height: a1 }; };
class AppComponent {
    constructor() {
        this.layoutConfig = {
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
        this.width = 500;
        this.height = 300;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 13, consts: [[1, "debug"], ["muuriGrid", "", 1, "grid", 3, "config"], ["grid", ""], ["title", "SVG <linearGradient/> parameters", "muuriGridItem", ""], [3, "parameters", "parametersChange"], ["title", "Output dimensions", "muuriGridItem", ""], [3, "width", "height", "widthChange", "heightChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Debug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "dimensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "svgParameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-tool-window", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-svg-linear-gradient-parameters", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("parametersChange", function AppComponent_Template_app_svg_linear_gradient_parameters_parametersChange_19_listener($event) { return ctx.svgParameters = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-tool-window", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-any-output-dimensions-parameters", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("widthChange", function AppComponent_Template_app_any_output_dimensions_parameters_widthChange_21_listener($event) { return ctx.width = $event; })("heightChange", function AppComponent_Template_app_any_output_dimensions_parameters_heightChange_21_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.width, ctx.height)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.svgParameters));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.layoutConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parameters", ctx.svgParameters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, directives: [muuri_angular__WEBPACK_IMPORTED_MODULE_1__["MuuriGridDirective"], _tool_window_component__WEBPACK_IMPORTED_MODULE_2__["ToolWindowComponent"], muuri_angular__WEBPACK_IMPORTED_MODULE_1__["MuuriGridItemDirective"], _svg_linear_gradient_parameters_component__WEBPACK_IMPORTED_MODULE_3__["SvgLinearGradientParametersComponent"], _any_output_dimensions_parameters_component__WEBPACK_IMPORTED_MODULE_4__["AnyOutputDimensionsParametersComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [".debug[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-x: scroll;\n}\n.debug[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  font-size: 14px;\n  padding: 4px;\n}\n.debug[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border: 1px dotted black;\n  margin: 4px;\n  padding: 4px;\n}\n.debug[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: lightblue;\n  padding: 4px;\n  margin: 0;\n}\n.grid[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQU47QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVidWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuICBoNSB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG5cbiAgJiA+IGRpdiB7XG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgIHByZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbi5ncmlkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var muuri_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! muuri-angular */ "./node_modules/muuri-angular/__ivy_ngcc__/fesm2015/muuri-angular.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tool_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tool-window.component */ "./src/app/tool-window.component.ts");
/* harmony import */ var _any_output_dimensions_parameters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./any-output-dimensions-parameters.component */ "./src/app/any-output-dimensions-parameters.component.ts");
/* harmony import */ var _svg_linear_gradient_parameters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg-linear-gradient-parameters.component */ "./src/app/svg-linear-gradient-parameters.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            muuri_angular__WEBPACK_IMPORTED_MODULE_3__["MuuriModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _tool_window_component__WEBPACK_IMPORTED_MODULE_5__["ToolWindowComponent"],
        _any_output_dimensions_parameters_component__WEBPACK_IMPORTED_MODULE_6__["AnyOutputDimensionsParametersComponent"],
        _svg_linear_gradient_parameters_component__WEBPACK_IMPORTED_MODULE_7__["SvgLinearGradientParametersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        muuri_angular__WEBPACK_IMPORTED_MODULE_3__["MuuriModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _tool_window_component__WEBPACK_IMPORTED_MODULE_5__["ToolWindowComponent"],
                    _any_output_dimensions_parameters_component__WEBPACK_IMPORTED_MODULE_6__["AnyOutputDimensionsParametersComponent"],
                    _svg_linear_gradient_parameters_component__WEBPACK_IMPORTED_MODULE_7__["SvgLinearGradientParametersComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    muuri_angular__WEBPACK_IMPORTED_MODULE_3__["MuuriModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/svg-linear-gradient-parameters.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/svg-linear-gradient-parameters.component.ts ***!
  \*************************************************************/
/*! exports provided: SvgLinearGradientParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgLinearGradientParametersComponent", function() { return SvgLinearGradientParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SvgLinearGradientParametersComponent {
    constructor() {
        // tslint:disable-next-line: variable-name
        this._x1 = '';
        // tslint:disable-next-line: variable-name
        this._y1 = '';
        // tslint:disable-next-line: variable-name
        this._x2 = '';
        // tslint:disable-next-line: variable-name
        this._y2 = '';
        // tslint:disable-next-line: variable-name
        this._gradientUnits = 'objectBoundingBox';
        // tslint:disable-next-line: variable-name
        this._stops = '';
        this.parametersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = '';
    }
}
SvgLinearGradientParametersComponent.ɵfac = function SvgLinearGradientParametersComponent_Factory(t) { return new (t || SvgLinearGradientParametersComponent)(); };
SvgLinearGradientParametersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgLinearGradientParametersComponent, selectors: [["app-svg-linear-gradient-parameters"]], inputs: { parameters: "parameters" }, outputs: { parametersChange: "parametersChange" }, decls: 26, vars: 7, consts: [["type", "text", "name", "x1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "y1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "x2", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "objectBoundingBox"], ["value", "userSpaceOnUse"], [2, "grid-column", "3", "grid-row", "1", "place-self", "center"], [2, "grid-column", "3", "grid-row", "2 / -2", "place-self", "center", 3, "ngModel", "ngModelChange"], [1, "error"]], template: function SvgLinearGradientParametersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SvgLinearGradientParametersComponent_Template_input_ngModelChange_2_listener($event) { return ctx._x1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "y1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SvgLinearGradientParametersComponent_Template_input_ngModelChange_5_listener($event) { return ctx._y1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SvgLinearGradientParametersComponent_Template_input_ngModelChange_8_listener($event) { return ctx._x2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "y2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SvgLinearGradientParametersComponent_Template_input_ngModelChange_11_listener($event) { return ctx._y2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "gradientUnits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SvgLinearGradientParametersComponent_Template_select_ngModelChange_14_listener($event) { return ctx._gradientUnits = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "objectBoundingBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "userSpaceOnUse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "stops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(offset: color, opacity)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SvgLinearGradientParametersComponent_Template_textarea_ngModelChange_23_listener($event) { return ctx._stops = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._x1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._y1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._x2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._y2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._gradientUnits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._stops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.error, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto) 1fr;\n  grid-template-rows: repeat(6, auto);\n  gap: 4px;\n  place-items: end;\n}\n\nlabel[_ngcontent-%COMP%] {\n  grid-column: 1;\n  display: block;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: italic;\n}\n\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n\nselect[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin-top: 8px;\n  color: red;\n  font-style: italic;\n  justify-self: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ZnLWxpbmVhci1ncmFkaWVudC1wYXJhbWV0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxRQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvc3ZnLWxpbmVhci1ncmFkaWVudC1wYXJhbWV0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKSAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pO1xuICBnYXA6IDRweDtcblxuICBwbGFjZS1pdGVtczogZW5kO1xufVxuXG5sYWJlbCB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBzZWxlY3Qge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgLinearGradientParametersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-svg-linear-gradient-parameters',
                templateUrl: './svg-linear-gradient-parameters.component.html',
                styleUrls: ['./svg-linear-gradient-parameters.component.scss'],
            }]
    }], null, { parameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parametersChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/tool-window.component.ts":
/*!******************************************!*\
  !*** ./src/app/tool-window.component.ts ***!
  \******************************************/
/*! exports provided: ToolWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolWindowComponent", function() { return ToolWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



const _c0 = ["*"];
class ToolWindowComponent {
    constructor() {
        this.title = '';
    }
}
ToolWindowComponent.ɵfac = function ToolWindowComponent_Factory(t) { return new (t || ToolWindowComponent)(); };
ToolWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolWindowComponent, selectors: [["app-tool-window"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "content"]], template: function ToolWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  width: calc(50vw - 60px);\n  margin: 5px;\n  z-index: 1;\n  border: 2px solid black;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.8);\n}\n.muuri-item-dragging[_nghost-%COMP%] {\n  z-index: 3;\n}\n.muuri-item-releasing[_nghost-%COMP%] {\n  z-index: 2;\n}\n.muuri-item-hidden[_nghost-%COMP%] {\n  z-index: 0;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbC13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtBQUNKO0FBRUU7RUFDRSxVQUFBO0FBQUo7QUFHRTtFQUNFLFVBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBSUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvdG9vbC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDUwdncgLSA2MHB4KTtcbiAgbWFyZ2luOiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblxuICAmLm11dXJpLWl0ZW0tZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDM7XG4gIH1cblxuICAmLm11dXJpLWl0ZW0tcmVsZWFzaW5nIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgJi5tdXVyaS1pdGVtLWhpZGRlbiB7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgaDEge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tool-window',
                templateUrl: './tool-window.component.html',
                styleUrls: ['./tool-window.component.scss'],
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rslemos/workspace/nabla/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
var ac_main =
webpackJsonpac__name_([4],{

/***/ "./ng2-admin/app/app.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__("./ng2-admin/app/app.loader.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var global_state_1 = __webpack_require__("./ng2-admin/app/global.state.ts");
var services_1 = __webpack_require__("./ng2-admin/app/theme/services/index.ts");
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(_state, _imageLoader, _spinner) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    App.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        services_1.BaThemePreloader.load().then(function (values) {
            _this._spinner.hide();
        });
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./node_modules/normalize.css/normalize.css"), __webpack_require__("./ng2-admin/app/app.scss")],
            template: "\n    <main [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof global_state_1.GlobalState !== 'undefined' && global_state_1.GlobalState) === 'function' && _a) || Object, (typeof (_b = typeof services_1.BaImageLoaderService !== 'undefined' && services_1.BaImageLoaderService) === 'function' && _b) || Object, (typeof (_c = typeof services_1.BaThemeSpinner !== 'undefined' && services_1.BaThemeSpinner) === 'function' && _c) || Object])
    ], App);
    return App;
    var _a, _b, _c;
}());
exports.App = App;


/***/ },

/***/ "./ng2-admin/app/app.loader.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// this css loaded separately as a standalone file to speed up the initial styles loading
__webpack_require__("./ng2-admin/app/theme/initial.scss");


/***/ },

/***/ "./ng2-admin/app/app.menu.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var pages_menu_1 = __webpack_require__("./ng2-admin/app/pages/pages.menu.ts");
exports.MENU = pages_menu_1.PAGES_MENU.slice();


/***/ },

/***/ "./ng2-admin/app/app.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__("./ng2-admin/app/environment.ts");
var app_routing_1 = __webpack_require__("./ng2-admin/app/app.routing.ts");
// App is our top level component
var app_component_1 = __webpack_require__("./ng2-admin/app/app.component.ts");
var app_service_1 = __webpack_require__("./ng2-admin/app/app.service.ts");
var global_state_1 = __webpack_require__("./ng2-admin/app/global.state.ts");
var nga_module_1 = __webpack_require__("./ng2-admin/app/theme/nga.module.ts");
var pages_module_1 = __webpack_require__("./ng2-admin/app/pages/pages.module.ts");
// Application wide providers
var APP_PROVIDERS = [
    app_service_1.AppState,
    global_state_1.GlobalState,
    angular2_jwt_1.AUTH_PROVIDERS
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.App],
            declarations: [
                app_component_1.App
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                nga_module_1.NgaModule,
                pages_module_1.PagesModule,
                app_routing_1.routing
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _a) || Object, (typeof (_b = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _b) || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());
exports.AppModule = AppModule;


/***/ },

/***/ "./ng2-admin/app/app.routing.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
exports.routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });


/***/ },

/***/ "./ng2-admin/app/app.scss":
/***/ function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.card.card-blur {\n  background: url(\"assets/img/blur-bg-blurred.jpg\");\n  transition: none;\n  background-attachment: fixed; }\n  .card.card-blur .card-header, .card.card-blur .card-footer {\n    background: transparent; }\n\n.card {\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 0;\n  border-radius: 7px;\n  position: relative;\n  margin-bottom: 24px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15); }\n  .card ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .card ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.6);\n    cursor: pointer; }\n  .card ::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.7); }\n  .card body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.6);\n    scrollbar-track-color: rgba(255, 255, 255, 0.7); }\n  .card.animated {\n    animation-duration: 0.5s; }\n  .card.small-card {\n    height: 114px; }\n  .card.xsmall-card {\n    height: 187px; }\n  .card.medium-card {\n    height: 400px; }\n  .card.xmedium-card {\n    height: 550px; }\n  .card.large-card {\n    height: 974px; }\n  .card.viewport100 {\n    height: calc(100vh - 218px); }\n  .card.with-scroll .card-body {\n    height: calc(100% - 44px);\n    overflow-y: auto; }\n\n.card > .card-body {\n  padding: 15px 22px;\n  height: 100%; }\n\n.card > .card-header {\n  color: #ffffff;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.card > .card-footer {\n  color: #ffffff; }\n\n.card-header, .card-footer {\n  color: #ffffff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  height: 44px;\n  font-size: 16px;\n  padding: 14px 22px;\n  background-color: transparent; }\n\n.card-title {\n  font-weight: 400;\n  font-size: 16px;\n  text-transform: uppercase;\n  opacity: 0.9;\n  color: #ffffff; }\n\n.card-primary > .card-header {\n  background-color: #33bcff;\n  border-color: #33bcff; }\n\n.card-success > .card-header {\n  background-color: #a2db59;\n  border-color: #a2db59; }\n\n.card-info > .card-header {\n  background-color: #66e1f4;\n  border-color: #66e1f4; }\n\n.card-warning > .card-header {\n  background-color: #ecc839;\n  border-color: #ecc839; }\n\n.card-danger > .card-header {\n  background-color: #fa758e;\n  border-color: #fa758e; }\n\n.accordion-card.card.card-primary .card-header p, .accordion-card.card.card-primary .card-header div, .accordion-card.card.card-primary .card-header span, .accordion-card.card.card-success .card-header p, .accordion-card.card.card-success .card-header div, .accordion-card.card.card-success .card-header span, .accordion-card.card.card-info .card-header p, .accordion-card.card.card-info .card-header div, .accordion-card.card.card-info .card-header span, .accordion-card.card.card-warning .card-header p, .accordion-card.card.card-warning .card-header div, .accordion-card.card.card-warning .card-header span, .accordion-card.card.card-danger .card-header p, .accordion-card.card.card-danger .card-header div, .accordion-card.card.card-danger .card-header span {\n  color: rgba(255, 255, 255, 0.8); }\n\n.card-group .card.accordion-card .card-header {\n  border-bottom: 0; }\n\n.card-group .card .card-header {\n  border-bottom: 1px solid #ddd; }\n\n.p-with-code {\n  line-height: 1.5em; }\n\n.contextual-example-card {\n  height: 120px; }\n\n.footer-card {\n  height: 142px; }\n\n.light-text {\n  font-weight: 300; }\n\n.dropdown-item {\n  line-height: 1; }\n\n.dropdown-menu {\n  font-size: inherit; }\n\n/** Different tabs positions, which were removed from bootstrap */\n.tabs-below .nav-tabs, .tabs-right .nav-tabs, .tabs-left .nav-tabs {\n  border-bottom: 0; }\n\n.tabs-right .nav-tabs, .tabs-left .nav-tabs {\n  min-width: 100px; }\n\n.tabs-right .tab-content, .tabs-left .tab-content {\n  width: calc(100% - 100px);\n  overflow-y: auto; }\n\n.tabs-right .tab-content {\n  margin-right: 100px; }\n\n.tabs-left .tab-content {\n  margin-left: 100px; }\n\n.tab-content > .tab-pane,\n.pill-content > .pill-pane {\n  display: none; }\n\n.tab-content > .active,\n.pill-content > .active {\n  display: block; }\n\n.tabs-below > .nav-tabs > li {\n  margin-top: -1px;\n  margin-bottom: 0; }\n\n.tabs-left, .tabs-right {\n  height: 100%; }\n  .tabs-left > .nav-tabs > li, .tabs-right > .nav-tabs > li {\n    float: none;\n    margin-bottom: 0; }\n    .tabs-left > .nav-tabs > li > a, .tabs-right > .nav-tabs > li > a {\n      min-width: 74px;\n      margin-right: 0;\n      margin-bottom: 3px; }\n\n.tabs-left > .nav-tabs {\n  float: left;\n  border-bottom-left-radius: 5px; }\n  .tabs-left > .nav-tabs > li > a {\n    margin-right: -1px; }\n\n.tabs-right > .nav.nav-tabs {\n  float: right;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 5px; }\n  .tabs-right > .nav.nav-tabs > li:first-of-type a {\n    border-top-left-radius: 0; }\n\n/** /Different tabs positions, which were removed from bootstrap */\n.nav-tabs > li.with-dropdown > a {\n  padding: 0; }\n\n.nav-tabs > li.with-dropdown .dropdown-toggle {\n  padding: 10px 15px;\n  display: inline-block;\n  cursor: pointer; }\n\n.tab-content {\n  padding: 15px 15px 5px 15px;\n  background: transparent;\n  color: #ffffff; }\n  .tab-content .tab-pane p {\n    color: #ffffff; }\n\n.nav.nav-tabs {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: 1px solid transparent;\n  background-color: #4dc4ff; }\n  .nav.nav-tabs a {\n    color: #ffffff; }\n    .nav.nav-tabs a:hover {\n      color: #ffffff; }\n  .nav.nav-tabs > li > a {\n    margin-right: 0;\n    margin-bottom: 0;\n    border-radius: 0;\n    border: none; }\n    .nav.nav-tabs > li > a:hover {\n      border: none;\n      background-color: #4dc4ff; }\n  .nav.nav-tabs > li.active > a {\n    color: #ffffff;\n    background-color: #00abff; }\n  .nav.nav-tabs > li:first-of-type a {\n    border-top-left-radius: 5px; }\n  .nav.nav-tabs .dropdown-menu > li > a {\n    color: #7d7d7d; }\n    .nav.nav-tabs .dropdown-menu > li > a:hover {\n      color: #7d7d7d; }\n\n.blur .nav.nav-tabs {\n  background-color: rgba(0, 0, 0, 0.2); }\n  .blur .nav.nav-tabs a {\n    color: #ffffff; }\n    .blur .nav.nav-tabs a:hover {\n      color: #ffffff; }\n  .blur .nav.nav-tabs > li > a:hover {\n    background-color: rgba(0, 0, 0, 0.2); }\n  .blur .nav.nav-tabs > li.active > a {\n    color: #ffffff;\n    background-color: rgba(0, 0, 0, 0.25); }\n\n.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n  background-color: transparent; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  border: none; }\n\n.accordion-panel .panel-heading {\n  border-radius: 3px; }\n\n.accordion-panel.panel-open .panel-heading {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.accordion-panel:not(.panel-open) .panel-heading {\n  transition-delay: .3s; }\n\n.accordion-panel > .panel-heading + .panel-collapse > .panel-body {\n  border-top: none; }\n\n.accordion-panel .panel-heading {\n  padding: 0; }\n  .accordion-panel .panel-heading .accordion-toggle {\n    display: inline-block;\n    width: 100%;\n    padding: 14px 22px; }\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom; }\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse; }\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand; }\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake; }\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg); }\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg); }\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg); }\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg); }\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg); }\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg); }\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg); }\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg); }\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake; }\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing; }\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble; }\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none; }\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg); }\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg); }\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg); }\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg); }\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg); }\n  77.7% {\n    -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);\n    transform: skewX(0.39062deg) skewY(0.39062deg); }\n  88.8% {\n    -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);\n    transform: skewX(-0.19531deg) skewY(-0.19531deg); } }\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none; }\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg); }\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg); }\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg); }\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg); }\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg); }\n  77.7% {\n    -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);\n    transform: skewX(0.39062deg) skewY(0.39062deg); }\n  88.8% {\n    -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);\n    transform: skewX(-0.19531deg) skewY(-0.19531deg); } }\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center; }\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn; }\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown; }\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft; }\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight; }\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut; }\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown; }\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft; }\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight; }\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp; }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig; }\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft; }\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig; }\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight; }\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp; }\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig; }\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown; }\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig; }\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft; }\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig; }\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight; }\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig; }\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig; }\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip; }\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX; }\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY; }\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important; }\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY; }\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out; }\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in; }\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn; }\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft; }\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight; }\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft; }\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight; }\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut; }\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft; }\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight; }\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft; }\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight; }\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n@keyframes rollOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut; }\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn; }\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown; }\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft; }\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight; }\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp; }\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut; }\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown; }\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft; }\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight; }\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp; }\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown; }\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft; }\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight; }\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp; }\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown; }\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft; }\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight; }\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Roboto\", sans-serif;\n  width: 100%;\n  margin-top: 0; }\n\nh1.color, h2.color, h3.color, h4.color, h5.color, h6.color {\n  color: #f95372; }\n\nbody a {\n  color: #285eb8;\n  text-decoration: none !important;\n  transition: color 0.2s ease; }\n  body a:hover {\n    color: #163364; }\n\nh1 {\n  font-size: 32px;\n  margin-bottom: 0.5rem; }\n\nh2 {\n  font-size: 24px; }\n\nh3 {\n  font-size: 20px; }\n\nh4 {\n  font-size: 18px; }\n\nh5 {\n  font-size: 15px; }\n\n.typography-document-samples p {\n  margin: 0; }\n\n.typography-document-samples .typography-widget {\n  height: 100%; }\n  .typography-document-samples .typography-widget .card {\n    height: 620px; }\n  .typography-document-samples .typography-widget .card-title {\n    text-align: center;\n    width: 100%; }\n  .typography-document-samples .typography-widget .card.with-scroll .card-body {\n    height: calc(100% - 45px); }\n  .typography-document-samples .typography-widget .card-content {\n    padding: 15px 22px 5px 22px; }\n\n.heading-widget h1, .heading-widget h2, .heading-widget h3, .heading-widget h4, .heading-widget h5, .heading-widget h6 {\n  width: 100%;\n  font-weight: 300;\n  text-align: center; }\n\n.heading-widget p {\n  line-height: 16px;\n  font-weight: 400;\n  text-align: center; }\n\n.more-text-widget {\n  text-align: center;\n  font-size: 14px; }\n  .more-text-widget p {\n    line-height: 17px; }\n  .more-text-widget .gray {\n    color: #767676; }\n  .more-text-widget .black {\n    color: #585858; }\n  .more-text-widget .light-text {\n    font-weight: 300; }\n  .more-text-widget .regular-text {\n    font-weight: 400; }\n  .more-text-widget .upper-text {\n    text-transform: uppercase; }\n  .more-text-widget .bold-text {\n    font-weight: 700; }\n  .more-text-widget .small-text {\n    padding: 5px 0 0 0; }\n    .more-text-widget .small-text p {\n      font-size: 9px;\n      font-weight: 300;\n      line-height: 10px; }\n\n.color-widget {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400; }\n  .color-widget p {\n    line-height: 17px; }\n  .color-widget .section-block {\n    margin: 14px 0; }\n  .color-widget .yellow-text p {\n    color: #e7ba08; }\n  .color-widget .red-text p {\n    color: #f95372; }\n  .color-widget .links h3 {\n    margin-bottom: 10px; }\n  .color-widget .links p {\n    margin-bottom: 0; }\n    .color-widget .links p.hovered a {\n      color: #163364; }\n\n.lists-widget {\n  font-weight: 400; }\n  .lists-widget .list-header {\n    width: 100%;\n    text-align: center; }\n  .lists-widget .accent {\n    margin-top: 30px;\n    color: #ecc839;\n    line-height: 14px;\n    font-size: 14px;\n    padding-left: 11px;\n    border-left: 4px solid #ecc839;\n    margin-left: 13px; }\n  .lists-widget ul.blur, .lists-widget ol.blur {\n    padding-left: 13px;\n    margin-bottom: 19px;\n    list-style: none;\n    padding-top: 1px; }\n    .lists-widget ul.blur li, .lists-widget ol.blur li {\n      margin-top: 5px;\n      font-size: 14px; }\n      .lists-widget ul.blur li ul, .lists-widget ul.blur li ol, .lists-widget ol.blur li ul, .lists-widget ol.blur li ol {\n        padding-left: 20px;\n        margin-bottom: 0;\n        list-style: none; }\n  .lists-widget ul.blur li:before {\n    content: \"• \";\n    color: #ecc839;\n    width: 10px;\n    display: inline-block; }\n  .lists-widget ol.blur {\n    counter-reset: section; }\n    .lists-widget ol.blur li {\n      color: #ecc839;\n      padding-left: 0;\n      line-height: 14px;\n      position: relative; }\n      .lists-widget ol.blur li span {\n        color: #ffffff;\n        display: block; }\n      .lists-widget ol.blur li ol {\n        padding-left: 0;\n        margin-left: 12px; }\n      .lists-widget ol.blur li:before {\n        content: counters(section, \".\") \".\";\n        counter-increment: section;\n        width: 19px;\n        position: absolute;\n        left: 0;\n        top: 0;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n    .lists-widget ol.blur > li span {\n      padding-left: 14px; }\n    .lists-widget ol.blur ol {\n      counter-reset: section; }\n      .lists-widget ol.blur ol > li:before {\n        width: 30px; }\n      .lists-widget ol.blur ol > li span {\n        padding-left: 27px; }\n      .lists-widget ol.blur ol ol > li:before {\n        width: 40px; }\n      .lists-widget ol.blur ol ol > li span {\n        padding-left: 40px; }\n\n.columns-section {\n  background-color: #ffffff; }\n\np {\n  margin-bottom: 12px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px; }\n\np.small-text {\n  color: #ffffff;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 8px; }\n\n.cols-two {\n  margin-bottom: 50px; }\n  .cols-two > div {\n    float: left;\n    width: 350px;\n    margin-left: 40px; }\n    .cols-two > div:first-child {\n      margin-left: 0; }\n\n.cols-three {\n  margin-bottom: 50px; }\n  .cols-three > div {\n    float: left;\n    width: 222px;\n    margin-left: 40px; }\n    .cols-three > div:first-child {\n      margin-left: 0; }\n\na.learn-more {\n  font-size: 14px;\n  font-weight: 700;\n  text-decoration: none;\n  line-height: 24px; }\n\n.img-wrapper {\n  margin-bottom: 19px;\n  margin-top: 5px;\n  overflow: hidden;\n  height: 180px; }\n  .img-wrapper img {\n    width: 100%; }\n\n.cols-three p {\n  margin-bottom: 10px; }\n\n.banner {\n  position: relative;\n  margin-bottom: 20px; }\n\n.large-banner-wrapper {\n  overflow: hidden;\n  height: 400px; }\n  .large-banner-wrapper img {\n    height: 100%;\n    width: 100%;\n    display: block; }\n\n.banner-text-wrapper {\n  margin-top: -400px;\n  height: 400px;\n  text-align: center; }\n\n.banner-text {\n  padding: 85px 90px 60px;\n  display: inline-block;\n  margin: 67px auto;\n  background: #ffffff;\n  min-width: 432px;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.75); }\n  .banner-text h1 {\n    font-weight: 700;\n    width: 100%;\n    color: #ffffff;\n    margin-bottom: 10px; }\n  .banner-text p {\n    font-size: 24px;\n    line-height: 30px;\n    font-weight: 300;\n    color: #00abff;\n    margin-bottom: 0px; }\n\n@media (max-width: 600px) {\n  .banner-text {\n    padding: 55px 60px 30px;\n    min-width: 0; }\n    .banner-text h1 {\n      font-size: 24px; }\n    .banner-text p {\n      font-size: 16px; } }\n\n@media (max-width: 400px) {\n  .banner-text {\n    min-width: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0; } }\n\n.photo-desc {\n  margin-top: 12px;\n  text-align: center; }\n\n.text-info {\n  width: 90%; }\n  .text-info p {\n    margin-bottom: 10px; }\n\n.section-block {\n  padding-bottom: 12px; }\n\n.separator {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.3);\n  width: 100%;\n  margin-bottom: 19px;\n  margin-top: 16px; }\n\n.section {\n  padding: 0 20px 50px 20px; }\n\n.card.banner-column-panel {\n  padding: 0;\n  margin-bottom: 90px; }\n  .card.banner-column-panel .card-body {\n    padding: 0; }\n\n@media screen and (min-width: 1620px) {\n  .col-xlg-1 {\n    width: 8.33333333%;\n    flex: 0 0 8.33333333%; }\n  .col-xlg-2 {\n    width: 16.66666667%;\n    flex: 0 0 16.66666667%; }\n  .col-xlg-3 {\n    width: 25%;\n    flex: 0 0 25%; }\n  .col-xlg-4 {\n    width: 33.33333333%;\n    flex: 0 0 33.33333333%; }\n  .col-xlg-5 {\n    width: 41.66666667%;\n    flex: 0 0 41.66666667%; }\n  .col-xlg-6 {\n    width: 50%;\n    flex: 0 0 50%; }\n  .col-xlg-7 {\n    width: 58.33333333%;\n    flex: 0 0 58.33333333%; }\n  .col-xlg-8 {\n    width: 66.66666667%;\n    flex: 0 0 66.66666667%; }\n  .col-xlg-9 {\n    width: 75%;\n    flex: 0 0 75%; }\n  .col-xlg-10 {\n    width: 83.33333333%;\n    flex: 0 0 83.33333333%; }\n  .col-xlg-11 {\n    width: 91.66666667%;\n    flex: 0 0 91.66666667%; }\n  .col-xlg-12 {\n    width: 100%;\n    flex: 0 0 100%; } }\n\n.btn:focus, .btn:active:focus, .btn.active:focus,\n.btn.focus, .btn:active.focus, .btn.active.focus {\n  outline: none; }\n\n.btn {\n  border-radius: 5px;\n  transition: all 0.1s ease;\n  padding: 0.344rem 1rem;\n  font-size: 0.9rem; }\n\n.btn:hover {\n  transform: scale(1.2); }\n\n.open > .btn.dropdown-toggle.btn.btn-primary {\n  background: #00abff;\n  border-color: #0093e7;\n  background-color: #0091d9;\n  border-color: #0091d9; }\n\n.open > .btn.dropdown-toggle.btn-success {\n  background: #8bd22f;\n  border-color: #73ba17;\n  background-color: #76b328;\n  border-color: #76b328; }\n\n.open > .btn.dropdown-toggle.btn-info {\n  background: #40daf1;\n  border-color: #28c2d9;\n  background-color: #36b9cd;\n  border-color: #36b9cd; }\n\n.open > .btn.dropdown-toggle.btn-warning {\n  background: #e7ba08;\n  border-color: #cfa200;\n  background-color: #c49e07;\n  border-color: #c49e07; }\n\n.open > .btn.dropdown-toggle.btn-danger {\n  background: #f95372;\n  border-color: #e13b5a;\n  background-color: #d44761;\n  border-color: #d44761; }\n\nbutton.btn.btn-primary {\n  background: #00abff;\n  border-color: #00abff; }\n  button.btn.btn-primary.disabled, button.btn.btn-primary[disabled], fieldset[disabled] button.btn.btn-primary, button.btn.btn-primary.disabled:hover, button.btn.btn-primary[disabled]:hover,\n  fieldset[disabled] button.btn.btn-primary:hover, button.btn.btn-primary.disabled:focus, button.btn.btn-primary[disabled]:focus, fieldset[disabled] button.btn.btn-primary:focus, button.btn.btn-primary.disabled.focus, button.btn.btn-primary[disabled].focus, fieldset[disabled] button.btn.btn-primary.focus, button.btn.btn-primary.disabled:active, button.btn.btn-primary[disabled]:active, fieldset[disabled] button.btn.btn-primary:active, button.btn.btn-primary.disabled.active, button.btn.btn-primary[disabled].active,\n  fieldset[disabled] button.btn.btn-primary.active {\n    background: #00abff;\n    border-color: #0cb7ff; }\n    button.btn.btn-primary.disabled:hover, button.btn.btn-primary[disabled]:hover, fieldset[disabled] button.btn.btn-primary:hover, button.btn.btn-primary.disabled:hover:hover, button.btn.btn-primary[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-primary:hover:hover, button.btn.btn-primary.disabled:focus:hover, button.btn.btn-primary[disabled]:focus:hover, fieldset[disabled] button.btn.btn-primary:focus:hover, button.btn.btn-primary.disabled.focus:hover, button.btn.btn-primary[disabled].focus:hover, fieldset[disabled] button.btn.btn-primary.focus:hover, button.btn.btn-primary.disabled:active:hover, button.btn.btn-primary[disabled]:active:hover, fieldset[disabled] button.btn.btn-primary:active:hover, button.btn.btn-primary.disabled.active:hover, button.btn.btn-primary[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-primary.active:hover {\n      transform: none; }\n  button.btn.btn-primary:hover, button.btn.btn-primary:focus, button.btn.btn-primary.focus, button.btn.btn-primary:active, button.btn.btn-primary.active {\n    background: #00abff;\n    border-color: #0093e7; }\n  button.btn.btn-primary:active, button.btn.btn-primary:target {\n    background-color: #0091d9; }\n\nbutton.btn.btn-default {\n  border-width: 1px;\n  color: #ffffff;\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.5); }\n  button.btn.btn-default.disabled, button.btn.btn-default[disabled], fieldset[disabled] button.btn.btn-default, button.btn.btn-default.disabled:hover, button.btn.btn-default[disabled]:hover,\n  fieldset[disabled] button.btn.btn-default:hover, button.btn.btn-default.disabled:focus, button.btn.btn-default[disabled]:focus, fieldset[disabled] button.btn.btn-default:focus, button.btn.btn-default.disabled.focus, button.btn.btn-default[disabled].focus, fieldset[disabled] button.btn.btn-default.focus, button.btn.btn-default.disabled:active, button.btn.btn-default[disabled]:active, fieldset[disabled] button.btn.btn-default:active, button.btn.btn-default.disabled.active, button.btn.btn-default[disabled].active,\n  fieldset[disabled] button.btn.btn-default.active {\n    background: transparent;\n    border-color: rgba(255, 255, 255, 0.5); }\n    button.btn.btn-default.disabled:hover, button.btn.btn-default[disabled]:hover, fieldset[disabled] button.btn.btn-default:hover, button.btn.btn-default.disabled:hover:hover, button.btn.btn-default[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-default:hover:hover, button.btn.btn-default.disabled:focus:hover, button.btn.btn-default[disabled]:focus:hover, fieldset[disabled] button.btn.btn-default:focus:hover, button.btn.btn-default.disabled.focus:hover, button.btn.btn-default[disabled].focus:hover, fieldset[disabled] button.btn.btn-default.focus:hover, button.btn.btn-default.disabled:active:hover, button.btn.btn-default[disabled]:active:hover, fieldset[disabled] button.btn.btn-default:active:hover, button.btn.btn-default.disabled.active:hover, button.btn.btn-default[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-default.active:hover {\n      transform: none; }\n  button.btn.btn-default:hover, button.btn.btn-default:focus, button.btn.btn-default.focus, button.btn.btn-default:active, button.btn.btn-default.active {\n    background: transparent;\n    border-color: rgba(231, 231, 231, 0.5); }\n  button.btn.btn-default:active, button.btn.btn-default:target {\n    background-color: rgba(0, 0, 0, 0.2);\n    color: #ffffff; }\n\nbutton.btn.btn-success {\n  background: #8bd22f;\n  border-color: #8bd22f; }\n  button.btn.btn-success.disabled, button.btn.btn-success[disabled], fieldset[disabled] button.btn.btn-success, button.btn.btn-success.disabled:hover, button.btn.btn-success[disabled]:hover,\n  fieldset[disabled] button.btn.btn-success:hover, button.btn.btn-success.disabled:focus, button.btn.btn-success[disabled]:focus, fieldset[disabled] button.btn.btn-success:focus, button.btn.btn-success.disabled.focus, button.btn.btn-success[disabled].focus, fieldset[disabled] button.btn.btn-success.focus, button.btn.btn-success.disabled:active, button.btn.btn-success[disabled]:active, fieldset[disabled] button.btn.btn-success:active, button.btn.btn-success.disabled.active, button.btn.btn-success[disabled].active,\n  fieldset[disabled] button.btn.btn-success.active {\n    background: #8bd22f;\n    border-color: #97de3b; }\n    button.btn.btn-success.disabled:hover, button.btn.btn-success[disabled]:hover, fieldset[disabled] button.btn.btn-success:hover, button.btn.btn-success.disabled:hover:hover, button.btn.btn-success[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-success:hover:hover, button.btn.btn-success.disabled:focus:hover, button.btn.btn-success[disabled]:focus:hover, fieldset[disabled] button.btn.btn-success:focus:hover, button.btn.btn-success.disabled.focus:hover, button.btn.btn-success[disabled].focus:hover, fieldset[disabled] button.btn.btn-success.focus:hover, button.btn.btn-success.disabled:active:hover, button.btn.btn-success[disabled]:active:hover, fieldset[disabled] button.btn.btn-success:active:hover, button.btn.btn-success.disabled.active:hover, button.btn.btn-success[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-success.active:hover {\n      transform: none; }\n  button.btn.btn-success:hover, button.btn.btn-success:focus, button.btn.btn-success.focus, button.btn.btn-success:active, button.btn.btn-success.active {\n    background: #8bd22f;\n    border-color: #73ba17; }\n  button.btn.btn-success:active, button.btn.btn-success:target {\n    background-color: #76b328; }\n\nbutton.btn.btn-info {\n  background: #40daf1;\n  border-color: #40daf1; }\n  button.btn.btn-info.disabled, button.btn.btn-info[disabled], fieldset[disabled] button.btn.btn-info, button.btn.btn-info.disabled:hover, button.btn.btn-info[disabled]:hover,\n  fieldset[disabled] button.btn.btn-info:hover, button.btn.btn-info.disabled:focus, button.btn.btn-info[disabled]:focus, fieldset[disabled] button.btn.btn-info:focus, button.btn.btn-info.disabled.focus, button.btn.btn-info[disabled].focus, fieldset[disabled] button.btn.btn-info.focus, button.btn.btn-info.disabled:active, button.btn.btn-info[disabled]:active, fieldset[disabled] button.btn.btn-info:active, button.btn.btn-info.disabled.active, button.btn.btn-info[disabled].active,\n  fieldset[disabled] button.btn.btn-info.active {\n    background: #40daf1;\n    border-color: #4ce6fd; }\n    button.btn.btn-info.disabled:hover, button.btn.btn-info[disabled]:hover, fieldset[disabled] button.btn.btn-info:hover, button.btn.btn-info.disabled:hover:hover, button.btn.btn-info[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-info:hover:hover, button.btn.btn-info.disabled:focus:hover, button.btn.btn-info[disabled]:focus:hover, fieldset[disabled] button.btn.btn-info:focus:hover, button.btn.btn-info.disabled.focus:hover, button.btn.btn-info[disabled].focus:hover, fieldset[disabled] button.btn.btn-info.focus:hover, button.btn.btn-info.disabled:active:hover, button.btn.btn-info[disabled]:active:hover, fieldset[disabled] button.btn.btn-info:active:hover, button.btn.btn-info.disabled.active:hover, button.btn.btn-info[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-info.active:hover {\n      transform: none; }\n  button.btn.btn-info:hover, button.btn.btn-info:focus, button.btn.btn-info.focus, button.btn.btn-info:active, button.btn.btn-info.active {\n    background: #40daf1;\n    border-color: #28c2d9; }\n  button.btn.btn-info:active, button.btn.btn-info:target {\n    background-color: #36b9cd; }\n\nbutton.btn.btn-warning {\n  background: #e7ba08;\n  border-color: #e7ba08; }\n  button.btn.btn-warning.disabled, button.btn.btn-warning[disabled], fieldset[disabled] button.btn.btn-warning, button.btn.btn-warning.disabled:hover, button.btn.btn-warning[disabled]:hover,\n  fieldset[disabled] button.btn.btn-warning:hover, button.btn.btn-warning.disabled:focus, button.btn.btn-warning[disabled]:focus, fieldset[disabled] button.btn.btn-warning:focus, button.btn.btn-warning.disabled.focus, button.btn.btn-warning[disabled].focus, fieldset[disabled] button.btn.btn-warning.focus, button.btn.btn-warning.disabled:active, button.btn.btn-warning[disabled]:active, fieldset[disabled] button.btn.btn-warning:active, button.btn.btn-warning.disabled.active, button.btn.btn-warning[disabled].active,\n  fieldset[disabled] button.btn.btn-warning.active {\n    background: #e7ba08;\n    border-color: #f3c614; }\n    button.btn.btn-warning.disabled:hover, button.btn.btn-warning[disabled]:hover, fieldset[disabled] button.btn.btn-warning:hover, button.btn.btn-warning.disabled:hover:hover, button.btn.btn-warning[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-warning:hover:hover, button.btn.btn-warning.disabled:focus:hover, button.btn.btn-warning[disabled]:focus:hover, fieldset[disabled] button.btn.btn-warning:focus:hover, button.btn.btn-warning.disabled.focus:hover, button.btn.btn-warning[disabled].focus:hover, fieldset[disabled] button.btn.btn-warning.focus:hover, button.btn.btn-warning.disabled:active:hover, button.btn.btn-warning[disabled]:active:hover, fieldset[disabled] button.btn.btn-warning:active:hover, button.btn.btn-warning.disabled.active:hover, button.btn.btn-warning[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-warning.active:hover {\n      transform: none; }\n  button.btn.btn-warning:hover, button.btn.btn-warning:focus, button.btn.btn-warning.focus, button.btn.btn-warning:active, button.btn.btn-warning.active {\n    background: #e7ba08;\n    border-color: #cfa200; }\n  button.btn.btn-warning:active, button.btn.btn-warning:target {\n    background-color: #c49e07; }\n\nbutton.btn.btn-danger {\n  background: #f95372;\n  border-color: #f95372; }\n  button.btn.btn-danger.disabled, button.btn.btn-danger[disabled], fieldset[disabled] button.btn.btn-danger, button.btn.btn-danger.disabled:hover, button.btn.btn-danger[disabled]:hover,\n  fieldset[disabled] button.btn.btn-danger:hover, button.btn.btn-danger.disabled:focus, button.btn.btn-danger[disabled]:focus, fieldset[disabled] button.btn.btn-danger:focus, button.btn.btn-danger.disabled.focus, button.btn.btn-danger[disabled].focus, fieldset[disabled] button.btn.btn-danger.focus, button.btn.btn-danger.disabled:active, button.btn.btn-danger[disabled]:active, fieldset[disabled] button.btn.btn-danger:active, button.btn.btn-danger.disabled.active, button.btn.btn-danger[disabled].active,\n  fieldset[disabled] button.btn.btn-danger.active {\n    background: #f95372;\n    border-color: #ff5f7e; }\n    button.btn.btn-danger.disabled:hover, button.btn.btn-danger[disabled]:hover, fieldset[disabled] button.btn.btn-danger:hover, button.btn.btn-danger.disabled:hover:hover, button.btn.btn-danger[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-danger:hover:hover, button.btn.btn-danger.disabled:focus:hover, button.btn.btn-danger[disabled]:focus:hover, fieldset[disabled] button.btn.btn-danger:focus:hover, button.btn.btn-danger.disabled.focus:hover, button.btn.btn-danger[disabled].focus:hover, fieldset[disabled] button.btn.btn-danger.focus:hover, button.btn.btn-danger.disabled:active:hover, button.btn.btn-danger[disabled]:active:hover, fieldset[disabled] button.btn.btn-danger:active:hover, button.btn.btn-danger.disabled.active:hover, button.btn.btn-danger[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-danger.active:hover {\n      transform: none; }\n  button.btn.btn-danger:hover, button.btn.btn-danger:focus, button.btn.btn-danger.focus, button.btn.btn-danger:active, button.btn.btn-danger.active {\n    background: #f95372;\n    border-color: #e13b5a; }\n  button.btn.btn-danger:active, button.btn.btn-danger:target {\n    background-color: #d44761; }\n\nbutton.btn.btn-inverse {\n  background: #ffffff;\n  border-color: #ffffff;\n  color: #ffffff; }\n  button.btn.btn-inverse.disabled, button.btn.btn-inverse[disabled], fieldset[disabled] button.btn.btn-inverse, button.btn.btn-inverse.disabled:hover, button.btn.btn-inverse[disabled]:hover,\n  fieldset[disabled] button.btn.btn-inverse:hover, button.btn.btn-inverse.disabled:focus, button.btn.btn-inverse[disabled]:focus, fieldset[disabled] button.btn.btn-inverse:focus, button.btn.btn-inverse.disabled.focus, button.btn.btn-inverse[disabled].focus, fieldset[disabled] button.btn.btn-inverse.focus, button.btn.btn-inverse.disabled:active, button.btn.btn-inverse[disabled]:active, fieldset[disabled] button.btn.btn-inverse:active, button.btn.btn-inverse.disabled.active, button.btn.btn-inverse[disabled].active,\n  fieldset[disabled] button.btn.btn-inverse.active {\n    background: #ffffff;\n    border-color: white; }\n    button.btn.btn-inverse.disabled:hover, button.btn.btn-inverse[disabled]:hover, fieldset[disabled] button.btn.btn-inverse:hover, button.btn.btn-inverse.disabled:hover:hover, button.btn.btn-inverse[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-inverse:hover:hover, button.btn.btn-inverse.disabled:focus:hover, button.btn.btn-inverse[disabled]:focus:hover, fieldset[disabled] button.btn.btn-inverse:focus:hover, button.btn.btn-inverse.disabled.focus:hover, button.btn.btn-inverse[disabled].focus:hover, fieldset[disabled] button.btn.btn-inverse.focus:hover, button.btn.btn-inverse.disabled:active:hover, button.btn.btn-inverse[disabled]:active:hover, fieldset[disabled] button.btn.btn-inverse:active:hover, button.btn.btn-inverse.disabled.active:hover, button.btn.btn-inverse[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-inverse.active:hover {\n      transform: none; }\n  button.btn.btn-inverse:hover, button.btn.btn-inverse:focus, button.btn.btn-inverse.focus, button.btn.btn-inverse:active, button.btn.btn-inverse.active {\n    background: #ffffff;\n    border-color: #e7e7e7; }\n  button.btn.btn-inverse:active, button.btn.btn-inverse:target, button.btn.btn-inverse:hover {\n    background-color: #ffffff;\n    color: #ffffff; }\n\n.btn-with-icon i {\n  margin-right: 10px; }\n\n.btn-group :hover, .btn-toolbar :hover {\n  transform: none; }\n\n.btn-group button.btn.btn-primary {\n  border-color: #009ff3; }\n  .btn-group button.btn.btn-primary:hover {\n    border-color: #0093e7; }\n\n.btn-group button.btn.btn-danger {\n  border-color: #ed4766; }\n  .btn-group button.btn.btn-danger:hover {\n    border-color: #e13b5a; }\n\n.btn-group button.btn.btn-info {\n  border-color: #34cee5; }\n  .btn-group button.btn.btn-info:hover {\n    border-color: #28c2d9; }\n\n.btn-group button.btn.btn-success {\n  border-color: #7fc623; }\n  .btn-group button.btn.btn-success:hover {\n    border-color: #73ba17; }\n\n.btn-group button.btn.btn-warning {\n  border-color: #dbae00; }\n  .btn-group button.btn.btn-warning:hover {\n    border-color: #cfa200; }\n\n.btn-group .dropdown-menu {\n  margin-top: 0px; }\n\n.btn-toolbar {\n  display: inline-block; }\n\n.btn .caret {\n  margin-left: 2px; }\n\nbutton.progress-button .progress {\n  margin-bottom: 0;\n  border-radius: 0; }\n\nbutton.progress-button:hover {\n  transform: none; }\n\nbutton.progress-button.progress-button-style-shrink.btn.disabled.progress-button-dir-horizontal:hover {\n  transform: scaleY(0.3); }\n\nbutton.progress-button.progress-button-style-shrink.btn.disabled.progress-button-dir-vertical:hover {\n  transform: scaleX(0.1); }\n\nbutton.progress-button.btn.btn-primary {\n  border-radius: 0; }\n  button.progress-button.btn.btn-primary .content:after, button.progress-button.btn.btn-primary .content:before {\n    color: #002233; }\n  button.progress-button.btn.btn-primary.progress-button-style-move-up .content, button.progress-button.btn.btn-primary.progress-button-style-slide-down .content {\n    background-color: #0089cc; }\n  button.progress-button.btn.btn-primary.progress-button-style-lateral-lines .progress-inner {\n    border-color: #0089cc;\n    background: 0 0; }\n  button.progress-button.btn.btn-primary .progress {\n    background-color: #0089cc;\n    box-shadow: 0 1px 0 #0089cc; }\n  button.progress-button.btn.btn-primary .progress-inner {\n    background-color: #006799; }\n  button.progress-button.btn.btn-primary.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-primary.progress-button-perspective .content {\n      background-color: #00abff; }\n\nbutton.progress-button.btn.btn-default {\n  border-radius: 0; }\n  button.progress-button.btn.btn-default .content:after, button.progress-button.btn.btn-default .content:before {\n    color: #999999; }\n  button.progress-button.btn.btn-default.progress-button-style-move-up .content, button.progress-button.btn.btn-default.progress-button-style-slide-down .content {\n    background-color: #e6e6e6; }\n  button.progress-button.btn.btn-default.progress-button-style-lateral-lines .progress-inner {\n    border-color: #e6e6e6;\n    background: 0 0; }\n  button.progress-button.btn.btn-default .progress {\n    background-color: #e6e6e6;\n    box-shadow: 0 1px 0 #e6e6e6; }\n  button.progress-button.btn.btn-default .progress-inner {\n    background-color: #cccccc; }\n  button.progress-button.btn.btn-default.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-default.progress-button-perspective .content {\n      background-color: #ffffff; }\n\nbutton.progress-button.btn.btn-success {\n  border-radius: 0; }\n  button.progress-button.btn.btn-success .content:after, button.progress-button.btn.btn-success .content:before {\n    color: #1d2c09; }\n  button.progress-button.btn.btn-success.progress-button-style-move-up .content, button.progress-button.btn.btn-success.progress-button-style-slide-down .content {\n    background-color: #70a925; }\n  button.progress-button.btn.btn-success.progress-button-style-lateral-lines .progress-inner {\n    border-color: #70a925;\n    background: 0 0; }\n  button.progress-button.btn.btn-success .progress {\n    background-color: #70a925;\n    box-shadow: 0 1px 0 #70a925; }\n  button.progress-button.btn.btn-success .progress-inner {\n    background-color: #547f1c; }\n  button.progress-button.btn.btn-success.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-success.progress-button-perspective .content {\n      background-color: #8bd22f; }\n\nbutton.progress-button.btn.btn-info {\n  border-radius: 0; }\n  button.progress-button.btn.btn-info .content:after, button.progress-button.btn.btn-info .content:before {\n    color: #07535e; }\n  button.progress-button.btn.btn-info.progress-button-style-move-up .content, button.progress-button.btn.btn-info.progress-button-style-slide-down .content {\n    background-color: #11d0ed; }\n  button.progress-button.btn.btn-info.progress-button-style-lateral-lines .progress-inner {\n    border-color: #11d0ed;\n    background: 0 0; }\n  button.progress-button.btn.btn-info .progress {\n    background-color: #11d0ed;\n    box-shadow: 0 1px 0 #11d0ed; }\n  button.progress-button.btn.btn-info .progress-inner {\n    background-color: #0ea6bd; }\n  button.progress-button.btn.btn-info.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-info.progress-button-perspective .content {\n      background-color: #40daf1; }\n\nbutton.progress-button.btn.btn-warning {\n  border-radius: 0; }\n  button.progress-button.btn.btn-warning .content:after, button.progress-button.btn.btn-warning .content:before {\n    color: #221b01; }\n  button.progress-button.btn.btn-warning.progress-button-style-move-up .content, button.progress-button.btn.btn-warning.progress-button-style-slide-down .content {\n    background-color: #b69206; }\n  button.progress-button.btn.btn-warning.progress-button-style-lateral-lines .progress-inner {\n    border-color: #b69206;\n    background: 0 0; }\n  button.progress-button.btn.btn-warning .progress {\n    background-color: #b69206;\n    box-shadow: 0 1px 0 #b69206; }\n  button.progress-button.btn.btn-warning .progress-inner {\n    background-color: #846b05; }\n  button.progress-button.btn.btn-warning.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-warning.progress-button-perspective .content {\n      background-color: #e7ba08; }\n\nbutton.progress-button.btn.btn-danger {\n  border-radius: 0; }\n  button.progress-button.btn.btn-danger .content:after, button.progress-button.btn.btn-danger .content:before {\n    color: #7c041b; }\n  button.progress-button.btn.btn-danger.progress-button-style-move-up .content, button.progress-button.btn.btn-danger.progress-button-style-slide-down .content {\n    background-color: #f7224a; }\n  button.progress-button.btn.btn-danger.progress-button-style-lateral-lines .progress-inner {\n    border-color: #f7224a;\n    background: 0 0; }\n  button.progress-button.btn.btn-danger .progress {\n    background-color: #f7224a;\n    box-shadow: 0 1px 0 #f7224a; }\n  button.progress-button.btn.btn-danger .progress-inner {\n    background-color: #de0830; }\n  button.progress-button.btn.btn-danger.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-danger.progress-button-perspective .content {\n      background-color: #f95372; }\n\n.btn-raised {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.35); }\n\n.btn-mm {\n  padding: 5px 11px;\n  font-size: 13px; }\n\n.btn-xm {\n  padding: 8px 14px;\n  font-size: 16px; }\n\n.btn-group-xs > .btn, .btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.btn-group-sm > .btn, .btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-group-lg > .btn, .btn-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px; }\n\n.dropdown button.btn.btn-default.dropdown-toggle {\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  background-color: transparent; }\n  .dropdown button.btn.btn-default.dropdown-toggle:focus, .dropdown button.btn.btn-default.dropdown-toggle:active {\n    background-color: #ffffff; }\n\n.ng2 .dropdown button.btn.btn-default.dropdown-toggle:focus, .ng2 .dropdown button.btn.btn-default.dropdown-toggle:active, .blur .dropdown button.btn.btn-default.dropdown-toggle:focus, .blur .dropdown button.btn.btn-default.dropdown-toggle:active {\n  background-color: transparent; }\n\n.bootstrap-select .dropdown-toggle:focus {\n  outline: none !important; }\n\n.bootstrap-select button.btn-default:focus {\n  color: #ffffff; }\n\n.bootstrap-select .btn {\n  transition: none; }\n\n.i-face {\n  display: inline-block;\n  background: url(\"assets/img/face.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n.i-money {\n  display: inline-block;\n  background: url(\"assets/img/money.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n.i-person {\n  display: inline-block;\n  background: url(\"assets/img/person.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n.i-refresh {\n  display: inline-block;\n  background: url(\"assets/img/refresh.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n::-webkit-scrollbar {\n  width: 0.5em;\n  height: 0.5em; }\n\n::-webkit-scrollbar-thumb {\n  background: #d9d9d9;\n  cursor: pointer; }\n\n::-webkit-scrollbar-track {\n  background: transparent; }\n\nbody {\n  scrollbar-face-color: #d9d9d9;\n  scrollbar-track-color: transparent; }\n\nhtml {\n  position: relative;\n  min-width: 320px; }\n\nhtml, body {\n  min-height: 100%;\n  height: 100%;\n  min-width: 320px; }\n\nmain {\n  min-height: 100%;\n  position: relative;\n  font: 14px/16px \"Roboto\", sans-serif;\n  color: #ffffff;\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,7db9e8+100 */\n  background: #1e5799;\n  /* Old browsers */\n  background: -moz-linear-gradient(right, #1e5799 0%, #7db9e8 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(right, #1e5799 0%, #7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to left, #1e5799 0%, #7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=1 );\n  /* IE6-9 */ }\n  main .additional-bg {\n    display: none; }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  html {\n    overflow: hidden;\n    height: 100%; }\n  body {\n    overflow: auto;\n    height: 100%; } }\n\na {\n  transition: color 0.5s ease;\n  outline: 0 !important; }\n\n.body-bg {\n  display: none; }\n\n.al-header {\n  display: block;\n  height: 49px;\n  margin: 0;\n  background-repeat: repeat-x;\n  position: relative;\n  z-index: 905;\n  color: #444444; }\n\n.al-main {\n  margin-left: 180px;\n  padding: 66px 0 34px 0;\n  min-height: 500px;\n  position: relative; }\n\n.al-footer {\n  height: 34px;\n  padding: 0 18px 0 200px;\n  width: 100%;\n  position: absolute;\n  display: block;\n  bottom: 0;\n  font-size: 13px;\n  color: #ffffff;\n  transition: padding-left 0.5s ease; }\n\n.al-footer-main {\n  float: left;\n  margin-left: 15px; }\n\n.al-copy {\n  float: left; }\n\n.al-footer-right {\n  float: right;\n  margin-right: 12px; }\n  .al-footer-right i {\n    margin: 0 4px;\n    color: #f95372;\n    font-size: 12px; }\n  .al-footer-right a {\n    margin-left: 4px;\n    color: #ffffff; }\n    .al-footer-right a:hover {\n      color: #f95372; }\n\n.al-share {\n  margin: -6px 0 0 12px;\n  padding: 0;\n  list-style: none;\n  float: left; }\n  .al-share li {\n    list-style: none;\n    float: left;\n    margin-left: 16px; }\n    .al-share li i {\n      cursor: pointer;\n      transition: all 0.1s ease;\n      color: white;\n      padding: 6px;\n      box-sizing: content-box;\n      font-size: 16px; }\n      .al-share li i:hover {\n        transform: scale(1.2); }\n    .al-share li i.fa-facebook-square {\n      color: #3b5998; }\n    .al-share li i.fa-twitter-square {\n      color: #55acee; }\n    .al-share li i.fa-google-plus-square {\n      color: #dd4b39; }\n\n.al-content {\n  padding: 8px 32px 8px 40px; }\n\n@media screen and (max-width: 500px) {\n  .al-content {\n    padding: 8px 20px; } }\n\n.vis-hidden {\n  visibility: hidden;\n  position: absolute;\n  top: -9999px;\n  left: -9999px; }\n\n.icon-up, .icon-down {\n  width: 5px;\n  height: 13px;\n  display: block; }\n\n.icon-up {\n  background: url(\"assets/img/arrow-green-up.svg\") no-repeat 0 0; }\n\n.icon-down {\n  background: url(\"assets/img/arrow-red-down.svg\") no-repeat 0 0; }\n\n.disable-text-selection {\n  -webkit-touch-callout: none;\n  user-select: none; }\n\n.align-right {\n  text-align: right; }\n\n.amcharts-chart-div > a {\n  font-size: 6px !important; }\n\n.content-panel {\n  padding-left: 22px;\n  padding-top: 26px; }\n\n@media (max-width: 590px) {\n  .al-footer-right {\n    float: none;\n    margin-bottom: 19px;\n    margin-right: 0; }\n  .al-footer {\n    height: 76px;\n    text-align: center; }\n  .al-main {\n    padding-bottom: 76px; }\n  .al-footer-main {\n    float: none;\n    display: inline-block; } }\n\n.full-invisible {\n  visibility: hidden !important; }\n  .full-invisible * {\n    visibility: hidden !important; }\n\n.irs-grid-text {\n  color: #ffffff; }\n\n.text-right {\n  text-align: right; }\n\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.table {\n  margin-bottom: 0px; }\n  .table > thead > tr > th {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    white-space: nowrap; }\n    .table > thead > tr > th:first-child {\n      text-align: center; }\n    .table > thead > tr > th:last-child {\n      padding-right: 16px; }\n  .table > tbody > tr > tr:first-child {\n    padding-top: 1px; }\n  .table > tbody > tr > td {\n    padding: 0px 8px;\n    line-height: 35px;\n    border-top: 1px solid rgba(255, 255, 255, 0.3); }\n    .table > tbody > tr > td:first-child {\n      text-align: center; }\n    .table > tbody > tr > td:last-child {\n      padding-right: 16px !important; }\n\n.table-id {\n  text-align: left !important;\n  width: 40px; }\n\n.table-arr {\n  width: 5px;\n  padding: 10px 8px 8px 0 !important; }\n\n.table-no-borders {\n  border: none; }\n  .table-no-borders td, .table-no-borders th, .table-no-borders tr {\n    border: none !important; }\n\n.editable-wrap .btn-group.form-control {\n  background-color: transparent; }\n\n.editable-tr-wrap .editable-wrap {\n  vertical-align: super; }\n\n.editable-tr-wrap .editable-controls input.editable-input {\n  width: 110px; }\n\n.editable-tr-wrap td {\n  width: 20%; }\n\n.editable-table-button {\n  width: 70px; }\n\n.add-row-editable-table {\n  margin-bottom: 10px; }\n\n.add-row-editable-table + table {\n  margin-bottom: 5px; }\n\n.select-page-size-wrap {\n  width: 150px; }\n\n.table .header-row th {\n  vertical-align: middle;\n  padding: 0 8px; }\n\ntr.editable-row input.form-control {\n  vertical-align: middle; }\n\n.select-td .editable-select {\n  margin-bottom: 1px; }\n\n@media screen and (max-width: 1199px) {\n  .editable-tr-wrap .editable-wrap {\n    vertical-align: middle; } }\n\n.browser-icons {\n  width: 41px; }\n\n.st-sort-ascent, .st-sort-descent {\n  position: relative; }\n\n.st-sort-ascent:after, .st-sort-descent:after {\n  width: 0;\n  height: 0;\n  border-bottom: 4px solid #ffffff;\n  border-top: 4px solid transparent;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  margin-bottom: 2px; }\n\n.st-sort-descent:after {\n  transform: rotate(-180deg);\n  margin-bottom: -2px; }\n\n.sortable th {\n  cursor: pointer; }\n  .sortable th:after {\n    content: '';\n    display: inline-block;\n    width: 8px;\n    margin-left: 8px; }\n\na.email-link {\n  color: #ffffff; }\n  a.email-link:hover {\n    color: #f95372; }\n\ninput.search-input {\n  margin-left: -8px;\n  padding-left: 8px; }\n\n.table .pagination {\n  margin: 4px 0 -12px 0; }\n  .table .pagination a {\n    cursor: pointer; }\n\n.vertical-scroll {\n  max-height: 214px; }\n\n.pagination > li > a, .pagination > li > span {\n  background: transparent; }\n\n.pagination > li:first-child > a, .pagination > li:first-child > span {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n.pagination > li:last-child > a, .pagination > li:last-child > span {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.status-button {\n  width: 60px; }\n\n.table .editable-wrap .editable-controls, .table .editable-wrap .editable-error {\n  vertical-align: sub; }\n  .table .editable-wrap .editable-controls .btn, .table .editable-wrap .editable-error .btn {\n    padding: 3px 8px; }\n    .table .editable-wrap .editable-controls .btn.dropdown-toggle, .table .editable-wrap .editable-error .btn.dropdown-toggle {\n      padding: 3px 20px;\n      margin-top: 3px; }\n  .table .editable-wrap .editable-controls input, .table .editable-wrap .editable-error input {\n    line-height: 1px;\n    height: 30px; }\n\n.form-inline button[type=\"submit\"].editable-table-button {\n  margin-left: 0; }\n\n.table > thead > tr > th {\n  border-bottom: none; }\n\n.table > tbody > tr.no-top-border:first-child > td {\n  border-top: none; }\n\n.black-muted-bg {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.table-hover > tbody > tr:hover {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.table-bordered,\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid rgba(255, 255, 255, 0.3); }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.table > tbody > tr.primary > td {\n  background-color: rgba(0, 171, 255, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.primary > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.primary > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.success > td {\n  background-color: rgba(139, 210, 47, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.success > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.success > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.warning > td {\n  background-color: rgba(231, 186, 8, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.warning > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.warning > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.danger > td {\n  background-color: rgba(249, 83, 114, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.danger > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.danger > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.info > td {\n  background-color: rgba(64, 218, 241, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.info > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.info > td a.email-link:hover {\n      color: #f95372; }\n\n.editable-click, a.editable-click {\n  color: #ffffff;\n  border-bottom: dashed 1px rgba(255, 255, 255, 0.5); }\n\nth {\n  font-weight: 400; }\n\n.editable-empty {\n  color: #d44761; }\n\n.table > tbody > tr > th {\n  border: none; }\n\n.table-striped > tbody > tr > td {\n  border: none; }\n\n.pagination > li > a,\n.pagination > li > span {\n  color: #ffffff;\n  border-color: rgba(255, 255, 255, 0.5); }\n\n.pagination > li:first-of-type > a,\n.pagination > li:first-of-type > span {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.pagination > li:last-of-type > a,\n.pagination > li:last-of-type > span {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border-color: rgba(255, 255, 255, 0.5) !important; }\n\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #ffffff; }\n\n.page-item.disabled .page-link, .page-item.disabled .page-link:focus, .page-item.disabled .page-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #ffffff; }\n\n.editable-buttons .btn-with-icon i {\n  margin-right: 0; }\n\n.table-responsive {\n  margin-top: 10px; }\n\n.label {\n  border-radius: 0; }\n\n.label-primary {\n  background: #00abff; }\n\n.label-info {\n  background: #4dc4ff; }\n\n.label-success {\n  background: #8bd22f; }\n\n.label-warning {\n  background: #e7ba08; }\n\n.label-danger {\n  background: #f95372; }\n\n.form-horizontal label {\n  line-height: 34px;\n  margin-bottom: 0;\n  padding-top: 0 !important; }\n\n.form-group label {\n  margin-bottom: 5px;\n  color: #ffffff;\n  font-weight: 400;\n  font-size: 13px; }\n\n.form-control {\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.1);\n  box-shadow: none;\n  font-size: 14px; }\n  .form-control::-webkit-input-placeholder {\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control:-moz-placeholder {\n    /* Firefox 18- */\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control::-moz-placeholder {\n    /* Firefox 19+ */\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control:-ms-input-placeholder {\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control:focus {\n    box-shadow: none;\n    border-color: #33bcff;\n    background: rgba(255, 255, 255, 0.1); }\n\nselect.form-control {\n  padding-left: 8px; }\n\ntextarea.form-control {\n  height: 96px; }\n\n.form-inline .form-group input {\n  width: 100%; }\n\n.form-inline .form-group label {\n  margin-right: 12px; }\n\n.form-inline button[type=\"submit\"] {\n  margin-left: 12px; }\n\n.switch-container {\n  display: inline-block; }\n  .switch-container.primary .bootstrap-switch.bootstrap-switch-on {\n    border-color: #00abff; }\n  .switch-container.success .bootstrap-switch.bootstrap-switch-on {\n    border-color: #8bd22f; }\n  .switch-container.warning .bootstrap-switch.bootstrap-switch-on {\n    border-color: #e7ba08; }\n  .switch-container.danger .bootstrap-switch.bootstrap-switch-on {\n    border-color: #f95372; }\n  .switch-container.info .bootstrap-switch.bootstrap-switch-on {\n    border-color: #4dc4ff; }\n\n.bootstrap-switch {\n  border-radius: 5px;\n  border: 1px solid #ffffff;\n  transition: border-color ease-in-out .7s, box-shadow ease-in-out .7s; }\n  .bootstrap-switch:focus {\n    outline: none; }\n  .bootstrap-switch.bootstrap-switch-off {\n    border-color: rgba(255, 255, 255, 0.5); }\n  .bootstrap-switch.bootstrap-switch-focused {\n    box-shadow: none; }\n    .bootstrap-switch.bootstrap-switch-focused.bootstrap-switch-off {\n      border-color: rgba(255, 255, 255, 0.5); }\n  .bootstrap-switch .bootstrap-switch-container {\n    border-radius: 0; }\n    .bootstrap-switch .bootstrap-switch-container:focus {\n      outline: none; }\n  .bootstrap-switch .bootstrap-switch-handle-on {\n    border-radius: 0; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default {\n      background: #ffffff; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success {\n      background: #8bd22f; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary {\n      background: #00abff; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning {\n      background: #e7ba08; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger {\n      background: #f95372; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info {\n      background: #4dc4ff; }\n  .bootstrap-switch .bootstrap-switch-handle-off {\n    border-radius: 0; }\n  .bootstrap-switch .bootstrap-switch-label {\n    background: transparent; }\n  .bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n    transition: margin-left .2s; }\n\n.switches {\n  margin-left: -12px;\n  margin-bottom: -12px; }\n  .switches .switch-container {\n    float: left;\n    margin-left: 12px;\n    margin-bottom: 12px; }\n\n.input-group {\n  width: 100%;\n  margin-bottom: 15px; }\n  .input-group > span {\n    border-radius: 0; }\n\n.nowrap {\n  white-space: nowrap; }\n\n.cut-with-dots {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block; }\n\nlabel.custom-radio {\n  @padding-right : 0;\n  padding-left: 0;\n  margin-bottom: 0; }\n  label.custom-radio > input {\n    height: 0;\n    z-index: -100 !important;\n    opacity: 0;\n    position: absolute; }\n    label.custom-radio > input:checked + span:before {\n      content: \"\\f00c\";\n      font-weight: 300; }\n    label.custom-radio > input:disabled + span {\n      color: rgba(255, 255, 255, 0.4);\n      cursor: not-allowed; }\n      label.custom-radio > input:disabled + span:before {\n        border-color: rgba(255, 255, 255, 0.4) !important;\n        cursor: not-allowed; }\n  label.custom-radio > span {\n    position: relative;\n    display: inline-block;\n    margin: 0;\n    line-height: 16px;\n    font-weight: 300;\n    cursor: pointer;\n    padding-left: 22px;\n    width: 100%; }\n    label.custom-radio > span:before {\n      cursor: pointer;\n      font-family: fontAwesome;\n      font-weight: 300;\n      font-size: 12px;\n      color: #ffffff;\n      content: \"\\a0\";\n      background-color: transparent;\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      border-radius: 0;\n      display: inline-block;\n      text-align: center;\n      height: 16px;\n      line-height: 14px;\n      min-width: 16px;\n      margin-right: 6px;\n      position: relative;\n      top: 0;\n      margin-left: -22px;\n      float: left; }\n    label.custom-radio > span:hover:before {\n      border-color: #33bcff; }\n  label.custom-radio > input:checked + span:before {\n    content: \"\\f111\"; }\n  label.custom-radio > span:before {\n    border-radius: 16px;\n    font-size: 9px; }\n\nlabel.custom-input-primary > span:before {\n  color: #00abff; }\n\nlabel.custom-input-primary > span:hover:before {\n  border-color: #00abff; }\n\nlabel.custom-input-success > span:before {\n  color: #8bd22f; }\n\nlabel.custom-input-success > span:hover:before {\n  border-color: #8bd22f; }\n\nlabel.custom-input-warning > span:before {\n  color: #e7ba08; }\n\nlabel.custom-input-warning > span:hover:before {\n  border-color: #e7ba08; }\n\nlabel.custom-input-danger > span:before {\n  color: #f95372; }\n\nlabel.custom-input-danger > span:hover:before {\n  border-color: #f95372; }\n\n.form-horizontal .radio, .form-horizontal .radio-inline {\n  padding-top: 0; }\n\n.input-demo {\n  line-height: 25px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.has-feedback .form-control {\n  padding-right: 42.5px; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 21px;\n  font-size: 18px; }\n\n.bootstrap-select .btn-default:focus {\n  color: #ffffff; }\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.4);\n  border-color: rgba(255, 255, 255, 0.49); }\n  .form-control[disabled]::-webkit-input-placeholder, .form-control[readonly]::-webkit-input-placeholder, fieldset[disabled] .form-control::-webkit-input-placeholder {\n    color: #ffffff;\n    opacity: 0.5; }\n  .form-control[disabled]:-moz-placeholder, .form-control[readonly]:-moz-placeholder, fieldset[disabled] .form-control:-moz-placeholder {\n    /* Firefox 18- */\n    color: #ffffff;\n    opacity: 0.5; }\n  .form-control[disabled]::-moz-placeholder, .form-control[readonly]::-moz-placeholder, fieldset[disabled] .form-control::-moz-placeholder {\n    /* Firefox 19+ */\n    color: #ffffff;\n    opacity: 0.5; }\n  .form-control[disabled]:-ms-input-placeholder, .form-control[readonly]:-ms-input-placeholder, fieldset[disabled] .form-control:-ms-input-placeholder {\n    color: #ffffff;\n    opacity: 0.5; }\n\n.form-control-rounded {\n  border-radius: 16px; }\n\n.help-block {\n  color: #ffffff; }\n\n.help-block.error-block {\n  display: none; }\n  .has-error .help-block.error-block.basic-block {\n    display: block; }\n\n.input-group-addon-danger {\n  background: #f95372;\n  color: #ffffff;\n  border-color: #f95372; }\n\n.input-group-addon-warning {\n  background: #e7ba08;\n  color: #ffffff;\n  border-color: #e7ba08; }\n\n.input-group-addon-success {\n  background: #8bd22f;\n  color: #ffffff;\n  border-color: #8bd22f; }\n\n.input-group-addon-primary {\n  background: #00abff;\n  color: #ffffff;\n  border-color: #00abff; }\n\n.checkbox-demo-row {\n  margin-bottom: 12px; }\n\n.dropdown-menu {\n  border-radius: 5px; }\n\n.dropdown button.btn.btn-default.dropdown-toggle {\n  color: #ffffff; }\n\n.bootstrap-select.btn-group button.btn.btn-default {\n  background: transparent;\n  color: #ffffff; }\n  .bootstrap-select.btn-group button.btn.btn-default:hover {\n    background: #ffffff;\n    box-shadow: none;\n    outline: 0 !important; }\n  .bootstrap-select.btn-group button.btn.btn-default:active {\n    background: #ffffff;\n    box-shadow: none; }\n\n.bootstrap-select.btn-group.open > .btn.btn-default.dropdown-toggle {\n  background: #ffffff;\n  box-shadow: none;\n  border-color: rgba(255, 255, 255, 0.5); }\n\n.bootstrap-select.btn-group.open > .btn {\n  border-radius: 5px 5px 0 0; }\n\n.bootstrap-select.btn-group.open .dropdown-menu.open {\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-top: none;\n  border-radius: 0 0 5px 5px; }\n\n.bootstrap-select.btn-group.with-search.open .btn-default + .dropdown-menu .bs-searchbox .form-control {\n  background-color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.6); }\n\n.bootstrap-select.btn-group.with-search.open .btn-default + .dropdown-menu .no-results {\n  color: #7d7d7d; }\n\n.bootstrap-select.btn-group .notify {\n  color: #7d7d7d; }\n\n.has-success {\n  position: relative; }\n  .has-success .control-label {\n    color: #ffffff; }\n  .has-success .form-control {\n    border: 1px solid #a2db59; }\n    .has-success .form-control:focus {\n      box-shadow: none;\n      border-color: #8bd22f; }\n  .has-success label.custom-checkbox {\n    color: #a2db59; }\n    .has-success label.custom-checkbox > span:before {\n      color: #a2db59; }\n    .has-success label.custom-checkbox > span:hover:before {\n      border-color: #a2db59; }\n  .has-success .form-control-feedback {\n    color: #a2db59; }\n  .has-success .input-group-addon {\n    background-color: #a2db59;\n    color: #ffffff; }\n\n.has-warning {\n  position: relative; }\n  .has-warning .control-label {\n    color: #ffffff; }\n  .has-warning .form-control {\n    border: 1px solid #ecc839; }\n    .has-warning .form-control:focus {\n      box-shadow: none;\n      border-color: #e7ba08; }\n  .has-warning label.custom-checkbox {\n    color: #ecc839; }\n    .has-warning label.custom-checkbox > span:before {\n      color: #ecc839; }\n    .has-warning label.custom-checkbox > span:hover:before {\n      border-color: #ecc839; }\n  .has-warning .form-control-feedback {\n    color: #ecc839; }\n  .has-warning .input-group-addon {\n    background-color: #ecc839;\n    color: #ffffff; }\n\n.has-error {\n  position: relative; }\n  .has-error .control-label {\n    color: #ffffff; }\n  .has-error .form-control {\n    border: 1px solid #fa758e; }\n    .has-error .form-control:focus {\n      box-shadow: none;\n      border-color: #f95372; }\n  .has-error label.custom-checkbox {\n    color: #fa758e; }\n    .has-error label.custom-checkbox > span:before {\n      color: #fa758e; }\n    .has-error label.custom-checkbox > span:hover:before {\n      border-color: #fa758e; }\n  .has-error .form-control-feedback {\n    color: #fa758e; }\n  .has-error .input-group-addon {\n    background-color: #fa758e;\n    color: #ffffff; }\n\n.bootstrap-tagsinput {\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  box-shadow: none;\n  max-width: 100%;\n  font-size: 14px;\n  line-height: 26px;\n  width: 100%; }\n  .bootstrap-tagsinput.form-control {\n    display: block;\n    width: 100%; }\n  .bootstrap-tagsinput .tag {\n    border-radius: 3px;\n    font-weight: 400;\n    font-size: 11px;\n    padding: 4px 8px; }\n    .bootstrap-tagsinput .tag [data-role=\"remove\"]:hover {\n      box-shadow: none; }\n  .bootstrap-tagsinput input {\n    background-color: rgba(255, 255, 255, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 5px;\n    line-height: 22px;\n    font-size: 11px;\n    min-width: 53px; }\n    .bootstrap-tagsinput input::-webkit-input-placeholder {\n      color: #ffffff;\n      opacity: 0.8; }\n    .bootstrap-tagsinput input:-moz-placeholder {\n      /* Firefox 18- */\n      color: #ffffff;\n      opacity: 0.8; }\n    .bootstrap-tagsinput input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: #ffffff;\n      opacity: 0.8; }\n    .bootstrap-tagsinput input:-ms-input-placeholder {\n      color: #ffffff;\n      opacity: 0.8; }\n\n.progress {\n  background: rgba(0, 0, 0, 0.15); }\n\n.progress-bar-primary {\n  background-color: #00abff; }\n\n.progress-bar-success {\n  background-color: #aee06d; }\n\n.progress-bar-warning {\n  background-color: #e7ba08; }\n\n.progress-bar-danger {\n  background-color: #f95372; }\n\n.has-success .input-group-addon {\n  border: none; }\n\n.input-group > span.addon-left {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.input-group > span.addon-right {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.with-primary-addon:focus {\n  border-color: #00abff; }\n\n.with-warning-addon:focus {\n  border-color: #e7ba08; }\n\n.with-success-addon:focus {\n  border-color: #8bd22f; }\n\n.with-danger-addon:focus {\n  border-color: #f95372; }\n\n.sub-little-text {\n  font-size: 12px; }\n\n.rating {\n  font-size: 20px; }\n\nrating-inputs span {\n  vertical-align: middle; }\n\nlabel.custom-checkbox {\n  padding-right: 0;\n  padding-left: 0;\n  margin-bottom: 0; }\n  label.custom-checkbox > input {\n    height: 0;\n    z-index: -100 !important;\n    opacity: 0;\n    position: absolute; }\n    label.custom-checkbox > input:checked + span:before {\n      content: \"\\f00c\";\n      font-weight: 300; }\n    label.custom-checkbox > input:disabled + span {\n      color: rgba(255, 255, 255, 0.4);\n      cursor: not-allowed; }\n      label.custom-checkbox > input:disabled + span:before {\n        border-color: rgba(255, 255, 255, 0.4) !important;\n        cursor: not-allowed; }\n  label.custom-checkbox > span {\n    position: relative;\n    display: inline-block;\n    margin: 0;\n    line-height: 16px;\n    font-weight: 300;\n    cursor: pointer;\n    padding-left: 22px;\n    width: 100%; }\n    label.custom-checkbox > span:before {\n      cursor: pointer;\n      font-family: fontAwesome;\n      font-weight: 300;\n      font-size: 12px;\n      color: #ffffff;\n      content: \"\\a0\";\n      background-color: transparent;\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      border-radius: 0;\n      display: inline-block;\n      text-align: center;\n      height: 16px;\n      line-height: 14px;\n      min-width: 16px;\n      margin-right: 6px;\n      position: relative;\n      top: 0;\n      margin-left: -22px;\n      float: left; }\n    label.custom-checkbox > span:hover:before {\n      border-color: #33bcff; }\n\n#tree-view .tree .node-value {\n  color: white; }\n\n#tree-view .tree .folding.node-expanded::before {\n  color: white; }\n\n#tree-view .tree .folding.node-collapsed::before {\n  color: white; }\n\n#tree-view .tree .folding.node-leaf::before {\n  color: white; }\n\n#tree-view .tree .over-drop-target {\n  border: 4px solid ghostwhite; }\n\n#tree-view .tree .node-value .node-selected::after {\n  background-color: white; }\n\n#tree-view .tree .node-value:after {\n  background-color: white; }\n"

/***/ },

/***/ "./ng2-admin/app/app.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;


/***/ },

/***/ "./ng2-admin/app/auth/auth-guard.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var auth_service_1 = __webpack_require__("./ng2-admin/app/auth/auth.service.ts");
var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.Auth !== 'undefined' && auth_service_1.Auth) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
exports.AuthGuard = AuthGuard;


/***/ },

/***/ "./ng2-admin/app/auth/auth.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var Auth = (function () {
    function Auth() {
    }
    Auth.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;


/***/ },

/***/ "./ng2-admin/app/environment.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ "./ng2-admin/app/global.state.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/Subject.js");
var GlobalState = (function () {
    function GlobalState() {
        var _this = this;
        this._data = new Subject_1.Subject();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    GlobalState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    GlobalState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    GlobalState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GlobalState);
    return GlobalState;
}());
exports.GlobalState = GlobalState;


/***/ },

/***/ "./ng2-admin/app/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/app.module.ts"));


/***/ },

/***/ "./ng2-admin/app/pages/pages.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Pages = (function () {
    function Pages() {
    }
    Pages.prototype.ngOnInit = function () {
    };
    Pages = __decorate([
        core_1.Component({
            selector: 'pages',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [],
            template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Pages);
    return Pages;
}());
exports.Pages = Pages;


/***/ },

/***/ "./ng2-admin/app/pages/pages.menu.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
exports.PAGES_MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'fa fa-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }
        ]
    }
];


/***/ },

/***/ "./ng2-admin/app/pages/pages.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var pages_routing_1 = __webpack_require__("./ng2-admin/app/pages/pages.routing.ts");
var nga_module_1 = __webpack_require__("./ng2-admin/app/theme/nga.module.ts");
var pages_component_1 = __webpack_require__("./ng2-admin/app/pages/pages.component.ts");
var auth_guard_service_1 = __webpack_require__("./ng2-admin/app/auth/auth-guard.service.ts");
var auth_service_1 = __webpack_require__("./ng2-admin/app/auth/auth.service.ts");
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, nga_module_1.NgaModule, pages_routing_1.routing],
            declarations: [pages_component_1.Pages],
            providers: [auth_guard_service_1.AuthGuard, auth_service_1.Auth]
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;


/***/ },

/***/ "./ng2-admin/app/pages/pages.routing.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var pages_component_1 = __webpack_require__("./ng2-admin/app/pages/pages.component.ts");
var auth_guard_service_1 = __webpack_require__("./ng2-admin/app/auth/auth-guard.service.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    { path: 'login', loadChildren: function () { return __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, "./ng2-admin/app/pages/login/login.module.ts")).then(function (mod) { return (mod.__esModule && mod.default) ? mod.default : mod; }); } },
    { path: 'not-found', loadChildren: function () { return __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, "./ng2-admin/app/pages/not-found/not-found.module.ts")).then(function (mod) { return (mod.__esModule && mod.default) ? mod.default : mod; }); } },
    {
        path: 'pages',
        component: pages_component_1.Pages,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: function () { return __webpack_require__.e/* System.import */(2).then(__webpack_require__.bind(null, "./ng2-admin/app/pages/dashboard/dashboard.module.ts")).then(function (mod) { return (mod.__esModule && mod.default) ? mod.default : mod; }); } },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ "./ng2-admin/app/theme/components/baBackTop/baBackTop.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaBackTop = (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position
            ? jQuery(el).fadeIn(this.showSpeed)
            : jQuery(el).fadeOut(this.showSpeed);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaBackTop.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaBackTop.prototype, "showSpeed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaBackTop.prototype, "moveSpeed", void 0);
    __decorate([
        core_1.ViewChild('baBackTop'), 
        __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
    ], BaBackTop.prototype, "_selector", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Boolean)
    ], BaBackTop.prototype, "_onClick", null);
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaBackTop.prototype, "_onWindowScroll", null);
    BaBackTop = __decorate([
        core_1.Component({
            selector: 'ba-back-top',
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baBackTop/baBackTop.scss")],
            template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BaBackTop);
    return BaBackTop;
    var _a;
}());
exports.BaBackTop = BaBackTop;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./ng2-admin/app/theme/components/baBackTop/baBackTop.scss":
/***/ function(module, exports) {

module.exports = ".ba-back-top {\n  position: fixed;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 45px;\n  text-align: center;\n  opacity: 0.4;\n  color: #00abff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  line-height: 46px; }\n  .ba-back-top:hover {\n    opacity: 0.8; }\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baBackTop/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baBackTop/baBackTop.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baCard/baCard.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaCard = (function () {
    function BaCard() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaCard.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaCard.prototype, "baCardClass", void 0);
    BaCard = __decorate([
        core_1.Component({
            selector: 'ba-card',
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baCard/baCard.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baCard/baCard.html"),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], BaCard);
    return BaCard;
}());
exports.BaCard = BaCard;


/***/ },

/***/ "./ng2-admin/app/theme/components/baCard/baCard.html":
/***/ function(module, exports) {

module.exports = "<div baCardBlur class=\"animated fadeIn card {{cardType}} {{baCardClass || ''}}\" zoom-in>\n    <div *ngIf=\"title\" class=\"card-header clearfix\">\n        <h3 class=\"card-title\" i18n>{{title}}</h3>\n    </div>\n    <div class=\"card-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baCard/baCard.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./ng2-admin/app/theme/components/baCard/baCardBlur.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var theme_1 = __webpack_require__("./ng2-admin/app/theme/index.ts");
var baCardBlurHelper_service_1 = __webpack_require__("./ng2-admin/app/theme/components/baCard/baCardBlurHelper.service.ts");
var BaCardBlur = (function () {
    function BaCardBlur(_baConfig, _baCardBlurHelper, _el) {
        this._baConfig = _baConfig;
        this._baCardBlurHelper = _baCardBlurHelper;
        this._el = _el;
        this.isEnabled = false;
        if (this._isEnabled()) {
            this._baCardBlurHelper.init();
            this._getBodyImageSizesOnBgLoad();
            this._recalculateCardStylesOnBgLoad();
            this.isEnabled = true;
        }
    }
    BaCardBlur.prototype._onWindowResize = function () {
        if (this._isEnabled()) {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    };
    BaCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function () {
            _this._bodyBgSize = _this._baCardBlurHelper.getBodyBgImageSizes();
        });
    };
    BaCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function (event) {
            setTimeout(_this._recalculateCardStyle.bind(_this));
        });
    };
    BaCardBlur.prototype._recalculateCardStyle = function () {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width)
            + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX)
            + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    };
    BaCardBlur.prototype._isEnabled = function () {
        return this._baConfig.get().theme.name === 'blur';
    };
    __decorate([
        core_1.HostBinding('class.card-blur'), 
        __metadata('design:type', Boolean)
    ], BaCardBlur.prototype, "isEnabled", void 0);
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaCardBlur.prototype, "_onWindowResize", null);
    BaCardBlur = __decorate([
        core_1.Directive({
            selector: '[baCardBlur]',
            providers: [baCardBlurHelper_service_1.BaCardBlurHelper]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _a) || Object, (typeof (_b = typeof baCardBlurHelper_service_1.BaCardBlurHelper !== 'undefined' && baCardBlurHelper_service_1.BaCardBlurHelper) === 'function' && _b) || Object, (typeof (_c = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _c) || Object])
    ], BaCardBlur);
    return BaCardBlur;
    var _a, _b, _c;
}());
exports.BaCardBlur = BaCardBlur;


/***/ },

/***/ "./ng2-admin/app/theme/components/baCard/baCardBlurHelper.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/Subject.js");
var BaCardBlurHelper = (function () {
    function BaCardBlurHelper() {
    }
    BaCardBlurHelper.prototype.init = function () {
        this._genBgImage();
        this._genImageLoadSubject();
    };
    BaCardBlurHelper.prototype.bodyBgLoad = function () {
        return this.imageLoadSubject;
    };
    BaCardBlurHelper.prototype.getBodyBgImageSizes = function () {
        var elemW = document.documentElement.clientWidth;
        var elemH = document.documentElement.clientHeight;
        if (elemW <= 640)
            return;
        var imgRatio = (this.image.height / this.image.width); // original img ratio
        var containerRatio = (elemH / elemW); // container ratio
        var finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        }
        else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return {
            width: finalWidth,
            height: finalHeight,
            positionX: (elemW - finalWidth) / 2,
            positionY: (elemH - finalHeight) / 2
        };
    };
    BaCardBlurHelper.prototype._genBgImage = function () {
        this.image = new Image();
        var computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    };
    BaCardBlurHelper.prototype._genImageLoadSubject = function () {
        var _this = this;
        this.imageLoadSubject = new Subject_1.Subject();
        this.image.onerror = function (err) {
            _this.imageLoadSubject.complete();
        };
        this.image.onload = function () {
            _this.imageLoadSubject.next(null);
            _this.imageLoadSubject.complete();
        };
    };
    BaCardBlurHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaCardBlurHelper);
    return BaCardBlurHelper;
}());
exports.BaCardBlurHelper = BaCardBlurHelper;


/***/ },

/***/ "./ng2-admin/app/theme/components/baCard/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baCard/baCard.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baCheckbox/baCheckbox.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var BaCheckbox = (function () {
    function BaCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaCheckbox.prototype.onChange = function (value) { };
    BaCheckbox.prototype.onTouch = function (value) { };
    BaCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BaCheckbox.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaCheckbox.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaCheckbox.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaCheckbox.prototype, "baCheckboxClass", void 0);
    BaCheckbox = __decorate([
        core_1.Component({
            selector: 'ba-checkbox[ngModel]',
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baCheckbox/baCheckbox.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baCheckbox/baCheckbox.html")
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.NgModel !== 'undefined' && forms_1.NgModel) === 'function' && _a) || Object])
    ], BaCheckbox);
    return BaCheckbox;
    var _a;
}());
exports.BaCheckbox = BaCheckbox;


/***/ },

/***/ "./ng2-admin/app/theme/components/baCheckbox/baCheckbox.html":
/***/ function(module, exports) {

module.exports = "<div class=\"{{baCheckboxClass}}\">\n  <label class=\"checkbox-inline custom-checkbox nowrap\">\n    <input type=\"checkbox\" [checked]=state\n           (change)=\"onChange($event.target.checked)\"\n           [disabled]=\"disabled\" [value]=\"value\">\n    <span i18n>{{label}}</span>\n  </label>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baCheckbox/baCheckbox.scss":
/***/ function(module, exports) {

module.exports = ".has-success {\n  position: relative; }\n  .has-success .control-label {\n    color: #ffffff; }\n  .has-success .form-control {\n    border: 1px solid #a2db59; }\n    .has-success .form-control:focus {\n      box-shadow: none;\n      border-color: #8bd22f; }\n  .has-success label.custom-checkbox {\n    color: #a2db59; }\n    .has-success label.custom-checkbox > span:before {\n      color: #a2db59; }\n    .has-success label.custom-checkbox > span:hover:before {\n      border-color: #a2db59; }\n  .has-success .form-control-feedback {\n    color: #a2db59; }\n  .has-success .input-group-addon {\n    background-color: #a2db59;\n    color: #ffffff; }\n\n.has-warning {\n  position: relative; }\n  .has-warning .control-label {\n    color: #ffffff; }\n  .has-warning .form-control {\n    border: 1px solid #ecc839; }\n    .has-warning .form-control:focus {\n      box-shadow: none;\n      border-color: #e7ba08; }\n  .has-warning label.custom-checkbox {\n    color: #ecc839; }\n    .has-warning label.custom-checkbox > span:before {\n      color: #ecc839; }\n    .has-warning label.custom-checkbox > span:hover:before {\n      border-color: #ecc839; }\n  .has-warning .form-control-feedback {\n    color: #ecc839; }\n  .has-warning .input-group-addon {\n    background-color: #ecc839;\n    color: #ffffff; }\n\n.has-error {\n  position: relative; }\n  .has-error .control-label {\n    color: #ffffff; }\n  .has-error .form-control {\n    border: 1px solid #fa758e; }\n    .has-error .form-control:focus {\n      box-shadow: none;\n      border-color: #f95372; }\n  .has-error label.custom-checkbox {\n    color: #fa758e; }\n    .has-error label.custom-checkbox > span:before {\n      color: #fa758e; }\n    .has-error label.custom-checkbox > span:hover:before {\n      border-color: #fa758e; }\n  .has-error .form-control-feedback {\n    color: #fa758e; }\n  .has-error .input-group-addon {\n    background-color: #fa758e;\n    color: #ffffff; }\n\nlabel.custom-checkbox > span {\n  display: block;\n  margin-top: -13px;\n  margin-right: 10px; }\n\n.form-horizontal .checkbox, .form-horizontal .checkbox-inline {\n  padding-top: 0; }\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baCheckbox/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baCheckbox/baCheckbox.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baContentTop/baContentTop.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var global_state_1 = __webpack_require__("./ng2-admin/app/global.state.ts");
var BaContentTop = (function () {
    function BaContentTop(_state) {
        var _this = this;
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', function (activeLink) {
            if (activeLink) {
                _this.activePageTitle = activeLink.title;
            }
        });
    }
    BaContentTop = __decorate([
        core_1.Component({
            selector: 'ba-content-top',
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baContentTop/baContentTop.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baContentTop/baContentTop.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof global_state_1.GlobalState !== 'undefined' && global_state_1.GlobalState) === 'function' && _a) || Object])
    ], BaContentTop);
    return BaContentTop;
    var _a;
}());
exports.BaContentTop = BaContentTop;


/***/ },

/***/ "./ng2-admin/app/theme/components/baContentTop/baContentTop.html":
/***/ function(module, exports) {

module.exports = "<div class=\"content-top clearfix\">\n  <h1 class=\"al-title\" i18n>{{ activePageTitle }}</h1>\n\n  <ul class=\"breadcrumb al-breadcrumb\">\n    <li>\n      <a routerLink=\"/pages/dashboard\" i18n>Home</a></li>\n    <li i18n>{{ activePageTitle }}</li>\n  </ul>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baContentTop/baContentTop.scss":
/***/ function(module, exports) {

module.exports = ".content-top {\n  padding-top: 13px;\n  padding-bottom: 27px; }\n\nh1.al-title {\n  font-weight: 700;\n  color: #ffffff;\n  float: left;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: uppercase;\n  opacity: 0.9; }\n\n.al-breadcrumb {\n  background: none;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  float: right;\n  padding-top: 11px; }\n  .al-breadcrumb li {\n    font-size: 18px;\n    font-weight: 400; }\n    .al-breadcrumb li a {\n      color: #4dc4ff; }\n\n.al-look {\n  float: right;\n  margin-right: 10px;\n  padding-top: 10px; }\n  .al-look > a {\n    font-size: 19px; }\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baContentTop/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baContentTop/baContentTop.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/baMenu.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var baMenu_service_1 = __webpack_require__("./ng2-admin/app/theme/components/baMenu/baMenu.service.ts");
var global_state_1 = __webpack_require__("./ng2-admin/app/global.state.ts");
var BaMenu = (function () {
    function BaMenu(_router, _service, _state) {
        var _this = this;
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.menuRoutes = [];
        this.sidebarCollapsed = false;
        this.expandMenu = new core_1.EventEmitter();
        this.outOfArea = -200;
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.menuItems) {
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
    }
    BaMenu.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    BaMenu.prototype.ngOnInit = function () {
        this.menuItems = this._service.convertRoutesToMenus(this.menuRoutes);
    };
    BaMenu.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
    };
    BaMenu.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    BaMenu.prototype.toggleSubMenu = function ($event) {
        var submenu = jQuery($event.currentTarget).next();
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof router_1.Routes !== 'undefined' && router_1.Routes) === 'function' && _a) || Object)
    ], BaMenu.prototype, "menuRoutes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BaMenu.prototype, "sidebarCollapsed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaMenu.prototype, "menuHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaMenu.prototype, "expandMenu", void 0);
    BaMenu = __decorate([
        core_1.Component({
            selector: 'ba-menu',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baMenu/baMenu.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baMenu/baMenu.html"),
            providers: [baMenu_service_1.BaMenuService]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof baMenu_service_1.BaMenuService !== 'undefined' && baMenu_service_1.BaMenuService) === 'function' && _c) || Object, (typeof (_d = typeof global_state_1.GlobalState !== 'undefined' && global_state_1.GlobalState) === 'function' && _d) || Object])
    ], BaMenu);
    return BaMenu;
    var _a, _b, _c, _d;
}());
exports.BaMenu = BaMenu;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/baMenu.html":
/***/ function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" (mouseleave)=\"hoverElemTop=outOfArea\" sidebarResize>\n  <ul id=\"al-sidebar-list\" class=\"al-sidebar-list\">\n    <ba-menu-item\n      [menuItem]=\"item\"\n      (itemHover)=\"hoverItem($event)\"\n      (toggleSubMenu)=\"toggleSubMenu($event)\"\n      *ngFor=\"let item of menuItems\"></ba-menu-item>\n  </ul>\n  <div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\n       [ngClass]=\"{'show-hover-elem': showHoverElem }\"></div>\n</aside>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/baMenu.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/baMenu.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var BaMenuService = (function () {
    function BaMenuService(_router) {
        this._router = _router;
        this._currentMenuItem = {};
    }
    BaMenuService.prototype.convertRoutesToMenus = function (routes) {
        var items = this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    };
    BaMenuService.prototype.getCurrentItem = function () {
        return this._currentMenuItem;
    };
    BaMenuService.prototype.selectMenuItem = function (menuItems) {
        var _this = this;
        var items = [];
        menuItems.forEach(function (item) {
            _this._selectItem(item);
            if (item.selected) {
                _this._currentMenuItem = item;
            }
            if (item.children && item.children.length > 0) {
                item.children = _this.selectMenuItem(item.children);
            }
            items.push(item);
        });
        return items;
    };
    BaMenuService.prototype._skipEmpty = function (items) {
        var menu = [];
        items.forEach(function (item) {
            var menuItem;
            if (item.skip) {
                if (item.children && item.children.length > 0) {
                    menuItem = item.children;
                }
            }
            else {
                menuItem = item;
            }
            if (menuItem) {
                menu.push(menuItem);
            }
        });
        return [].concat.apply([], menu);
    };
    BaMenuService.prototype._convertArrayToItems = function (routes, parent) {
        var _this = this;
        var items = [];
        routes.forEach(function (route) {
            items.push(_this._convertObjectToItem(route, parent));
        });
        return items;
    };
    BaMenuService.prototype._convertObjectToItem = function (object, parent) {
        var item = {};
        if (object.data && object.data.menu) {
            // this is a menu object
            item = object.data.menu;
            item.route = object;
            delete item.route.data.menu;
        }
        else {
            item.route = object;
            item.skip = true;
        }
        // we have to collect all paths to correctly build the url then
        item.route.paths = parent && parent.route && parent.route.paths
            ? parent.route.paths.slice(0) : [];
        item.route.paths.push(item.route.path);
        if (object.children && object.children.length > 0) {
            item.children = this._convertArrayToItems(object.children, item);
        }
        var prepared = this._prepareItem(item);
        // if current item is selected or expanded - then parent is expanded too
        if ((prepared.selected || prepared.expanded) && parent) {
            parent.expanded = true;
        }
        return prepared;
    };
    BaMenuService.prototype._prepareItem = function (object) {
        if (!object.skip) {
            var itemUrl = this._router.serializeUrl(this._router.createUrlTree(object.route.paths));
            object.url = object.url ? object.url : '#' + itemUrl;
            object.target = object.target || '';
            return this._selectItem(object);
        }
        return object;
    };
    BaMenuService.prototype._selectItem = function (object) {
        object.selected = object.url === ('#' + this._router.url);
        return object;
    };
    BaMenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], BaMenuService);
    return BaMenuService;
    var _a;
}());
exports.BaMenuService = BaMenuService;


/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaMenuItem = (function () {
    function BaMenuItem() {
        this.child = false;
        this.itemHover = new core_1.EventEmitter();
        this.toggleSubMenu = new core_1.EventEmitter();
    }
    BaMenuItem.prototype.onHoverItem = function ($event) {
        this.itemHover.emit($event);
    };
    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaMenuItem.prototype, "menuItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BaMenuItem.prototype, "child", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaMenuItem.prototype, "itemHover", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaMenuItem.prototype, "toggleSubMenu", void 0);
    BaMenuItem = __decorate([
        core_1.Component({
            selector: 'ba-menu-item',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html")
        }), 
        __metadata('design:paramtypes', [])
    ], BaMenuItem);
    return BaMenuItem;
}());
exports.BaMenuItem = BaMenuItem;


/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html":
/***/ function(module, exports) {

module.exports = "<li *ngIf=\"!menuItem.hidden\" [title]=\"menuItem.title\" [ngClass]=\"{'al-sidebar-list-item': !child, 'ba-sidebar-sublist-item': child, 'selected': menuItem.selected && !menuItem.expanded, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}\">\n\n\n  <a *ngIf=\"!menuItem.children\" (mouseenter)=\"onHoverItem($event, item)\" [href]=\"menuItem.url\" [target]=\"menuItem.target\" class=\"al-sidebar-list-link\">\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span i18n>{{ menuItem.title }}</span>\n  </a>\n\n  <a *ngIf=\"menuItem.children\" (mouseenter)=\"onHoverItem($event, item)\" (click)=\"onToggleSubMenu($event, menuItem)\" class=\"al-sidebar-list-link\">\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span i18n>{{ menuItem.title }}</span>\n    <b class=\"fa fa-angle-down\" [ngClass]=\"{'fa-angle-up': menuItem.expanded}\"></b>\n  </a>\n\n  <ul *ngIf=\"menuItem.children\" class=\"al-sidebar-sublist\" [ngClass]=\"{'slide-right': menuItem.slideRight}\">\n    <ba-menu-item [menuItem]=\"subItem\"\n                  [child]=\"true\"\n                  (itemHover)=\"onHoverItem($event)\"\n                  (toggleSubMenu)=\"onToggleSubMenu($event, subItem)\"\n                  *ngFor=\"let subItem of menuItem.children\"></ba-menu-item>\n  </ul>\n\n</li>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/components/baMenuItem/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baMenu/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baMenu/baMenu.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var baMsgCenter_service_1 = __webpack_require__("./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.service.ts");
var BaMsgCenter = (function () {
    function BaMsgCenter(_baMsgCenterService) {
        this._baMsgCenterService = _baMsgCenterService;
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }
    BaMsgCenter = __decorate([
        core_1.Component({
            selector: 'ba-msg-center',
            providers: [baMsgCenter_service_1.BaMsgCenterService],
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof baMsgCenter_service_1.BaMsgCenterService !== 'undefined' && baMsgCenter_service_1.BaMsgCenterService) === 'function' && _a) || Object])
    ], BaMsgCenter);
    return BaMsgCenter;
    var _a;
}());
exports.BaMsgCenter = BaMsgCenter;


/***/ },

/***/ "./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.html":
/***/ function(module, exports) {

module.exports = "<ul class=\"al-msg-center clearfix\">\n  <li class=\"dropdown\">\n    <a href class=\"dropdown-toggle\" id=\"msg-dd1\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <i class=\"fa fa-bell-o\"></i><span>5</span>\n\n      <div class=\"notification-ring\"></div>\n    </a>\n\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd1\">\n      <i class=\"dropdown-arr\"></i>\n\n      <div class=\"header clearfix\">\n        <strong i18n>Notifications</strong>\n        <a href i18n>Mark All as Read</a>\n        <a href i18n>Settings</a>\n      </div>\n      <div class=\"msg-list\">\n        <a *ngFor=\"let msg of notifications\" href class=\"clearfix\">\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\n                                     src=\"{{ ( msg.image ||  (msg.name)) }}\"></div>\n          <div class=\"msg-area\">\n            <div>{{ msg.text }}</div>\n            <span>{{ msg.time }}</span>\n          </div>\n        </a>\n      </div>\n      <a href i18n>See all notifications</a>\n    </div>\n  </li>\n</ul>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.scss":
/***/ function(module, exports) {

module.exports = "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        animation: pulsate 8s ease-out;\n        animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaMsgCenterService = (function () {
    function BaMsgCenterService() {
        this._notifications = [];
        this._messages = [];
    }
    BaMsgCenterService.prototype.getMessages = function () {
        return this._messages;
    };
    BaMsgCenterService.prototype.getNotifications = function () {
        return this._notifications;
    };
    BaMsgCenterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaMsgCenterService);
    return BaMsgCenterService;
}());
exports.BaMsgCenterService = BaMsgCenterService;


/***/ },

/***/ "./ng2-admin/app/theme/components/baMsgCenter/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baMsgCenter/baMsgCenter.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var BaMultiCheckbox = (function () {
    function BaMultiCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaMultiCheckbox.prototype.getProp = function (item, propName) {
        var prop = this.propertiesMapping[propName];
        if (!prop) {
            return item[propName];
        }
        else if (typeof prop === 'function') {
            return prop(item);
        }
        return item[prop];
    };
    BaMultiCheckbox.prototype.onChange = function (value) { };
    BaMultiCheckbox.prototype.onTouch = function (value) { };
    BaMultiCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaMultiCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaMultiCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaMultiCheckbox.prototype, "baMultiCheckboxClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaMultiCheckbox.prototype, "propertiesMapping", void 0);
    BaMultiCheckbox = __decorate([
        core_1.Component({
            selector: 'ba-multi-checkbox[ngModel]',
            template: __webpack_require__("./ng2-admin/app/theme/components/baMultiCheckbox/baMultiCheckbox.html"),
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.NgModel !== 'undefined' && forms_1.NgModel) === 'function' && _a) || Object])
    ], BaMultiCheckbox);
    return BaMultiCheckbox;
    var _a;
}());
exports.BaMultiCheckbox = BaMultiCheckbox;


/***/ },

/***/ "./ng2-admin/app/theme/components/baMultiCheckbox/baMultiCheckbox.html":
/***/ function(module, exports) {

module.exports = "<div class=\"{{baMultiCheckboxClass}}\">\n  <ba-checkbox *ngFor=\"let item of state\"\n               [(ngModel)]=\"item[propertiesMapping.model]\"\n               [baCheckboxClass]=\"getProp(item, 'baCheckboxClass')\"\n               [label]=\"getProp(item, 'label')\"\n               [disabled]=\"getProp(item, 'disabled')\"\n               [value]=\"getProp(item, 'value')\"\n               id=\"{{getProp(item, 'id')}}\">\n  </ba-checkbox>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baMultiCheckbox/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baPageTop/baPageTop.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var global_state_1 = __webpack_require__("./ng2-admin/app/global.state.ts");
var BaPageTop = (function () {
    function BaPageTop(_state) {
        var _this = this;
        this._state = _state;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaPageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    BaPageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    BaPageTop = __decorate([
        core_1.Component({
            selector: 'ba-page-top',
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baPageTop/baPageTop.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baPageTop/baPageTop.html"),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof global_state_1.GlobalState !== 'undefined' && global_state_1.GlobalState) === 'function' && _a) || Object])
    ], BaPageTop);
    return BaPageTop;
    var _a;
}());
exports.BaPageTop = BaPageTop;


/***/ },

/***/ "./ng2-admin/app/theme/components/baPageTop/baPageTop.html":
/***/ function(module, exports) {

module.exports = "<div class=\"page-top clearfix\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\n     [ngClass]=\"{scrolled: isScrolled}\">\n  <a routerLink=\"/pages/dashboard\" class=\"al-logo clearfix\"><span>Remarker</span>Admin</a>\n  <a (click)=\"toggleMenu()\" class=\"collapse-menu-link fa fa-bars\"></a>\n\n  <div class=\"user-profile clearfix\">\n    <div class=\"dropdown al-user-profile\">\n      <a class=\"profile-toggle-link dropdown-toggle\" id=\"user-profile-dd\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n        <img src=\"\">\n      </a>\n      <ul class=\"dropdown-menu top-dropdown-menu profile-dropdown\" aria-labelledby=\"user-profile-dd\">\n        <i class=\"dropdown-arr\"></i>\n        <li class=\"dropdown-item\"><a href i18n><i class=\"fa fa-user\"></i>Profile</a></li>\n        <li class=\"dropdown-item\"><a href i18n><i class=\"fa fa-cog\"></i>Settings</a></li>\n        <div class=\"dropdown-divider\"></div>\n        <li class=\"dropdown-item\"><a href class=\"signout\" i18n><i class=\"fa fa-power-off\"></i>Sign out</a></li>\n      </ul>\n    </div>\n    <ba-msg-center></ba-msg-center>\n  </div>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baPageTop/baPageTop.scss":
/***/ function(module, exports) {

module.exports = "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        animation: pulsate 8s ease-out;\n        animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n\n.page-top {\n  background-color: #282828;\n  position: fixed;\n  z-index: 904;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  height: 66px;\n  width: 100%;\n  min-width: 320px;\n  padding: 0 20px 0 10px; }\n  .page-top .dropdown-toggle::after {\n    display: none; }\n\n.blur .page-top.scrolled {\n  background-color: rgba(0, 0, 0, 0.85); }\n\na.al-logo {\n  color: #ffffff;\n  display: block;\n  font-size: 24px;\n  font-family: \"Roboto\", sans-serif;\n  white-space: nowrap;\n  float: left;\n  outline: none !important;\n  line-height: 60px; }\n  a.al-logo span {\n    color: #00abff; }\n\n.user-profile {\n  float: right;\n  min-width: 230px;\n  margin-top: 10px; }\n\n.al-user-profile {\n  float: right;\n  margin-right: 12px;\n  transition: all .15s ease-in-out;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  opacity: 1;\n  position: relative; }\n  .al-user-profile a {\n    display: block; }\n  .al-user-profile img {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%; }\n\na.refresh-data {\n  color: #ffffff;\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 400;\n  float: right;\n  margin-top: 13px;\n  margin-right: 26px; }\n  a.refresh-data:hover {\n    color: #e7ba08 !important; }\n\na.collapse-menu-link {\n  font-size: 20px;\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  line-height: 42px;\n  color: #ffffff;\n  padding: 0;\n  float: left;\n  margin: 11px 0 0 25px; }\n  a.collapse-menu-link:hover {\n    text-decoration: none;\n    color: #e7ba08; }\n\n.al-skin-dropdown {\n  float: right;\n  margin-top: 14px;\n  margin-right: 26px; }\n  .al-skin-dropdown .tpl-skin-panel {\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n\n.icon-palette {\n  display: inline-block;\n  width: 14px;\n  height: 13px;\n  background: url(\"assets/img/theme/palette.png\");\n  background-size: cover; }\n\n.search {\n  text-shadow: none;\n  color: #ffffff;\n  font-size: 13px;\n  line-height: 25px;\n  transition: all 0.5s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 162px;\n  float: left;\n  margin: 20px 0 0 30px; }\n  .search label {\n    cursor: pointer; }\n  .search i {\n    width: 16px;\n    display: inline-block;\n    cursor: pointer;\n    padding-left: 1px;\n    font-size: 16px;\n    margin-right: 13px; }\n  .search input {\n    background: none;\n    border: none;\n    outline: none;\n    width: 120px;\n    padding: 0;\n    margin: 0 0 0 -3px;\n    height: 27px; }\n\n@media screen and (max-width: 660px) {\n  .search {\n    display: none; } }\n\n@media screen and (max-width: 500px) {\n  .page-top {\n    padding: 0 20px; } }\n\n@media (max-width: 435px) {\n  .user-profile {\n    min-width: 136px; }\n  a.refresh-data {\n    margin-right: 10px; }\n  a.collapse-menu-link {\n    margin-left: 10px; }\n  .al-skin-dropdown {\n    display: none; } }\n\n.profile-toggle-link {\n  cursor: pointer; }\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baPageTop/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baPageTop/baPageTop.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/baSidebar/baSidebar.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var global_state_1 = __webpack_require__("./ng2-admin/app/global.state.ts");
var theme_1 = __webpack_require__("./ng2-admin/app/theme/index.ts");
var app_menu_1 = __webpack_require__("./ng2-admin/app/app.menu.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var BaSidebar = (function () {
    function BaSidebar(_elementRef, _state) {
        var _this = this;
        this._elementRef = _elementRef;
        this._state = _state;
        // here we declare which routes we want to use as a menu in our sidebar
        // we're creating a deep copy since we are going to change that object
        this.routes = _.cloneDeep(app_menu_1.MENU);
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaSidebar.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    };
    BaSidebar.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.updateSidebarHeight(); });
    };
    BaSidebar.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    BaSidebar.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    BaSidebar.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    BaSidebar.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    BaSidebar.prototype.updateSidebarHeight = function () {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    };
    BaSidebar.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= theme_1.layoutSizes.resWidthCollapseSidebar;
    };
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaSidebar.prototype, "onWindowResize", null);
    BaSidebar = __decorate([
        core_1.Component({
            selector: 'ba-sidebar',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./ng2-admin/app/theme/components/baSidebar/baSidebar.scss")],
            template: __webpack_require__("./ng2-admin/app/theme/components/baSidebar/baSidebar.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof global_state_1.GlobalState !== 'undefined' && global_state_1.GlobalState) === 'function' && _b) || Object])
    ], BaSidebar);
    return BaSidebar;
    var _a, _b;
}());
exports.BaSidebar = BaSidebar;


/***/ },

/***/ "./ng2-admin/app/theme/components/baSidebar/baSidebar.html":
/***/ function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" (mouseleave)=\"hoverElemTop=outOfArea\" sidebarResize>\n  <ba-menu [menuRoutes]=\"routes\"\n           [menuHeight]=\"menuHeight\"\n           [sidebarCollapsed]=\"isMenuCollapsed\"\n           (expandMenu)=\"menuExpand()\"></ba-menu>\n</aside>\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baSidebar/baSidebar.scss":
/***/ function(module, exports) {

module.exports = ".al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n.al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n.al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n.subitem-submenu-link .fa {\n  top: 7px; }\n\n.al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n.ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n.al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  transform: rotate(180deg); }\n\n.al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\na.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 15px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: transform 0.2s linear; }\n\n.slimScrollBar, .slimScrollRail {\n  border-radius: 0px !important;\n  width: 4px !important;\n  left: 176px; }\n\n.al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  .al-sidebar-sublist.expanded {\n    display: block; }\n  .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n.sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n.sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n.menu-collapsed .slimScrollBar, .menu-collapsed .slimScrollRail {\n  display: none !important; }\n\n@media (min-width: 1200px) {\n  .menu-collapsed .al-main {\n    margin-left: 50px; }\n  .menu-collapsed .al-footer {\n    padding-left: 83px; } }\n\n@media (min-width: 501px) {\n  .menu-collapsed .al-sidebar {\n    width: 52px; }\n    .menu-collapsed .al-sidebar .fa-angle-down, .menu-collapsed .al-sidebar .fa-angle-up {\n      opacity: 0; }\n    .menu-collapsed .al-sidebar .al-sidebar-sublist {\n      position: absolute;\n      top: -1px;\n      left: 52px;\n      background: rgba(0, 0, 0, 0.8);\n      width: 0;\n      display: block;\n      overflow: hidden;\n      transition: width 0.5s ease; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist.slide-right {\n        width: 135px; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist:before {\n        display: none; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist li:before {\n        display: none; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist li a {\n        padding-left: 18px;\n        padding-right: 18px;\n        min-width: 130px;\n        white-space: nowrap; }\n    .menu-collapsed .al-sidebar .sidebar-hover-elem, .menu-collapsed .al-sidebar .sidebar-select-elem {\n      left: 48px; } }\n\n@media (max-width: 1200px) and (min-width: 500px) {\n  .al-main {\n    margin-left: 50px; }\n  .al-footer {\n    padding-left: 83px; } }\n\n@media (max-width: 1200px) {\n  .al-sidebar {\n    width: 180px;\n    background: rgba(0, 0, 0, 0.75);\n    transition: width 0.5s ease; }\n    .al-sidebar .fa-angle-down, .al-sidebar .fa-angle-up {\n      opacity: 1; }\n    .al-sidebar .al-sidebar-sublist {\n      padding: 0;\n      list-style: none;\n      position: relative;\n      display: none;\n      top: auto;\n      left: auto;\n      background: none;\n      width: auto;\n      overflow: visible;\n      transition: none; }\n      .al-sidebar .al-sidebar-sublist.expanded {\n        display: block; }\n      .al-sidebar .al-sidebar-sublist > ba-menu-item > li {\n        display: block;\n        float: none;\n        padding: 0;\n        border-bottom: none;\n        position: relative; }\n        .al-sidebar .al-sidebar-sublist > ba-menu-item > li a {\n          display: block;\n          text-shadow: none;\n          font-size: 13px;\n          text-decoration: none;\n          color: #ffffff;\n          padding-left: 52px;\n          height: auto;\n          line-height: 29px; }\n          .al-sidebar .al-sidebar-sublist > ba-menu-item > li a:hover {\n            color: #00abff; }\n        .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n          border: none;\n          background-color: #00abff; }\n          .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n            color: #ffffff; }\n    .al-sidebar .sidebar-hover-elem, .al-sidebar .sidebar-select-elem {\n      left: 176px;\n      transition: left 0.5s ease; } }\n\n@media (max-width: 500px) {\n  .menu-collapsed .al-sidebar {\n    width: 0; }\n  .menu-collapsed .sidebar-hover-elem, .menu-collapsed .sidebar-select-elem {\n    display: none; }\n  .al-main {\n    margin-left: 0; }\n  .al-footer {\n    padding-left: 0; } }\n"

/***/ },

/***/ "./ng2-admin/app/theme/components/baSidebar/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baSidebar/baSidebar.component.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/components/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/components/baPageTop/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baMsgCenter/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baSidebar/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baMenu/components/baMenuItem/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baMenu/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baContentTop/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baCard/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baBackTop/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baCheckbox/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/components/baMultiCheckbox/index.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaScrollPosition = (function () {
    function BaScrollPosition() {
        this.scrollChange = new core_1.EventEmitter();
    }
    BaScrollPosition.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    BaScrollPosition.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaScrollPosition.prototype, "maxHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], BaScrollPosition.prototype, "scrollChange", void 0);
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaScrollPosition.prototype, "onWindowScroll", null);
    BaScrollPosition = __decorate([
        core_1.Directive({
            selector: '[baScrollPosition]'
        }), 
        __metadata('design:paramtypes', [])
    ], BaScrollPosition);
    return BaScrollPosition;
    var _a;
}());
exports.BaScrollPosition = BaScrollPosition;


/***/ },

/***/ "./ng2-admin/app/theme/directives/baScrollPosition/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/directives/baThemeRun/baThemeRun.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var theme_1 = __webpack_require__("./ng2-admin/app/theme/index.ts");
var BaThemeRun = (function () {
    function BaThemeRun(_baConfig) {
        this._baConfig = _baConfig;
        this._classes = [];
    }
    BaThemeRun.prototype.ngOnInit = function () {
        this._assignTheme();
        this._assignMobile();
    };
    BaThemeRun.prototype._assignTheme = function () {
        this._addClass(this._baConfig.get().theme.name);
    };
    BaThemeRun.prototype._assignMobile = function () {
        if (theme_1.isMobile()) {
            this._addClass('mobile');
        }
    };
    BaThemeRun.prototype._addClass = function (cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    };
    __decorate([
        core_1.HostBinding('class'), 
        __metadata('design:type', String)
    ], BaThemeRun.prototype, "classesString", void 0);
    BaThemeRun = __decorate([
        core_1.Directive({
            selector: '[baThemeRun]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _a) || Object])
    ], BaThemeRun);
    return BaThemeRun;
    var _a;
}());
exports.BaThemeRun = BaThemeRun;


/***/ },

/***/ "./ng2-admin/app/theme/directives/baThemeRun/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/directives/baThemeRun/baThemeRun.directive.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/directives/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/directives/baScrollPosition/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/directives/baThemeRun/index.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/theme.constants.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/theme.configProvider.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/theme.config.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/initial.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./ng2-admin/app/theme/nga.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var theme_config_1 = __webpack_require__("./ng2-admin/app/theme/theme.config.ts");
var theme_configProvider_1 = __webpack_require__("./ng2-admin/app/theme/theme.configProvider.ts");
var components_1 = __webpack_require__("./ng2-admin/app/theme/components/index.ts");
var baCardBlur_directive_1 = __webpack_require__("./ng2-admin/app/theme/components/baCard/baCardBlur.directive.ts");
var directives_1 = __webpack_require__("./ng2-admin/app/theme/directives/index.ts");
var services_1 = __webpack_require__("./ng2-admin/app/theme/services/index.ts");
var validators_1 = __webpack_require__("./ng2-admin/app/theme/validators/index.ts");
var NGA_COMPONENTS = [
    components_1.BaBackTop,
    components_1.BaCard,
    components_1.BaCheckbox,
    components_1.BaContentTop,
    components_1.BaMenuItem,
    components_1.BaMenu,
    components_1.BaMsgCenter,
    components_1.BaMultiCheckbox,
    components_1.BaPageTop,
    components_1.BaSidebar
];
var NGA_DIRECTIVES = [
    directives_1.BaScrollPosition,
    directives_1.BaThemeRun,
    baCardBlur_directive_1.BaCardBlur
];
var NGA_SERVICES = [
    services_1.BaImageLoaderService,
    services_1.BaThemePreloader,
    services_1.BaThemeSpinner
];
var NGA_VALIDATORS = [
    validators_1.EmailValidator,
    validators_1.EqualPasswordsValidator
];
var NgaModule = (function () {
    function NgaModule() {
    }
    NgaModule = __decorate([
        core_1.NgModule({
            declarations: NGA_DIRECTIVES.concat(NGA_COMPONENTS),
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [
                theme_configProvider_1.BaThemeConfigProvider,
                theme_config_1.BaThemeConfig
            ].concat(NGA_VALIDATORS, NGA_SERVICES),
            exports: NGA_DIRECTIVES.concat(NGA_COMPONENTS)
        }), 
        __metadata('design:paramtypes', [])
    ], NgaModule);
    return NgaModule;
}());
exports.NgaModule = NgaModule;


/***/ },

/***/ "./ng2-admin/app/theme/services/baImageLoader/baImageLoader.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaImageLoaderService = (function () {
    function BaImageLoaderService() {
    }
    BaImageLoaderService.prototype.load = function (src) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                resolve('Image with src ' + src + ' loaded successfully.');
            };
        });
    };
    BaImageLoaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaImageLoaderService);
    return BaImageLoaderService;
}());
exports.BaImageLoaderService = BaImageLoaderService;


/***/ },

/***/ "./ng2-admin/app/theme/services/baImageLoader/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/services/baImageLoader/baImageLoader.service.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/services/baThemePreloader/baThemePreloader.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaThemePreloader = (function () {
    function BaThemePreloader() {
    }
    BaThemePreloader.registerLoader = function (method) {
        BaThemePreloader._loaders.push(method);
    };
    BaThemePreloader.clear = function () {
        BaThemePreloader._loaders = [];
    };
    BaThemePreloader.load = function () {
        return new Promise(function (resolve, reject) {
            BaThemePreloader._executeAll(resolve);
        });
    };
    BaThemePreloader._executeAll = function (done) {
        setTimeout(function () {
            Promise.all(BaThemePreloader._loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    BaThemePreloader._loaders = [];
    BaThemePreloader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaThemePreloader);
    return BaThemePreloader;
}());
exports.BaThemePreloader = BaThemePreloader;


/***/ },

/***/ "./ng2-admin/app/theme/services/baThemePreloader/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/services/baThemePreloader/baThemePreloader.service.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BaThemeSpinner = (function () {
    function BaThemeSpinner() {
        this._selector = 'preloader';
        this._element = document.getElementById(this._selector);
    }
    BaThemeSpinner.prototype.show = function () {
        this._element.style['display'] = 'block';
    };
    BaThemeSpinner.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._element.style['display'] = 'none';
        }, delay);
    };
    BaThemeSpinner = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaThemeSpinner);
    return BaThemeSpinner;
}());
exports.BaThemeSpinner = BaThemeSpinner;


/***/ },

/***/ "./ng2-admin/app/theme/services/baThemeSpinner/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/services/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/services/baImageLoader/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/services/baThemePreloader/index.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/services/baThemeSpinner/index.ts"));


/***/ },

/***/ "./ng2-admin/app/theme/theme.config.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var theme_configProvider_1 = __webpack_require__("./ng2-admin/app/theme/theme.configProvider.ts");
var BaThemeConfig = (function () {
    function BaThemeConfig(_baConfig) {
        this._baConfig = _baConfig;
        this._config();
    }
    BaThemeConfig.prototype._config = function () {
        // this._baConfig.changeTheme({name: 'my-theme'});
        // let colorScheme = {
        //   primary: '#209e91',
        //   info: '#2dacd1',
        //   success: '#90b900',
        //   warning: '#dfb81c',
        //   danger: '#e85656',
        // };
        // this._baConfig.changeColors({
        //   default: '#4e4e55',
        //   defaultText: '#e2e2e2',
        //   border: '#dddddd',
        //   borderDark: '#aaaaaa',
        //
        //   primary: colorScheme.primary,
        //   info: colorScheme.info,
        //   success: colorScheme.success,
        //   warning: colorScheme.warning,
        //   danger: colorScheme.danger,
        //
        //   primaryLight: ColorHelper.tint(colorScheme.primary, 30),
        //   infoLight: ColorHelper.tint(colorScheme.info, 30),
        //   successLight: ColorHelper.tint(colorScheme.success, 30),
        //   warningLight: ColorHelper.tint(colorScheme.warning, 30),
        //   dangerLight: ColorHelper.tint(colorScheme.danger, 30),
        //
        //   primaryDark: ColorHelper.shade(colorScheme.primary, 15),
        //   infoDark: ColorHelper.shade(colorScheme.info, 15),
        //   successDark: ColorHelper.shade(colorScheme.success, 15),
        //   warningDark: ColorHelper.shade(colorScheme.warning, 15),
        //   dangerDark: ColorHelper.shade(colorScheme.danger, 15),
        //
        //   dashboard: {
        //     blueStone: '#005562',
        //     surfieGreen: '#0e8174',
        //     silverTree: '#6eba8c',
        //     gossip: '#b9f2a1',
        //     white: '#10c4b5',
        //   },
        // });
    };
    BaThemeConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof theme_configProvider_1.BaThemeConfigProvider !== 'undefined' && theme_configProvider_1.BaThemeConfigProvider) === 'function' && _a) || Object])
    ], BaThemeConfig);
    return BaThemeConfig;
    var _a;
}());
exports.BaThemeConfig = BaThemeConfig;


/***/ },

/***/ "./ng2-admin/app/theme/theme.configProvider.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var theme_constants_1 = __webpack_require__("./ng2-admin/app/theme/theme.constants.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var BaThemeConfigProvider = (function () {
    function BaThemeConfigProvider() {
        this.basic = {
            default: '#ffffff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        // main functional color scheme
        this.colorScheme = {
            primary: '#00abff',
            info: '#40daf1',
            success: '#8bd22f',
            warning: '#e7ba08',
            danger: '#f95372',
        };
        // dashboard colors for charts
        this.dashboardColors = {
            blueStone: '#40daf1',
            surfieGreen: '#00abff',
            silverTree: '#1b70ef',
            gossip: '#3c4eb9',
            white: '#ffffff',
        };
        this.conf = {
            theme: {
                name: 'ng2',
            },
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger,
                primaryLight: theme_constants_1.ColorHelper.tint(this.colorScheme.primary, 30),
                infoLight: theme_constants_1.ColorHelper.tint(this.colorScheme.info, 30),
                successLight: theme_constants_1.ColorHelper.tint(this.colorScheme.success, 30),
                warningLight: theme_constants_1.ColorHelper.tint(this.colorScheme.warning, 30),
                dangerLight: theme_constants_1.ColorHelper.tint(this.colorScheme.danger, 30),
                primaryDark: theme_constants_1.ColorHelper.shade(this.colorScheme.primary, 15),
                infoDark: theme_constants_1.ColorHelper.shade(this.colorScheme.info, 15),
                successDark: theme_constants_1.ColorHelper.shade(this.colorScheme.success, 15),
                warningDark: theme_constants_1.ColorHelper.shade(this.colorScheme.warning, 15),
                dangerDark: theme_constants_1.ColorHelper.shade(this.colorScheme.danger, 15),
                dashboard: {
                    blueStone: this.dashboardColors.blueStone,
                    surfieGreen: this.dashboardColors.surfieGreen,
                    silverTree: this.dashboardColors.silverTree,
                    gossip: this.dashboardColors.gossip,
                    white: this.dashboardColors.white,
                },
                custom: {
                    dashboardLineChart: this.basic.defaultText,
                    dashboardPieChart: theme_constants_1.ColorHelper.hexToRgbA(this.basic.defaultText, 0.8)
                }
            }
        };
    }
    BaThemeConfigProvider.prototype.get = function () {
        return this.conf;
    };
    BaThemeConfigProvider.prototype.changeTheme = function (theme) {
        _.merge(this.get().theme, theme);
    };
    BaThemeConfigProvider.prototype.changeColors = function (colors) {
        _.merge(this.get().colors, colors);
    };
    BaThemeConfigProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaThemeConfigProvider);
    return BaThemeConfigProvider;
}());
exports.BaThemeConfigProvider = BaThemeConfigProvider;


/***/ },

/***/ "./ng2-admin/app/theme/theme.constants.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
exports.IMAGES_ROOT = 'assets/img/';
exports.layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500
};
exports.layoutPaths = {
    images: {
        root: exports.IMAGES_ROOT
    }
};
var ColorHelper = (function () {
    function ColorHelper() {
    }
    ColorHelper.shade = function (color, weight) {
        return ColorHelper.mix('#000000', color, weight);
    };
    ColorHelper.tint = function (color, weight) {
        return ColorHelper.mix('#ffffff', color, weight);
    };
    ColorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    ColorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = '#';
        for (var i = 1; i < 7; i += 2) {
            var color1Part = h2d(color1.substr(i, 2));
            var color2Part = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    return ColorHelper;
}());
exports.ColorHelper = ColorHelper;
exports.isMobile = function () {
    return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/)
        .test(navigator.userAgent.toLowerCase());
};


/***/ },

/***/ "./ng2-admin/app/theme/validators/email.validator.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        /* tslint:disable */
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        /* tslint:enable */
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;


/***/ },

/***/ "./ng2-admin/app/theme/validators/equalPasswords.validator.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var EqualPasswordsValidator = (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls &&
                c.controls[firstField].value === c.controls[secondField].value)
                ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());
exports.EqualPasswordsValidator = EqualPasswordsValidator;


/***/ },

/***/ "./ng2-admin/app/theme/validators/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./ng2-admin/app/theme/validators/email.validator.ts"));
__export(__webpack_require__("./ng2-admin/app/theme/validators/equalPasswords.validator.ts"));


/***/ },

/***/ "./ng2-admin/main.browser.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
var environment_1 = __webpack_require__("./ng2-admin/app/environment.ts");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__("./ng2-admin/app/index.ts");
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
hmr_1.bootloader(main);


/***/ },

/***/ "./node_modules/angular2-jwt/angular2-jwt.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/observable/fromPromise.js");
__webpack_require__("./node_modules/rxjs/add/operator/mergeMap.js");
var AuthConfigConsts = (function () {
    function AuthConfigConsts() {
    }
    AuthConfigConsts.DEFAULT_TOKEN_NAME = 'id_token';
    AuthConfigConsts.DEFAULT_HEADER_NAME = 'Authorization';
    AuthConfigConsts.HEADER_PREFIX_BEARER = 'Bearer ';
    return AuthConfigConsts;
}());
exports.AuthConfigConsts = AuthConfigConsts;
var AuthConfigDefaults = {
    headerName: AuthConfigConsts.DEFAULT_HEADER_NAME,
    headerPrefix: null,
    tokenName: AuthConfigConsts.DEFAULT_TOKEN_NAME,
    tokenGetter: function () { return localStorage.getItem(AuthConfigDefaults.tokenName); },
    noJwtError: false,
    globalHeaders: [],
    noTokenScheme: false
};
/**
 * Sets up the authentication configuration.
 */
var AuthConfig = (function () {
    function AuthConfig(config) {
        config = config || {};
        this._config = objectAssign({}, AuthConfigDefaults, config);
        if (this._config.headerPrefix) {
            this._config.headerPrefix += ' ';
        }
        else if (this._config.noTokenScheme) {
            this._config.headerPrefix = '';
        }
        else {
            this._config.headerPrefix = AuthConfigConsts.HEADER_PREFIX_BEARER;
        }
    }
    AuthConfig.prototype.getConfig = function () {
        return this._config;
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
var AuthHttpError = (function (_super) {
    __extends(AuthHttpError, _super);
    function AuthHttpError() {
        _super.apply(this, arguments);
    }
    return AuthHttpError;
}(Error));
exports.AuthHttpError = AuthHttpError;
/**
 * Allows for explicit authenticated HTTP requests.
 */
var AuthHttp = (function () {
    function AuthHttp(options, http, defOpts) {
        var _this = this;
        this.http = http;
        this.defOpts = defOpts;
        this.config = options.getConfig();
        this.tokenStream = new Observable_1.Observable(function (obs) {
            obs.next(_this.config.tokenGetter());
        });
    }
    AuthHttp.prototype.mergeOptions = function (providedOpts, defaultOpts) {
        var newOptions = defaultOpts || new http_1.RequestOptions();
        if (this.config.globalHeaders) {
            this.setGlobalHeaders(this.config.globalHeaders, providedOpts);
        }
        newOptions = newOptions.merge(new http_1.RequestOptions(providedOpts));
        return newOptions;
    };
    AuthHttp.prototype.requestHelper = function (requestArgs, additionalOptions) {
        var options = new http_1.RequestOptions(requestArgs);
        if (additionalOptions) {
            options = options.merge(additionalOptions);
        }
        return this.request(new http_1.Request(this.mergeOptions(options, this.defOpts)));
    };
    AuthHttp.prototype.requestWithToken = function (req, token) {
        if (!tokenNotExpired(undefined, token)) {
            if (!this.config.noJwtError) {
                return new Observable_1.Observable(function (obs) {
                    obs.error(new AuthHttpError('No JWT present or has expired'));
                });
            }
        }
        else {
            req.headers.set(this.config.headerName, this.config.headerPrefix + token);
        }
        return this.http.request(req);
    };
    AuthHttp.prototype.setGlobalHeaders = function (headers, request) {
        if (!request.headers) {
            request.headers = new http_1.Headers();
        }
        headers.forEach(function (header) {
            var key = Object.keys(header)[0];
            var headerValue = header[key];
            request.headers.set(key, headerValue);
        });
    };
    AuthHttp.prototype.request = function (url, options) {
        var _this = this;
        if (typeof url === 'string') {
            return this.get(url, options); // Recursion: transform url from String to Request
        }
        // else if ( ! url instanceof Request ) {
        //   throw new Error('First argument must be a url string or Request instance.');
        // }
        // from this point url is always an instance of Request;
        var req = url;
        var token = this.config.tokenGetter();
        if (token instanceof Promise) {
            return Observable_1.Observable.fromPromise(token).mergeMap(function (jwtToken) { return _this.requestWithToken(req, jwtToken); });
        }
        else {
            return this.requestWithToken(req, token);
        }
    };
    AuthHttp.prototype.get = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Get, url: url }, options);
    };
    AuthHttp.prototype.post = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Post, url: url }, options);
    };
    AuthHttp.prototype.put = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Put, url: url }, options);
    };
    AuthHttp.prototype.delete = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Delete, url: url }, options);
    };
    AuthHttp.prototype.patch = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Patch, url: url }, options);
    };
    AuthHttp.prototype.head = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Head, url: url }, options);
    };
    AuthHttp.prototype.options = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Options, url: url }, options);
    };
    AuthHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [AuthConfig, http_1.Http, http_1.RequestOptions])
    ], AuthHttp);
    return AuthHttp;
}());
exports.AuthHttp = AuthHttp;
/**
 * Helper class to decode and find JWT expiration.
 */
var JwtHelper = (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    return JwtHelper;
}());
exports.JwtHelper = JwtHelper;
/**
 * Checks for presence of token and that token hasn't expired.
 * For use with the @CanActivate router decorator and NgIf
 */
function tokenNotExpired(tokenName, jwt) {
    if (tokenName === void 0) { tokenName = AuthConfigConsts.DEFAULT_TOKEN_NAME; }
    var token = jwt || localStorage.getItem(tokenName);
    var jwtHelper = new JwtHelper();
    return token != null && !jwtHelper.isTokenExpired(token);
}
exports.tokenNotExpired = tokenNotExpired;
exports.AUTH_PROVIDERS = [
    {
        provide: AuthHttp,
        deps: [http_1.Http, http_1.RequestOptions],
        useFactory: function (http, options) {
            return new AuthHttp(new AuthConfig(), http, options);
        }
    }
];
function provideAuth(config) {
    return [
        {
            provide: AuthHttp,
            deps: [http_1.Http, http_1.RequestOptions],
            useFactory: function (http, options) {
                return new AuthHttp(new AuthConfig(config), http, options);
            }
        }
    ];
}
exports.provideAuth = provideAuth;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
//# sourceMappingURL=angular2-jwt.js.map

/***/ },

/***/ "./node_modules/normalize.css/normalize.css":
/***/ function(module, exports) {

module.exports = "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n"

/***/ },

/***/ "./node_modules/rxjs/add/observable/fromPromise.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var fromPromise_1 = __webpack_require__("./node_modules/rxjs/observable/fromPromise.js");
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }

},["./ng2-admin/main.browser.ts"]);
//# sourceMappingURL=main.map
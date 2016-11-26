webpackJsonpac__name_([1],{

/***/ "./ng2-admin/app/pages/not-found/not-found.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var NotFound = (function () {
    function NotFound() {
    }
    return NotFound;
}());
NotFound = __decorate([
    core_1.Component({
        selector: 'not-found',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__("./ng2-admin/app/pages/not-found/not-found.scss")],
        template: __webpack_require__("./ng2-admin/app/pages/not-found/not-found.html"),
    }),
    __metadata("design:paramtypes", [])
], NotFound);
exports.NotFound = NotFound;


/***/ },

/***/ "./ng2-admin/app/pages/not-found/not-found.html":
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <ba-card class=\"col-xlg-8 offset-xlg-2\n                    col-lg-8 offset-lg-2\n                    col-md-8 offset-md-2\n                    col-sm-8 offset-sm-2\n                    col-xs-12\" title=\"Not Found\">\n        <h1 class=\"display-3\" i18n>Page Not Found</h1>\n        <p class=\"lead\" i18n>The page you are looking for not exists.</p>\n        <hr class=\"my-2\">\n        <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/dashboard']\" role=\"button\" i18n>Go To The Dashboard</a>\n    </ba-card>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/pages/not-found/not-found.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var nga_module_1 = __webpack_require__("./ng2-admin/app/theme/nga.module.ts");
var not_found_component_1 = __webpack_require__("./ng2-admin/app/pages/not-found/not-found.component.ts");
var not_found_routing_1 = __webpack_require__("./ng2-admin/app/pages/not-found/not-found.routing.ts");
var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    return NotFoundModule;
}());
NotFoundModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            nga_module_1.NgaModule,
            not_found_routing_1.routing
        ],
        declarations: [
            not_found_component_1.NotFound
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], NotFoundModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFoundModule;


/***/ },

/***/ "./ng2-admin/app/pages/not-found/not-found.routing.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var not_found_component_1 = __webpack_require__("./ng2-admin/app/pages/not-found/not-found.component.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: not_found_component_1.NotFound,
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ "./ng2-admin/app/pages/not-found/not-found.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ }

});
//# sourceMappingURL=1.map
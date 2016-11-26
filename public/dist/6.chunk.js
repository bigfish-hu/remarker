webpackJsonpac__name_([6],{

/***/ "./ng2-admin/app/pages/dashboard/dashboard.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Dashboard = (function () {
    function Dashboard() {
    }
    return Dashboard;
}());
Dashboard = __decorate([
    core_1.Component({
        selector: 'dashboard',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__("./ng2-admin/app/pages/dashboard/dashboard.scss")],
        template: __webpack_require__("./ng2-admin/app/pages/dashboard/dashboard.html")
    }),
    __metadata("design:paramtypes", [])
], Dashboard);
exports.Dashboard = Dashboard;


/***/ },

/***/ "./ng2-admin/app/pages/dashboard/dashboard.html":
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n  </div>\n</div>\n\n<div class=\"row\">\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xlg-9 col-xl-6 col-lg-6  col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"row\">\n      <ba-card class=\"col-xlg-8 col-xl-12 col-lg-12 col-md-7 col-sm-12 col-xs-12\"\n               title=\"Revenue\" baCardClass=\"medium-card\">\n\n      </ba-card>\n      <ba-card class=\"col-xlg-4 col-xl-12 col-lg-12 col-md-5 col-sm-12 col-xs-12\"\n               baCardClass=\"popular-app medium-card\">\n      </ba-card>\n    </div>\n  </div>\n\n  <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n    <ba-card title=\"Feed\"\n             baCardClass=\"large-card with-scroll feed-panel\">\n    </ba-card>\n  </div>\n\n</div>\n\n<div class=\"row shift-up\">\n  <ba-card class=\"col-xlg-3 col-lg-6 col-md-12 col-sm-12 col-xs-12\" title=\"To Do List\"\n           baCardClass=\"xmedium-card feed-comply-panel with-scroll todo-panel\">\n  </ba-card>\n  <ba-card class=\"col-xlg-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" title=\"Calendar\"\n           baCardClass=\"xmedium-card feed-comply-panel with-scroll calendar-panel\">\n  </ba-card>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/pages/dashboard/dashboard.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var nga_module_1 = __webpack_require__("./ng2-admin/app/theme/nga.module.ts");
var dashboard_component_1 = __webpack_require__("./ng2-admin/app/pages/dashboard/dashboard.component.ts");
var dashboard_routing_1 = __webpack_require__("./ng2-admin/app/pages/dashboard/dashboard.routing.ts");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            dashboard_routing_1.routing
        ],
        declarations: [
            dashboard_component_1.Dashboard
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], DashboardModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardModule;


/***/ },

/***/ "./ng2-admin/app/pages/dashboard/dashboard.routing.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var dashboard_component_1 = __webpack_require__("./ng2-admin/app/pages/dashboard/dashboard.component.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: dashboard_component_1.Dashboard
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ "./ng2-admin/app/pages/dashboard/dashboard.scss":
/***/ function(module, exports) {

module.exports = "@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n"

/***/ }

});
//# sourceMappingURL=6.map
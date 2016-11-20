webpackJsonpac__name_([0],{

/***/ "./ng2-admin/app/pages/login/login-guard.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var auth_service_1 = __webpack_require__("./ng2-admin/app/services/auth.service.ts");
var LoginGuard = (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.dashboardRoute = '/pages/dashboard';
    }
    LoginGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate([this.dashboardRoute]);
        return false;
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginGuard);
exports.LoginGuard = LoginGuard;
var _a, _b;


/***/ },

/***/ "./ng2-admin/app/pages/login/login.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var auth_service_1 = __webpack_require__("./ng2-admin/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var Login = (function () {
    function Login(fb, authService, router) {
        this.authService = authService;
        this.router = router;
        this.submitted = false;
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    Login.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.authService.login(values)
                .subscribe(function () {
                _this.router.navigate([_this.authService.redirectRoute]);
            }, function (error) { });
        }
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__("./ng2-admin/app/pages/login/login.scss")],
        template: __webpack_require__("./ng2-admin/app/pages/login/login.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], Login);
exports.Login = Login;
var _a, _b, _c;


/***/ },

/***/ "./ng2-admin/app/pages/login/login.html":
/***/ function(module, exports) {

module.exports = "<div class=\"auth-main\">\n  <div class=\"auth-block\">\n    <h1 i18n>Sign in to RemarkerAdmin</h1>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\" i18n>E-mail</label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\">\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\" i18n>Password</label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\" i18n>Sign in</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ },

/***/ "./ng2-admin/app/pages/login/login.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var nga_module_1 = __webpack_require__("./ng2-admin/app/theme/nga.module.ts");
var login_component_1 = __webpack_require__("./ng2-admin/app/pages/login/login.component.ts");
var login_routing_1 = __webpack_require__("./ng2-admin/app/pages/login/login.routing.ts");
var login_guard_service_1 = __webpack_require__("./ng2-admin/app/pages/login/login-guard.service.ts");
var auth_service_1 = __webpack_require__("./ng2-admin/app/services/auth.service.ts");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            login_routing_1.routing
        ],
        declarations: [
            login_component_1.Login
        ],
        providers: [
            auth_service_1.AuthService,
            login_guard_service_1.LoginGuard
        ]
    }),
    __metadata("design:paramtypes", [])
], LoginModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginModule;


/***/ },

/***/ "./ng2-admin/app/pages/login/login.routing.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var login_component_1 = __webpack_require__("./ng2-admin/app/pages/login/login.component.ts");
var login_guard_service_1 = __webpack_require__("./ng2-admin/app/pages/login/login-guard.service.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        canActivate: [login_guard_service_1.LoginGuard],
        component: login_component_1.Login
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ "./ng2-admin/app/pages/login/login.scss":
/***/ function(module, exports) {

module.exports = ".auth-main {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #00abff; }\n    .auth-block a:hover {\n      color: #0091d9; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n"

/***/ }

});
//# sourceMappingURL=0.map
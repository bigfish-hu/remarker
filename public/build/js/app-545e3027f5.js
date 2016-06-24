/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(8);

	__webpack_require__(16);

	__webpack_require__(23);

	__webpack_require__(25);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app', ['app.run', 'app.filters', 'app.services', 'app.components', 'app.routes', 'app.config', 'app.partials']);

	angular.module('app.run', []);
	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.components', ['ui.router', 'angular-loading-bar', 'restangular', 'satellizer', 'ui.bootstrap', 'datatables', 'datatables.bootstrap']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(3);

	angular.module('app.run').run(_routes.RoutesRun);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$rootScope", "$state", "$auth", "$timeout", "API", "ContextService"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($rootScope, $state, $auth, $timeout, API, ContextService) {
	  'ngInject';

	  /*eslint-disable */

	  var deregisterationCallback = $rootScope.$on('$stateChangeStart', function (event, toState) {
	    if (toState.data && toState.data.auth) {
	      if (!$auth.isAuthenticated()) {
	        event.preventDefault();
	        return $state.go('login');
	      }
	    }

	    $rootScope.bodyClass = 'hold-transition login-page';
	  });

	  function stateChange() {
	    $timeout(function () {
	      // fix sidebar
	      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
	      var window_height = $(window).height();
	      var sidebar_height = $('.sidebar').height();

	      if ($('body').hasClass('fixed')) {
	        $('.content-wrapper, .right-side').css('min-height', window_height - $('.main-footer').outerHeight());
	      } else {
	        if (window_height >= sidebar_height) {
	          $('.content-wrapper, .right-side').css('min-height', window_height - neg);
	        } else {
	          $('.content-wrapper, .right-side').css('min-height', sidebar_height);
	        }
	      }

	      // get user current context
	      if ($auth.isAuthenticated() && !$rootScope.me) {
	        ContextService.getContext().then(function (response) {
	          response = response.plain();
	          $rootScope.me = response.data;
	        });
	      }
	    });
	  }

	  $rootScope.$on('$destroy', deregisterationCallback);
	  $rootScope.$on('$stateChangeSuccess', stateChange);
	  /*eslint-enable */
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	var _loading_bar = __webpack_require__(6);

	var _satellizer = __webpack_require__(7);

	angular.module('app.config').config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_satellizer.SatellizerConfig);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  var getView = function getView(viewName) {
	    return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
	  };

	  var getLayout = function getLayout(layout) {
	    return './views/app/pages/layout/' + layout + '.page.html';
	  };

	  $urlRouterProvider.otherwise('/');

	  $stateProvider.state('app', {
	    abstract: true,
	    views: {
	      'layout': {
	        templateUrl: getLayout('layout')
	      },
	      'header@app': {
	        templateUrl: getView('header')
	      },
	      'footer@app': {
	        templateUrl: getView('footer')
	      },
	      main: {}
	    },
	    data: {
	      bodyClass: 'hold-transition skin-blue sidebar-mini'
	    }
	  }).state('app.landing', {
	    url: '/',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        templateUrl: getView('landing')
	      }
	    }
	  }).state('app.profile', {
	    url: '/profile',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        template: '<user-profile></user-profile>'
	      }
	    },
	    params: {
	      alerts: null
	    }
	  }).state('app.userlist', {
	    url: '/user-lists',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        template: '<user-lists></user-lists>'
	      }
	    }
	  }).state('app.useredit', {
	    url: '/user-edit/:userId',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        template: '<user-edit></user-edit>'
	      }
	    },
	    params: {
	      alerts: null,
	      userId: null
	    }
	  }).state('login', {
	    url: '/login',
	    views: {
	      'layout': {
	        templateUrl: getView('login')
	      },
	      'header@app': {},
	      'footer@app': {}
	    },
	    data: {
	      bodyClass: 'hold-transition login-page'
	    },
	    params: {
	      registerSuccess: null,
	      successMsg: null
	    }
	  }).state('loginloader', {
	    url: '/login-loader',
	    views: {
	      'layout': {
	        templateUrl: getView('login-loader')
	      },
	      'header@app': {},
	      'footer@app': {}
	    },
	    data: {
	      bodyClass: 'hold-transition login-page'
	    }
	  }).state('app.logout', {
	    url: '/logout',
	    views: {
	      'main@app': {
	        controller: ["$rootScope", "$scope", "$auth", "$state", function controller($rootScope, $scope, $auth, $state) {
	          $auth.logout().then(function () {
	            delete $rootScope.me;
	            $state.go('login');
	          });
	        }]
	      }
	    }
	  });
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	LoadingBarConfig.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoadingBarConfig = LoadingBarConfig;
	function LoadingBarConfig(cfpLoadingBarProvider) {
	  'ngInject';

	  cfpLoadingBarProvider.includeSpinner = true;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
	  'ngInject';

	  $authProvider.httpInterceptor = function () {
	    return true;
	  };

	  $authProvider.loginUrl = 'api/auth/login';
	  $authProvider.tokenRoot = 'data'; // compensates success response macro
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _date_millis = __webpack_require__(9);

	var _capitalize = __webpack_require__(10);

	var _human_readable = __webpack_require__(11);

	var _truncate_characters = __webpack_require__(12);

	var _truncate_words = __webpack_require__(13);

	var _trust_html = __webpack_require__(14);

	var _ucfirst = __webpack_require__(15);

	angular.module('app.filters').filter('datemillis', _date_millis.DateMillisFilter).filter('capitalize', _capitalize.CapitalizeFilter).filter('humanreadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DateMillisFilter = DateMillisFilter;
	function DateMillisFilter() {
	  'ngInject';

	  return function (input) {
	    return Date.parse(input);
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
	  return function (input) {
	    return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
	      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	    }) : '';
	  };
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
	  return function humanize(str) {
	    if (!str) {
	      return '';
	    }
	    var frags = str.split('_');
	    for (var i = 0; i < frags.length; i++) {
	      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
	    }
	    return frags.join(' ');
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
	  return function (input, chars, breakOnWord) {
	    if (isNaN(chars)) {
	      return input;
	    }
	    if (chars <= 0) {
	      return '';
	    }
	    if (input && input.length > chars) {
	      input = input.substring(0, chars);

	      if (!breakOnWord) {
	        var lastspace = input.lastIndexOf(' ');
	        // Get last space
	        if (lastspace !== -1) {
	          input = input.substr(0, lastspace);
	        }
	      } else {
	        while (input.charAt(input.length - 1) === ' ') {
	          input = input.substr(0, input.length - 1);
	        }
	      }
	      return input + '...';
	    }
	    return input;
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
	  return function (input, words) {
	    if (isNaN(words)) {
	      return input;
	    }
	    if (words <= 0) {
	      return '';
	    }
	    if (input) {
	      var inputWords = input.split(/\s+/);
	      if (inputWords.length > words) {
	        input = inputWords.slice(0, words).join(' ') + '...';
	      }
	    }
	    return input;
	  };
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
	  return function (html) {
	    return $sce.trustAsHtml(html);
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
	  return function (input) {
	    if (!input) {
	      return null;
	    }
	    return input.substring(0, 1).toUpperCase() + input.substring(1);
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _userLists = __webpack_require__(17);

	var _dashboard = __webpack_require__(18);

	var _navSidebar = __webpack_require__(19);

	var _navHeader = __webpack_require__(20);

	var _loginLoader = __webpack_require__(21);

	var _loginForm = __webpack_require__(22);

	angular.module('app.components').component('userLists', _userLists.UserListsComponent).component('dashboard', _dashboard.DashboardComponent).component('navSidebar', _navSidebar.NavSidebarComponent).component('navHeader', _navHeader.NavHeaderComponent).component('loginLoader', _loginLoader.LoginLoaderComponent).component('loginForm', _loginForm.LoginFormComponent);

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserListsController = function () {
	  UserListsController.$inject = ["$scope", "$state", "$compile", "DTOptionsBuilder", "DTColumnBuilder", "API"];
	  function UserListsController($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
	    'ngInject';

	    var _this = this;

	    _classCallCheck(this, UserListsController);

	    this.API = API;
	    this.$state = $state;

	    var Users = this.API.service('users');

	    Users.getList().then(function (response) {
	      var dataSet = response.plain();

	      _this.dtOptions = DTOptionsBuilder.newOptions().withOption('data', dataSet).withOption('createdRow', createdRow).withOption('responsive', true).withBootstrap();

	      _this.dtColumns = [DTColumnBuilder.newColumn('id').withTitle('ID'), DTColumnBuilder.newColumn('name').withTitle('Name'), DTColumnBuilder.newColumn('email').withTitle('Email'), DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)];

	      _this.displayTable = true;
	    });

	    var createdRow = function createdRow(row) {
	      $compile(angular.element(row).contents())($scope);
	    };

	    var actionsHtml = function actionsHtml(data) {
	      return '\n                <a class="btn btn-xs btn-warning" ui-sref="app.useredit({userId: ' + data.id + '})">\n                    <i class="fa fa-edit"></i>\n                </a>\n                &nbsp\n                <button class="btn btn-xs btn-danger" ng-click="vm.deleteUser(' + data.id + ')">\n                    <i class="fa fa-trash-o"></i>\n                </button>';
	    };
	  }

	  _createClass(UserListsController, [{
	    key: 'deleteUser',
	    value: function deleteUser(userId) {
	      var API = this.API;
	      var $state = this.$state;

	      swal({
	        title: 'Are you sure?',
	        text: 'You will not be able to recover this data!',
	        type: 'warning',
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, delete it!',
	        closeOnConfirm: false,
	        showLoaderOnConfirm: true,
	        html: false
	      }, function () {
	        API.one('users').one('user', userId).remove().then(function () {
	          swal({
	            title: 'Deleted!',
	            text: 'User Permission has been deleted.',
	            type: 'success',
	            confirmButtonText: 'OK',
	            closeOnConfirm: true
	          }, function () {
	            $state.reload();
	          });
	        });
	      });
	    }
	  }, {
	    key: '$onInit',
	    value: function $onInit() {}
	  }]);

	  return UserListsController;
	}();

	var UserListsComponent = exports.UserListsComponent = {
	  templateUrl: './views/app/components/user-lists/user-lists.component.html',
	  controller: UserListsController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DashboardController = function DashboardController() {
	  'ngInject';

	  _classCallCheck(this, DashboardController);
	};

	var DashboardComponent = exports.DashboardComponent = {
	  templateUrl: './views/app/components/dashboard/dashboard.component.html',
	  controller: DashboardController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavSidebarController = function () {
	  NavSidebarController.$inject = ["ContextService"];
	  function NavSidebarController(ContextService) {
	    'ngInject';

	    _classCallCheck(this, NavSidebarController);

	    var navSideBar = this;

	    ContextService.me(function (data) {
	      navSideBar.userData = data;
	    });
	  }

	  _createClass(NavSidebarController, [{
	    key: '$onInit',
	    value: function $onInit() {}
	  }]);

	  return NavSidebarController;
	}();

	var NavSidebarComponent = exports.NavSidebarComponent = {
	  templateUrl: './views/app/components/nav-sidebar/nav-sidebar.component.html',
	  controller: NavSidebarController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavHeaderController = function () {
	  NavHeaderController.$inject = ["$rootScope", "ContextService"];
	  function NavHeaderController($rootScope, ContextService) {
	    'ngInject';

	    _classCallCheck(this, NavHeaderController);

	    var navHeader = this;

	    ContextService.me(function (data) {
	      navHeader.userData = data;
	    });
	  }

	  _createClass(NavHeaderController, [{
	    key: '$onInit',
	    value: function $onInit() {}
	  }]);

	  return NavHeaderController;
	}();

	var NavHeaderComponent = exports.NavHeaderComponent = {
	  templateUrl: './views/app/components/nav-header/nav-header.component.html',
	  controller: NavHeaderController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginLoaderController = function LoginLoaderController($state, $auth, API) {
	  'ngInject';

	  _classCallCheck(this, LoginLoaderController);

	  API.oneUrl('authenticate').one('user').get().then(function (response) {
	    if (!response.error) {
	      var data = response.data;

	      $auth.setToken(data.token);
	      $state.go('app.landing');
	    }
	  });
	};
	LoginLoaderController.$inject = ["$state", "$auth", "API"];

	var LoginLoaderComponent = exports.LoginLoaderComponent = {
	  templateUrl: './views/app/components/login-loader/login-loader.component.html',
	  controller: LoginLoaderController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginFormController = function () {
	  LoginFormController.$inject = ["$rootScope", "$auth", "$state", "$stateParams"];
	  function LoginFormController($rootScope, $auth, $state, $stateParams) {
	    'ngInject';

	    _classCallCheck(this, LoginFormController);

	    delete $rootScope.me;

	    this.$auth = $auth;
	    this.$state = $state;
	    this.$stateParams = $stateParams;

	    this.registerSuccess = $stateParams.registerSuccess;
	    this.successMsg = $stateParams.successMsg;
	    this.loginfailed = false;
	    this.unverified = false;
	  }

	  _createClass(LoginFormController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.email = '';
	      this.password = '';
	    }
	  }, {
	    key: 'login',
	    value: function login() {
	      var _this = this;

	      this.loginfailed = false;
	      this.unverified = false;

	      var user = {
	        email: this.email,
	        password: this.password
	      };

	      this.$auth.login(user).then(function (response) {
	        _this.$auth.setToken(response.data);
	        _this.$state.go('app.landing');
	      }).catch(this.failedLogin.bind(this));
	    }
	  }, {
	    key: 'failedLogin',
	    value: function failedLogin(res) {
	      if (res.status == 401) {
	        this.loginfailed = true;
	      } else {
	        if (res.data.errors.message[0] == 'Email Unverified') {
	          this.unverified = true;
	        }
	      }
	    }
	  }]);

	  return LoginFormController;
	}();

	var LoginFormComponent = exports.LoginFormComponent = {
	  templateUrl: './views/app/components/login-form/login-form.component.html',
	  controller: LoginFormController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routeBodyclass = __webpack_require__(24);

	angular.module('app.components').directive('routeBodyclass', _routeBodyclass.RouteBodyClassComponent);

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	routeBodyClass.$inject = ['$rootScope'];
	function routeBodyClass($rootScope) {
	  return {
	    scope: { ngModel: '=ngModel' },
	    link: function routeBodyClassLink(scope, elem) {
	      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
	        // eslint-disable-line angular/on-watch
	        var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.bodyClass) ? fromState.data.bodyClass : null;
	        var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.bodyClass) ? toState.data.bodyClass : null;

	        if (fromClassnames != toClassnames) {
	          if (fromClassnames) {
	            elem.removeClass(fromClassnames);
	          }

	          if (toClassnames) {
	            elem.addClass(toClassnames);
	          }
	        }
	      });
	    },
	    restrict: 'EA'
	  };
	}

	var RouteBodyClassComponent = exports.RouteBodyClassComponent = routeBodyClass;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _context = __webpack_require__(26);

	var _API = __webpack_require__(27);

	angular.module('app.services').service('ContextService', _context.ContextService).service('API', _API.APIService);

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContextService = exports.ContextService = function () {
	  ContextService.$inject = ["$auth", "$rootScope", "API"];
	  function ContextService($auth, $rootScope, API) {
	    'ngInject';

	    _classCallCheck(this, ContextService);

	    this.$auth = $auth;
	    this.API = API;
	    this.$rootScope = $rootScope;
	  }

	  _createClass(ContextService, [{
	    key: 'getContext',
	    value: function getContext() {
	      var $auth = this.$auth;

	      if ($auth.isAuthenticated()) {
	        var API = this.API;
	        var UserData = API.service('me', API.all('users'));

	        return UserData.one().get();
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'me',
	    value: function me(cb) {
	      this.$rootScope.$watch('me', function (nv) {
	        cb(nv);
	      });
	    }
	  }]);

	  return ContextService;
	}();

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "$window", function APIService(Restangular, $window) {
	  'ngInject';
	  // content negotiation

	  _classCallCheck(this, APIService);

	  var headers = {
	    'Content-Type': 'application/json',
	    'Accept': 'application/x.remarker.v1+json'
	  };

	  return Restangular.withConfig(function (RestangularConfigurer) {
	    RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
	      if (response.status === 422) {
	        //for (var error in response.data.errors) {
	        //   return ToastService.error(response.data.errors[error][0]);
	        //}
	      }
	    }).addFullRequestInterceptor(function (element, operation, what, url, headers) {
	      var token = $window.localStorage.satellizer_token;
	      if (token) {
	        headers.Authorization = 'Bearer ' + token;
	      }
	    }).addResponseInterceptor(function (response, operation, what) {
	      if (operation === 'getList') {
	        var newResponse = response.data[what];
	        newResponse.errors = response.errors;
	        return newResponse;
	      }
	      return response;
	    });
	  });
	}];

/***/ }
/******/ ]);
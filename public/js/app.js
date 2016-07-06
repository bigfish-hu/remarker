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

	__webpack_require__(9);

	__webpack_require__(17);

	__webpack_require__(53);

	__webpack_require__(55);

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
	angular.module('app.components', ['ui.router', 'angular-loading-bar', 'restangular', 'satellizer', 'ui.bootstrap', 'datatables', 'datatables.bootstrap', 'ui.select', 'ngSanitize', 'ngAnimate', 'toastr', 'chart.js']);

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

	RoutesRun.$inject = ["$rootScope", "$state", "$auth", "$timeout", "ContextService"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($rootScope, $state, $auth, $timeout, ContextService) {
	  'ngInject';

	  /*eslint-disable */

	  var deregisterationCallback = $rootScope.$on('$stateChangeStart', function (event, toState) {
	    if (toState.data && toState.data.auth) {
	      if (!$auth.isAuthenticated() && !localStorage.getItem('satellizer_token')) {
	        event.preventDefault();
	        delete $rootScope.me;
	        return $state.go('login');
	      }
	    }

	    $rootScope.bodyClass = 'hold-transition login-page';
	  });

	  function stateChange(event, toState) {
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
	      if (toState.name !== 'login' && !$rootScope.me) {
	        ContextService.getContext().then(function (response) {
	          response = response.plain();
	          $rootScope.me = response.data.user;
	          $rootScope.me.avatarUrl = '//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=' + response.data.user.name.charAt(0).toUpperCase() + '&w=45&h=45&txtsize=16';
	          $rootScope.me.role = response.data.user.is_superadmin === 1 ? 'Admin' : 'User';
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

	var _interceptor = __webpack_require__(8);

	angular.module('app.config').config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_satellizer.SatellizerConfig).config(_interceptor.InterceptorConfig);

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
	  }).state('app.feedbacklist', {
	    url: '/feedback-list',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        template: '<feedback-list></feedback-list>'
	      }
	    }
	  }).state('app.feedbackedit', {
	    url: '/feedback-edit/:feedbackId',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        template: '<feedback-edit></feedback-edit>'
	      }
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
	  }).state('app.useradd', {
	    url: '/user-add/',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        template: '<user-add></user-add>'
	      }
	    },
	    params: {
	      alerts: null
	    }
	  }).state('app.projectlist', {
	    url: '/project-list',
	    data: {
	      auth: true
	    },
	    views: {
	      'main@app': {
	        template: '<project-list></project-list>'
	      }
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
/***/ function(module, exports) {

	'use strict';

	InterceptorConfig.$inject = ["$httpProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InterceptorConfig = InterceptorConfig;
	function InterceptorConfig($httpProvider) {
	    'ngInject';

	    $httpProvider.interceptors.push(["$q", "$injector", function ($q, $injector) {
	        return {
	            'response': function response(_response) {
	                if (_response.headers('Authorization')) {
	                    localStorage.setItem('satellizer_token', _response.headers('Authorization').replace('Bearer ', ''));
	                }
	                return _response;
	            },
	            'responseError': function responseError(response) {
	                var toastr = $injector.get('toastr');

	                toastr.error(response.status + ' ' + response.statusText, response.data);

	                if (response.headers('Authorization')) {
	                    localStorage.setItem('satellizer_token', response.headers('Authorization').replace('Bearer ', ''));
	                }

	                var $state = $injector.get('$state'),
	                    deferred = $q.defer();

	                if (response.status === 401) {
	                    $state.go('login');
	                    deferred.reject(response);
	                }

	                return $q.reject(response);
	            }
	        };
	    }]);
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _date_millis = __webpack_require__(10);

	var _capitalize = __webpack_require__(11);

	var _human_readable = __webpack_require__(12);

	var _truncate_characters = __webpack_require__(13);

	var _truncate_words = __webpack_require__(14);

	var _trust_html = __webpack_require__(15);

	var _ucfirst = __webpack_require__(16);

	angular.module('app.filters').filter('datemillis', _date_millis.DateMillisFilter).filter('capitalize', _capitalize.CapitalizeFilter).filter('humanreadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _userLists = __webpack_require__(18);

	var _userEdit = __webpack_require__(39);

	var _userAdd = __webpack_require__(40);

	var _dashboard = __webpack_require__(41);

	var _navSidebar = __webpack_require__(46);

	var _navHeader = __webpack_require__(47);

	var _loginLoader = __webpack_require__(48);

	var _loginForm = __webpack_require__(49);

	var _projectList = __webpack_require__(50);

	var _feedbackList = __webpack_require__(51);

	var _feedbackEdit = __webpack_require__(52);

	angular.module('app.components').component('userLists', _userLists.UserListsComponent).component('userEdit', _userEdit.UserEditComponent).component('userAdd', _userAdd.UserAddComponent).component('dashboard', _dashboard.DashboardComponent).component('navSidebar', _navSidebar.NavSidebarComponent).component('navHeader', _navHeader.NavHeaderComponent).component('loginLoader', _loginLoader.LoginLoaderComponent).component('loginForm', _loginForm.LoginFormComponent).component('feedbackList', _feedbackList.FeedbackListComponent).component('feedbackEdit', _feedbackEdit.FeedbackEditComponent).component('projectList', _projectList.ProjectListComponent);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserListsComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UserListsController = function () {
	  UserListsController.$inject = ["$scope", "$state", "$compile", "DTOptionsBuilder", "DTColumnBuilder", "API"];
	  function UserListsController($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
	    'ngInject';

	    var _this = this;

	    (0, _classCallCheck3.default)(this, UserListsController);
	    this.API = API;
	    this.$state = $state;

	    var Users = this.API.service('users');

	    Users.getList().then(function (response) {
	      var dataSet = response.plain();

	      _this.dtOptions = DTOptionsBuilder.newOptions().withOption('data', dataSet).withOption('createdRow', createdRow).withOption('responsive', true).withBootstrap();

	      _this.dtColumns = [DTColumnBuilder.newColumn('id').withTitle('ID').withClass('numberSort'), DTColumnBuilder.newColumn('name').withTitle('Name').withClass('letterSort'), DTColumnBuilder.newColumn('email').withTitle('Email').withClass('letterSort'), DTColumnBuilder.newColumn('is_superadmin').withTitle('Is admin').renderWith(isAdminHtml).withClass('letterSort'), DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)];

	      _this.displayTable = true;
	    });

	    var createdRow = function createdRow(row) {
	      $compile(angular.element(row).contents())($scope);
	    };

	    var isAdminHtml = function isAdminHtml(data) {
	      return data ? 'Yes' : 'No';
	    };

	    var actionsHtml = function actionsHtml(data) {
	      return '\n                <a class="btn btn-xs btn-warning" ui-sref="app.useredit({userId: ' + data.id + '})">\n                    <i class="fa fa-edit"></i>\n                </a>\n                &nbsp\n                <button class="btn btn-xs btn-danger" ng-click="vm.deleteUser(' + data.id + ')">\n                    <i class="fa fa-trash-o"></i>\n                </button>';
	    };
	  }

	  (0, _createClass3.default)(UserListsController, [{
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
	        API.service('users').one(userId).remove().then(function () {
	          swal({
	            title: 'Deleted!',
	            text: 'User has been deleted.',
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
/* 19 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(21);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(23);
	var $Object = __webpack_require__(26).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(24);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(34), 'Object', {defineProperty: __webpack_require__(30).f});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(25)
	  , core      = __webpack_require__(26)
	  , ctx       = __webpack_require__(27)
	  , hide      = __webpack_require__(29)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 25 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(28);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(30)
	  , createDesc = __webpack_require__(38);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(37)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(34) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(34) && !__webpack_require__(35)(function(){
	  return Object.defineProperty(__webpack_require__(36)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(35)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32)
	  , document = __webpack_require__(25).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(32);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserEditComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UserEditController = function () {
	  UserEditController.$inject = ["$stateParams", "$state", "API", "toastr"];
	  function UserEditController($stateParams, $state, API, toastr) {
	    'ngInject';

	    var _this = this;

	    (0, _classCallCheck3.default)(this, UserEditController);
	    this.$state = $state;
	    this.formSubmitted = false;
	    this.toastr = toastr;

	    var userId = $stateParams.userId;

	    var UserData = API.service('users');
	    var Projects = API.service('projects');

	    Projects.getList({ fields: 'id,name' }).then(function (response) {
	      _this.projects = response.plain();
	    });

	    UserData.one(userId).get().then(function (response) {
	      _this.usereditdata = API.copy(response);
	      _this.usereditdata.id = _this.usereditdata.data.user.id;
	      if (_this.usereditdata.data.user.is_superadmin === 0) {
	        _this.usereditdata.data.user.is_superadmin = false;
	      } else if (_this.usereditdata.data.user.is_superadmin === 1) {
	        _this.usereditdata.data.user.is_superadmin = true;
	      }
	    });
	  }

	  (0, _createClass3.default)(UserEditController, [{
	    key: 'save',
	    value: function save(isValid) {
	      var _this2 = this;

	      if (isValid) {
	        (function () {
	          var $state = _this2.$state;
	          _this2.usereditdata.put().then(function () {
	            _this2.toastr.success('The user has been updated!', 'Succes!');
	            $state.go($state.current);
	          }, function () {
	            $state.go($state.current);
	          });
	        })();
	      } else {
	        this.formSubmitted = true;
	      }
	    }
	  }, {
	    key: '$onInit',
	    value: function $onInit() {}
	  }]);
	  return UserEditController;
	}();

	var UserEditComponent = exports.UserEditComponent = {
	  templateUrl: './views/app/components/user-edit/user-edit.component.html',
	  controller: UserEditController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserAddComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UserAddController = function () {
	    UserAddController.$inject = ["$stateParams", "$state", "API"];
	    function UserAddController($stateParams, $state, API) {
	        'ngInject';

	        (0, _classCallCheck3.default)(this, UserAddController);
	        this.$state = $state;
	        this.formSubmitted = false;
	        this.alerts = [];

	        if ($stateParams.alerts) {
	            this.alerts.push($stateParams.alerts);
	        }

	        this.UserData = API.service('users');

	        this.usereditdata = {};
	    }

	    (0, _createClass3.default)(UserAddController, [{
	        key: 'save',
	        value: function save(isValid) {
	            var _this = this;

	            if (isValid) {
	                (function () {
	                    var $state = _this.$state;
	                    _this.UserData.post(_this.usereditdata).then(function () {
	                        var alert = { type: 'success', 'title': 'Success!', msg: 'User has been updated.' };
	                        $state.go($state.current, { alerts: alert });
	                    }, function (response) {
	                        var alert = { type: 'error', 'title': 'Error!', msg: response.data.message };
	                        $state.go($state.current, { alerts: alert });
	                    });
	                })();
	            } else {
	                this.formSubmitted = true;
	            }
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);
	    return UserAddController;
	}();

	var UserAddComponent = exports.UserAddComponent = {
	    templateUrl: './views/app/components/user-add/user-add.component.html',
	    controller: UserAddController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DashboardComponent = undefined;

	var _regenerator = __webpack_require__(42);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DashboardController = function DashboardController($scope, API) {
	    'ngInject';

	    var _this = this;

	    var _marked = [getChartData].map(_regenerator2.default.mark);

	    (0, _classCallCheck3.default)(this, DashboardController);
	    this.API = API;

	    this.options = { legend: { display: true } };
	    this.feedbackTimeBarChartColours = [{
	        fillColor: '#3c8dbc',
	        strokeColor: '#3c8dbc',
	        pointColor: '#3c8dbc',
	        pointStrokeColor: '#fff',
	        pointHighlightFill: '#fff',
	        pointHighlightStroke: 'rgba(77,83,96,1)'
	    }];

	    var Feedbacks = this.API.service('feedbacks');

	    Feedbacks.getList({ fields: 'created_at' }).then(function (response) {
	        var dataSet = response.plain();

	        var dates = dataSet.map(function (item) {
	            return item.created_at.split(' ')[0];
	        });
	        var feedbacksByTimeGenerator = getChartData(dates);
	        _this.feedbackTimeBarChartLabels = feedbacksByTimeGenerator.next().value;
	        _this.feedbackTimeBarChartData = [feedbacksByTimeGenerator.next().value];

	        var projects = dataSet.map(function (item) {
	            return item.project_name;
	        });
	        var feedbacksByProjectGenerator = getChartData(projects);
	        _this.feedbackProjectBarChartLabels = feedbacksByProjectGenerator.next().value;
	        _this.feedbackProjectBarChartData = feedbacksByProjectGenerator.next().value;

	        $scope.ngGridFIx = function () {
	            window.dispatchEvent(new Event('resize'));
	        };
	    });

	    function getChartData(dataSet) {
	        var counts, labels, data, i, num;
	        return _regenerator2.default.wrap(function getChartData$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        counts = {}, labels = [], data = [];


	                        for (i = 0; i < dataSet.length; i++) {
	                            num = dataSet[i];

	                            counts[num] = counts[num] ? counts[num] + 1 : 1;
	                        }

	                        angular.forEach(counts, function (value, key) {
	                            labels.push(key);
	                            data.push(value);
	                        });

	                        _context.next = 5;
	                        return labels;

	                    case 5:
	                        _context.next = 7;
	                        return data;

	                    case 7:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _marked[0], this);
	    }
	};
	DashboardController.$inject = ["$scope", "API"];

	var DashboardComponent = exports.DashboardComponent = {
	    templateUrl: './views/app/components/dashboard/dashboard.component.html',
	    controller: DashboardController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(44);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(45)))

/***/ },
/* 45 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it don't break things.
	var cachedSetTimeout = setTimeout;
	var cachedClearTimeout = clearTimeout;

	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavSidebarComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavSidebarController = function () {
	  NavSidebarController.$inject = ["ContextService"];
	  function NavSidebarController(ContextService) {
	    'ngInject';

	    var _this = this;

	    (0, _classCallCheck3.default)(this, NavSidebarController);
	    ContextService.me(function (data) {
	      _this.me = data || {};
	    });
	  }

	  (0, _createClass3.default)(NavSidebarController, [{
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavHeaderComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavHeaderController = function () {
	  function NavHeaderController() {
	    'ngInject';

	    (0, _classCallCheck3.default)(this, NavHeaderController);
	  }

	  (0, _createClass3.default)(NavHeaderController, [{
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginLoaderComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginLoaderController = function LoginLoaderController($state, $auth, API) {
	  'ngInject';

	  (0, _classCallCheck3.default)(this, LoginLoaderController);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginFormComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginFormController = function () {
	  LoginFormController.$inject = ["$rootScope", "$auth", "$state", "$stateParams"];
	  function LoginFormController($rootScope, $auth, $state, $stateParams) {
	    'ngInject';

	    (0, _classCallCheck3.default)(this, LoginFormController);
	    delete $rootScope.me;

	    this.$auth = $auth;
	    this.$state = $state;
	    this.$stateParams = $stateParams;

	    this.registerSuccess = $stateParams.registerSuccess;
	    this.successMsg = $stateParams.successMsg;
	    this.loginfailed = false;
	    this.unverified = false;
	  }

	  (0, _createClass3.default)(LoginFormController, [{
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ProjectListComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectListController = function () {
	    ProjectListController.$inject = ["$scope", "$state", "$compile", "DTOptionsBuilder", "DTColumnBuilder", "API", "ContextService"];
	    function ProjectListController($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API, ContextService) {
	        'ngInject';

	        var _this = this;

	        (0, _classCallCheck3.default)(this, ProjectListController);
	        this.API = API;
	        this.$state = $state;

	        var Projects = this.API.service('projects');

	        ContextService.me(function (data) {
	            _this.me = data || {};
	        });

	        Projects.getList().then(function (response) {
	            var dataSet = response.plain();

	            _this.dtOptions = DTOptionsBuilder.newOptions().withOption('data', dataSet).withOption('createdRow', createdRow).withOption('responsive', true).withBootstrap();

	            _this.dtColumns = [DTColumnBuilder.newColumn('id').withTitle('ID').withClass('numberSort'), DTColumnBuilder.newColumn('name').withTitle('Name').withClass('letterSort'), DTColumnBuilder.newColumn('ext_id').withTitle('Ext id').withClass('numberSort'), DTColumnBuilder.newColumn('issue_tracker').withTitle('Issue Tracker').withClass('letterSort')];

	            _this.displayTable = true;
	        });

	        var createdRow = function createdRow(row) {
	            $compile(angular.element(row).contents())($scope);
	        };
	    }

	    (0, _createClass3.default)(ProjectListController, [{
	        key: 'syncProjects',
	        value: function syncProjects() {
	            var API = this.API;
	            var $state = this.$state;

	            swal({
	                title: 'Are you sure?',
	                text: 'It might take some time.',
	                type: 'info',
	                showCancelButton: true,
	                confirmButtonColor: '#DD6B55',
	                confirmButtonText: 'Yes, sync \'em all!',
	                closeOnConfirm: false,
	                showLoaderOnConfirm: true,
	                html: false
	            }, function () {
	                API.service('projects').one('sync').get().then(function () {
	                    swal({
	                        title: 'Synchronized!',
	                        text: 'All projects have been synchronized.',
	                        type: 'success',
	                        confirmButtonText: 'OK',
	                        closeOnConfirm: true
	                    }, function () {
	                        $state.reload();
	                    });
	                }, function (response) {
	                    swal({
	                        title: 'Ooops!',
	                        text: response,
	                        type: 'error',
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
	    return ProjectListController;
	}();

	var ProjectListComponent = exports.ProjectListComponent = {
	    templateUrl: './views/app/components/project-list/project-list.component.html',
	    controller: ProjectListController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FeedbackListComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FeedbackListController = function () {
	    FeedbackListController.$inject = ["$scope", "$state", "$compile", "DTOptionsBuilder", "DTColumnBuilder", "API"];
	    function FeedbackListController($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
	        'ngInject';

	        var _this = this;

	        (0, _classCallCheck3.default)(this, FeedbackListController);
	        this.API = API;
	        this.$state = $state;
	        this.dtInstance = null;

	        var Feedbacks = this.API.service('feedbacks');
	        var Projects = this.API.service('projects');

	        Projects.getList({ fields: 'id,name' }).then(function (response) {
	            _this.projects = response.plain();
	        });

	        Feedbacks.getList({ fields: 'id,title,project_id,created_at' }).then(function (response) {
	            var dataSet = response.plain();

	            _this.dtOptions = DTOptionsBuilder.newOptions().withOption('data', dataSet).withOption('createdRow', createdRow).withOption('responsive', true).withOption('rowCallback', rowCallback).withBootstrap();

	            _this.dtColumns = [DTColumnBuilder.newColumn('id').withTitle('ID').withClass('numberSort'), DTColumnBuilder.newColumn('title').withTitle('Title').withClass('letterSort'), DTColumnBuilder.newColumn('project_id').withTitle('Project').renderWith(projectNameHtml).withClass('letterSort'), DTColumnBuilder.newColumn('created_at').withTitle('Created').withClass('numberSort'), DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)];

	            _this.displayTable = true;
	        });

	        this.dtIntanceCallback = function (instance) {
	            _this.dtInstance = instance;
	            _this.dtInstance.reloadData();
	        };

	        var rowCallback = function rowCallback(nRow, aData) {
	            angular.element('td', nRow).unbind('click');
	            angular.element('td', nRow).bind('click', function (event) {
	                $scope.$apply(function () {
	                    rowClickHandler(aData, event);
	                });
	            });
	            return nRow;
	        };

	        var subRow = function subRow(feedback) {
	            return '\n                    <table class="table table-bordered">\n                        <tr>\n                            <td><b>URL:</b></td>\n                            <td>' + feedback.data.feedback.url + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Platform:</b></td>\n                            <td>' + feedback.data.feedback.platform + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Browser:</b></td>\n                            <td>' + feedback.data.feedback.browser + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>User Agent:</b></td>\n                            <td>' + feedback.data.feedback.user_agent + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Cookie Enabled:</b></td>\n                            <td>' + feedback.data.feedback.cookie_enabled + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Reporter Name:</b></td>\n                            <td>' + feedback.data.feedback.reporter_name + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Reporter Email:</b></td>\n                            <td>' + feedback.data.feedback.reporter_email + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Description:</b></td>\n                            <td>' + feedback.data.feedback.description + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Screen Resolution:</b></td>\n                            <td>' + feedback.data.feedback.screen_resolution + '</td>\n                        </tr>\n                        <tr>\n                            <td><b>Screenshot:</b></td>\n                            <td>\n                                <a target="_blank" href="' + feedback.data.feedback.screenshot + '" class="thumbnail">\n                                    <img src="' + feedback.data.feedback.screenshot + '">\n                                </a>\n                            </td>\n                        </tr>\n                    </table>\n                ';
	        };

	        var rowClickHandler = function rowClickHandler(data, event) {
	            var tr = angular.element(event.currentTarget).parent(),
	                table = _this.dtInstance.DataTable,
	                row = table.row(tr);

	            if (row.child.isShown()) {
	                row.child.hide();
	                tr.removeClass('shown');
	            } else {
	                _this.API.service('feedbacks').one(data.id).get().then(function (response) {
	                    _this.feedback = response;
	                    _this.feedback.id = response.data.feedback.id;
	                    row.child($compile(subRow(response))($scope)).show();
	                    tr.addClass('shown');
	                });
	            }
	        };

	        var createdRow = function createdRow(row) {
	            $compile(angular.element(row).contents())($scope);
	        };

	        var projectNameHtml = function projectNameHtml(data) {
	            return _this.projects[data - 1].name;
	        };

	        var actionsHtml = function actionsHtml(data) {
	            return '\n                <a class="btn btn-xs btn-warning" ui-sref="app.feedbackedit({feedbackId: ' + data.id + '})">\n                    <i class="fa fa-edit"></i>\n                </a>\n                &nbsp\n                <button class="btn btn-xs btn-danger" ng-click="vm.deleteFeedback(' + data.id + ')">\n                    <i class="fa fa-trash-o"></i>\n                </button>';
	        };
	    }

	    (0, _createClass3.default)(FeedbackListController, [{
	        key: 'saveFeedback',
	        value: function saveFeedback(feedback) {
	            var _this2 = this;

	            var $state = this.$state;
	            feedback.put().then(function () {
	                _this2.toastr.success('The feedback has been updated!', 'Succes!');
	                $state.go($state.current);
	            }, function () {
	                $state.go($state.current);
	            });
	        }
	    }, {
	        key: 'deleteFeedback',
	        value: function deleteFeedback(feedbackId) {
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
	                API.service('feedbacks').one(feedbackId).remove().then(function () {
	                    swal({
	                        title: 'Deleted!',
	                        text: 'The feedback has been deleted.',
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
	    return FeedbackListController;
	}();

	var FeedbackListComponent = exports.FeedbackListComponent = {
	    templateUrl: './views/app/components/feedback-list/feedback-list.component.html',
	    controller: FeedbackListController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FeedbackEditComponent = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FeedbackEditController = function () {
	    FeedbackEditController.$inject = ["$stateParams", "$state", "API", "toastr"];
	    function FeedbackEditController($stateParams, $state, API, toastr) {
	        'ngInject';

	        var _this = this;

	        (0, _classCallCheck3.default)(this, FeedbackEditController);
	        this.$state = $state;
	        this.toastr = toastr;

	        var feedbackId = $stateParams.feedbackId;

	        API.service('feedbacks').one(feedbackId).get().then(function (response) {
	            _this.feedback = response;
	            _this.feedback.id = feedbackId;
	        });
	    }

	    (0, _createClass3.default)(FeedbackEditController, [{
	        key: 'save',
	        value: function save() {
	            var _this2 = this;

	            var $state = this.$state;
	            this.feedback.put().then(function () {
	                _this2.toastr.success('The feedback has been updated!', 'Succes!');
	                $state.go($state.current);
	            }, function () {
	                $state.go($state.current);
	            });
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);
	    return FeedbackEditController;
	}();

	var FeedbackEditComponent = exports.FeedbackEditComponent = {
	    templateUrl: './views/app/components/feedback-edit/feedback-edit.component.html',
	    controller: FeedbackEditController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routeBodyclass = __webpack_require__(54);

	angular.module('app.components').directive('routeBodyclass', _routeBodyclass.RouteBodyClassDirective);

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	routeBodyClass.$inject = ["$rootScope"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function routeBodyClass($rootScope) {
	  'ngInject';

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

	var RouteBodyClassDirective = exports.RouteBodyClassDirective = routeBodyClass;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _context = __webpack_require__(56);

	var _API = __webpack_require__(57);

	angular.module('app.services').service('ContextService', _context.ContextService).service('API', _API.APIService);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ContextService = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(20);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContextService = exports.ContextService = function () {
	  ContextService.$inject = ["$auth", "$rootScope", "API"];
	  function ContextService($auth, $rootScope, API) {
	    'ngInject';

	    (0, _classCallCheck3.default)(this, ContextService);
	    this.$auth = $auth;
	    this.API = API;
	    this.$rootScope = $rootScope;
	  }

	  (0, _createClass3.default)(ContextService, [{
	    key: 'getContext',
	    value: function getContext() {
	      var API = this.API;
	      var UserData = API.service('me', API.all('users'));

	      return UserData.one().get();
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.APIService = undefined;

	var _classCallCheck2 = __webpack_require__(19);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var APIService = exports.APIService = ["Restangular", "$window", function APIService(Restangular, $window) {
	  'ngInject';
	  // content negotiation

	  (0, _classCallCheck3.default)(this, APIService);
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
	      if (operation === 'getList' && response.data[what]) {
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
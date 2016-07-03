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

	__webpack_require__(29);

	__webpack_require__(31);

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

	var _userEdit = __webpack_require__(19);

	var _userAdd = __webpack_require__(20);

	var _dashboard = __webpack_require__(21);

	var _navSidebar = __webpack_require__(22);

	var _navHeader = __webpack_require__(23);

	var _loginLoader = __webpack_require__(24);

	var _loginForm = __webpack_require__(25);

	var _projectList = __webpack_require__(26);

	var _feedbackList = __webpack_require__(27);

	var _feedbackEdit = __webpack_require__(28);

	angular.module('app.components').component('userLists', _userLists.UserListsComponent).component('userEdit', _userEdit.UserEditComponent).component('userAdd', _userAdd.UserAddComponent).component('dashboard', _dashboard.DashboardComponent).component('navSidebar', _navSidebar.NavSidebarComponent).component('navHeader', _navHeader.NavHeaderComponent).component('loginLoader', _loginLoader.LoginLoaderComponent).component('loginForm', _loginForm.LoginFormComponent).component('feedbackList', _feedbackList.FeedbackListComponent).component('feedbackEdit', _feedbackEdit.FeedbackEditComponent).component('projectList', _projectList.ProjectListComponent);

/***/ },
/* 18 */
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserEditController = function () {
	  UserEditController.$inject = ["$stateParams", "$state", "API", "toastr"];
	  function UserEditController($stateParams, $state, API, toastr) {
	    'ngInject';

	    var _this = this;

	    _classCallCheck(this, UserEditController);

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

	  _createClass(UserEditController, [{
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
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserAddController = function () {
	    UserAddController.$inject = ["$stateParams", "$state", "API"];
	    function UserAddController($stateParams, $state, API) {
	        'ngInject';

	        _classCallCheck(this, UserAddController);

	        this.$state = $state;
	        this.formSubmitted = false;
	        this.alerts = [];

	        if ($stateParams.alerts) {
	            this.alerts.push($stateParams.alerts);
	        }

	        this.UserData = API.service('users');

	        this.usereditdata = {};
	    }

	    _createClass(UserAddController, [{
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
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DashboardController = function () {
	  DashboardController.$inject = ["$scope"];
	  function DashboardController($scope) {
	    'ngInject';

	    _classCallCheck(this, DashboardController);
	  }

	  _createClass(DashboardController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.feedbackBarChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	      this.feedbackBarChartData = [[28, 48, 40, 19, 86, 27, 90]];
	      this.feedbackBarChartColours = [{
	        fillColor: '#D2D6DE',
	        strokeColor: '#D2D6DE',
	        pointColor: 'rgba(148,159,177,1)',
	        pointStrokeColor: '#fff',
	        pointHighlightFill: '#fff',
	        pointHighlightStroke: 'rgba(148,159,177,0.8)'
	      }, {
	        fillColor: '#00A65A',
	        strokeColor: '#00A65A',
	        pointColor: '#2980b9',
	        pointStrokeColor: '#fff',
	        pointHighlightFill: '#fff',
	        pointHighlightStroke: 'rgba(77,83,96,1)'
	      }];
	    }
	  }]);

	  return DashboardController;
	}();

	var DashboardComponent = exports.DashboardComponent = {
	  templateUrl: './views/app/components/dashboard/dashboard.component.html',
	  controller: DashboardController,
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

	var NavSidebarController = function () {
	  NavSidebarController.$inject = ["ContextService"];
	  function NavSidebarController(ContextService) {
	    'ngInject';

	    var _this = this;

	    _classCallCheck(this, NavSidebarController);

	    ContextService.me(function (data) {
	      _this.me = data || {};
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
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavHeaderController = function () {
	  function NavHeaderController() {
	    'ngInject';

	    _classCallCheck(this, NavHeaderController);
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProjectListController = function () {
	    ProjectListController.$inject = ["$scope", "$state", "$compile", "DTOptionsBuilder", "DTColumnBuilder", "API", "ContextService"];
	    function ProjectListController($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API, ContextService) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, ProjectListController);

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

	    _createClass(ProjectListController, [{
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
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FeedbackListController = function () {
	    FeedbackListController.$inject = ["$scope", "$state", "$compile", "DTOptionsBuilder", "DTColumnBuilder", "API"];
	    function FeedbackListController($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, FeedbackListController);

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

	    _createClass(FeedbackListController, [{
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
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FeedbackEditController = function () {
	    FeedbackEditController.$inject = ["$stateParams", "$state", "API", "toastr"];
	    function FeedbackEditController($stateParams, $state, API, toastr) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, FeedbackEditController);

	        this.$state = $state;
	        this.toastr = toastr;

	        var feedbackId = $stateParams.feedbackId;

	        API.service('feedbacks').one(feedbackId).get().then(function (response) {
	            _this.feedback = response;
	            _this.feedback.id = feedbackId;
	        });
	    }

	    _createClass(FeedbackEditController, [{
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routeBodyclass = __webpack_require__(30);

	angular.module('app.components').directive('routeBodyclass', _routeBodyclass.RouteBodyClassDirective);

/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _context = __webpack_require__(32);

	var _API = __webpack_require__(33);

	angular.module('app.services').service('ContextService', _context.ContextService).service('API', _API.APIService);

/***/ },
/* 32 */
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
/* 33 */
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
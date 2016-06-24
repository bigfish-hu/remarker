(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/dashboard/dashboard.component.html',
    '<section class="content">\n' +
    '    <!-- Info boxes -->\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()" method="post">\n' +
    '    <div class="callout callout-danger" ng-if="vm.loginfailed">\n' +
    '        <h4>Login Failed</h4>\n' +
    '        <p>Incorrect Email/Username or Password.</p>\n' +
    '    </div>\n' +
    '    <div class="callout callout-success" ng-if="vm.successMsg">\n' +
    '        <h4>Success!</h4>\n' +
    '        <p>{{ vm.successMsg }}</p>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback">\n' +
    '        <input type="email" class="form-control" placeholder="Email" ng-model="vm.email">\n' +
    '        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback">\n' +
    '        <input type="password" class="form-control" placeholder="Password" ng-model="vm.password">\n' +
    '        <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-8">\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="col-xs-4">\n' +
    '            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-loader/login-loader.component.html',
    'Logging in...');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/nav-header/nav-header.component.html',
    '<header class="main-header">\n' +
    '  <!-- Logo -->\n' +
    '  <a href="/admin/" class="logo">\n' +
    '    <!-- mini logo for sidebar mini 50x50 pixels -->\n' +
    '    <span class="logo-mini"><b>R</b>A</span>\n' +
    '    <!-- logo for regular state and mobile devices -->\n' +
    '    <span class="logo-lg"><b>Remarker</b>Admin</span>\n' +
    '  </a>\n' +
    '\n' +
    '  <!-- Header Navbar: style can be found in header.less -->\n' +
    '  <nav class="navbar navbar-static-top">\n' +
    '    <!-- Sidebar toggle button-->\n' +
    '    <a href="javascript:void(0)" class="sidebar-toggle" data-toggle="offcanvas" role="button">\n' +
    '      <span class="sr-only">Toggle navigation</span>\n' +
    '    </a>\n' +
    '    <!-- Navbar Right Menu -->\n' +
    '    <div class="navbar-custom-menu">\n' +
    '      <ul class="nav navbar-nav">\n' +
    '          <li>\n' +
    '              <a ui-sref="app.logout"><i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</a>\n' +
    '          </li>\n' +
    '        <!-- Control Sidebar Toggle Button -->\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </nav>\n' +
    '</header>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/nav-sidebar/nav-sidebar.component.html',
    '<aside class="main-sidebar">\n' +
    '  <!-- sidebar: style can be found in sidebar.less -->\n' +
    '  <section class="sidebar">\n' +
    '    <!-- Sidebar user panel -->\n' +
    '    <div class="user-panel">\n' +
    '      <div class="pull-left info">\n' +
    '        <p>{{vm.userData.name | capitalize}}</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <!-- sidebar menu: : style can be found in sidebar.less -->\n' +
    '    <ul class="sidebar-menu">\n' +
    '      <li class="header">MAIN NAVIGATION</li>\n' +
    '      <li>\n' +
    '        <a ui-sref=\'app.landing\'>\n' +
    '          <i class="fa fa-dashboard"></i> <span>Dashboard</span>\n' +
    '        </a>\n' +
    '      </li>\n' +
    '      <li>\n' +
    '          <a ui-sref=\'app.userlist\'><i class="fa fa-users"></i> <span>User List</span></a>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </section>\n' +
    '  <!-- /.sidebar -->\n' +
    '</aside>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-edit/user-edit.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li><a ui-sref="app.userlist">User Lists</a></li>\n' +
    '        <li class="active">Edit User</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Edit User</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="userForm" ng-submit="vm.save(userForm.$valid)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.name.$invalid && ( vm.formSubmitted || userForm.name.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Name</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.usereditdata.data.name" name="name" placeholder="Name" required>\n' +
    '                <p ng-show="userForm.name.$error.required && ( vm.formSubmitted || userForm.name.$touched)" class="help-block">Name is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.email.$invalid && ( vm.formSubmitted || userForm.email.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="email" class="form-control" ng-model="vm.usereditdata.data.email" name="email" placeholder="Email" required>\n' +
    '                <p ng-show="userForm.email.$error.required && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '                <p ng-show="userForm.email.$error.email  && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">This is not a valid email.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Roles</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <div class="checkbox" ng-repeat="role in vm.systemRoles">\n' +
    '                  <label>\n' +
    '                    <input type="checkbox" checklist-model="vm.usereditdata.data.role" checklist-value="role.id"> {{role.name}}\n' +
    '                  </label>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userlist" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-lists/user-lists.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li class="active">User Lists</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="box box-info">\n' +
    '                <div class="box-header with-border">\n' +
    '                    <h3 class="box-title">User List</h3>\n' +
    '                    <div class="box-tools pull-right">\n' +
    '                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <table datatable="" width="100%"  class="table table-striped table-bordered"\n' +
    '                        ng-if="vm.displayTable"\n' +
    '                        dt-options="vm.dtOptions"\n' +
    '                        dt-columns="vm.dtColumns"></table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-- /.box -->\n' +
    '        </div>\n' +
    '        <!-- /.col -->\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<footer class="main-footer">\n' +
    '    <div class="pull-right hidden-xs">\n' +
    '        <b>Version</b> 2.3.3\n' +
    '    </div>\n' +
    '    <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.\n' +
    '</footer>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<nav-header></nav-header>\n' +
    '<nav-sidebar></nav-sidebar>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/landing/landing.page.html',
    '    <!-- Content Header (Page header) -->\n' +
    '    <section class="content-header">\n' +
    '      <h1>\n' +
    '        Dashboard\n' +
    '        <small>Version 2.0</small>\n' +
    '      </h1>\n' +
    '      <ol class="breadcrumb">\n' +
    '        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li class="active">Dashboard</li>\n' +
    '      </ol>\n' +
    '    </section>\n' +
    '\n' +
    '    <dashboard></dashboard>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/layout/layout.page.html',
    '<div ui-view="header"></div>\n' +
    '<div class="content-wrapper">\n' +
    '    <div ui-view="main"></div>\n' +
    '</div>\n' +
    '<div ui-view="footer"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login/login.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Remarker</b>admin</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <p class="login-box-msg">Sign in to start your session</p>\n' +
    '    <login-form></login-form>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login-loader/login-loader.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Admin</b>LTE</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <login-loader></login-loader>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

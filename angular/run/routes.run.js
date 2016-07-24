export function RoutesRun ($rootScope, $state, $auth, $timeout, ContextService) {
  'ngInject';

  /*eslint-disable */
  let deregisterationCallback = $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (toState.data && toState.data.auth) {
      if (!ContextService.canRefreshToken()) {
        event.preventDefault();
        delete $rootScope.me;
        return $state.go('login');
      }
    }

    $rootScope.bodyClass = 'hold-transition login-page'
  });

  function stateChange (event, toState) {
    $timeout(function () {
      // fix sidebar
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $('.sidebar').height();

      if ($('body').hasClass('fixed')) {
        $('.content-wrapper, .right-side').css('min-height', window_height - $('.main-footer').outerHeight())
      } else {
        if (window_height >= sidebar_height) {
          $('.content-wrapper, .right-side').css('min-height', window_height - neg)
        } else {
          $('.content-wrapper, .right-side').css('min-height', sidebar_height)
        }
      }

      // get user current context
      if (toState.name !== 'login' && toState.name !== 'app.logout' && !$rootScope.me) {
        ContextService.getContext()
          .then((response) => {
            response = response.plain();
            $rootScope.me = response.data.user;
            $rootScope.me.avatarUrl = `//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=${response.data.user.name.charAt(0).toUpperCase()}&w=45&h=45&txtsize=16`;
            $rootScope.me.role = response.data.user.is_superadmin === 1 ? 'Admin' : 'User';
          })
      }
    })
  }

  $rootScope.$on('$destroy', deregisterationCallback);
  $rootScope.$on('$stateChangeSuccess', stateChange);
/*eslint-enable */
}

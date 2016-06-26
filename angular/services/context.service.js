export class ContextService {
  constructor ($auth, $rootScope, API) {
    'ngInject';
    this.$auth = $auth;
    this.API = API;
    this.$rootScope = $rootScope;
  }

  getContext () {
    let $auth = this.$auth;
    let $rootScope = this.$rootScope;

    if ($auth.isAuthenticated() && !$rootScope.me) {
      let API = this.API;
      let UserData = API.service('me', API.all('users'));

      return UserData.one().get();
    } else {
      return null;
    }
  }

  me (cb) {
    this.$rootScope.$watch('me', function (nv) {
        cb(nv);
    });
  }
}

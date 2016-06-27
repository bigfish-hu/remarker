export class ContextService {
  constructor ($auth, $rootScope, API) {
    'ngInject';
    this.$auth = $auth;
    this.API = API;
    this.$rootScope = $rootScope;
  }

  getContext () {
      let API = this.API;
      let UserData = API.service('me', API.all('users'));

      return UserData.one().get();
  }

  me (cb) {
    this.$rootScope.$watch('me', function (nv) {
        cb(nv);
    });
  }
}

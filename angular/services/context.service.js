export class ContextService {
  constructor ($auth, $rootScope, API) {
    'ngInject';
    this.$auth = $auth;
    this.API = API;
    this.$rootScope = $rootScope;
  }

    canRefreshToken () {
        if (!this.$auth.getToken()) {
            return false;
        }

        let refresh_ttl = 300;
        let iat = this.$auth.getPayload().iat;

        let isExpired = Math.round(new Date().getTime() / 1000) >= (iat + refresh_ttl);

        return !isExpired;
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

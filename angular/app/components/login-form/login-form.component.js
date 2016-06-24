class LoginFormController {
  constructor ($rootScope, $auth, $state, $stateParams) {
    'ngInject';

    delete $rootScope.me;

    this.$auth = $auth;
    this.$state = $state;
    this.$stateParams = $stateParams;

    this.registerSuccess = $stateParams.registerSuccess;
    this.successMsg = $stateParams.successMsg;
    this.loginfailed = false;
    this.unverified = false;
  }

  $onInit () {
    this.email = '';
    this.password = '';
  }

  login () {
    this.loginfailed = false;
    this.unverified = false;

    let user = {
      email: this.email,
      password: this.password
    };

    this.$auth.login(user)
      .then((response) => {
        this.$auth.setToken(response.data);
        this.$state.go('app.landing');
      })
      .catch(this.failedLogin.bind(this));
  }

  failedLogin (res) {
    if (res.status == 401) {
      this.loginfailed = true;
    } else {
      if (res.data.errors.message[0] == 'Email Unverified') {
        this.unverified = true;
      }
    }
  }
}

export const LoginFormComponent = {
  templateUrl: './views/app/components/login-form/login-form.component.html',
  controller: LoginFormController,
  controllerAs: 'vm',
  bindings: {}
};

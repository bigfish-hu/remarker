class LoginFormController {
  constructor ($rootScope, $auth, $state, toastr, NotificationService) {
    'ngInject';

    delete $rootScope.me;

    this.$auth = $auth;
    this.$state = $state;
    this.toastr = toastr;
    this.NotificationService = NotificationService;
  }

  $onInit () {
    this.email = '';
    this.password = '';
  }

  login () {
    let user = {
      email: this.email,
      password: this.password
    };

    this.$auth.login(user)
      .then((response) => {
        this.$auth.setToken(response.data);
        this.$state.go('app.landing');
          console.log('fakka1');
        this.NotificationService.registerServiceWorker();
      }, (response) => {
          this.toastr.error(response.data || '', response.status + ' ' + response.statusText);
        });

  }
}

export const LoginFormComponent = {
  templateUrl: './views/app/components/login-form/login-form.component.html',
  controller: LoginFormController,
  controllerAs: 'vm',
  bindings: {}
};

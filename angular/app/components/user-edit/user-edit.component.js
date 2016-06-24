class UserEditController {
  constructor ($stateParams, $state, API) {
    'ngInject';

    this.$state = $state;
    this.formSubmitted = false;
    this.alerts = [];

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts);
    }

    let userId = $stateParams.userId;

    let UserData = API.service('users');

    UserData.one(userId).get()
      .then((response) => {
            this.usereditdata = API.copy(response);
            this.usereditdata.id = this.usereditdata.data.user.id;
        if (this.usereditdata.data.user.is_superadmin === 0) {
            this.usereditdata.data.user.is_superadmin = false;
        } else if (this.usereditdata.data.user.is_superadmin === 1) {
            this.usereditdata.data.user.is_superadmin = true;
        }
      });
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state;
      this.usereditdata.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Success!', msg: 'User has been updated.' };
          $state.go($state.current, { alerts: alert});
        }, (response) => {
          let alert = { type: 'error', 'title': 'Error!', msg: response.data.message };
          $state.go($state.current, { alerts: alert});
        });
    } else {
      this.formSubmitted = true;
    }
  }

  $onInit () {}
}

export const UserEditComponent = {
  templateUrl: './views/app/components/user-edit/user-edit.component.html',
  controller: UserEditController,
  controllerAs: 'vm',
  bindings: {}
};

class UserEditController {
  constructor ($stateParams, $state, API, toastr) {
    'ngInject';

    this.$state = $state;
    this.formSubmitted = false;
    this.toastr = toastr;

    let userId = $stateParams.userId;

    let UserData = API.service('users');
    let Projects = API.service('projects');

    Projects.getList({fields: 'id,name'}).then((response) => {
      this.projects = response.plain();
    });

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
            this.toastr.success('The user has been updated!', 'Succes!');
            $state.go($state.current);
        }, () => {
          $state.go($state.current);
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

class UserAddController {
    constructor ($stateParams, $state, API) {
        'ngInject';

        this.$state = $state;
        this.formSubmitted = false;
        this.alerts = [];

        if ($stateParams.alerts) {
            this.alerts.push($stateParams.alerts);
        }

        this.UserData = API.service('users');

        this.usereditdata = {};
    }

    save (isValid) {
        if (isValid) {
            let $state = this.$state;
            this.UserData.post(this.usereditdata)
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

export const UserAddComponent = {
    templateUrl: './views/app/components/user-add/user-add.component.html',
    controller: UserAddController,
    controllerAs: 'vm',
    bindings: {}
};

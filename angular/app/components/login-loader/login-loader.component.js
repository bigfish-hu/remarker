class LoginLoaderController {
  constructor ($state, $auth, API) {
    'ngInject'

    API.oneUrl('authenticate').one('user').get().then((response) => {
      if (!response.error) {
        let data = response.data

        $auth.setToken(data.token)
        $state.go('app.landing')
      }
    })
  }
}

export const LoginLoaderComponent = {
  templateUrl: './views/app/components/login-loader/login-loader.component.html',
  controller: LoginLoaderController,
  controllerAs: 'vm',
  bindings: {}
}

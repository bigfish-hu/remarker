export class APIService {
  constructor (Restangular, toastr, $state) {
    'ngInject';
    // content negotiation
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/x.remarker.v1+json'
    },
        error = false;

    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer
        .setBaseUrl('/api/')
        .setDefaultHeaders(headers)
        .setErrorInterceptor(function (response) {
              if (!error) {
                  toastr.error(response.data || '', response.status + ' ' + response.statusText);
              }

              if (response.headers.Authorization) {
                  localStorage.setItem('satellizer_token',
                      response.headers.Authorization.replace('Bearer ', ''));
              }

              if (response.status === 401) {
                  $state.go('login');
                  localStorage.removeItem('satellizer_token');
                  error = true;
              }

              return false;
        })
        .addFullRequestInterceptor(function (element, operation, what, url, headers) {
          var token = localStorage.satellizer_token;
          if (token) {
            headers.Authorization = 'Bearer ' + token;
          }
        })
        .addResponseInterceptor(function (response, operation, what, url, headers) {
            if (headers.headers('Authorization')) {
              localStorage.setItem('satellizer_token',
                  headers.headers('Authorization').replace('Bearer ', ''));
            }

            if (operation === 'getList' && response.data[what]) {
              var newResponse = response.data[what];
              newResponse.errors = response.errors;
              return newResponse;
            }
            return response;
        });
    });
  }
}

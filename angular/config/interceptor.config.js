export function InterceptorConfig ($httpProvider) {
    'ngInject';

    $httpProvider.interceptors.push(function($q, $injector) {
        return {
            'response': function(response) {
                if (response.headers('Authorization')) {
                    localStorage.setItem('satellizer_token',response.headers('Authorization').replace('Bearer ', ''));
                }
                return response;
            },
            'responseError': function(response) {
                let $state = $injector.get('$state'),
                    deferred = $q.defer();

                    if (response.status === 401) {
                    $state.go('login');
                    deferred.reject(response);
                }

                return $q.reject(response);
            }
        };
    });
}

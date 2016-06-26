export function InterceptorConfig ($httpProvider) {
    'ngInject';

    $httpProvider.interceptors.push(function() {
        return {
            'response': function(response) {
                if (response.headers('Authorization')) {
                    localStorage.setItem('satellizer_token',response.headers('Authorization').replace('Bearer ', ''));
                }
                return response;
            }
        };
    });
}

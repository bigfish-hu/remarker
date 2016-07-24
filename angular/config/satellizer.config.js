export function SatellizerConfig ($authProvider) {
  'ngInject';

  $authProvider.loginUrl = 'api/auth/login';
  $authProvider.tokenRoot = 'data'; // compensates success response macro
}

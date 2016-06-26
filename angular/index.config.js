import { RoutesConfig } from './config/routes.config';
import { LoadingBarConfig } from './config/loading_bar.config';
import { SatellizerConfig } from './config/satellizer.config';
import { InterceptorConfig } from './config/interceptor.config';

angular.module('app.config')
  .config(RoutesConfig)
  .config(LoadingBarConfig)
  .config(SatellizerConfig)
  .config(InterceptorConfig);

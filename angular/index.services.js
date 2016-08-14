import { ContextService } from './services/context.service';
import { APIService } from './services/API.service';
import { NotificationService } from './services/notification.service';

angular.module('app.services')
  .service('ContextService', ContextService)
  .service('API', APIService)
  .service('NotificationService', NotificationService);

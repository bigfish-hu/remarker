import { UserListsComponent } from './app/components/user-lists/user-lists.component';
import { UserEditComponent } from './app/components/user-edit/user-edit.component';
import { UserAddComponent } from './app/components/user-add/user-add.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { NavSidebarComponent } from './app/components/nav-sidebar/nav-sidebar.component';
import { NavHeaderComponent } from './app/components/nav-header/nav-header.component';
import { LoginLoaderComponent } from './app/components/login-loader/login-loader.component';
import { LoginFormComponent } from './app/components/login-form/login-form.component';

angular.module('app.components')
  .component('userLists', UserListsComponent)
  .component('userEdit', UserEditComponent)
  .component('userAdd', UserAddComponent)
  .component('dashboard', DashboardComponent)
  .component('navSidebar', NavSidebarComponent)
  .component('navHeader', NavHeaderComponent)
  .component('loginLoader', LoginLoaderComponent)
  .component('loginForm', LoginFormComponent);

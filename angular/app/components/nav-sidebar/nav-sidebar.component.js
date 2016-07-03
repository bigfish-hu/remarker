class NavSidebarController {
  constructor (ContextService) {
    'ngInject';

    ContextService.me((data) => {
        this.me = data || {};
    });
  }

  $onInit () {}
}

export const NavSidebarComponent = {
  templateUrl: './views/app/components/nav-sidebar/nav-sidebar.component.html',
  controller: NavSidebarController,
  controllerAs: 'vm',
  bindings: {}
};

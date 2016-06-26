class NavSidebarController {
  constructor (ContextService) {
    'ngInject';

    let navSideBar = this;

    ContextService.me(function (data) {
      if (data.user) {
        navSideBar.userData = data.user;
        navSideBar.avatarUrl = `//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=${data.user.name.charAt(0).toUpperCase()}&w=45&h=45&txtsize=16`;
        navSideBar.role = data.user.is_superadmin === 1 ? 'Admin' : 'User';
      }
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

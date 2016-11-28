export const PAGES_MENU = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'fa fa-tachometer',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'feedbacks',
        data: {
          menu: {
            title: 'Feedbacks',
            icon: 'fa fa-bug',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'projects',
        data: {
          menu: {
            title: 'Projects',
            icon: 'fa fa-list',
            selected: false,
            expanded: false,
            order: 2
          }
        }
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'fa fa-users',
            selected: false,
            expanded: false,
            order: 3
          }
        }
      },
    ]
  }
];

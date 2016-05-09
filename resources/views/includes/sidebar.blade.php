<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left info">
                <p>{{ Auth::user()->name }}</p>
            </div>
        </div>
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <li class="header"> {{ trans('admin/sidebar.main') }}</li>

            <li>
                <a href="/admin/feedbacks">
                    <i class="fa fa-bug"></i> <span>{{ trans('admin/sidebar.feedbacks') }}</span>
                </a>
            </li>

            <li>
                <a href="/admin/projects">
                    <i class="fa fa-files-o"></i> <span>{{ trans('admin/sidebar.projects') }}</span>
                </a>
            </li>

            <li>
                <a href="/admin/trackers">
                    <i class="fa fa-folder"></i> <span>{{ trans('admin/sidebar.trackers') }}</span>
                </a>
            </li>

            <li>
                <a href="/admin/users">
                    <i class="fa fa-user"></i> <span>{{ trans('admin/sidebar.users') }}</span>
                </a>
            </li>
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>
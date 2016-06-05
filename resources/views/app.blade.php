<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>RemarkerAdmin |  {{ trans('admin/app.dashboard') }}</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

        <!-- Ionicons 2.0.0 -->
        <link href="http://code.ionicframework.com/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <!-- Theme style -->
        <link href="{{ asset('/dist/css/AdminLTE.min.css') }}" rel="stylesheet" type="text/css" />

        <!-- AdminLTE Skins. Choose a skin from the css/skins -->
        <link href="{{ asset('/dist/css/skins/skin-blue.min.css') }}" rel="stylesheet" type="text/css" />

        <link href="{{ asset('/css/multiple-emails.css') }}" rel="stylesheet" type="text/css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.2/css/select2.min.css" rel="stylesheet" />

        <link href="{{ asset('/css/select2.bootstrap.css') }}" rel="stylesheet" type="text/css" />

        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/t/bs/jq-2.2.0,dt-1.10.11/datatables.min.css"/>

        <link href="{{ asset('/css/app.css') }}" rel="stylesheet" type="text/css" />


        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
    </head>
    <body class="skin-blue">
        <div class="wrapper">
            @if(!Auth::guest())
                @include('includes.header')
                @include('includes.sidebar')
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    @yield('header')
                </section>
                <!-- Main content -->
                <section class="content">
                    @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    @yield('content')
                </section><!-- /.content -->
            </div><!-- /.content-wrapper -->
            @else
                <div class="content-wrapper">
                    <section class="content">
                        @yield('login')
                    </section><!-- /.content -->
                </div>
            @endif
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    <b>{{ trans('admin/app.version') }}</b> {{env('APP_VERSION')}}
                </div>
                <strong>Copyright &copy; {!! date("Y") !!} <a href="http://en.bigfish.hu/en/">BIG FISH</a>.</strong> {{ trans('admin/app.allrigths') }}
            </footer>
        </div><!-- ./wrapper -->

        @yield('modals')

        <script src="{{ asset('/plugins/jQuery/jquery-2.2.3.js') }}"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/t/bs/jq-2.2.0,dt-1.10.11/datatables.min.js"></script>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.2/js/select2.min.js"></script>

        <!-- AdminLTE App -->
        <script src="{{ asset('/dist/js/app.min.js') }}" type="text/javascript"></script>

        <script src="{{ asset('/js/app.js') }}" type="text/javascript"></script>

        @yield('scripts')

        <script>
            // modals
            $('.modifyModal').on('shown.bs.modal', function (e) {
                var $form = $(this).find('form');
                var base_url = $form.data('base_url');
                var obj_id = $(e.relatedTarget).data('obj_id').toString();
                var url = base_url + obj_id;
                $form.attr('action', url);
            });
        </script>
    </body>
</html>
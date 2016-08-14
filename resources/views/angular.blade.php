<!doctype html>
<html ng-app="app" ng-strict-di>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{!! elixir('css/vendor.css') !!}">
    <link rel="stylesheet" href="{!! elixir('css/app.css') !!}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <title>Remarker Admin</title>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="manifest" href="/admin/manifest.json">
</head>
<body route-bodyclass>
<div class="wrapper">
    <div ui-view="layout"></div>
    <script src="{!! elixir('js/vendor.js') !!}"></script>
    <script src="{!! elixir('js/partials.js') !!}"></script>
    <script src="{!! elixir('js/app.js') !!}"></script>
    <div class="control-sidebar-bg"></div>
</div>
<script src="/dist/js/app.js"></script>
<script src="sw.js"></script>
</body>
</html>
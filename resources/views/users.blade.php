@extends('app')

@section('header')
    <h1>
        {{ trans('admin/sidebar.users') }}
    </h1>
@endsection

@section('content')
    <div class="box-body table-responsive no-padding">
        <table id="users" class="table table-hover datatable">
            <thead>
                <tr>
                    <th>{{ trans('admin/users.id') }}</th>
                    <th>{{ trans('admin/users.name') }}</th>
                    <th>{{ trans('admin/users.email') }}</th>
                    <th>{{ trans('admin/users.is_superadmin') }}</th>
                    <th>{{ trans('admin/users.created_at') }}</th>
                    <th>{{ trans('admin/users.updated_at') }}</th>
                    @can('edit-users', Auth::user())
                    <th>{{ trans('admin/users.actions') }}</th>
                    @endcan
                </tr>
            </thead>

            <tbody>
            @foreach($users as $user)
                <tr>
                    <td>{{ $user->id }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->is_superadmin }}</td>
                    <td>{{ $user->created_at }}</td>
                    <td>{{ $user->updated_at }}</td>
                    @can('edit-users', Auth::user())
                    <td>
                        <span id="edit_user_button" data-obj_id="{{ $user->id }}" data-toggle="modal" data-target="#editUserModal" class="btn btn-info action-button"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> {{ trans('admin/users.edit') }}</span>
                        <span id="delete_user_button" data-obj_id="{{ $user->id }}" data-toggle="modal" data-target="#deleteUserModal" class="btn btn-danger action-button"><i class="fa fa-trash" aria-hidden="true"></i> {{ trans('admin/users.delete') }}</span></td>
                    @endcan
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    @can('edit-users', Auth::user())
    <div>
        <button type="button" data-toggle="modal" data-target="#createUserModal" class="btn btn-success">{{ trans('admin/users.create_user') }}</button>
    </div>
    @endcan
@endsection

@section('modals')
    @can('edit-users', Auth::user())
    <div id="createUserModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="/admin/users" method="POST">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/users.create_user') }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="CreateUserName">{{ trans('admin/users.name') }}</label>
                            <input name="name" type="text" class="form-control" id="CreateUserName" placeholder="{{ trans('admin/users.name') }}">
                        </div>
                        <div class="form-group">
                            <label for="CreateUserEmail">{{ trans('admin/users.email') }}</label>
                            <input name="email" type="email" class="form-control" id="CreateUserEmail" placeholder="{{ trans('admin/users.email') }}">
                        </div>
                        <div class="form-group">
                            <label for="CreateUserPassword">{{ trans('admin/users.password') }}</label>
                            <input name="password" type="password" class="form-control" id="CreateUserPassword" placeholder="{{ trans('admin/users.password') }}">
                        </div>
                        <div class="checkbox">
                            <label>
                                <input name="is_superadmin" type="checkbox"> {{ trans('admin/users.is_superadmin') }}
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/users.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('admin/users.save') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


    <div id="editUserModal" class="modal modifyModal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form data-base_url="/admin/users/" action="" method="POST">
                    <input type="hidden" name="_method" value="PUT">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/users.edit_user') }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="EditUserName">{{ trans('admin/users.name') }}</label>
                            <input name="name" type="text" class="form-control" id="EditUserName" placeholder="{{ trans('admin/users.name') }}">
                        </div>
                        <div class="form-group">
                            <label for="EditUserEmail">{{ trans('admin/users.email') }}</label>
                            <input name="email" type="email" class="form-control" id="EditUserEmail" placeholder="{{ trans('admin/users.email') }}">
                        </div>
                        <div class="form-group">
                            <label for="EditUserPassword">{{ trans('admin/users.password') }}</label>
                            <input name="password" type="password" class="form-control" id="EditUserPassword" placeholder="{{ trans('admin/users.password') }}">
                        </div>
                        <div class="checkbox">
                            <label>
                                <input name="is_superadmin" type="checkbox"> {{ trans('admin/users.is_superadmin') }}
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/users.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('admin/users.save') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


    <div id="deleteUserModal" class="modal modifyModal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form data-base_url="/admin/users/" action="/admin/users/" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/users.delete_user') }}</h4>
                    </div>
                    <div class="modal-body">
                        <b>{{ trans('admin/users.messages.delete') }}</b>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/users.close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ trans('admin/users.delete') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
    @endcan
@endsection

@section('scripts')
    <script>
        // datatable
        $(document).ready(function() {
            var table = $('.datatable').DataTable();
        });
    </script>
@endsection
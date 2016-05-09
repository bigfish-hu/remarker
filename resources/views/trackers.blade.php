@extends('app')

@section('header')
    <h1>
        {{ trans('admin/sidebar.trackers') }}
    </h1>
@endsection

@section('content')
    <div class="box-body table-responsive no-padding">
        <table id="trackers" class="table table-hover datatable">
            <thead>
            <tr>
                <th>{{ trans('admin/trackers.id') }}</th>
                <th>{{ trans('admin/trackers.name') }}</th>
                <th>{{ trans('admin/trackers.user_name') }}</th>
                <th>{{ trans('admin/trackers.created_at') }}</th>
                <th>{{ trans('admin/trackers.updated_at') }}</th>
                @can('edit-trackers', Auth::user())
                <th>{{ trans('admin/trackers.actions') }}</th>
                @endcan
            </tr>
            </thead>

            <tbody>
            @foreach($trackers as $tracker)
                <tr>
                    <td>{{ $tracker->id }}</td>
                    <td>{{ $tracker->name }}</td>
                    <td>{{ $tracker->user_name }}</td>
                    <td>{{ $tracker->created_at }}</td>
                    <td>{{ $tracker->updated_at }}</td>
                    @can('edit-trackers', Auth::user())
                    <td>
                        <span id="edit_tracker_button" data-obj_id="{{ $tracker->id }}" data-toggle="modal" data-target="#editTrackerModal" class="btn btn-info action-button"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> {{ trans('admin/trackers.edit') }}</span>
                        <span id="delete_tracker_button" data-obj_id="{{ $tracker->id }}" data-toggle="modal" data-target="#deleteTrackerModal" class="btn btn-danger action-button"><i class="fa fa-trash" aria-hidden="true"></i> {{ trans('admin/trackers.delete') }}</span></td>
                    @endcan
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    @can('edit-trackers', Auth::user())
    <div>
        <button type="button" data-toggle="modal" data-target="#createTrackerModal" class="btn btn-success">{{ trans('admin/trackers.create_tracker') }}</button>
    </div>
    @endcan
@endsection

@section('modals')
    @can('before', Auth::user())
    <div id="createTrackerModal" class="modal fade modifyTrackerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="/admin/trackers" method="POST">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="fa fa-times" aria-hidden="true"></span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/trackers.create_tracker') }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="CreateTrackerName">{{ trans('admin/trackers.name') }}</label>
                            <input name="name" type="text" class="form-control" id="CreateTrackerName" placeholder="{{  trans('admin/trackers.name')}}">
                        </div>
                        <div class="form-group">
                            <label for="CreateTrackerUserName">{{ trans('admin/trackers.user_name') }}</label>
                            <input name="user_name" type="text" class="form-control" id="CreateTrackerUserName" placeholder="{{ trans('admin/trackers.email') }}">
                        </div>
                        <div class="form-group">
                            <label for="CreateTrackerPassword">{{ trans('admin/trackers.password') }}</label>
                            <input name="password" type="password" class="form-control" id="CreateTrackerPassword" placeholder="{{trans('admin/trackers.password') }}">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/trackers.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('admin/trackers.save') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


    <div id="editTrackerModal" class="modal modifyModal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form data-base_url="/admin/users/" action="" method="POST">
                    <input type="hidden" name="_method" value="PUT">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="fa fa-times" aria-hidden="true"></span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/trackers.edit_tracker') }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="EditTrackerName">{{ trans('admin/trackers.name') }}</label>
                            <input name="name" type="text" class="form-control" id="EditTrackerName" placeholder="{{ trans('admin/trackers.name') }}">
                        </div>
                        <div class="form-group">
                            <label for="EditTrackerUserName">{{ trans('admin/trackers.user_name') }}</label>
                            <input name="user_name" type="text" class="form-control" id="EditTrackerUserName" placeholder="{{ trans('admin/trackers.user_name') }}">
                        </div>
                        <div class="form-group">
                            <label for="EditTrackerPassword">{{ trans('admin/trackers.password') }}</label>
                            <input name="password" type="password" class="form-control" id="EditTrackerPassword" placeholder="{{ trans('admin/trackers.password') }}">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/trackers.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('admin/trackers.save') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


    <div id="deleteTrackerModal" class="modal modifyModal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form data-base_url="/admin/users/" action="" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="fa fa-times" aria-hidden="true"></span></button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/trackers.delete_tracker') }}</h4>
                    </div>
                    <div class="modal-body">
                        <b>{{ trans('admin/trackers.messages.delete') }}</b>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/trackers.close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ trans('admin/trackers.delete') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
    @endcan
@endsection

@section('scripts')
    <script>

    </script>
@endsection
@extends('app')

@section('header')
    <h1>
        {{ trans('admin/sidebar.projects') }}
    </h1>
@endsection

@section('content')
    <div class="box-body table-responsive no-padding">
        <table id="projects" class="table table-hover datatable">
            <thead>
                <tr>
                    <th>{{ trans('admin/projects.id') }}</th>
                    <th>{{ trans('admin/projects.name') }}</th>
                    <th>{{ trans('admin/projects.ext_id') }}</th>
                    <th>{{ trans('admin/projects.issue_tracker') }}</th>
                    <th>{{ trans('admin/projects.is_automatic_notification') }}</th>
                    @can('edit-projects', Auth::user())
                    <th>{{ trans('admin/projects.actions') }}</th>
                    @endcan
                </tr>
            </thead>

            <tbody>
            @foreach($projects as $project)
                <tr data-project_id="{{ $project->id }}">
                    <td class="accordion-toggle">{{ $project->id }}</td>
                    <td class="accordion-toggle">{{ $project->name }}</td>
                    <td class="accordion-toggle">{{ $project->ext_id }}</td>
                    <td class="accordion-toggle">{{ $project->issue_tracker }}</td>
                    <td class="accordion-toggle">{{ $project->is_automatic_notification }}</td>
                    @can('edit-projects', Auth::user())
                    <td>
                        <span id="edit_project_button" data-obj_id="{{ $project->id }}" data-toggle="modal" data-target="#editProjectModal" class="btn btn-info action-button"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> {{ trans('admin/projects.edit') }}</span>
                        <span id="delete_project_button" data-obj_id="{{ $project->id }}" data-toggle="modal" data-target="#deleteProjectModal" class="btn btn-danger action-button"><i class="fa fa-trash" aria-hidden="true"></i> {{ trans('admin/projects.delete') }}</span>
                    </td>
                    @endcan
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    @can('edit-projects', Auth::user())
    <div>
        <a href="/admin/projects/sync" id="getProjectsFromIssueTracker" class="btn btn-success">{{ trans('admin/projects.sync_projects') }}</a>
    </div>
    @endcan
@endsection

@section('modals')
    @can('edit-projects', Auth::user())
    <div id="editProjectModal" class="modal modifyModal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form data-base_url="/admin/projects/" action="" method="POST">
                    <input type="hidden" name="_method" value="PUT">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="fa fa-times" aria-hidden="true"></span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/projects.edit_project') }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="EditProjectName">{{ trans('admin/projects.name') }}</label>
                            <input name="name" type="text" class="form-control" id="EditProjectName" placeholder="{{ trans('admin/projects.name') }}">
                        </div>

                        <div class="form-group">
                            <label for="EditProjectUsers">{{ trans('admin/projects.assign_users') }}</label>
                            <select name="users[]" id="EditProjectUsers" class="form-control" multiple>
                            @foreach($users as $user)
                                <option value="{{$user->id}}">{{$user->name}}</option>
                            @endforeach
                            </select>
                        </div>

                        <div class="checkbox">
                            <label>
                                <input name="is_automatic_notification" type="checkbox"> {{ trans('admin/projects.is_automatic_notification') }}
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/projects.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('admin/projects.save') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


    <div id="deleteProjectModal" class="modal modifyModal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form data-base_url="/admin/users/" action="" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="fa fa-times" aria-hidden="true"></span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/projects.delete_project') }}</h4>
                    </div>
                    <div class="modal-body">
                        <b>{{ trans('admin/projects.messages.delete') }}</b>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/projects.close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ trans('admin/projects.delete') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
    @endcan
@endsection

@section('scripts')
    <script>
        var trans = {
            name: "{{ trans('admin/projects.user_name') }}",
            // if the user cannot edit the projects' properties (e.g name, url, assigned users, etc.)
            // then these properties are undefined.
            @can('edit-projects', Auth::user())
            url: "{{ trans('admin/projects.url') }}",
            edit: "{{ trans('admin/projects.edit') }}",
            del: "{{ trans('admin/projects.delete') }}",
            // the js examines this variable and if it's undefined, then the delete button doesn't show up
            delete_user: "{{ trans('admin/projects.delete_user') }}"
            @endcan
        };
        /* Formatting function for row details - modify as you need */
        function format ( d, p ) {
            var delete_user_button = trans.delete_user ?
            '<span class="btn btn-sm btn-danger remove-user pull-right"><i class="fa fa-trash" aria-hidden="true"></i>'+trans.delete_user+'</span>'
                    : '';
            // `d` is the original data object for the row
            var html =  '<table>' +
                    '<ul class="list-group">';
            $.each(d, function(i, user){
                html += '<li data-user_id="'+user.id+'" data-project_id="'+ p+'"  class="list-group-item clearfix">' + user.name + delete_user_button + '</li>';
            });

            html += '</ul>' +
                    '</table>';

            return html;
        }

        $(document).ready(function() {
            // datatable
            var table = $('.datatable').DataTable();

            // Add event listener for opening and closing details
            $('.accordion-toggle').on('click', function () {
                var tr = $(this).closest('tr');
                var project_id = tr.data('project_id');
                var row = table.row( tr );

                if ( row.child.isShown() ) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    $.ajax('/admin/projects/'+project_id+'/users', {
                        dataType: 'json'
                    })
                    .done(function(data) {
                        // Open this row
                        row.child( format(data, project_id) ).show();
                        tr.addClass('shown');

                        $('.remove-user').on('click', function(e){
                            var $row = $(this).parent();
                            var user_id = $row.data('user_id');


                            $.ajax('/admin/projects/'+project_id+'/users/'+user_id, {
                                method: 'DELETE',
                                headers: {
                                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                                }
                            })
                            .done(function() {
                                 $row.remove();
                            });
                        });
                    });
                }
            } );

            $('#getProjectsFromIssueTracker').on('click', function(){
                $.ajax('/admin/projects/sync', {
                    success: function(response){
                        console.log(response);
                    }
                });
            });


        } );

        // select2
        $('#EditProjectUsers').select2({
            theme: "bootstrap"
        });
    </script>
@endsection
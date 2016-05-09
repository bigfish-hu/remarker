@extends('app')

@section('header')
    <h1>
        {{ trans('admin/sidebar.feedbacks') }}
    </h1>
@endsection

@section('content')
    <table id="feedbacks" class="table table-bordered table-hover datatable">
            <thead>
                <tr>
                    <th>{{ trans('admin/feedbacks.id') }}</th>
                    <th>{{ trans('admin/feedbacks.title') }}</th>
                    <th>{{ trans('admin/feedbacks.project') }}</th>
                    <th>{{ trans('admin/feedbacks.created_at') }}</th>
                    <th>{{ trans('admin/feedbacks.updated_at') }}</th>
                </tr>
            </thead>
            <tbody>
            @foreach($projects as $project)
                @foreach($project->feedbacks as $feedback)
                <tr data-feedback_id="{{ $feedback->id }}" class="accordion-toggle">
                    <td>{{ $feedback->id }}</td>
                    <td>{{ $feedback->title }}</td>
                    <td>{{ $project->name }}</td>
                    <td>{{ $feedback->created_at }}</td>
                    <td>{{ $feedback->updated_at }}</td>
                </tr>
                @endforeach
            @endforeach
            </tbody>
        </table>
@endsection

@section('modals')
    <div id="deleteFeedbackModal" class="modal modifyFeedbackModal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="/admin/feedbacks/" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    {{ csrf_field() }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="fa fa-times" aria-hidden="true"></span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('admin/feedbacks.delete_feedback') }}</h4>
                    </div>
                    <div class="modal-body">
                        <b>{{ trans('admin/feedbacks.messages.delete') }}</b>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('admin/feedbacks.close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ trans('admin/feedbacks.delete') }}</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
@endsection

@section('scripts')
    <script>
        var trans = {
            url: "{{ trans('admin/feedbacks.url') }}",
            browser: "{{ trans('admin/feedbacks.browser') }}",
            cookie_enabled: "{{ trans('admin/feedbacks.cookie_enabled') }}",
            platform: "{{ trans('admin/feedbacks.platform') }}",
            user_agent: "{{ trans('admin/feedbacks.user_agent') }}",
            reporter_name: "{{ trans('admin/feedbacks.reporter_name') }}",
            reporter_email: "{{ trans('admin/feedbacks.reporter_email') }}",
            screen_resolution: "{{ trans('admin/feedbacks.screen_resolution') }}",
            description: "{{ trans('admin/feedbacks.description') }}",
            project: "{{ trans('admin/feedbacks.project') }}",
            screenshot: "{{ trans('admin/feedbacks.screenshot') }}",
            edit: "{{ trans('admin/feedbacks.edit') }}",
            del: "{{ trans('admin/feedbacks.delete') }}"
        };

        /* Formatting function for row details - modify as you need */
        function format ( d ) {
            // `d` is the original data object for the row
            return '<table class="table table-bordered">'+
                    '<tr>'+
                        '<td>'+trans.url+': </td>'+
                        '<td>'+d.url+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.platform+':</td>'+
                        '<td>'+d.platform+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.browser+':</td>'+
                        '<td>'+d.browser+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.user_agent+':</td>'+
                        '<td>'+d.user_agent+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.cookie_enabled+':</td>'+
                        '<td>'+d.cookie_enabled+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.reporter_name+':</td>'+
                        '<td>'+d.reporter_name+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.reporter_email+':</td>'+
                        '<td>'+d.reporter_email+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.description+':</td>'+
                        '<td>'+d.description+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.screen_resolution+':</td>'+
                        '<td>'+d.screen_resolution+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+trans.screenshot+':</td>'+
                        '<td>' +
                            '<a target="_blank" href="'+d.screenshot+'" class="thumbnail">' +
                                '<img src="'+d.screenshot+'">' +
                            '</a>' +
                        '</td>'+
                    '</tr>'+
                    '</table>';
        }

        $(document).ready(function() {
            // datatable
                var table = $('.datatable').DataTable();
            // Add event listener for opening and closing details
            $('.accordion-toggle').on('click', function () {
                var tr = $(this).closest('tr');
                var feedback_id = tr.data('feedback_id');
                var row = table.row( tr );

                if ( row.child.isShown() ) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    $.ajax('/admin/feedbacks/'+feedback_id, {
                        dataType: 'json'
                    })
                    .done(function(data) {
                        // Open this row
                        row.child( format(data) ).show();
                        tr.addClass('shown');
                    });
                }
            } );
        } );
    </script>
@endsection
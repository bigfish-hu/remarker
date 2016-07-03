class FeedbackListController{
    constructor ($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
        'ngInject';
        this.API = API;
        this.$state = $state;
        this.dtInstance = null;

        let Feedbacks = this.API.service('feedbacks');
        let Projects = this.API.service('projects');

        Projects.getList({fields: 'id,name'}).then((response) => {
            this.projects = response.plain();
        });

        Feedbacks.getList({fields: 'id,title,project_id,created_at'})
            .then((response) => {
                let dataSet = response.plain();

                this.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('data', dataSet)
                    .withOption('createdRow', createdRow)
                    .withOption('responsive', true)
                    .withOption('rowCallback', rowCallback)
                    .withBootstrap();

                this.dtColumns = [
                    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('numberSort'),
                    DTColumnBuilder.newColumn('title').withTitle('Title').withClass('letterSort'),
                    DTColumnBuilder.newColumn('project_id').withTitle('Project').renderWith(projectNameHtml).withClass('letterSort'),
                    DTColumnBuilder.newColumn('created_at').withTitle('Created').withClass('numberSort'),
                    DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
                        .renderWith(actionsHtml)
                ];

                this.displayTable = true;
            });

        this.dtIntanceCallback = (instance) => {
            this.dtInstance = instance;
            this.dtInstance.reloadData();
        };

        let rowCallback = (nRow, aData) => {
            angular.element('td', nRow).unbind('click');
            angular.element('td', nRow).bind('click', function(event) {
                $scope.$apply(function() {
                    rowClickHandler(aData, event);
                });
            });
            return nRow;
        };

        let subRow = (feedback) => {
            return `
                    <table class="table table-bordered">
                        <tr>
                            <td><b>URL:</b></td>
                            <td>${feedback.data.feedback.url}</td>
                        </tr>
                        <tr>
                            <td><b>Platform:</b></td>
                            <td>${feedback.data.feedback.platform}</td>
                        </tr>
                        <tr>
                            <td><b>Browser:</b></td>
                            <td>${feedback.data.feedback.browser}</td>
                        </tr>
                        <tr>
                            <td><b>User Agent:</b></td>
                            <td>${feedback.data.feedback.user_agent}</td>
                        </tr>
                        <tr>
                            <td><b>Cookie Enabled:</b></td>
                            <td>${feedback.data.feedback.cookie_enabled}</td>
                        </tr>
                        <tr>
                            <td><b>Reporter Name:</b></td>
                            <td>${feedback.data.feedback.reporter_name}</td>
                        </tr>
                        <tr>
                            <td><b>Reporter Email:</b></td>
                            <td>${feedback.data.feedback.reporter_email}</td>
                        </tr>
                        <tr>
                            <td><b>Description:</b></td>
                            <td>${feedback.data.feedback.description}</td>
                        </tr>
                        <tr>
                            <td><b>Screen Resolution:</b></td>
                            <td>${feedback.data.feedback.screen_resolution}</td>
                        </tr>
                        <tr>
                            <td><b>Screenshot:</b></td>
                            <td>
                                <a target="_blank" href="${feedback.data.feedback.screenshot}" class="thumbnail">
                                    <img src="${feedback.data.feedback.screenshot}">
                                </a>
                            </td>
                        </tr>
                    </table>
                `;
        };

        let rowClickHandler = (data, event) => {
            let tr = angular.element(event.currentTarget).parent(),
                table = this.dtInstance.DataTable,
                row = table.row(tr);

            if (row.child.isShown()) {
                row.child.hide();
                tr.removeClass('shown');
            } else {
                this.API.service('feedbacks').one(data.id).get().then(
                    (response) => {
                        this.feedback = response;
                        this.feedback.id = response.data.feedback.id;
                        row.child($compile(subRow(response))($scope)).show();
                        tr.addClass('shown');
                    }
                );
            }
        };

        let createdRow = (row) => {
            $compile(angular.element(row).contents())($scope);
        };

        let projectNameHtml = (data) => {
            return this.projects[data-1].name;
        };

        let actionsHtml = (data) => {
            return `
                <a class="btn btn-xs btn-warning" ui-sref="app.feedbackedit({feedbackId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.deleteFeedback(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`;
        };
    }

    saveFeedback (feedback) {
        let $state = this.$state;
        feedback.put()
            .then(() => {
                this.toastr.success('The feedback has been updated!', 'Succes!');
                $state.go($state.current);
            }, () => {
                $state.go($state.current);
            });
    }

    deleteFeedback(feedbackId) {
        let API = this.API;
        let $state = this.$state;

        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            html: false
        }, function () {
            API.service('feedbacks').one(feedbackId).remove()
                .then(() => {
                    swal({
                        title: 'Deleted!',
                        text: 'The feedback has been deleted.',
                        type: 'success',
                        confirmButtonText: 'OK',
                        closeOnConfirm: true
                    }, function () {
                        $state.reload();
                    });
                });
        });
    }

    $onInit(){
    }
}

export const FeedbackListComponent = {
    templateUrl: './views/app/components/feedback-list/feedback-list.component.html',
    controller: FeedbackListController,
    controllerAs: 'vm',
    bindings: {}
};

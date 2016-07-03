class ProjectListController{
    constructor($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API, ContextService){
        'ngInject';
        this.API = API;
        this.$state = $state;

        let Projects = this.API.service('projects');

        ContextService.me((data) => {
            this.me = data || {};
        });

        Projects.getList()
            .then((response) => {
                let dataSet = response.plain();

                this.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('data', dataSet)
                    .withOption('createdRow', createdRow)
                    .withOption('responsive', true)
                    .withBootstrap();

                this.dtColumns = [
                    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('numberSort'),
                    DTColumnBuilder.newColumn('name').withTitle('Name').withClass('letterSort'),
                    DTColumnBuilder.newColumn('ext_id').withTitle('Ext id').withClass('numberSort'),
                    DTColumnBuilder.newColumn('issue_tracker').withTitle('Issue Tracker').withClass('letterSort')
                ];

                this.displayTable = true;
            });

        let createdRow = (row) => {
            $compile(angular.element(row).contents())($scope);
        };
    }

    syncProjects() {
        let API = this.API;
        let $state = this.$state;

        swal({
            title: 'Are you sure?',
            text: 'It might take some time.',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, sync \'em all!',
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            html: false
        }, function () {
            API.service('projects').one('sync').get()
                .then(() => {
                    swal({
                        title: 'Synchronized!',
                        text: 'All projects have been synchronized.',
                        type: 'success',
                        confirmButtonText: 'OK',
                        closeOnConfirm: true
                    }, function () {
                        $state.reload();
                    });
                }, (response) => {
                    swal({
                        title: 'Ooops!',
                        text: response,
                        type: 'error',
                        confirmButtonText: 'OK',
                        closeOnConfirm: true
                        }, function () {
                        $state.reload();
                    });
                });
        });
    }

    $onInit(){}
}

export const ProjectListComponent = {
    templateUrl: './views/app/components/project-list/project-list.component.html',
    controller: ProjectListController,
    controllerAs: 'vm',
    bindings: {}
};



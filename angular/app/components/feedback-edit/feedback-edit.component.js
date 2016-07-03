class FeedbackEditController{
    constructor($stateParams, $state, API, toastr){
        'ngInject';

        this.$state = $state;
        this.toastr = toastr;

        let feedbackId = $stateParams.feedbackId;

        API.service('feedbacks').one(feedbackId).get().then(
            (response) => {
                this.feedback = response;
                this.feedback.id = feedbackId;
            }
        );
    }

    save () {
        let $state = this.$state;
        this.feedback.put()
            .then(() => {
                this.toastr.success('The feedback has been updated!', 'Succes!');
                $state.go($state.current);
            }, () => {
                $state.go($state.current);
            });
    }
    $onInit(){
    }
}

export const FeedbackEditComponent = {
    templateUrl: './views/app/components/feedback-edit/feedback-edit.component.html',
    controller: FeedbackEditController,
    controllerAs: 'vm',
    bindings: {}
};



class DashboardController {
  constructor ($scope, API) {
    'ngInject';
    this.API = API;
    this.counts = {};

    let Feedbacks = this.API.service('feedbacks');

    Feedbacks.getList({fields: 'project_id,created_at'})
        .then((response) => {
          let dataSet = response.plain();

          let dates = dataSet.map(function (item) {
            return item.created_at.split(' ')[0];
          });

          for(let i = 0; i< dates.length; i++) {
            let num = dates[i];
            this.counts[num] = this.counts[num] ? this.counts[num]+1 : 1;
          }

          console.log(this.counts);
          //this.feedbackBarChartLabels = Object.keys(counts);
          this.feedbackBarChartLabels = [];
          this.feedbackBarChartData = [];
          angular.forEach(this.counts, (value, key) => {
            this.feedbackBarChartLabels.push(key);
            this.feedbackBarChartData.push(value);
          });

          this.feedbackBarChartData = [this.feedbackBarChartData];

          console.log(this.feedbackBarChartLabels, this.feedbackBarChartData);
          this.feedbackBarChartColours = [
            {
              fillColor: '#D2D6DE',
              strokeColor: '#D2D6DE',
              pointColor: 'rgba(148,159,177,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(148,159,177,0.8)'
            },
            {
              fillColor: '#00A65A',
              strokeColor: '#00A65A',
              pointColor: '#2980b9',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(77,83,96,1)'
            }
          ];


        });

  }
    $onInit () {

    }
}

export const DashboardComponent = {
  templateUrl: './views/app/components/dashboard/dashboard.component.html',
  controller: DashboardController,
  controllerAs: 'vm',
  bindings: {}
};

class DashboardController {
  constructor ($scope) {
    'ngInject';
  }
    $onInit () {
      this.feedbackBarChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      this.feedbackBarChartData = [
        [28, 48, 40, 19, 86, 27, 90]
      ];
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

    }
}

export const DashboardComponent = {
  templateUrl: './views/app/components/dashboard/dashboard.component.html',
  controller: DashboardController,
  controllerAs: 'vm',
  bindings: {}
};

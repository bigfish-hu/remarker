class DashboardController {
  constructor ($scope, API, $timeout, $window) {
      'ngInject';
      this.API = API;

      $scope.options = { legend: { display: true } };
      this.feedbackTimeBarChartColours = [
          {
              fillColor: '#3c8dbc',
              strokeColor: '#3c8dbc',
              pointColor: '#3c8dbc',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(77,83,96,1)'
          }
      ];

      let Feedbacks = this.API.service('feedbacks');

      Feedbacks.getList({fields: 'created_at'})
          .then((response) => {
              let dataSet = response.plain();

              this.feedbacksNumber = dataSet.length;

              let dates = dataSet.map(function (item) {
                  return item.created_at.split(' ')[0];
              });
              let feedbacksByTimeGenerator = getChartData(dates);
              this.feedbackTimeBarChartLabels = feedbacksByTimeGenerator.next().value;
              this.feedbackTimeBarChartData = [feedbacksByTimeGenerator.next().value];


              let projects = dataSet.map(function (item) {
                  return item.project_name;
              });
              let feedbacksByProjectGenerator = getChartData(projects);
              this.feedbackProjectBarChartLabels = feedbacksByProjectGenerator.next().value;
              this.feedbackProjectBarChartData = feedbacksByProjectGenerator.next().value;

          }).then(function(){
              $timeout(function(){
                  $window.dispatchEvent(new Event('resize'));
              }, 300);
          });

      function* getChartData(dataSet) {

          let counts = {},
              labels = [],
              data = [];

          for(let i = 0; i< dataSet.length; i++) {
              let num = dataSet[i];
              counts[num] = counts[num] ? counts[num]+1 : 1;
          }

          angular.forEach(counts, (value, key) => {
              labels.push(key);
              data.push(value);
          });

          yield labels;
          yield data;

      }

  }

}

export const DashboardComponent = {
  templateUrl: './views/app/components/dashboard/dashboard.component.html',
  controller: DashboardController,
  controllerAs: 'vm',
  bindings: {}
};

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/charts-chartjs/charts-chartjs.component.html',
    '<section class="content-header">\n' +
    '    <h1>ChartJS<small>Preview sample</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li class="active">User Lists</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Area Chart</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n' +
    '              </p>\n' +
    '\n' +
    '              <div class="chart">\n' +
    '                <!-- Sales Chart Canvas -->\n' +
    '                <canvas id="area"\n' +
    '                  class="chart chart-line"\n' +
    '                  chart-data="vm.areaChartData"\n' +
    '                  chart-labels="vm.areaChartLabels"\n' +
    '                  chart-legend="false"\n' +
    '                  chart-series="vm.areaChartSeries"\n' +
    '                  chart-click="vm.onClick"\n' +
    '                  chart-colours="vm.areaChartColours"\n' +
    '                  style="height: 180px;">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '              <!-- /.chart-responsive -->\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '        <!-- ./box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-info">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Line Chart</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n' +
    '              </p>\n' +
    '\n' +
    '              <div class="chart">\n' +
    '                <!-- Sales Chart Canvas -->\n' +
    '                <canvas id="line"\n' +
    '                  class="chart chart-line"\n' +
    '                  chart-data="vm.lineChartData"\n' +
    '                  chart-labels="vm.lineChartLabels"\n' +
    '                  chart-legend="false"\n' +
    '                  chart-series="vm.lineChartSeries"\n' +
    '                  chart-click="vm.onClick"\n' +
    '                  style="height: 180px;">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '              <!-- /.chart-responsive -->\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '        <!-- ./box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '    <!-- /.row -->\n' +
    '\n' +
    '    <!-- Main row -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-danger">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Donut Chart</h3>\n' +
    '\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8">\n' +
    '              <div class="chart-responsive">\n' +
    '                <canvas id="doughnut"  height="200" class="chart chart-doughnut"\n' +
    '                  chart-data="vm.pieData" chart-labels="vm.pieLabels">\n' +
    '                </canvas>\n' +
    '                <!-- <canvas id="pieChart" height="150"></canvas> -->\n' +
    '              </div>\n' +
    '              <!-- ./chart-responsive -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-md-4">\n' +
    '              <ul class="chart-legend clearfix">\n' +
    '                <li><i class="fa fa-circle-o text-red"></i> Chrome</li>\n' +
    '                <li><i class="fa fa-circle-o text-green"></i> IE</li>\n' +
    '                <li><i class="fa fa-circle-o text-yellow"></i> FireFox</li>\n' +
    '                <li><i class="fa fa-circle-o text-aqua"></i> Safari</li>\n' +
    '                <li><i class="fa fa-circle-o text-light-blue"></i> Opera</li>\n' +
    '                <li><i class="fa fa-circle-o text-gray"></i> Navigator</li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer no-padding">\n' +
    '          <ul class="nav nav-pills nav-stacked">\n' +
    '            <li><a>United States of America <span class="pull-right text-red"><i class="fa fa-angle-down"></i> 12%</span></a></li>\n' +
    '            <li><a>India <span class="pull-right text-green"><i class="fa fa-angle-up"></i> 4%</span></a></li>\n' +
    '            <li><a>China<span class="pull-right text-yellow"><i class="fa fa-angle-left"></i> 0%</span></a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '        <!-- /.footer -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-success">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Bar Chart</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n' +
    '              </p>\n' +
    '\n' +
    '              <div class="chart">\n' +
    '                <!-- Sales Chart Canvas -->\n' +
    '                <canvas id="area"\n' +
    '                  class="chart chart-bar"\n' +
    '                  chart-data="vm.barChartData"\n' +
    '                  chart-labels="vm.barChartLabels"\n' +
    '                  chart-legend="false"\n' +
    '                  chart-series="vm.barChartSeries"\n' +
    '                  chart-click="vm.onClick"\n' +
    '                  chart-colours="vm.barChartColours"\n' +
    '                  style="height: 250px;">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '              <!-- /.chart-responsive -->\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '        <!-- ./box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '    <!-- /.row -->\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/coming-soon/coming-soon.component.html',
    '<section class="content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="box box-info">\n' +
    '                <div class="box-header with-border">\n' +
    '                    <div class="box-tools pull-right">\n' +
    '                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <h3>Coming Soon... (Pull Requests are Welcome)</h3>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-- /.box -->\n' +
    '        </div>\n' +
    '        <!-- /.col -->\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/dashboard/dashboard.component.html',
    '<section class="content">\n' +
    '    <!-- Info boxes -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-aqua"><i class="ion ion-ios-gear-outline"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">CPU Traffic</span>\n' +
    '          <span class="info-box-number">90<small>%</small></span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-red"><i class="fa fa-google-plus"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Likes</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '\n' +
    '    <!-- fix for small devices only -->\n' +
    '    <div class="clearfix visible-sm-block"></div>\n' +
    '\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-green"><i class="ion ion-ios-cart-outline"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Sales</span>\n' +
    '          <span class="info-box-number">760</span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">New Members</span>\n' +
    '          <span class="info-box-number">2,000</span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '    <!-- /.row -->\n' +
    '\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-12">\n' +
    '      <div class="box">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Monthly Recap Report</h3>\n' +
    '\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">\n' +
    '                <i class="fa fa-wrench"></i></button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n' +
    '              </p>\n' +
    '\n' +
    '              <div class="chart">\n' +
    '                <!-- Sales Chart Canvas -->\n' +
    '                <canvas id="line" class="chart chart-line"\n' +
    '                  chart-data="data"\n' +
    '                  chart-labels="labels"\n' +
    '                  chart-legend="false"\n' +
    '                  chart-series="series"\n' +
    '                  chart-click="onClick"\n' +
    '                  style="height: 180px;">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '              <!-- /.chart-responsive -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-md-4">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Goal Completion</strong>\n' +
    '              </p>\n' +
    '\n' +
    '              <div class="progress-group">\n' +
    '                <span class="progress-text">Add Products to Cart</span>\n' +
    '                <span class="progress-number"><b>160</b>/200</span>\n' +
    '\n' +
    '                <div class="progress sm">\n' +
    '                  <div class="progress-bar progress-bar-aqua" style="width: 80%"></div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <!-- /.progress-group -->\n' +
    '              <div class="progress-group">\n' +
    '                <span class="progress-text">Complete Purchase</span>\n' +
    '                <span class="progress-number"><b>310</b>/400</span>\n' +
    '\n' +
    '                <div class="progress sm">\n' +
    '                  <div class="progress-bar progress-bar-red" style="width: 80%"></div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <!-- /.progress-group -->\n' +
    '              <div class="progress-group">\n' +
    '                <span class="progress-text">Visit Premium Page</span>\n' +
    '                <span class="progress-number"><b>480</b>/800</span>\n' +
    '\n' +
    '                <div class="progress sm">\n' +
    '                  <div class="progress-bar progress-bar-green" style="width: 80%"></div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <!-- /.progress-group -->\n' +
    '              <div class="progress-group">\n' +
    '                <span class="progress-text">Send Inquiries</span>\n' +
    '                <span class="progress-number"><b>250</b>/500</span>\n' +
    '\n' +
    '                <div class="progress sm">\n' +
    '                  <div class="progress-bar progress-bar-yellow" style="width: 80%"></div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <!-- /.progress-group -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '        <!-- ./box-body -->\n' +
    '        <div class="box-footer">\n' +
    '          <div class="row">\n' +
    '            <div class="col-sm-3 col-xs-6">\n' +
    '              <div class="description-block border-right">\n' +
    '                <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 17%</span>\n' +
    '                <h5 class="description-header">$35,210.43</h5>\n' +
    '                <span class="description-text">TOTAL REVENUE</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-sm-3 col-xs-6">\n' +
    '              <div class="description-block border-right">\n' +
    '                <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 0%</span>\n' +
    '                <h5 class="description-header">$10,390.90</h5>\n' +
    '                <span class="description-text">TOTAL COST</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-sm-3 col-xs-6">\n' +
    '              <div class="description-block border-right">\n' +
    '                <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 20%</span>\n' +
    '                <h5 class="description-header">$24,813.53</h5>\n' +
    '                <span class="description-text">TOTAL PROFIT</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-sm-3 col-xs-6">\n' +
    '              <div class="description-block">\n' +
    '                <span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 18%</span>\n' +
    '                <h5 class="description-header">1200</h5>\n' +
    '                <span class="description-text">GOAL COMPLETIONS</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '        <!-- /.box-footer -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '    <!-- /.row -->\n' +
    '\n' +
    '    <!-- Main row -->\n' +
    '  <div class="row">\n' +
    '    <!-- Left col -->\n' +
    '    <div class="col-md-8">\n' +
    '      <div class="row">\n' +
    '        <div class="col-md-6">\n' +
    '          <!-- DIRECT CHAT -->\n' +
    '          <div class="box box-warning direct-chat direct-chat-warning">\n' +
    '            <div class="box-header with-border">\n' +
    '              <h3 class="box-title">Direct Chat</h3>\n' +
    '\n' +
    '              <div class="box-tools pull-right">\n' +
    '                <span data-toggle="tooltip" title="3 New Messages" class="badge bg-yellow">3</span>\n' +
    '                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '                  <i class="fa fa-comments"></i></button>\n' +
    '                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <!-- /.box-header -->\n' +
    '            <div class="box-body">\n' +
    '              <!-- Conversations are loaded here -->\n' +
    '              <div class="direct-chat-messages">\n' +
    '                <!-- Message. Default to the left -->\n' +
    '                <div class="direct-chat-msg">\n' +
    '                  <div class="direct-chat-info clearfix">\n' +
    '                    <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                    <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-info -->\n' +
    '                  <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="message user image"><!-- /.direct-chat-img -->\n' +
    '                  <div class="direct-chat-text">\n' +
    '                    Is this template really for free? That\'s unbelievable!\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-text -->\n' +
    '                </div>\n' +
    '                <!-- /.direct-chat-msg -->\n' +
    '\n' +
    '                <!-- Message to the right -->\n' +
    '                <div class="direct-chat-msg right">\n' +
    '                  <div class="direct-chat-info clearfix">\n' +
    '                    <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                    <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-info -->\n' +
    '                  <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="message user image"><!-- /.direct-chat-img -->\n' +
    '                  <div class="direct-chat-text">\n' +
    '                    You better believe it!\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-text -->\n' +
    '                </div>\n' +
    '                <!-- /.direct-chat-msg -->\n' +
    '\n' +
    '                <!-- Message. Default to the left -->\n' +
    '                <div class="direct-chat-msg">\n' +
    '                  <div class="direct-chat-info clearfix">\n' +
    '                    <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                    <span class="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-info -->\n' +
    '                  <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="message user image"><!-- /.direct-chat-img -->\n' +
    '                  <div class="direct-chat-text">\n' +
    '                    Working with AdminLTE on a great new app! Wanna join?\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-text -->\n' +
    '                </div>\n' +
    '                <!-- /.direct-chat-msg -->\n' +
    '\n' +
    '                <!-- Message to the right -->\n' +
    '                <div class="direct-chat-msg right">\n' +
    '                  <div class="direct-chat-info clearfix">\n' +
    '                    <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                    <span class="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-info -->\n' +
    '                  <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="message user image"><!-- /.direct-chat-img -->\n' +
    '                  <div class="direct-chat-text">\n' +
    '                    I would love to.\n' +
    '                  </div>\n' +
    '                  <!-- /.direct-chat-text -->\n' +
    '                </div>\n' +
    '                <!-- /.direct-chat-msg -->\n' +
    '\n' +
    '              </div>\n' +
    '              <!--/.direct-chat-messages-->\n' +
    '\n' +
    '              <!-- Contacts are loaded here -->\n' +
    '              <div class="direct-chat-contacts">\n' +
    '                <ul class="contacts-list">\n' +
    '                  <li>\n' +
    '                    <a href="#">\n' +
    '                      <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '\n' +
    '                      <div class="contacts-list-info">\n' +
    '                            <span class="contacts-list-name">\n' +
    '                              Count Dracula\n' +
    '                              <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                            </span>\n' +
    '                        <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                      </div>\n' +
    '                      <!-- /.contacts-list-info -->\n' +
    '                    </a>\n' +
    '                  </li>\n' +
    '                  <!-- End Contact Item -->\n' +
    '                  <li>\n' +
    '                    <a href="#">\n' +
    '                      <img class="contacts-list-img" src="/img/user7-128x128.jpg" alt="User Image">\n' +
    '\n' +
    '                      <div class="contacts-list-info">\n' +
    '                            <span class="contacts-list-name">\n' +
    '                              Sarah Doe\n' +
    '                              <small class="contacts-list-date pull-right">2/23/2015</small>\n' +
    '                            </span>\n' +
    '                        <span class="contacts-list-msg">I will be waiting for...</span>\n' +
    '                      </div>\n' +
    '                      <!-- /.contacts-list-info -->\n' +
    '                    </a>\n' +
    '                  </li>\n' +
    '                  <!-- End Contact Item -->\n' +
    '                  <li>\n' +
    '                    <a href="#">\n' +
    '                      <img class="contacts-list-img" src="/img/user3-128x128.jpg" alt="User Image">\n' +
    '\n' +
    '                      <div class="contacts-list-info">\n' +
    '                            <span class="contacts-list-name">\n' +
    '                              Nadia Jolie\n' +
    '                              <small class="contacts-list-date pull-right">2/20/2015</small>\n' +
    '                            </span>\n' +
    '                        <span class="contacts-list-msg">I\'ll call you back at...</span>\n' +
    '                      </div>\n' +
    '                      <!-- /.contacts-list-info -->\n' +
    '                    </a>\n' +
    '                  </li>\n' +
    '                  <!-- End Contact Item -->\n' +
    '                  <li>\n' +
    '                    <a href="#">\n' +
    '                      <img class="contacts-list-img" src="/img/user5-128x128.jpg" alt="User Image">\n' +
    '\n' +
    '                      <div class="contacts-list-info">\n' +
    '                            <span class="contacts-list-name">\n' +
    '                              Nora S. Vans\n' +
    '                              <small class="contacts-list-date pull-right">2/10/2015</small>\n' +
    '                            </span>\n' +
    '                        <span class="contacts-list-msg">Where is your new...</span>\n' +
    '                      </div>\n' +
    '                      <!-- /.contacts-list-info -->\n' +
    '                    </a>\n' +
    '                  </li>\n' +
    '                  <!-- End Contact Item -->\n' +
    '                  <li>\n' +
    '                    <a href="#">\n' +
    '                      <img class="contacts-list-img" src="/img/user6-128x128.jpg" alt="User Image">\n' +
    '\n' +
    '                      <div class="contacts-list-info">\n' +
    '                            <span class="contacts-list-name">\n' +
    '                              John K.\n' +
    '                              <small class="contacts-list-date pull-right">1/27/2015</small>\n' +
    '                            </span>\n' +
    '                        <span class="contacts-list-msg">Can I take a look at...</span>\n' +
    '                      </div>\n' +
    '                      <!-- /.contacts-list-info -->\n' +
    '                    </a>\n' +
    '                  </li>\n' +
    '                  <!-- End Contact Item -->\n' +
    '                  <li>\n' +
    '                    <a href="#">\n' +
    '                      <img class="contacts-list-img" src="/img/user8-128x128.jpg" alt="User Image">\n' +
    '\n' +
    '                      <div class="contacts-list-info">\n' +
    '                            <span class="contacts-list-name">\n' +
    '                              Kenneth M.\n' +
    '                              <small class="contacts-list-date pull-right">1/4/2015</small>\n' +
    '                            </span>\n' +
    '                        <span class="contacts-list-msg">Never mind I found...</span>\n' +
    '                      </div>\n' +
    '                      <!-- /.contacts-list-info -->\n' +
    '                    </a>\n' +
    '                  </li>\n' +
    '                  <!-- End Contact Item -->\n' +
    '                </ul>\n' +
    '                <!-- /.contatcts-list -->\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-pane -->\n' +
    '            </div>\n' +
    '            <!-- /.box-body -->\n' +
    '            <div class="box-footer">\n' +
    '              <form action="#" method="post">\n' +
    '                <div class="input-group">\n' +
    '                  <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '                      <span class="input-group-btn">\n' +
    '                        <button type="button" class="btn btn-warning btn-flat">Send</button>\n' +
    '                      </span>\n' +
    '                </div>\n' +
    '              </form>\n' +
    '            </div>\n' +
    '            <!-- /.box-footer-->\n' +
    '          </div>\n' +
    '          <!--/.direct-chat -->\n' +
    '        </div>\n' +
    '        <!-- /.col -->\n' +
    '\n' +
    '        <div class="col-md-6">\n' +
    '          <!-- USERS LIST -->\n' +
    '          <div class="box box-danger">\n' +
    '            <div class="box-header with-border">\n' +
    '              <h3 class="box-title">Latest Members</h3>\n' +
    '\n' +
    '              <div class="box-tools pull-right">\n' +
    '                <span class="label label-danger">8 New Members</span>\n' +
    '                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <!-- /.box-header -->\n' +
    '            <div class="box-body no-padding">\n' +
    '              <ul class="users-list clearfix">\n' +
    '                <li>\n' +
    '                  <img src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">Alexander Pierce</a>\n' +
    '                  <span class="users-list-date">Today</span>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <img src="/img/user8-128x128.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">Norman</a>\n' +
    '                  <span class="users-list-date">Yesterday</span>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <img src="/img/user7-128x128.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">Jane</a>\n' +
    '                  <span class="users-list-date">12 Jan</span>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <img src="/img/user6-128x128.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">John</a>\n' +
    '                  <span class="users-list-date">12 Jan</span>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <img src="/img/user2-160x160.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">Alexander</a>\n' +
    '                  <span class="users-list-date">13 Jan</span>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <img src="/img/user5-128x128.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">Sarah</a>\n' +
    '                  <span class="users-list-date">14 Jan</span>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <img src="/img/user4-128x128.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">Nora</a>\n' +
    '                  <span class="users-list-date">15 Jan</span>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <img src="/img/user3-128x128.jpg" alt="User Image">\n' +
    '                  <a class="users-list-name" href="#">Nadia</a>\n' +
    '                  <span class="users-list-date">15 Jan</span>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '              <!-- /.users-list -->\n' +
    '            </div>\n' +
    '            <!-- /.box-body -->\n' +
    '            <div class="box-footer text-center">\n' +
    '              <a href="javascript:void(0)" class="uppercase">View All Users</a>\n' +
    '            </div>\n' +
    '            <!-- /.box-footer -->\n' +
    '          </div>\n' +
    '          <!--/.box -->\n' +
    '        </div>\n' +
    '        <!-- /.col -->\n' +
    '      </div>\n' +
    '      <!-- /.row -->\n' +
    '\n' +
    '      <!-- PRODUCT LIST -->\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Recently Added Products</h3>\n' +
    '\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <ul class="products-list product-list-in-box">\n' +
    '            <li class="item">\n' +
    '              <div class="product-img">\n' +
    '                <img src="/img/default-50x50.gif" alt="Product Image">\n' +
    '              </div>\n' +
    '              <div class="product-info">\n' +
    '                <a href="javascript:void(0)" class="product-title">Samsung TV\n' +
    '                  <span class="label label-warning pull-right">$1800</span></a>\n' +
    '                    <span class="product-description">\n' +
    '                      Samsung 32" 1080p 60Hz LED Smart HDTV.\n' +
    '                    </span>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '            <!-- /.item -->\n' +
    '            <li class="item">\n' +
    '              <div class="product-img">\n' +
    '                <img src="/img/default-50x50.gif" alt="Product Image">\n' +
    '              </div>\n' +
    '              <div class="product-info">\n' +
    '                <a href="javascript:void(0)" class="product-title">Bicycle\n' +
    '                  <span class="label label-info pull-right">$700</span></a>\n' +
    '                    <span class="product-description">\n' +
    '                      26" Mongoose Dolomite Men\'s 7-speed, Navy Blue.\n' +
    '                    </span>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '            <!-- /.item -->\n' +
    '            <li class="item">\n' +
    '              <div class="product-img">\n' +
    '                <img src="/img/default-50x50.gif" alt="Product Image">\n' +
    '              </div>\n' +
    '              <div class="product-info">\n' +
    '                <a href="javascript:void(0)" class="product-title">Xbox One <span class="label label-danger pull-right">$350</span></a>\n' +
    '                    <span class="product-description">\n' +
    '                      Xbox One Console Bundle with Halo Master Chief Collection.\n' +
    '                    </span>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '            <!-- /.item -->\n' +
    '            <li class="item">\n' +
    '              <div class="product-img">\n' +
    '                <img src="/img/default-50x50.gif" alt="Product Image">\n' +
    '              </div>\n' +
    '              <div class="product-info">\n' +
    '                <a href="javascript:void(0)" class="product-title">PlayStation 4\n' +
    '                  <span class="label label-success pull-right">$399</span></a>\n' +
    '                    <span class="product-description">\n' +
    '                      PlayStation 4 500GB Console (PS4)\n' +
    '                    </span>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '            <!-- /.item -->\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer text-center">\n' +
    '          <a href="javascript:void(0)" class="uppercase">View All Products</a>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '\n' +
    '    <div class="col-md-4">\n' +
    '      <!-- Info Boxes Style 2 -->\n' +
    '      <div class="info-box bg-yellow">\n' +
    '        <span class="info-box-icon"><i class="ion ion-ios-pricetag-outline"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Inventory</span>\n' +
    '          <span class="info-box-number">5,200</span>\n' +
    '\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 50%"></div>\n' +
    '          </div>\n' +
    '              <span class="progress-description">\n' +
    '                50% Increase in 30 Days\n' +
    '              </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '      <div class="info-box bg-green">\n' +
    '        <span class="info-box-icon"><i class="ion ion-ios-heart-outline"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Mentions</span>\n' +
    '          <span class="info-box-number">92,050</span>\n' +
    '\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 20%"></div>\n' +
    '          </div>\n' +
    '              <span class="progress-description">\n' +
    '                20% Increase in 30 Days\n' +
    '              </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '      <div class="info-box bg-red">\n' +
    '        <span class="info-box-icon"><i class="ion ion-ios-cloud-download-outline"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Downloads</span>\n' +
    '          <span class="info-box-number">114,381</span>\n' +
    '\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '              <span class="progress-description">\n' +
    '                70% Increase in 30 Days\n' +
    '              </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '      <div class="info-box bg-aqua">\n' +
    '        <span class="info-box-icon"><i class="ion-ios-chatbubble-outline"></i></span>\n' +
    '\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Direct Messages</span>\n' +
    '          <span class="info-box-number">163,921</span>\n' +
    '\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 40%"></div>\n' +
    '          </div>\n' +
    '              <span class="progress-description">\n' +
    '                40% Increase in 30 Days\n' +
    '              </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '\n' +
    '      <div class="box box-default">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Browser Usage</h3>\n' +
    '\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8">\n' +
    '              <div class="chart-responsive">\n' +
    '                <canvas id="doughnut"  height="200" class="chart chart-doughnut"\n' +
    '                  chart-data="pieData" chart-labels="pieLabels">\n' +
    '                </canvas>\n' +
    '                <!-- <canvas id="pieChart" height="150"></canvas> -->\n' +
    '              </div>\n' +
    '              <!-- ./chart-responsive -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-md-4">\n' +
    '              <ul class="chart-legend clearfix">\n' +
    '                <li><i class="fa fa-circle-o text-red"></i> Chrome</li>\n' +
    '                <li><i class="fa fa-circle-o text-green"></i> IE</li>\n' +
    '                <li><i class="fa fa-circle-o text-yellow"></i> FireFox</li>\n' +
    '                <li><i class="fa fa-circle-o text-aqua"></i> Safari</li>\n' +
    '                <li><i class="fa fa-circle-o text-light-blue"></i> Opera</li>\n' +
    '                <li><i class="fa fa-circle-o text-gray"></i> Navigator</li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer no-padding">\n' +
    '          <ul class="nav nav-pills nav-stacked">\n' +
    '            <li><a href="#">United States of America\n' +
    '              <span class="pull-right text-red"><i class="fa fa-angle-down"></i> 12%</span></a></li>\n' +
    '            <li><a href="#">India <span class="pull-right text-green"><i class="fa fa-angle-up"></i> 4%</span></a>\n' +
    '            </li>\n' +
    '            <li><a href="#">China\n' +
    '              <span class="pull-right text-yellow"><i class="fa fa-angle-left"></i> 0%</span></a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '        <!-- /.footer -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <div class="col-md-12">\n' +
    '\n' +
    '       <!-- TABLE: LATEST ORDERS -->\n' +
    '      <div class="box box-info">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Latest Orders</h3>\n' +
    '\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <div class="table-responsive">\n' +
    '            <table class="table no-margin">\n' +
    '              <thead>\n' +
    '              <tr>\n' +
    '                <th>Order ID</th>\n' +
    '                <th>Item</th>\n' +
    '                <th>Status</th>\n' +
    '                <th>Popularity</th>\n' +
    '              </tr>\n' +
    '              </thead>\n' +
    '              <tbody>\n' +
    '              <tr>\n' +
    '                <td><a href="pages/examples/invoice.html">OR9842</a></td>\n' +
    '                <td>Call of Duty IV</td>\n' +
    '                <td><span class="label label-success">Shipped</span></td>\n' +
    '                <td>\n' +
    '                  <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td><a href="pages/examples/invoice.html">OR1848</a></td>\n' +
    '                <td>Samsung Smart TV</td>\n' +
    '                <td><span class="label label-warning">Pending</span></td>\n' +
    '                <td>\n' +
    '                  <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td><a href="pages/examples/invoice.html">OR7429</a></td>\n' +
    '                <td>iPhone 6 Plus</td>\n' +
    '                <td><span class="label label-danger">Delivered</span></td>\n' +
    '                <td>\n' +
    '                  <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td><a href="pages/examples/invoice.html">OR7429</a></td>\n' +
    '                <td>Samsung Smart TV</td>\n' +
    '                <td><span class="label label-info">Processing</span></td>\n' +
    '                <td>\n' +
    '                  <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td><a href="pages/examples/invoice.html">OR1848</a></td>\n' +
    '                <td>Samsung Smart TV</td>\n' +
    '                <td><span class="label label-warning">Pending</span></td>\n' +
    '                <td>\n' +
    '                  <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td><a href="pages/examples/invoice.html">OR7429</a></td>\n' +
    '                <td>iPhone 6 Plus</td>\n' +
    '                <td><span class="label label-danger">Delivered</span></td>\n' +
    '                <td>\n' +
    '                  <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td><a href="pages/examples/invoice.html">OR9842</a></td>\n' +
    '                <td>Call of Duty IV</td>\n' +
    '                <td><span class="label label-success">Shipped</span></td>\n' +
    '                <td>\n' +
    '                  <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '              </tbody>\n' +
    '            </table>\n' +
    '          </div>\n' +
    '          <!-- /.table-responsive -->\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer clearfix">\n' +
    '          <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>\n' +
    '          <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '    <!-- /.row -->\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/forgot-password/forgot-password.component.html',
    '<form ng-submit="vm.submit()" class="ForgotPassword-form">\n' +
    '    <div class="callout callout-danger" ng-if="vm.errorTrigger">\n' +
    '        <h4>Error:</h4>\n' +
    '        <p>Please check your email and try again.</p>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback">\n' +
    '        <input type="email" class="form-control" placeholder="Please enter your email address" ng-model="vm.email">\n' +
    '        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-8">\n' +
    '        </div>\n' +
    '        <div class="col-xs-4">\n' +
    '            <button type="submit" class="btn btn-primary btn-block btn-flat">Submit</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()" method="post">\n' +
    '    <div class="callout callout-danger" ng-if="vm.loginfailed">\n' +
    '        <h4>Login Failed</h4>\n' +
    '        <p>Incorrect Email/Username or Password.</p>\n' +
    '    </div>\n' +
    '    <div class="callout callout-success" ng-if="vm.successMsg">\n' +
    '        <h4>Success!</h4>\n' +
    '        <p>{{ vm.successMsg }}</p>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback">\n' +
    '        <input type="email" class="form-control" placeholder="Email" ng-model="vm.email">\n' +
    '        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback">\n' +
    '        <input type="password" class="form-control" placeholder="Password" ng-model="vm.password">\n' +
    '        <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-8">\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="col-xs-4">\n' +
    '            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-loader/login-loader.component.html',
    'Logging in...');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/nav-header/nav-header.component.html',
    '<header class="main-header">\n' +
    '  <!-- Logo -->\n' +
    '  <a href="/" class="logo">\n' +
    '    <!-- mini logo for sidebar mini 50x50 pixels -->\n' +
    '    <span class="logo-mini"><b>A</b>LT</span>\n' +
    '    <!-- logo for regular state and mobile devices -->\n' +
    '    <span class="logo-lg"><b>Admin</b>LTE</span>\n' +
    '  </a>\n' +
    '\n' +
    '  <!-- Header Navbar: style can be found in header.less -->\n' +
    '  <nav class="navbar navbar-static-top">\n' +
    '    <!-- Sidebar toggle button-->\n' +
    '    <a href="javascript:void(0)" class="sidebar-toggle" data-toggle="offcanvas" role="button">\n' +
    '      <span class="sr-only">Toggle navigation</span>\n' +
    '    </a>\n' +
    '    <!-- Navbar Right Menu -->\n' +
    '    <div class="navbar-custom-menu">\n' +
    '      <ul class="nav navbar-nav">\n' +
    '        <!-- Messages: style can be found in dropdown.less-->\n' +
    '        <li class="dropdown messages-menu" uib-dropdown>\n' +
    '          <a href="#" class="dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle>\n' +
    '            <i class="fa fa-envelope-o"></i>\n' +
    '            <span class="label label-success">4</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <li class="header">You have 4 messages</li>\n' +
    '            <li>\n' +
    '              <!-- inner menu: contains the actual data -->\n' +
    '              <ul class="menu">\n' +
    '                <li><!-- start message -->\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Support Team\n' +
    '                      <small><i class="fa fa-clock-o"></i> 5 mins</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <!-- end message -->\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user3-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      AdminLTE Design Team\n' +
    '                      <small><i class="fa fa-clock-o"></i> 2 hours</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user4-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Developers\n' +
    '                      <small><i class="fa fa-clock-o"></i> Today</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user3-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Sales Department\n' +
    '                      <small><i class="fa fa-clock-o"></i> Yesterday</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user4-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Reviewers\n' +
    '                      <small><i class="fa fa-clock-o"></i> 2 days</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li class="footer"><a href="#">See All Messages</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <!-- Notifications: style can be found in dropdown.less -->\n' +
    '        <li class="dropdown notifications-menu" uib-dropdown>\n' +
    '          <a href="#" class="dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle>\n' +
    '            <i class="fa fa-bell-o"></i>\n' +
    '            <span class="label label-warning">10</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <li class="header">You have 10 notifications</li>\n' +
    '            <li>\n' +
    '              <!-- inner menu: contains the actual data -->\n' +
    '              <ul class="menu">\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-users text-aqua"></i> 5 new members joined today\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the\n' +
    '                    page and may cause design problems\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-users text-red"></i> 5 new members joined\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-shopping-cart text-green"></i> 25 sales made\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-user text-red"></i> You changed your username\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li class="footer"><a href="#">View all</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <!-- Tasks: style can be found in dropdown.less -->\n' +
    '        <li class="dropdown tasks-menu" uib-dropdown>\n' +
    '          <a href="#" class="dropdown-toggle" uib-dropdown-toggle>\n' +
    '            <i class="fa fa-flag-o"></i>\n' +
    '            <span class="label label-danger">9</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <li class="header">You have 9 tasks</li>\n' +
    '            <li>\n' +
    '              <!-- inner menu: contains the actual data -->\n' +
    '              <ul class="menu">\n' +
    '                <li><!-- Task item -->\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Design some buttons\n' +
    '                      <small class="pull-right">20%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">20% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <!-- end task item -->\n' +
    '                <li><!-- Task item -->\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Create a nice theme\n' +
    '                      <small class="pull-right">40%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">40% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <!-- end task item -->\n' +
    '                <li><!-- Task item -->\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Some task I need to do\n' +
    '                      <small class="pull-right">60%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">60% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <!-- end task item -->\n' +
    '                <li><!-- Task item -->\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Make beautiful transitions\n' +
    '                      <small class="pull-right">80%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">80% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <!-- end task item -->\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li class="footer">\n' +
    '              <a href="#">View all tasks</a>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <!-- User Account: style can be found in dropdown.less -->\n' +
    '        <li class="dropdown user user-menu"  uib-dropdown>\n' +
    '          <a href="" class="dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle>\n' +
    '            <img src="{{vm.userData.avatar}}" class="user-image" alt="User Image" onError="this.src=\'//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=A&w=45&h=45&txtsize=16\'">\n' +
    '            <span class="hidden-xs">{{vm.userData.name | capitalize}}</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <!-- User image -->\n' +
    '            <li class="user-header">\n' +
    '              <img src="{{vm.userData.avatar}}" class="img-circle" alt="User Image" onError="this.src=\'//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=A&w=90&h=90&txtsize=36\'">\n' +
    '              <p>\n' +
    '                {{vm.userData.name | capitalize}}\n' +
    '                <small>Member since {{vm.userData.created_at | datemillis |date:\'MMMM yyyy\' }}</small>\n' +
    '              </p>\n' +
    '            </li>\n' +
    '            <!-- Menu Body -->\n' +
    '            <li class="user-body">\n' +
    '              <div class="row">\n' +
    '                <div class="col-xs-4 text-center">\n' +
    '                  <a href="#">Followers</a>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 text-center">\n' +
    '                  <a href="#">Sales</a>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 text-center">\n' +
    '                  <a href="#">Friends</a>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <!-- /.row -->\n' +
    '            </li>\n' +
    '            <!-- Menu Footer-->\n' +
    '            <li class="user-footer">\n' +
    '              <div class="pull-left">\n' +
    '                <a ui-sref="app.profile" class="btn btn-default btn-flat">Profile</a>\n' +
    '              </div>\n' +
    '              <div class="pull-right">\n' +
    '                <a ui-sref="app.logout" class="btn btn-default btn-flat">Sign out</a>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <!-- Control Sidebar Toggle Button -->\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </nav>\n' +
    '</header>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/nav-sidebar/nav-sidebar.component.html',
    '<aside class="main-sidebar">\n' +
    '  <!-- sidebar: style can be found in sidebar.less -->\n' +
    '  <section class="sidebar">\n' +
    '    <!-- Sidebar user panel -->\n' +
    '    <div class="user-panel">\n' +
    '      <div class="pull-left info">\n' +
    '        <p>{{vm.userData.name | capitalize}}</p>\n' +
    '        <a href="javascript:void(0)"><i class="fa fa-circle text-success"></i> Online</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <!-- sidebar menu: : style can be found in sidebar.less -->\n' +
    '    <ul class="sidebar-menu">\n' +
    '      <li class="header">MAIN NAVIGATION</li>\n' +
    '      <li>\n' +
    '        <a ui-sref=\'app.landing\'>\n' +
    '          <i class="fa fa-dashboard"></i> <span>Dashboard</span>\n' +
    '        </a>\n' +
    '      </li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-users"></i> <span>Users</span> <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li class="active"><a ui-sref=\'app.userlist\'><i class="fa fa-circle-o"></i> <span>User List</span></a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-cog"></i> <span>Settings</span> <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li><a ui-sref=\'app.userroles\'><i class="fa fa-circle-o"></i> <span>User Roles</span></a></li>\n' +
    '          <li><a ui-sref=\'app.userpermissions\'><i class="fa fa-circle-o"></i> <span>User Permissions</span></a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-files-o"></i>\n' +
    '          <span>Layout Options</span>\n' +
    '          <span class="label label-primary pull-right">4</span>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Top Navigation</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Boxed</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Fixed</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li>\n' +
    '        <a ui-sref="app.widgets">\n' +
    '          <i class="fa fa-th"></i> <span>Widgets</span>\n' +
    '          <small class="label pull-right bg-green">new</small>\n' +
    '        </a>\n' +
    '      </li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-pie-chart"></i>\n' +
    '          <span>Charts</span>\n' +
    '          <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li><a ui-sref="app.chartjs"><i class="fa fa-circle-o"></i> ChartJS</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Morris</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Flot</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Inline charts</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-laptop"></i>\n' +
    '          <span>UI Elements</span>\n' +
    '          <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> General</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Icons</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Buttons</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Sliders</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Timeline</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Modals</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-edit"></i> <span>Forms</span>\n' +
    '          <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> General Elements</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Editors</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-table"></i> <span>Tables</span>\n' +
    '          <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Simple tables</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Data tables</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li>\n' +
    '        <a ui-sref="app.comingsoon">\n' +
    '          <i class="fa fa-calendar"></i> <span>Calendar</span>\n' +
    '          <small class="label pull-right bg-red">3</small>\n' +
    '        </a>\n' +
    '      </li>\n' +
    '      <li>\n' +
    '        <a ui-sref="app.comingsoon">\n' +
    '          <i class="fa fa-envelope"></i> <span>Mailbox</span>\n' +
    '          <small class="label pull-right bg-yellow">12</small>\n' +
    '        </a>\n' +
    '      </li>\n' +
    '      <li class="header">LABELS</li>\n' +
    '      <li class="treeview">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-folder"></i> <span>Examples</span>\n' +
    '          <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Invoice</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Profile</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Login</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Register</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Lockscreen</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> 404 Error</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> 500 Error</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Blank Page</a></li>\n' +
    '          <li><a ui-sref="app.comingsoon"><i class="fa fa-circle-o"></i> Pace Page</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </section>\n' +
    '  <!-- /.sidebar -->\n' +
    '</aside>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reset-password/reset-password.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '    <div ng-if="!vm.isValidToken" layout="row" layout-align="center center">\n' +
    '        <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n' +
    '    </div>\n' +
    '    <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '        <h4>{{alert.title}}</h4>\n' +
    '        <p>{{alert.msg}}</p>\n' +
    '    </div>\n' +
    '    <div ng-show="vm.isValidToken">\n' +
    '        <div class="form-group has-feedback">\n' +
    '            <input type="password" ng-model="vm.password" class="form-control" placeholder="Please enter your new password">\n' +
    '            <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '        </div>\n' +
    '        <div class="form-group has-feedback">\n' +
    '            <input type="password" ng-model="vm.password_confirmation" class="form-control" placeholder="Please confirm your new password">\n' +
    '            <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-8">\n' +
    '            </div>\n' +
    '            <div class="col-xs-4">\n' +
    '                <button type="submit" class="btn btn-primary btn-block btn-flat">Submit</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/register-form/register-form.component.html',
    '<form name="userForm" ng-submit="vm.register(userForm.$valid)" novalidate>\n' +
    '    <div class="form-group has-feedback" ng-class="{ \'has-error\': userForm.name.$invalid && ( vm.formSubmitted || userForm.name.$touched) }">\n' +
    '        <input type="text" class="form-control" placeholder="Full name" ng-model="vm.name" name="name" ng-maxlength="30">\n' +
    '        <span class="glyphicon glyphicon-user form-control-feedback"></span>\n' +
    '\n' +
    '        <p ng-show="userForm.name.$error.required && ( vm.formSubmitted || userForm.name.$touched)" class="help-block">Full Name is required.</p>\n' +
    '  		<p ng-show="userForm.name.$error.maxlength" class="help-block">Full Name is too long.</p>\n' +
    '        <p ng-show="userForm.name.$invalid && (vm.formSubmitted || vm.errors.name)" class="help-block">{{vm.errors.name}}</p>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-class="{ \'has-error\': userForm.email.$invalid && ( vm.formSubmitted || userForm.email.$touched) }">\n' +
    '        <input type="email" class="form-control" placeholder="Email" ng-model="vm.email" name="email" ng-maxlength="30" required>\n' +
    '        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '\n' +
    '        <p ng-show="userForm.email.$invalid && (vm.formSubmitted || vm.errors.email)" class="help-block">{{vm.errors.email}}</p>\n' +
    '        <p ng-show="userForm.email.$error.required && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '        <p ng-show="userForm.email.$error.email && userForm.email.$touched" class="help-block">This is not a valid email.</p>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-class="{ \'has-error\': userForm.password.$invalid && ( vm.formSubmitted || userForm.password.$touched) }">\n' +
    '        <input type="password" class="form-control" placeholder="Password" ng-model="vm.password" name="password" ng-minlength="8" ng-maxlength="50" required>\n' +
    '        <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '\n' +
    '        <p ng-show="userForm.password.$error.required && ( vm.formSubmitted || userForm.password.$touched)" class="help-block">Password is required.</p>\n' +
    '  		<p ng-show="userForm.password.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '  		<p ng-show="userForm.password.$invalid && userForm.password.$error.minlength && userForm.password.$touched" class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '        <p ng-show="userForm.password.$invalid && (vm.formSubmitted || vm.errors.password)" class="help-block">{{vm.errors.password}}</p>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-edit/user-edit.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li><a ui-sref="app.userlist">User Lists</a></li>\n' +
    '        <li class="active">Edit User</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Edit User</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="userForm" ng-submit="vm.save(userForm.$valid)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.name.$invalid && ( vm.formSubmitted || userForm.name.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Name</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.usereditdata.data.name" name="name" placeholder="Name" required>\n' +
    '                <p ng-show="userForm.name.$error.required && ( vm.formSubmitted || userForm.name.$touched)" class="help-block">Name is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.email.$invalid && ( vm.formSubmitted || userForm.email.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="email" class="form-control" ng-model="vm.usereditdata.data.email" name="email" placeholder="Email" required>\n' +
    '                <p ng-show="userForm.email.$error.required && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '                <p ng-show="userForm.email.$error.email  && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">This is not a valid email.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Roles</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <div class="checkbox" ng-repeat="role in vm.systemRoles">\n' +
    '                  <label>\n' +
    '                    <input type="checkbox" checklist-model="vm.usereditdata.data.role" checklist-value="role.id"> {{role.name}}\n' +
    '                  </label>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userlist" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-lists/user-lists.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li class="active">User Lists</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="box box-info">\n' +
    '                <div class="box-header with-border">\n' +
    '                    <h3 class="box-title">User List</h3>\n' +
    '                    <div class="box-tools pull-right">\n' +
    '                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <table datatable="" width="100%"  class="table table-striped table-bordered"\n' +
    '                        ng-if="vm.displayTable"\n' +
    '                        dt-options="vm.dtOptions"\n' +
    '                        dt-columns="vm.dtColumns"></table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-- /.box -->\n' +
    '        </div>\n' +
    '        <!-- /.col -->\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-permissions/user-permissions.component.html',
    '<section class="content-header">\n' +
    '    <h1>User Permissions <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li class="active">Permission Lists</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<!-- Main content -->\n' +
    '<section class="content">\n' +
    '    <!-- Default box -->\n' +
    '    <div class="box">\n' +
    '        <div class="box-header with-border">\n' +
    '            <h3 class="box-title">Permission Lists</h3>\n' +
    '            <div class="box-tools pull-right">\n' +
    '                <a ui-sref="app.userpermissionsadd" class="btn btn-block btn-success btn-xs"><i class="fa fa-plus"></i> Add New</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '             <table datatable="" width="100%"  class="table table-striped table-bordered"\n' +
    '                ng-if="vm.displayTable"\n' +
    '                dt-options="vm.dtOptions"\n' +
    '                dt-columns="vm.dtColumns"></table>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '            Footer\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<!-- /.content -->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-permissions-add/user-permissions-add.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li><a ui-sref="app.userpermissions">Permission Lists</a></li>\n' +
    '        <li class="active">Add New User Permission</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Add New User Permission</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="permissionForm" ng-submit="vm.save(permissionForm.$valid, permissionForm)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.name.$invalid && ( vm.formSubmitted || permissionForm.name.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Name</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.name" name="name" placeholder="Name" required>\n' +
    '                <p ng-show="permissionForm.name.$error.required && ( vm.formSubmitted || permissionForm.name.$touched)" class="help-block">Name is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.slug.$invalid && ( vm.formSubmitted || permissionForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="permissionForm.slug.$error.required && ( vm.formSubmitted || permissionForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userpermissions" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Add New</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-permissions-edit/user-permissions-edit.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li><a ui-sref="app.userpermissions">Permission Lists</a></li>\n' +
    '        <li class="active">Edit User Permission</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Edit User Permission</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="permissionForm" ng-submit="vm.save(permissionForm.$valid)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.permission.$invalid && ( vm.formSubmitted || permissionForm.permission.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Name</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.permission.data.name" name="permission" placeholder="Name" required>\n' +
    '                <p ng-show="permissionForm.permission.$error.required && ( vm.formSubmitted || permissionForm.permission.$touched)" class="help-block">Name is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.slug.$invalid && ( vm.formSubmitted || permissionForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.permission.data.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="permissionForm.slug.$error.required && ( vm.formSubmitted || permissionForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.permission.data.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userpermissions" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-profile/user-profile.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li><a ui-sref="app.userlist">User Lists</a></li>\n' +
    '        <li class="active">Edit User</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Profile</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="userForm" ng-submit="vm.save(userForm.$valid, userForm)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.name.$invalid && ( vm.formSubmitted || userForm.name.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Name</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="text" class="form-control" ng-model="vm.userdata.data.name" name="name" placeholder="Name" required>\n' +
    '                <p ng-show="userForm.name.$error.required && ( vm.formSubmitted || userForm.name.$touched)" class="help-block">Name is required.</p>\n' +
    '                <p ng-show="userForm.name.customError"  class="help-block">{{userForm.name.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.email.$invalid && ( vm.formSubmitted || userForm.email.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Email</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="email" class="form-control" ng-model="vm.userdata.data.email" name="email" placeholder="Email" required>\n' +
    '                <p ng-show="userForm.email.$error.required && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '                <p ng-show="userForm.email.$error.email  && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">This is not a valid email.</p>\n' +
    '                <p ng-show="userForm.email.customError"  class="help-block">{{userForm.email.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="page-header">\n' +
    '              <h4>Update Password <small>( Optional )</small></h4>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.current_password.$invalid && ( vm.formSubmitted || userForm.current_password.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Current Password</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="password" class="form-control" placeholder="Password" name="current_password"\n' +
    '                  ng-model="vm.userdata.data.current_password"\n' +
    '                  ng-minlength="8"\n' +
    '                  ng-maxlength="50"\n' +
    '                  ng-required="vm.userdata.data.new_password">\n' +
    '                <p ng-show="userForm.current_password.$error.required && ( vm.formSubmitted || userForm.current_password.$touched)" class="help-block">Password is required.</p>\n' +
    '                <p ng-show="userForm.current_password.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '                <p ng-show="userForm.current_password.$invalid &&\n' +
    '                            userForm.current_password.$error.minlength &&\n' +
    '                            userForm.current_password.$touched"\n' +
    '                            class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '\n' +
    '                <p ng-show="userForm.current_password.$invalid && (vm.formSubmitted || vm.errors.current_password)" class="help-block">{{vm.errors.current_password}}</p>\n' +
    '                <p ng-show="userForm.current_password.customError"  class="help-block">{{userForm.current_password.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.new_password.$invalid && ( vm.formSubmitted || userForm.new_password.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">New Password</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="password" class="form-control" placeholder="Password"  name="new_password"\n' +
    '                  ng-model="vm.userdata.data.new_password"\n' +
    '                  ng-minlength="8"\n' +
    '                  ng-maxlength="50"\n' +
    '                  ng-required="vm.userdata.data.current_password">\n' +
    '                <p ng-show="userForm.new_password.$error.required && ( vm.formSubmitted || userForm.new_password.$touched)" class="help-block">New Password is required.</p>\n' +
    '                <p ng-show="userForm.new_password.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '                <p ng-show="userForm.new_password.$invalid &&\n' +
    '                            userForm.new_password.$error.minlength &&\n' +
    '                            userForm.new_password.$touched"\n' +
    '                            class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '                <p ng-show="userForm.new_password.$invalid && (vm.formSubmitted || vm.errors.new_password)" class="help-block">{{vm.errors.new_password}}</p>\n' +
    '                <p ng-show="userForm.new_password.customError"  class="help-block">{{userForm.new_password.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.new_password_confirmation.$invalid && ( vm.formSubmitted || userForm.new_password_confirmation.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Confirm Password</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="password" class="form-control" placeholder="Password" name="new_password_confirmation"\n' +
    '                  ng-model="vm.userdata.data.new_password_confirmation"\n' +
    '                  ng-minlength="8"\n' +
    '                  ng-maxlength="50"\n' +
    '                  ng-required="vm.userdata.data.current_password"\n' +
    '                  password-verify="vm.userdata.data.new_password">\n' +
    '                <p ng-show="userForm.new_password_confirmation.$error.required &&\n' +
    '                            ( vm.formSubmitted || userForm.new_password_confirmation.$touched)" class="help-block">Confirm Password is required.</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$invalid &&\n' +
    '                            userForm.new_password_confirmation.$error.minlength &&\n' +
    '                            userForm.new_password_confirmation.$touched"\n' +
    '                            class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$invalid && (vm.formSubmitted || vm.errors.new_password_confirmation)" class="help-block">{{vm.errors.new_password_confirmation}}</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$error.passwordVerify && (vm.formSubmitted || userForm.new_password_confirmation.$touched)"  class="help-block">Password Mismatch</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.customError"  class="help-block">{{userForm.new_password.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userlist" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-roles/user-roles.component.html',
    '<section class="content-header">\n' +
    '    <h1>User Roles <small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li class="active">Role List</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<!-- Main content -->\n' +
    '<section class="content">\n' +
    '    <!-- Default box -->\n' +
    '    <div class="box">\n' +
    '        <div class="box-header with-border">\n' +
    '            <h3 class="box-title">Role List</h3>\n' +
    '            <div class="box-tools pull-right">\n' +
    '                <a ui-sref="app.userrolesadd" class="btn btn-block btn-success btn-xs"><i class="fa fa-plus"></i> Add New</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '             <table datatable="" width="100%"  class="table table-striped table-bordered"\n' +
    '                ng-if="vm.displayTable"\n' +
    '                dt-options="vm.dtOptions"\n' +
    '                dt-columns="vm.dtColumns"></table>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '            Footer\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<!-- /.content -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-roles-add/user-roles-add.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users Roles<small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li><a ui-sref="app.userroles">Role Lists</a></li>\n' +
    '        <li class="active">Add User Role</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Add User Role</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="roleForm" ng-submit="vm.save(roleForm.$valid, roleForm)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.role.$invalid && ( vm.formSubmitted || roleForm.role.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Role</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.role" name="role" placeholder="Role" required>\n' +
    '                <p ng-show="roleForm.role.$error.required && ( vm.formSubmitted || roleForm.role.$touched)" class="help-block">Role is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.slug.$invalid && ( vm.formSubmitted || roleForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="roleForm.slug.$error.required && ( vm.formSubmitted || roleForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userroles" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Add New</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-roles-edit/user-roles-edit.component.html',
    '<section class="content-header">\n' +
    '    <h1>Users Roles<small>Module description here</small></h1>\n' +
    '    <ol class="breadcrumb">\n' +
    '        <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li><a ui-sref="app.userroles">Role Lists</a></li>\n' +
    '        <li class="active">Edit User Role</li>\n' +
    '    </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Edit User Role</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="roleForm" ng-submit="vm.save(roleForm.$valid)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.role.$invalid && ( vm.formSubmitted || roleForm.role.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Role</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.role.data.name" name="role" placeholder="Role" required>\n' +
    '                <p ng-show="roleForm.role.$error.required && ( vm.formSubmitted || roleForm.role.$touched)" class="help-block">Role is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.slug.$invalid && ( vm.formSubmitted || roleForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.role.data.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="roleForm.slug.$error.required && ( vm.formSubmitted || roleForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.role.data.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Permission</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <div class="checkbox" ng-repeat="permission in vm.systemPermissions">\n' +
    '                  <label>\n' +
    '                    <input type="checkbox" checklist-model="vm.role.data.permissions" checklist-value="permission.id"> {{permission.name}}\n' +
    '                  </label>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userroles" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-verification/user-verification.component.html',
    '<div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '  <h4>{{alert.title}}</h4>\n' +
    '  <p>{{alert.msg}}</p>\n' +
    '</div>\n' +
    '<a ui-sref="login" class="btn btn-default">Login Page</a>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/widgets/widgets.component.html',
    '<section class="content-header">\n' +
    '  <h1>\n' +
    '    Widgets\n' +
    '    <small>Preview page</small>\n' +
    '  </h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li class="active">Widgets</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<!-- Main content -->\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-aqua"><i class="fa fa-envelope-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Messages</span>\n' +
    '          <span class="info-box-number">1,410</span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-green"><i class="fa fa-flag-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Bookmarks</span>\n' +
    '          <span class="info-box-number">410</span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-yellow"><i class="fa fa-files-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Uploads</span>\n' +
    '          <span class="info-box-number">13,648</span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-red"><i class="fa fa-star-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Likes</span>\n' +
    '          <span class="info-box-number">93,139</span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <!-- =========================================================== -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-aqua">\n' +
    '        <span class="info-box-icon"><i class="fa fa-bookmark-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Bookmarks</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-green">\n' +
    '        <span class="info-box-icon"><i class="fa fa-thumbs-o-up"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Likes</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-yellow">\n' +
    '        <span class="info-box-icon"><i class="fa fa-calendar"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Events</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-red">\n' +
    '        <span class="info-box-icon"><i class="fa fa-comments-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Comments</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <!-- /.info-box-content -->\n' +
    '      </div>\n' +
    '      <!-- /.info-box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <!-- =========================================================== -->\n' +
    '  <!-- Small boxes (Stat box) -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <!-- small box -->\n' +
    '      <div class="small-box bg-aqua">\n' +
    '        <div class="inner">\n' +
    '          <h3>150</h3>\n' +
    '          <p>New Orders</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="fa fa-shopping-cart"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <!-- ./col -->\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <!-- small box -->\n' +
    '      <div class="small-box bg-green">\n' +
    '        <div class="inner">\n' +
    '          <h3>53<sup style="font-size: 20px">%</sup></h3>\n' +
    '          <p>Bounce Rate</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="ion ion-stats-bars"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <!-- ./col -->\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <!-- small box -->\n' +
    '      <div class="small-box bg-yellow">\n' +
    '        <div class="inner">\n' +
    '          <h3>44</h3>\n' +
    '          <p>User Registrations</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="ion ion-person-add"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <!-- ./col -->\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <!-- small box -->\n' +
    '      <div class="small-box bg-red">\n' +
    '        <div class="inner">\n' +
    '          <h3>65</h3>\n' +
    '          <p>Unique Visitors</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="ion ion-pie-graph"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <!-- ./col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <!-- =========================================================== -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-default collapsed-box">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Expandable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-success">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Removable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-warning">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Collapsable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-danger">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Loading state</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <!-- Loading (remove the following to stop the loading)-->\n' +
    '        <div class="overlay">\n' +
    '          <i class="fa fa-refresh fa-spin"></i>\n' +
    '        </div>\n' +
    '        <!-- end loading -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <!-- =========================================================== -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-default collapsed-box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Expandable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-success box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Removable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-warning box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Collapsable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-danger box-solid">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Loading state</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <!-- Loading (remove the following to stop the loading)-->\n' +
    '        <div class="overlay">\n' +
    '          <i class="fa fa-refresh fa-spin"></i>\n' +
    '        </div>\n' +
    '        <!-- end loading -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <!-- =========================================================== -->\n' +
    '  <!-- Direct Chat -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3">\n' +
    '      <!-- DIRECT CHAT PRIMARY -->\n' +
    '      <div class="box box-primary direct-chat direct-chat-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-light-blue">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <!-- Conversations are loaded here -->\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <!-- Message. Default to the left -->\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '            <!-- Message to the right -->\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '          </div>\n' +
    '          <!--/.direct-chat-messages-->\n' +
    '          <!-- Contacts are loaded here -->\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.contacts-list-info -->\n' +
    '                </a>\n' +
    '              </li>\n' +
    '              <!-- End Contact Item -->\n' +
    '            </ul>\n' +
    '            <!-- /.contatcts-list -->\n' +
    '          </div>\n' +
    '          <!-- /.direct-chat-pane -->\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-primary btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer-->\n' +
    '      </div>\n' +
    '      <!--/.direct-chat -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <!-- DIRECT CHAT SUCCESS -->\n' +
    '      <div class="box box-success direct-chat direct-chat-success">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-green">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <!-- Conversations are loaded here -->\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <!-- Message. Default to the left -->\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '            <!-- Message to the right -->\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '          </div>\n' +
    '          <!--/.direct-chat-messages-->\n' +
    '          <!-- Contacts are loaded here -->\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.contacts-list-info -->\n' +
    '                </a>\n' +
    '              </li>\n' +
    '              <!-- End Contact Item -->\n' +
    '            </ul>\n' +
    '            <!-- /.contatcts-list -->\n' +
    '          </div>\n' +
    '          <!-- /.direct-chat-pane -->\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-success btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer-->\n' +
    '      </div>\n' +
    '      <!--/.direct-chat -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <!-- DIRECT CHAT WARNING -->\n' +
    '      <div class="box box-warning direct-chat direct-chat-warning">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-yellow">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <!-- Conversations are loaded here -->\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <!-- Message. Default to the left -->\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '            <!-- Message to the right -->\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '          </div>\n' +
    '          <!--/.direct-chat-messages-->\n' +
    '          <!-- Contacts are loaded here -->\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.contacts-list-info -->\n' +
    '                </a>\n' +
    '              </li>\n' +
    '              <!-- End Contact Item -->\n' +
    '            </ul>\n' +
    '            <!-- /.contatcts-list -->\n' +
    '          </div>\n' +
    '          <!-- /.direct-chat-pane -->\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-warning btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer-->\n' +
    '      </div>\n' +
    '      <!--/.direct-chat -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-3">\n' +
    '      <!-- DIRECT CHAT DANGER -->\n' +
    '      <div class="box box-danger direct-chat direct-chat-danger">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-red">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <!-- Conversations are loaded here -->\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <!-- Message. Default to the left -->\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '            <!-- Message to the right -->\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-info -->\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <!-- /.direct-chat-img -->\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '              <!-- /.direct-chat-text -->\n' +
    '            </div>\n' +
    '            <!-- /.direct-chat-msg -->\n' +
    '          </div>\n' +
    '          <!--/.direct-chat-messages-->\n' +
    '          <!-- Contacts are loaded here -->\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                  <!-- /.contacts-list-info -->\n' +
    '                </a>\n' +
    '              </li>\n' +
    '              <!-- End Contact Item -->\n' +
    '            </ul>\n' +
    '            <!-- /.contatcts-list -->\n' +
    '          </div>\n' +
    '          <!-- /.direct-chat-pane -->\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-danger btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer-->\n' +
    '      </div>\n' +
    '      <!--/.direct-chat -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <h2 class="page-header">Social Widgets</h2>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-4">\n' +
    '      <!-- Widget: user widget style 1 -->\n' +
    '      <div class="box box-widget widget-user-2">\n' +
    '        <!-- Add the bg color to the header using any of the bg-* classes -->\n' +
    '        <div class="widget-user-header bg-yellow">\n' +
    '          <div class="widget-user-image">\n' +
    '            <img class="img-circle" src="/img/user7-128x128.jpg" alt="User Avatar">\n' +
    '          </div>\n' +
    '          <!-- /.widget-user-image -->\n' +
    '          <h3 class="widget-user-username">Nadia Carmichael</h3>\n' +
    '          <h5 class="widget-user-desc">Lead Developer</h5>\n' +
    '        </div>\n' +
    '        <div class="box-footer no-padding">\n' +
    '          <ul class="nav nav-stacked">\n' +
    '            <li><a href="#">Projects <span class="pull-right badge bg-blue">31</span></a></li>\n' +
    '            <li><a href="#">Tasks <span class="pull-right badge bg-aqua">5</span></a></li>\n' +
    '            <li><a href="#">Completed Projects <span class="pull-right badge bg-green">12</span></a></li>\n' +
    '            <li><a href="#">Followers <span class="pull-right badge bg-red">842</span></a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <!-- /.widget-user -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-4">\n' +
    '      <!-- Widget: user widget style 1 -->\n' +
    '      <div class="box box-widget widget-user">\n' +
    '        <!-- Add the bg color to the header using any of the bg-* classes -->\n' +
    '        <div class="widget-user-header bg-aqua-active">\n' +
    '          <h3 class="widget-user-username">Alexander Pierce</h3>\n' +
    '          <h5 class="widget-user-desc">Founder &amp; CEO</h5>\n' +
    '        </div>\n' +
    '        <div class="widget-user-image">\n' +
    '          <img class="img-circle" src="/img/user1-128x128.jpg" alt="User Avatar">\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <div class="row">\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">3,200</h5>\n' +
    '                <span class="description-text">SALES</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">13,000</h5>\n' +
    '                <span class="description-text">FOLLOWERS</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-sm-4">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">35</h5>\n' +
    '                <span class="description-text">PRODUCTS</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <!-- /.widget-user -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-4">\n' +
    '      <!-- Widget: user widget style 1 -->\n' +
    '      <div class="box box-widget widget-user">\n' +
    '        <!-- Add the bg color to the header using any of the bg-* classes -->\n' +
    '        <div class="widget-user-header bg-black" style="background: url(\'/img/photo1.png\') center center;">\n' +
    '          <h3 class="widget-user-username">Elizabeth Pierce</h3>\n' +
    '          <h5 class="widget-user-desc">Web Designer</h5>\n' +
    '        </div>\n' +
    '        <div class="widget-user-image">\n' +
    '          <img class="img-circle" src="/img/user3-128x128.jpg" alt="User Avatar">\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <div class="row">\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">3,200</h5>\n' +
    '                <span class="description-text">SALES</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">13,000</h5>\n' +
    '                <span class="description-text">FOLLOWERS</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '            <div class="col-sm-4">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">35</h5>\n' +
    '                <span class="description-text">PRODUCTS</span>\n' +
    '              </div>\n' +
    '              <!-- /.description-block -->\n' +
    '            </div>\n' +
    '            <!-- /.col -->\n' +
    '          </div>\n' +
    '          <!-- /.row -->\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <!-- /.widget-user -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <!-- Box Comment -->\n' +
    '      <div class="box box-widget">\n' +
    '        <div class="box-header with-border">\n' +
    '          <div class="user-block">\n' +
    '            <img class="img-circle" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '            <span class="username"><a href="#">Jonathan Burke Jr.</a></span>\n' +
    '            <span class="description">Shared publicly - 7:30 PM Today</span>\n' +
    '          </div>\n' +
    '          <!-- /.user-block -->\n' +
    '          <div class="box-tools">\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">\n' +
    '              <i class="fa fa-circle-o"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <img class="img-responsive pad" src="/img/photo2.png" alt="Photo">\n' +
    '          <p>I took this photo this morning. What do you guys think?</p>\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-share"></i> Share</button>\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-thumbs-o-up"></i> Like</button>\n' +
    '          <span class="pull-right text-muted">127 likes - 3 comments</span>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer box-comments">\n' +
    '          <div class="box-comment">\n' +
    '            <!-- User image -->\n' +
    '            <img class="img-circle img-sm" src="/img/user3-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Maria Gonzales\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              <!-- /.username -->\n' +
    '              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n' +
    '            </div>\n' +
    '            <!-- /.comment-text -->\n' +
    '          </div>\n' +
    '          <!-- /.box-comment -->\n' +
    '          <div class="box-comment">\n' +
    '            <!-- User image -->\n' +
    '            <img class="img-circle img-sm" src="/img/user4-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Luna Stark\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              <!-- /.username -->\n' +
    '              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n' +
    '            </div>\n' +
    '            <!-- /.comment-text -->\n' +
    '          </div>\n' +
    '          <!-- /.box-comment -->\n' +
    '        </div>\n' +
    '        <!-- /.box-footer -->\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <img class="img-responsive img-circle img-sm" src="/img/user4-128x128.jpg" alt="Alt Text">\n' +
    '            <!-- .img-push is used to add margin to elements next to floating images -->\n' +
    '            <div class="img-push">\n' +
    '              <input type="text" class="form-control input-sm" placeholder="Press enter to post comment">\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-6">\n' +
    '      <!-- Box Comment -->\n' +
    '      <div class="box box-widget">\n' +
    '        <div class="box-header with-border">\n' +
    '          <div class="user-block">\n' +
    '            <img class="img-circle" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '            <span class="username"><a href="#">Jonathan Burke Jr.</a></span>\n' +
    '            <span class="description">Shared publicly - 7:30 PM Today</span>\n' +
    '          </div>\n' +
    '          <!-- /.user-block -->\n' +
    '          <div class="box-tools">\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">\n' +
    '              <i class="fa fa-circle-o"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '          <!-- /.box-tools -->\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <!-- post text -->\n' +
    '          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at</p>\n' +
    '          <p>the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n' +
    '          <!-- Attachment -->\n' +
    '          <div class="attachment-block clearfix">\n' +
    '            <img class="attachment-img" src="/img/photo1.png" alt="Attachment Image">\n' +
    '            <div class="attachment-pushed">\n' +
    '              <h4 class="attachment-heading"><a href="http://www.lipsum.com/">Lorem ipsum text generator</a></h4>\n' +
    '              <div class="attachment-text">\n' +
    '                Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>\n' +
    '              </div>\n' +
    '              <!-- /.attachment-text -->\n' +
    '            </div>\n' +
    '            <!-- /.attachment-pushed -->\n' +
    '          </div>\n' +
    '          <!-- /.attachment-block -->\n' +
    '          <!-- Social sharing buttons -->\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-share"></i> Share</button>\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-thumbs-o-up"></i> Like</button>\n' +
    '          <span class="pull-right text-muted">45 likes - 2 comments</span>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer box-comments">\n' +
    '          <div class="box-comment">\n' +
    '            <!-- User image -->\n' +
    '            <img class="img-circle img-sm" src="/img/user3-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Maria Gonzales\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              <!-- /.username -->\n' +
    '              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n' +
    '            </div>\n' +
    '            <!-- /.comment-text -->\n' +
    '          </div>\n' +
    '          <!-- /.box-comment -->\n' +
    '          <div class="box-comment">\n' +
    '            <!-- User image -->\n' +
    '            <img class="img-circle img-sm" src="/img/user5-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Nora Havisham\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              <!-- /.username -->\n' +
    '              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n' +
    '            </div>\n' +
    '            <!-- /.comment-text -->\n' +
    '          </div>\n' +
    '          <!-- /.box-comment -->\n' +
    '        </div>\n' +
    '        <!-- /.box-footer -->\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <img class="img-responsive img-circle img-sm" src="/img/user4-128x128.jpg" alt="Alt Text">\n' +
    '            <!-- .img-push is used to add margin to elements next to floating images -->\n' +
    '            <div class="img-push">\n' +
    '              <input type="text" class="form-control input-sm" placeholder="Press enter to post comment">\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '        <!-- /.box-footer -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<footer class="main-footer">\n' +
    '    <div class="pull-right hidden-xs">\n' +
    '        <b>Version</b> 2.3.3\n' +
    '    </div>\n' +
    '    <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.\n' +
    '</footer>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/forgot-password/forgot-password.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Admin</b>LTE</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <h3>Forgot your password?</h3>\n' +
    '    <forgot-password></forgot-password>\n' +
    '    <a ui-sref="login">Back to Login Page</a>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<nav-header></nav-header>\n' +
    '<nav-sidebar></nav-sidebar>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/landing/landing.page.html',
    '    <!-- Content Header (Page header) -->\n' +
    '    <section class="content-header">\n' +
    '      <h1>\n' +
    '        Dashboard\n' +
    '        <small>Version 2.0</small>\n' +
    '      </h1>\n' +
    '      <ol class="breadcrumb">\n' +
    '        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '        <li class="active">Dashboard</li>\n' +
    '      </ol>\n' +
    '    </section>\n' +
    '\n' +
    '    <dashboard></dashboard>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/layout/layout.page.html',
    '<div ui-view="header"></div>\n' +
    '<div class="content-wrapper">\n' +
    '    <div ui-view="main"></div>\n' +
    '</div>\n' +
    '<div ui-view="footer"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login/login.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Remarker</b>admin</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <p class="login-box-msg">Sign in to start your session</p>\n' +
    '    <login-form></login-form>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login-loader/login-loader.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Admin</b>LTE</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <login-loader></login-loader>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/register/register.page.html',
    '<div class="register-box">\n' +
    '    <div class="register-logo">\n' +
    '        <a ui-sref="login"><b>Admin</b>LTE</a>\n' +
    '    </div>\n' +
    '    <div class="register-box-body">\n' +
    '        <p class="login-box-msg">Register a new membership</p>\n' +
    '        <register-form></register-form>\n' +
    '        <br>\n' +
    '        <a ui-sref="login" class="text-center">I already have a membership</a>\n' +
    '        <br><br>\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '                By signing up, you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Privacy Policy</a>.\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reset-password/reset-password.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Admin</b>LTE</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <h3>Reset Password</h3>\n' +
    '    <reset-password></reset-password>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/user-verification/user-verification.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Admin</b>LTE</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <user-verification></user-verification>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

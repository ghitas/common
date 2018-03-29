/**
 * Load states for application
 */
angular.module('cmms')

    .run(['$rootScope', '$state', '$stateParams', 'PAGINATION', function ($rootScope, $state, $stateParams, PAGINATION) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.PAGINATION = PAGINATION;
    }])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        // any unknown URLS go to 404
        $urlRouterProvider.otherwise('/404');
        // no route goes to index
        $urlRouterProvider.when('', '/');
        // use a state provider for routing

    $stateProvider
      .state('home', {
            url: '/',
            templateUrl: 'app/components/home/home.view.html',
            controller: 'homeController',
            controllerAs: 'ctrl'
      })
      .state('404', {
            url: '/404',
            templateUrl: 'app/shared/404.html'
      })
      .state('base', {
            url: '/:fcty',
                templateUrl: 'app/components/base/base.view.html',
                controller: 'baseController',
                controllerAs: 'baseCtrl'
            })
            .state('base.ubi', {
                url: '/user-basic-info',
                templateUrl: 'app/components/user.basic.info/ubi.view.html',
                controller: 'ubiController',
                controllerAs: 'ubiCtrl'
            })
            .state('base.rprs', {
                url: '/repair-reason',
                templateUrl: 'app/components/repair.reason/rprs.view.html',
                controller: 'rprsController',
                controllerAs: 'rprsCtrl'
            })
            .state('base.andon', {
                url: '/andon-display',
                templateUrl: 'app/components/andon.display/andon-display.view.html',
                controller: 'andonController',
                controllerAs: 'andonCtrl'
            })
            .state('base.andonIp', {
                url: '/andon-ip-config',
                templateUrl: 'app/components/andon.ip.config/andon-ip.view.html',
                controller: 'andonIpController',
                controllerAs: 'andonIpCtrl'
            })
            .state('base.toolBasic', {
                url: '/tool-basic-info',
                templateUrl: 'app/components/tool.data.basic.maintain/tool-basic.view.html',
                controller: 'toolBasicController',
                controllerAs: 'toolBasicCtrl'
            })
            .state('base.repairCheckListMonitor', {
                url: '/repair-check-list-monitor',
                templateUrl: 'app/components/repair.check.list.monitor/repair-check-list-monitor.view.html',
                controller: 'repairCheckListMonitorController',
                controllerAs: 'rclmCtrl'
            })
            .state('base.repairCheckListReport', {
                url: '/repair-check-list-report',
                templateUrl: 'app/components/repair.check.list.report/repair-check-list-report.view.html',
                controller: 'repairCheckListReportController',
                controllerAs: 'rclrCtrl'
            })
            .state('base.listReportBrokenMachine', {
                url: '/list-report-broken-machine',
                templateUrl: 'app/components/list.report.broken.machine/list-report-broken-machine.view.html',
                controller: 'listReportBrokenMachine',
                controllerAs: 'lrbmCtrl'
            })
            .state('base.systemConfig', {
                url: '/system-config',
                templateUrl: 'app/components/system.config/system-config.view.html',
                controller: 'systemConfig',
                controllerAs: 'scCtrl'
            });

}]);

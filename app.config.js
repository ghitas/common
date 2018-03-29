/**
 * Load modules for application
 */

angular

    .module('cmms', [
        'ui.router',
        'ui.bootstrap.modal',
        'ngAnimate',
        'cmms.factory.rest',
        'cmms.factory.export',
        'cmms.directive.pagination',
        'ae-datetimepicker',
        'pascalprecht.translate',
        'tmh.dynamicLocale'
    ])

    .constant('PAGINATION', {
        SIZE: 20
    });

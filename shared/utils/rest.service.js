/**
 * restFactory provide REST service method
 * Methods: GET - POST - PUT - DELETE
 * Created by NMHoang 
 */
(function () {
    'use strict';

    angular.module('cmms.factory.rest', [])
        .factory('restFactory', restFactory)
        .constant('restConst', {
            GET: 'GET',
            POST: 'POST',
            PUT: 'PUT',
            DELETE: 'DELETE',
            EMPTY: ''
        });

    restFactory.$inject = ['$http', '$log', 'restConst'];

    function restFactory($http, $log, restConst) {

        var promise;
               
        var rest = {
            async: async
        };

        return rest;

        function async(url, method, data, config) {
            
            method = method || restConst.GET;

            if (method == restConst.GET) {
                promise = $http.get(url, config).then(successCallback, errorCallback);
            } else if(method == restConst.POST) {
                promise = $http.post(url, data, config).then(successCallback, errorCallback);
            } else if(method == restConst.PUT) {
                promise = $http.put(url, data, config).then(successCallback, errorCallback);
            } else if(method == restConst.DELETE) {
                promise = $http.delete(url, config).then(successCallback, errorCallback);
            }
            
            return promise;
        }

        function successCallback(response) {
            return response;
        }

        function errorCallback(response) {
            $log.info(response.status);
            $log.info(response.statusText);
        }
    }


})();
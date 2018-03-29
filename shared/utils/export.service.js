/**
 * exportFactory provide Export file types: Excel, PDF, ...
 * Created by NMHoang
 */
(function () {
    'use strict';

    angular.module('cmms.factory.export', ['cmms.factory.rest'])
        .factory('exportFactory', exportFactory)
        .config(exportConfig)
        .constant('exportConst', {
            EXCEL: '.xlsx',
            PDF: '.pdf'
        });

    exportConfig.$inject = ['$compileProvider'];
    exportFactory.$inject = ['exportConst', 'restFactory', 'restConst', '$timeout'];

    function exportConfig($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }

    function exportFactory(exportConst, restFactory, restConst, $timeout) {

        var exp = {
            exportFile: exportFile
        };

        return exp;

        function exportFile(url, filename, data, fileType, fnSuffix) {

            fnSuffix = ymdhms();
            fileType = fileType || exportConst.EXCEL;
            filename = (filename) ? (filename + fnSuffix + fileType) : "Export.xlsx";
            var config = {
                headers: {
                   'Content-type': 'application/json'
                },
                responseType: 'arraybuffer'
            };

            var blobType = {};
            if(fileType == exportConst.EXCEL) {
                blobType = { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};
            } else if(fileType == exportConst.PDF) {
                blobType = { type: "application/pdf"};
            }

            restFactory.async(url, restConst.POST, data, config).then(function(response) {
                // console.log(url);
                // console.log(data);

                var ieEDGE = navigator.userAgent.match(/Edge/g),
                    ie = navigator.userAgent.match(/.NET/g), // IE 11+
                    oldIE = navigator.userAgent.match(/MSIE/g);

                var blob = new Blob([response.data], blobType);

                if (ie || oldIE || ieEDGE) {
                    window.navigator.msSaveBlob(blob, filename);
                } else {
                    var link = document.createElement('a');
                    link.style = "display: none";
                    var url = window.URL.createObjectURL(blob);
                    link.href = url;
                    link.download = filename;
                    document.body.appendChild(link);
                    link.click();

                    $timeout(function() {
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                    }, 100);
                }
            });

        }

    }

})();

angular.module('cmms')
    // .config(function (tmhDynamicLocaleProvider) {
    //  this is format of translate, example: in country UAE: paragraph float in the right
    //     tmhDynamicLocaleProvider.localeLocationPattern('https://code.angularjs.org/1.2.25/i18n/angular-locale_{{locale}}.js');
    // })
    .config(['$translateProvider', function ($translateProvider) {
        var dictionary = {};
        function convertEnToZh(dictionary){
            var tmp = "";
            var tmpObjVN = {...dictionary.vn};//copy object ES6
            dictionary.en = {};
            for(var e in dictionary.zh){
                var tmp = dictionary.zh[e];
                dictionary.en[tmp]=e;
            }
            dictionary.vn = {};
            dictionary.zh = {};
            for(var e in dictionary.en){
                var tmp = dictionary.en[e];
                dictionary.vn[e]=tmpObjVN[tmp];
                dictionary.zh[e] = e;
            }
        }
        var en = {};
        var vn = {};
        var zh = {};
        var myarray = [];
        var tmp = "";
        for(var i=0;i<tmp.length;i++){
            if(tmp[i]!=" "){
                for(var j=i+1;j<tmp.length;j++){
                    if(tmp[j]==" "&&tmp[j+1]==" "){
                        var item = tmp.substring(i,j);
                        item = item.replace("\n","");
                        item = item.replace("*","");
                        item = item.replace(":","");
                        item = item.replace("(","");
                        item = item.replace(")","");
                        myarray.push(item);
                        i = j;
                        break;
                    }
                }
            }
        }
        en={};
        zh={};
        vn={};
        for(var e = 0;e<myarray.length;e++){
            if(e%3==0){
                en[myarray[e]] = myarray[e+1];
                vn[myarray[e]] = myarray[e+2];
                zh[myarray[e]] = myarray[e];
            }
        }
        $.getJSON( "app/dic.json",(data) => {
            dictionary = data;
            //convert dictionnary base on chinese to english => no need to change words in html, just insert "| translate"
            //used convertEnToZh to create dic.json
            //convertEnToZh(data);
            $translateProvider.translations('en', dictionary.en);
            $translateProvider.translations('vn', dictionary.vn);
            $translateProvider.translations('zh', dictionary.zh);
    
            $translateProvider.preferredLanguage('zh');
        });
    }])
    .run(function ($rootScope, Language) {
        //make the service available     
        $rootScope.Language = Language;
    })
    .factory('Language', function ($translate) {
        //add the languages you support here. ar stands for arabic
        var rtlLanguages = ['ar'];

        var isRtl = function () {
            var languageKey = $translate.proposedLanguage() || $translate.use();
            for (var i = 0; i < rtlLanguages.length; i += 1) {
                if (languageKey.indexOf(rtlLanguages[i]) > -1)
                    return true;
            }
            return false;
        };

        //public api
        return {
            isRtl: isRtl
        };
    });
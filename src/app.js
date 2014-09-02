var app = angular.module('MobileAngularUiExamples', [
    'ngRoute',
    'ngTouch',
    'mobile-angular-ui',
    'fronter.markdown'
])
.config(['markdownConverterProvider', function (markdownConverterProvider) {
    // options to be passed to Showdown
    // see: https://github.com/coreyti/showdown#extensions
    markdownConverterProvider.config({
        extensions: ['github']
    });
}])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/',                    {templateUrl: 'views/home.html'});
    $routeProvider.when('/buttons',        {templateUrl: 'views/buttons.html'});
    $routeProvider.when('/readme',        {templateUrl: 'views/readme.html'});
});

app.service('analytics', [
    '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
        var send = function(evt, data) {
            ga('send', evt, data);
        }
    }
]);

app.controller('MainController', function ($rootScope, $scope, analytics) {

    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.loading = false;
    });
});

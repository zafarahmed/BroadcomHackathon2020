var app = angular.module('dynamicUserAssist', ["ngRoute"]);
app.config(function( $routeProvider ){
$routeProvider
.when('/user',{
    templateUrl:'user.html',
    controller:'clientRenderCtrl'
})
.when('/admin', {
    templateUrl: 'admin.html',
    controller:'adminRenderCtrl'
});
$locationProvider
  .html5Mode(true);
});

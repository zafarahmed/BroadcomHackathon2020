var app = angular.module('dynamicUserAssist', ['ui.router']);
app.config(function( $stateProvider, $urlRouterProvider ){
    $urlRouterProvider.otherwise('/');
    $stateProvider
.state('user',{
    url: '/user',
    templateUrl:'user.html',
    controller:'clientRenderCtrl'
})
.state('admin', {
    url: '/admin',
    templateUrl: 'admin.html',
    controller:'adminRenderCtrl'
});
});

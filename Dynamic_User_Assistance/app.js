var app = angular.module('dynamicUserAssist', []);
app.controller('ctrl', function($scope){
    $scope.con='<span id="defaultPop" data-toggle="popover" data-content="Click to view Demo"><i class="fa fa-video-camera" aria-hidden="true" data-toggle="modal" data-target="#exampleModal" /></span>';
});
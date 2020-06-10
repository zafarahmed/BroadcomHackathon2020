app.directive('contentAssist',function(){
    return{
        restrict: 'EA',
        template: 
        '<span id="defaultPop" class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip"><i class="fa fa-video-camera" aria-hidden="true" data-toggle="modal" data-target="#exampleModal" /></span>'
    };
});
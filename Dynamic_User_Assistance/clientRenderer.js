
var videoIcon='<span id="defaultPop" class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip"><i class="fa fa-video-camera" aria-hidden="true" data-toggle="modal" data-target="#{{ID}}" /></span>'
var videoTemplate = '<div class="modal fade" id="{{ID}}" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">'
+'<div class="modal-dialog">'
  +'<div class="modal-content">'
  +'<div class="modal-header">'
  +'<h5 class="modal-title" id="staticBackdropLabel">{{TITLE}}</h5>'
  +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
  +' <span aria-hidden="true">&times;</span>'
  +'</button>'
  +'</div>'
  +'<div class="modal-body">'
  +'<iframe width="100%" src="{{URL}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  +'</div>'
  +'<div class="modal-footer">'
  +'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
  +'<button type="button" class="btn btn-primary">Understood</button>'
  +'</div>'
  +'</div>'
  +'</div>'
  +'</div>'
app.controller("clientRenderCtrl", function( $scope, commonService){
    var contentArr = commonService.getContent();

    for(var i = 0; i<contentArr.length; i++){
        var content = contentArr[i];
        var icon = "";
        var template = "";
        if( content.type.toLowerCase() === 'video' ){
             icon = videoIcon.replace("{{ID}}", "c-v"+content.elementId);
             template = videoTemplate.replace("{{ID}}", "c-v"+content.elementId).replace("{{URL}}", content.content).replace("{{TITLE}}", content.title);
        }
        var html = $("#"+content.elementId)[0].outerHTML;
        $("#"+contentArr[i].elementId).replaceWith( icon + html);
        $('body').append(template);
    
    }

    $('#exampleModal').on('hidden.bs.modal', function() {
        var $this = $(this).find('iframe'),
          tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
      });
});

$( window ).on( "load", function() { 
    
 });
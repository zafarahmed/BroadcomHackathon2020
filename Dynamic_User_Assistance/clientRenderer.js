

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

app.controller('adminRenderCtrl', function( $scope, commonService ){

    var elements =document.body.querySelectorAll('button[type="button"],input[type="text"],input[type="button"], input[type="checkbox"],input[type="search"]');
     var contentsData = [];
	 var selectedId = '';
     for(var i = 0 ;i < elements.length; ++i){
	   var elemId = elements[i].id;
       if(elements[i].id &&  elemId!="contentId" && elemId!="dcc1" && elemId!="formSubmit"){
	     console.log(elements[i].id);
		 $(elements[i]).on('click', function(e){
		    //$('#staticBackdrop').modal('show');
			//selectedId = this.id;
			$("#contentId").val( this.id );
		 });
       }
    }

	
	//$("#formSubmit").on('click',function(e){
       $scope.contentDataController=function(){
      // e.preventDefault();
    
	   var contentData = $("#contentVal").val();
	    var contentId = $("#contentId").val();
	   if(contentData && contentId){
           
	     contentsData.push({
	      "elementId":$("#contentId").val(),
		  "type":$("#contentType").val(),
		  "content":$("#contentVal").val()
         });
         commonService.setContent({
            "elementId":$("#contentId").val(),
            "type":$("#contentType").val(),
            "content":$("#contentVal").val()
           });
		$('#dcc1').popover('hide');
		 $('.toast').toast('show');
	   }

	   console.log(contentsData);
	};

});
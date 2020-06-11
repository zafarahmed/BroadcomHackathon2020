app.service("commonService", function() {

  var vm = {};
  vm.contentList = [];


    function setContent( content )
    {
        vm.contentList.push(content);
    }

    function getContent()
    {
        return vm.contentList;
    }

    return {
        setContent: setContent,
        getContent: getContent
    };
});
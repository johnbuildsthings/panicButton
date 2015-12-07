var vmModule = require("../../shared/viewModels/main-view-model");
var dialogModule = require("ui/dialogs");
var frameModule = require('ui/frame');

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

function backToMain (){
  frameModule.topmost().navigate("views/main/main-page");
}

exports.backToMain = backToMain;
exports.pageLoaded = pageLoaded;
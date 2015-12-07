var vmModule = require("../../shared/viewModels/main-view-model");
var dialogModule = require("ui/dialogs");
var frameModule = require('ui/frame');
var phone = require("../../node_modules/nativescript-phone/phone");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

function appSetUp() {
  frameModule.topmost().navigate("views/setUp/setUp");
}

exports.panic = function(){
  phone.sms("208-691-3220", "this is a test message");
  dialogModule.alert('sending for help');
}

exports.setUp = appSetUp;
exports.pageLoaded = pageLoaded;

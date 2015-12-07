var observable = require("data/observable");
var dialogsModule = require("ui/dialogs");


var PanicAppStore = (function (_super) {
  __extends(PanicAppStore, _super);
  
  function PanicAppStore() {
    _super.call(this);
    this.phoneNumbers = [{name: 'test1', number: '1234'}];
    this.counter = 42;
    this.set('name', 'name');
    this.set('number', 'phone #');
    this.set("message", this.counter + " taps left");
  }
  PanicAppStore.prototype.tapAction = function () {
    this.counter--;
    if (this.counter <= 0) {
      this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    }
    else {
      this.set("message", this.counter + " taps left");
    }
  };

  PanicAppStore.prototype.enterNumberAction = function(){
    if(this.get('name') !== 'name' && this.get('number') !== 'phone #'){
      this.phoneNumbers.push({name: this.get('name'), number: this.get('number')});
      this.set('name', 'name');
      this.set('number', 'phone #');
    }
  };

  return PanicAppStore;
})(observable.Observable);

exports.PanicAppStore = PanicAppStore;

exports.mainViewModel = new PanicAppStore();

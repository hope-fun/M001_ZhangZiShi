var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var ErrorMsgVM = (function (_super) {
        __extends(ErrorMsgVM, _super);
        function ErrorMsgVM(_uiLayer, msg, cancel, yes) {
            var _this = this;
            _super.call(this);
            this.skinName = "View.ErrorMsgView";
            this.uiLayer = _uiLayer;
            this.errorMsg.text = msg;
            this.uiLayer.addChild(this);
            this.Yes.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        }
        var d = __define,c=ErrorMsgVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return ErrorMsgVM;
    })(eui.Component);
    ViewModel.ErrorMsgVM = ErrorMsgVM;
    egret.registerClass(ErrorMsgVM,'ViewModel.ErrorMsgVM');
})(ViewModel || (ViewModel = {}));

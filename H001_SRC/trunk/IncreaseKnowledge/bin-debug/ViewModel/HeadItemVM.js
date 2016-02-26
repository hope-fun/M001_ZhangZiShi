var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var HeadItemVM = (function (_super) {
        __extends(HeadItemVM, _super);
        function HeadItemVM(_headBg, _headBtn) {
            _super.call(this);
            this.skinName = "View.HeadItemView";
        }
        var d = __define,c=HeadItemVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            this.headMask.touchEnabled = false;
            //这边点击才会改头像，整套控件写的不是太好，有机会会改的.
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                _this.headMask.visible = true;
                egret.localStorage.setItem("headBtn", String(_this.headBtn.source));
                egret.localStorage.setItem("headBg", _this.headBg.source.toString());
            }, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (_this.onCallBack != null) {
                    _this.onCallBack();
                }
            }, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, function () {
                _this.headMask.visible = false;
            }, this);
        };
        return HeadItemVM;
    })(eui.Component);
    ViewModel.HeadItemVM = HeadItemVM;
    egret.registerClass(HeadItemVM,'ViewModel.HeadItemVM');
})(ViewModel || (ViewModel = {}));

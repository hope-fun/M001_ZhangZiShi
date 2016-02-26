var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var SettingMsgVM = (function (_super) {
        __extends(SettingMsgVM, _super);
        function SettingMsgVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.skinName = "View.SettingMsgView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=SettingMsgVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            //            by fangchao
            if (egret.localStorage.getItem("state")) {
                this.soundEffectBtn.currentState = egret.localStorage.getItem("state");
            }
            else {
                this.soundEffectBtn.currentState = "downAndSelected";
            }
            console.log(Model.WebValue.isSound);
            console.log("方超在此                  " + egret.localStorage.getItem("state"));
            this.soundEffectBtn.addEventListener(egret.Event.CHANGE, function () {
                if (Model.WebValue.isSound) {
                    _this.soundEffectBtn.currentState = "up";
                    Model.WebValue.isSound = false;
                }
                else {
                    _this.soundEffectBtn.currentState = "downAndSelected";
                    Model.WebValue.isSound = true;
                }
                egret.localStorage.setItem("state", _this.soundEffectBtn.currentState);
                var result = Model.WebValue.isSound ? "on" : "off";
                egret.localStorage.setItem("sound", result);
            }, this);
            this.instructionBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能暂未开放,敬请期待 ! ");
            }, this);
            this.problemReportBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                alert("此功能暂未开放,敬请期待 ! ");
            }, this);
            var hlTween = egret.Tween.get(this.settingRectGroup);
            hlTween.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.circIn);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.onClose();
            }, this);
        };
        p.onClose = function () {
            var _this = this;
            if (this.onCallBack != null) {
                this.onCallBack();
            }
            var hlTween = egret.Tween.get(this.settingRectGroup);
            hlTween.to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.circIn).call(function () {
                _this.uiLayer.removeChild(_this);
            });
        };
        return SettingMsgVM;
    })(eui.Component);
    ViewModel.SettingMsgVM = SettingMsgVM;
    egret.registerClass(SettingMsgVM,'ViewModel.SettingMsgVM');
})(ViewModel || (ViewModel = {}));

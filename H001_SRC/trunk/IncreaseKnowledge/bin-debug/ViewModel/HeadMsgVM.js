var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var HeadMsgVM = (function (_super) {
        __extends(HeadMsgVM, _super);
        function HeadMsgVM(_uiLayer, _onCallBack) {
            _super.call(this);
            this.skinName = "View.HeadMsgView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=HeadMsgVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            var hlTween = egret.Tween.get(this.headListGroup);
            hlTween.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.circIn);
            this.sagittariusBtn.headBtn.source = "01";
            this.sagittariusBtn.headBg.source = "hong";
            this.sagittariusBtn.onCallBack = function () { _this.onClose(); };
            this.leoBtn.headBtn.source = "05";
            this.leoBtn.headBg.source = "hong";
            this.leoBtn.onCallBack = function () { _this.onClose(); };
            this.ariesBtn.headBtn.source = "09";
            this.ariesBtn.headBg.source = "hong";
            this.ariesBtn.onCallBack = function () { _this.onClose(); };
            this.scorpioBtn.headBtn.source = "02";
            this.scorpioBtn.headBg.source = "huang";
            this.scorpioBtn.onCallBack = function () { _this.onClose(); };
            this.libraBtn.headBtn.source = "06";
            this.libraBtn.headBg.source = "huang";
            this.libraBtn.onCallBack = function () { _this.onClose(); };
            this.cancerBtn.headBtn.source = "10";
            this.cancerBtn.headBg.source = "huang";
            this.cancerBtn.onCallBack = function () { _this.onClose(); };
            this.taurusBtn.headBtn.source = "03";
            this.taurusBtn.headBg.source = "lan";
            this.taurusBtn.onCallBack = function () { _this.onClose(); };
            this.geminiBtn.headBtn.source = "07";
            this.geminiBtn.headBg.source = "lan";
            this.geminiBtn.onCallBack = function () { _this.onClose(); };
            this.capricornBtn.headBtn.source = "11";
            this.capricornBtn.headBg.source = "lan";
            this.capricornBtn.onCallBack = function () { _this.onClose(); };
            this.virgoBtn.headBtn.source = "04";
            this.virgoBtn.headBg.source = "zi";
            this.virgoBtn.onCallBack = function () { _this.onClose(); };
            this.piscesBtn.headBtn.source = "08";
            this.piscesBtn.headBg.source = "zi";
            this.piscesBtn.onCallBack = function () { _this.onClose(); };
            this.aquariusBtn.headBtn.source = "12";
            this.aquariusBtn.headBg.source = "zi";
            this.aquariusBtn.onCallBack = function () { _this.onClose(); };
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.onClose();
            }, this);
        };
        p.onClose = function () {
            var _this = this;
            if (this.onCallBack != null) {
                this.onCallBack();
            }
            var hlTween = egret.Tween.get(this.headListGroup);
            hlTween.to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.circIn).call(function () {
                _this.uiLayer.removeChild(_this);
            });
        };
        return HeadMsgVM;
    })(eui.Component);
    ViewModel.HeadMsgVM = HeadMsgVM;
    egret.registerClass(HeadMsgVM,'ViewModel.HeadMsgVM');
})(ViewModel || (ViewModel = {}));

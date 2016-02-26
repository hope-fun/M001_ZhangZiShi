var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var LevelUpVM = (function (_super) {
        __extends(LevelUpVM, _super);
        function LevelUpVM(name, _uiLayer) {
            var _this = this;
            _super.call(this);
            this.uiLayer = _uiLayer;
            this.skinName = "View.LevelUpView";
            this.levelupName.text = name;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
            var tween = egret.Tween.get(this.light, { loop: true });
            tween.to({ alpha: 1 }, 1200, egret.Ease.sineIn).to({ alpha: 0.5 }, 1200, egret.Ease.sineIn);
            this.uiLayer.addChild(this);
        }
        var d = __define,c=LevelUpVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return LevelUpVM;
    })(eui.Component);
    ViewModel.LevelUpVM = LevelUpVM;
    egret.registerClass(LevelUpVM,'ViewModel.LevelUpVM');
})(ViewModel || (ViewModel = {}));

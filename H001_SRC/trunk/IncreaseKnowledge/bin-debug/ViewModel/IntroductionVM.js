var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var IntroductionVM = (function (_super) {
        __extends(IntroductionVM, _super);
        function IntroductionVM(_uiLayer) {
            _super.call(this);
            this.scene = 1;
            this.uiLayer = _uiLayer;
            this.skinName = "View.IntroductionView";
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageClick, this);
            this.uiLayer.addChildAt(this, 3);
        }
        var d = __define,c=IntroductionVM,p=c.prototype;
        p.onStageClick = function () {
            this.scene++;
            if (this.scene == 4) {
                this.uiLayer.removeChild(this);
                return;
            }
            ;
            this.background.source = "introduction" + this.scene;
        };
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return IntroductionVM;
    })(eui.Component);
    ViewModel.IntroductionVM = IntroductionVM;
    egret.registerClass(IntroductionVM,'ViewModel.IntroductionVM');
})(ViewModel || (ViewModel = {}));

var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author cai_haotian 2015.12.15.
     *
     */
    var SkillTrainedVM = (function (_super) {
        __extends(SkillTrainedVM, _super);
        function SkillTrainedVM(imgid, name, detail, _uiLayer) {
            var _this = this;
            _super.call(this);
            this.uiLayer = _uiLayer;
            this.skinName = "View.SkillTrainedView";
            this.skillName.text = name;
            this.skillDetail.text = detail;
            this.skillImg.source = imgid;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
            var tween = egret.Tween.get(this.light, { loop: true });
            tween.to({ alpha: 1 }, 1200, egret.Ease.sineIn).to({ alpha: 0.5 }, 1200, egret.Ease.sineIn);
            this.uiLayer.addChild(this);
        }
        var d = __define,c=SkillTrainedVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return SkillTrainedVM;
    })(eui.Component);
    ViewModel.SkillTrainedVM = SkillTrainedVM;
    egret.registerClass(SkillTrainedVM,'ViewModel.SkillTrainedVM');
})(ViewModel || (ViewModel = {}));

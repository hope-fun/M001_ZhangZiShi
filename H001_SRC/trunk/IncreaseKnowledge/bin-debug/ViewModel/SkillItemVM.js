var ViewModel;
(function (ViewModel) {
    /**

     *

     * @author

     *

     */
    var SkillItemVM = (function (_super) {
        __extends(SkillItemVM, _super);
        function SkillItemVM() {
            _super.call(this);
            this.i = 0;
            this.skinName = "View.SkillItemView";
        }
        var d = __define,c=SkillItemVM,p=c.prototype;
        d(p, "skillIconSource",undefined
            /*
             * 在exml里面，给技能Icon默认图.
             */
            ,function (_name) {
                this.skillIcon.source = _name;
            }
        );
        d(p, "setSModel",undefined
            ,function (_data) {
                var _this = this;
                this.sModel = _data;
                if (Model.WebValue.isDebug)
                    console.log("zhujun: set skill model " + JSON.stringify(_data));
                if (_data.unlock) {
                    this.lockMaskGroup.visible = false; //已解锁.
                    this.skillItemGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        if (_this.i % 2 == 0) {
                            if (_this.onCallBack != null) {
                                _this.onCallBack(_this.sModel);
                            }
                        }
                        _this.i++;
                    }, this);
                }
                else {
                    this.lockMaskGroup.visible = true; //未解锁.
                }
                this.skillName.text = _data.name;
                this.skillLv.text = String("LV." + _data.level);
                this.skillGoldLabel.text = String(_data.gCost);
                this.skillDiamondLabel.text = String(_data.dCost);
                this.skillClockLabel.text = String(_data.speedCost);
                this.unlockLabel.text = String("等级" + _data.unlockLevel + " 解锁");
            }
        );
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        return SkillItemVM;
    })(eui.ItemRenderer);
    ViewModel.SkillItemVM = SkillItemVM;
    egret.registerClass(SkillItemVM,'ViewModel.SkillItemVM');
})(ViewModel || (ViewModel = {}));

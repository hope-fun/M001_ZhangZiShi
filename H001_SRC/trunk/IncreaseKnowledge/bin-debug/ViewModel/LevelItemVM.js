var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var LevelItemVM = (function (_super) {
        __extends(LevelItemVM, _super);
        function LevelItemVM() {
            _super.call(this);
            this.skinName = "View.LevelItemView";
            this.name = "LevelItemVM"; //用來取標識對象判斷用.
        }
        var d = __define,c=LevelItemVM,p=c.prototype;
        d(p, "levelImageSource",undefined
            /*
             * 在exml里面，给关卡背景默认图.
             */
            ,function (_name) {
                this.levelImage.source = _name;
            }
        );
        d(p, "levelModel",undefined
            ,function (_data) {
                var _this = this;
                this.lModel = _data;
                this.levelImage.source = _data.imageName;
                this.levelName.text = this.lModel.name;
                this.costValue.text = String(this.lModel.goldCost);
                this.duringValue.text = String(this.lModel.duringTurns + "秒");
                this.turnValue.text = String(this.lModel.turns + "回合");
                if (Model.WebValue.menuDataM.playerModel.level >= this.lModel.unlockLevel) {
                    this.lockGroup.visible = false;
                    this.levelItemGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        if (_this.onCallBack != null) {
                            _this.onCallBack(_this.lModel);
                        }
                    }, this);
                }
                else {
                    this.lockLabel.text = String("等级" + this.lModel.unlockLevel + " 解锁");
                    this.levelMask.visible = false;
                    this.levelItemGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    }, this);
                }
            }
        );
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            var rect = new egret.Rectangle(0, 0, 212, 550);
            this.levelItemGroup.mask = rect;
        };
        return LevelItemVM;
    })(eui.ItemRenderer);
    ViewModel.LevelItemVM = LevelItemVM;
    egret.registerClass(LevelItemVM,'ViewModel.LevelItemVM');
})(ViewModel || (ViewModel = {}));

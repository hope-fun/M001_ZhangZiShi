var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var BankMsgItemVM = (function (_super) {
        __extends(BankMsgItemVM, _super);
        function BankMsgItemVM(_uiGroup, _str) {
            _super.call(this);
            this.skinName = "View.BankMsgItemView";
            this.uiGroup = _uiGroup;
            this.str = _str;
            this.x = 52.5;
            this.y = 102.5;
            this.uiGroup.addChild(this);
        }
        var d = __define,c=BankMsgItemVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            if (this.str != undefined) {
                this.backMsgImage.visible = false;
                this.backMsgLabel.size = 92;
                this.backMsgLabel.text = String("+" + this.str);
            }
            else {
                console.log("Test: bank no earn ! ");
            }
            //淡入动画0.5-1.0
            var gourpAlphaTween = egret.Tween.get(this.bankMsgGroup);
            gourpAlphaTween.to({ alpha: 1.0 }, 1500); //egret.Ease.cubicInOut
            //上移动画
            var groupMoveTween = egret.Tween.get(this.bankMsgGroup);
            groupMoveTween.to({ y: -200 }, 1500).call(function () {
                _this.uiGroup.removeChild(_this);
            });
        };
        return BankMsgItemVM;
    })(eui.Component);
    ViewModel.BankMsgItemVM = BankMsgItemVM;
    egret.registerClass(BankMsgItemVM,'ViewModel.BankMsgItemVM');
})(ViewModel || (ViewModel = {}));

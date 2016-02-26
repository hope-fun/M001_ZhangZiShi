var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var MainMenuItemVM = (function (_super) {
        __extends(MainMenuItemVM, _super);
        function MainMenuItemVM() {
            _super.call(this);
            /*
             * 在exml里面,给图片赋值.
             */
            this.menuItemSource = "";
            /*
             * 文字内容.
             */
            this.menuItemText = "";
            /*
             * 英文文字内容.
             */
            this.menuItemEnText = "";
            this.skinName = "View.MainMenuItemView";
            this.setSkinPart("menuItemSource", this.menuItemSource);
            this.setSkinPart("menuItemText", this.menuItemText);
            this.setSkinPart("menuItemEnText", this.menuItemEnText);
        }
        var d = __define,c=MainMenuItemVM,p=c.prototype;
        p.childrenCreated = function () {
            this.menuItemBtn.source = this.menuItemSource;
            this.menuItemLabel.text = this.menuItemText;
            this.menuItemEnLabel.text = this.menuItemEnText;
        };
        return MainMenuItemVM;
    })(eui.Button);
    ViewModel.MainMenuItemVM = MainMenuItemVM;
    egret.registerClass(MainMenuItemVM,'ViewModel.MainMenuItemVM');
})(ViewModel || (ViewModel = {}));

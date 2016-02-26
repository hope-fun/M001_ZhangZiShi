var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var LoadingBarItemVM = (function (_super) {
        __extends(LoadingBarItemVM, _super);
        function LoadingBarItemVM() {
            _super.call(this);
        }
        var d = __define,c=LoadingBarItemVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.skinName = "View.LoadingBarItem";
            this.thumb = this.loadingBar;
            this.labelDisplay = this.loadingLabel;
            this.minimum = 0;
            this.value = 0;
            this.maximum = 100;
        };
        /*
         * 设置进度.
         */
        p.setProgress = function (current, total) {
            //            console.log("Test: current value is " + current + " total " + total + " value is " + Math.floor(current / total * 100));
            this.value = Math.floor(current / total * 100);
            this.handleIcon.x = 380 * current / total - 35;
        };
        return LoadingBarItemVM;
    })(eui.ProgressBar);
    ViewModel.LoadingBarItemVM = LoadingBarItemVM;
    egret.registerClass(LoadingBarItemVM,'ViewModel.LoadingBarItemVM');
})(ViewModel || (ViewModel = {}));

var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author by cai_haotian 2015.12.17.
     *
     */
    var SkillSpeedUpVM = (function (_super) {
        __extends(SkillSpeedUpVM, _super);
        function SkillSpeedUpVM(_uiLayer, _askill, _onCallBack) {
            var _this = this;
            _super.call(this);
            this.uiLayer = _uiLayer;
            this.skinName = "View.SkillSpeedUpView";
            this.uiLayer.addChild(this);
            this._sModel = _askill;
            console.log("cai_haotian askill" + JSON.stringify(_askill));
            this.initDetail();
            this.use.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                _onCallBack();
            }, this);
            this.use.addEventListener(egret.TouchEvent.TOUCH_END, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        }
        var d = __define,c=SkillSpeedUpVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            this.noNeed.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.uiLayer.removeChild(_this);
            }, this);
        };
        //初始化界面数据
        p.initDetail = function () {
            egret.clearInterval(timer2);
            this.skillName.text = this._sModel.name + " LV." + this._sModel.level;
            this.diamond.text = this._sModel.speedCost.toString();
            this.skillDetail.text = this._sModel.des;
            var leftTime = this._sModel.leftDuring;
            var during = this._sModel.during;
            var time = during - leftTime;
            var timeSpan = Model.TimeSpan.FromSeconds(time);
            this.skillLeftTime.text = timeSpan.toString();
            var timer2 = egret.setInterval(function () {
                if (leftTime == during) {
                    egret.clearInterval(timer2);
                    return;
                }
                leftTime++;
                time = during - leftTime;
                timeSpan = Model.TimeSpan.FromSeconds(time);
                this.skillLeftTime.text = timeSpan.toString();
            }, this, 1010);
        };
        return SkillSpeedUpVM;
    })(eui.Component);
    ViewModel.SkillSpeedUpVM = SkillSpeedUpVM;
    egret.registerClass(SkillSpeedUpVM,'ViewModel.SkillSpeedUpVM');
})(ViewModel || (ViewModel = {}));

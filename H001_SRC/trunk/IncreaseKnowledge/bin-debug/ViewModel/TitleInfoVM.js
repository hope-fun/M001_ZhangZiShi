var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    var TitleInfoVM = (function (_super) {
        __extends(TitleInfoVM, _super);
        function TitleInfoVM(_uiLayer, _onCallBack) {
            _super.call(this);
            TitleInfoVM.singleton = this;
            this.skinName = "View.TitleInfoView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=TitleInfoVM,p=c.prototype;
        p.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            var p = Model.WebValue.menuDataM.playerModel;
            this.levelLabel.text = String("LV:" + p.level);
            this.expBar.maximum = p.expMax;
            this.expBar.value = p.expCurrent;
            this.diamondeLabel.text = String(p.diamond);
            this.goldLabel.text = String(p.gold);
            this.diamondGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                Model.WebService.mallData("DIAMOND", function (_request) {
                    Model.WebValue.mallM = JSON.parse(_request.response);
                    var diamondMsg = new ViewModel.MallMsgVM(_this.uiLayer, "DIAMOND", function (diamond) {
                        //                        alert("diamond" + diamond);
                        Model.WebValue.menuDataM.playerModel.diamond += diamond;
                        var animTime = 500; //动画时长,用于算速率和结束动画.
                        var sTime = egret.getTimer();
                        var tick = function (t) {
                            var delta = (t - sTime) / animTime; //这边除以一千，乘以一千.单位抵消.
                            var lp = Model.Mathf.lerp(diamond, Model.WebValue.menuDataM.playerModel.diamond, delta);
                            TitleInfoVM.singleton.diamondeLabel.text = Math.floor(lp).toString();
                            return true;
                        };
                        egret.startTick(tick, _this);
                        egret.setTimeout(function () {
                            egret.stopTick(tick, _this);
                        }, _this, animTime);
                    });
                });
            }, this);
            this.goldGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                Model.WebService.mallData("GCOIN", function (_request) {
                    Model.WebValue.mallM = JSON.parse(_request.response);
                    var goldMsg = new ViewModel.MallMsgVM(_this.uiLayer, "GCOIN", function (gold) {
                        //                        alert("gold" + gold);                        
                        Model.WebValue.menuDataM.playerModel.gold += gold;
                        var animTime = 500; //动画时长,用于算速率和结束动画.
                        var sTime = egret.getTimer();
                        var tick = function (t) {
                            var delta = (t - sTime) / animTime; //这边除以一千，乘以一千.单位抵消.
                            var lp = Model.Mathf.lerp(gold, Model.WebValue.menuDataM.playerModel.gold, delta);
                            TitleInfoVM.singleton.goldLabel.text = Math.floor(lp).toString();
                            return true;
                        };
                        egret.startTick(tick, _this);
                        egret.setTimeout(function () {
                            egret.stopTick(tick, _this);
                        }, _this, animTime);
                    });
                });
            }, this);
        };
        /*
         * 正数则加,负数则减.
         */
        p.plusGold = function (_gold) {
            Model.WebValue.menuDataM.playerModel.gold += _gold;
            if (Model.WebValue.menuDataM.playerModel.gold <= 0) {
                Model.WebValue.menuDataM.playerModel.gold = 0;
            }
            this.goldLabel.text = Model.WebValue.menuDataM.playerModel.gold.toString();
        };
        //      结算界面更新等级  by fangchao 2015.12.11
        p.plusLevel = function (_level) {
            Model.WebValue.menuDataM.playerModel.level = _level;
            this.levelLabel.text = "LV:" + Model.WebValue.menuDataM.playerModel.level.toString();
        };
        /*
         * 更新Title金币当前数值.
         */
        p.updateGold = function (_gold) {
            if (Model.WebValue.menuDataM.playerModel.gold <= 0) {
                Model.WebValue.menuDataM.playerModel.gold = 0;
            }
            this.goldLabel.text = _gold.toString();
        };
        /*
         * 更新钻石的值和title ui. by cai_haotian 2015.12.10.
         */
        p.updateDiamond = function (_diamond) {
            if (Model.WebValue.menuDataM.playerModel.diamond <= 0) {
                Model.WebValue.menuDataM.playerModel.diamond = 0;
            }
            this.diamondeLabel.text = _diamond.toString();
        };
        return TitleInfoVM;
    })(eui.Component);
    ViewModel.TitleInfoVM = TitleInfoVM;
    egret.registerClass(TitleInfoVM,'ViewModel.TitleInfoVM');
})(ViewModel || (ViewModel = {}));

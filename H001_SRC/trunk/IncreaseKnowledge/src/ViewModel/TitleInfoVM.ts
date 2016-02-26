module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class TitleInfoVM extends eui.Component{	
    	
        public static singleton: TitleInfoVM;
        private uiLayer: eui.UILayer;
        private onCallBack: Function;
        private levelLabel: eui.Label;
        public expBar: eui.ProgressBar;
        private diamondeLabel: eui.Label;
        private goldLabel: eui.Label;
        
        private diamondGroup: eui.Label;
        private goldGroup: eui.Label;
    	
        public constructor(_uiLayer?:eui.UILayer,_onCallBack?: Function) {
            super();
            TitleInfoVM.singleton = this;
            this.skinName = "View.TitleInfoView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this); 
        }
        
        protected createChildren() {
            super.createChildren();
            var p = Model.WebValue.menuDataM.playerModel;
            this.levelLabel.text = String("LV:" + p.level);
            this.expBar.maximum = p.expMax;
            this.expBar.value = p.expCurrent;
            this.diamondeLabel.text = String(p.diamond);
            this.goldLabel.text = String(p.gold);
            this.diamondGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,() => { 
                Model.WebService.mallData("DIAMOND",(_request: egret.HttpRequest) => { 
                    Model.WebValue.mallM = JSON.parse(_request.response);
                    var diamondMsg: MallMsgVM = new MallMsgVM(this.uiLayer,"DIAMOND",(diamond: number) => {
//                        alert("diamond" + diamond);
                        Model.WebValue.menuDataM.playerModel.diamond += diamond;
                        var animTime = 500;//动画时长,用于算速率和结束动画.
                        var sTime = egret.getTimer();
                        var tick = (t: number): boolean => {
                            var delta = (t - sTime) / animTime;//这边除以一千，乘以一千.单位抵消.
                            var lp = Model.Mathf.lerp(diamond,Model.WebValue.menuDataM.playerModel.diamond,delta);
                            TitleInfoVM.singleton.diamondeLabel.text = Math.floor(lp).toString();
                            return true;
                        };
                        egret.startTick(tick,this);
                        egret.setTimeout(() => {
                            egret.stopTick(tick,this);
                        },this,animTime);
                    });
                    });
                },this);
            this.goldGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                Model.WebService.mallData("GCOIN",(_request: egret.HttpRequest) => {
                    Model.WebValue.mallM = JSON.parse(_request.response);
                    var goldMsg: MallMsgVM = new MallMsgVM(this.uiLayer,"GCOIN",(gold: number) => { 
//                        alert("gold" + gold);                        
                        Model.WebValue.menuDataM.playerModel.gold += gold;
                        var animTime = 500;//动画时长,用于算速率和结束动画.
                        var sTime = egret.getTimer();
                        var tick = (t: number): boolean => {
                            var delta = (t - sTime) / animTime;//这边除以一千，乘以一千.单位抵消.
                            var lp = Model.Mathf.lerp(gold,Model.WebValue.menuDataM.playerModel.gold,delta);
                            TitleInfoVM.singleton.goldLabel.text = Math.floor(lp).toString();
                            return true;
                        };
                        egret.startTick(tick,this);
                        egret.setTimeout(() => {
                            egret.stopTick(tick,this);
                        },this,animTime);
                    });
                 });
            },this);
        }
         
        /*
         * 正数则加,负数则减.
         */ 
        public plusGold(_gold:number) { 
            Model.WebValue.menuDataM.playerModel.gold += _gold;
            if(Model.WebValue.menuDataM.playerModel.gold <= 0) {
                Model.WebValue.menuDataM.playerModel.gold = 0;
            }
            this.goldLabel.text = Model.WebValue.menuDataM.playerModel.gold.toString();
        }
//      结算界面更新等级  by fangchao 2015.12.11
        public plusLevel(_level: number) {
            Model.WebValue.menuDataM.playerModel.level = _level;
            this.levelLabel.text = "LV:"+Model.WebValue.menuDataM.playerModel.level.toString();
        }
        
        /*
         * 更新Title金币当前数值.
         */ 
        public updateGold(_gold:number) { 
            if(Model.WebValue.menuDataM.playerModel.gold <= 0) {
                Model.WebValue.menuDataM.playerModel.gold = 0;
            }
            this.goldLabel.text = _gold.toString();
        }
        
        /*
         * 更新钻石的值和title ui. by cai_haotian 2015.12.10.
         */
        public updateDiamond(_diamond: number) {
            if(Model.WebValue.menuDataM.playerModel.diamond <= 0) {
                Model.WebValue.menuDataM.playerModel.diamond = 0;
            }
            this.diamondeLabel.text = _diamond.toString();
        }
        
	}
}

module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class SettingMsgVM extends eui.Component{
    	/*
    	 * 根节点.
    	 */ 
        private uiLayer: eui.UILayer;
        /*
         * 回调函数.
         */ 
        private onCallBack: Function;
        /*
         * 设置的父节点.
         */ 
        private settingRectGroup: eui.Group;
        /*
         * 关闭按钮.
         */ 
        private closeBtn: eui.Button;
        /*
         * 使用说明按钮.
         */ 
        private instructionBtn: eui.Button;
        /*
         * 问题回报按钮.
         */ 
        private problemReportBtn: eui.Button;
        /*
         * 音效开关单选框
         */ 
        private soundEffectBtn: eui.ToggleSwitch;
        /*
         * 音效开关状态
         */ 
        private isSound:number;
        public constructor(_uiLayer?: eui.UILayer,_onCallBack?: Function) {
            super();
            this.skinName = "View.SettingMsgView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
        }
		
        protected createChildren() {
            super.createChildren();
//            by fangchao
            if(egret.localStorage.getItem("state")) {
                this.soundEffectBtn.currentState = egret.localStorage.getItem("state")
            } else {
                this.soundEffectBtn.currentState = "downAndSelected";
            }
            console.log(Model.WebValue.isSound);
             console.log("方超在此                  "+egret.localStorage.getItem("state")) 
            this.soundEffectBtn.addEventListener(egret.Event.CHANGE,() => {
                if(Model.WebValue.isSound ) {
                    this.soundEffectBtn.currentState ="up";
                    Model.WebValue.isSound = false;
                } else { 
                    this.soundEffectBtn.currentState = "downAndSelected";
                    Model.WebValue.isSound = true;
                }
                egret.localStorage.setItem("state",this.soundEffectBtn.currentState);
                var result = Model.WebValue.isSound ? "on" : "off";
                egret.localStorage.setItem("sound",result)
                },this)
            this.instructionBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => { 
                alert("此功能暂未开放,敬请期待 ! ");
                },this);
            this.problemReportBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => { 
                alert("此功能暂未开放,敬请期待 ! ");
                },this);
            var hlTween = egret.Tween.get(this.settingRectGroup);
            hlTween.to({ scaleX: 1,scaleY: 1 },300,egret.Ease.circIn);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => { 
                this.onClose();
                },this);
        }
        
        private onClose() {
            if(this.onCallBack != null) {
                this.onCallBack();
            }
            var hlTween = egret.Tween.get(this.settingRectGroup);
            hlTween.to({ scaleX: 0,scaleY: 0 },300,egret.Ease.circIn).call(() => {
                this.uiLayer.removeChild(this);
            });
        }
	}
}

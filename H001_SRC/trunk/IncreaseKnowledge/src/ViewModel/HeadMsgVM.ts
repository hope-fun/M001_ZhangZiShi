module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class HeadMsgVM extends eui.Component{
    	
        private uiLayer: eui.UILayer;
        private onCallBack: Function;
        
        private headListGroup: eui.Group;
        
        private sagittariusBtn: ViewModel.HeadItemVM;
        private leoBtn: ViewModel.HeadItemVM;
        private ariesBtn: ViewModel.HeadItemVM;
        private scorpioBtn: ViewModel.HeadItemVM;
        private libraBtn: ViewModel.HeadItemVM;
        private cancerBtn: ViewModel.HeadItemVM;
        private taurusBtn: ViewModel.HeadItemVM;
        private geminiBtn: ViewModel.HeadItemVM;
        private capricornBtn: ViewModel.HeadItemVM;
        private virgoBtn: ViewModel.HeadItemVM;
        private piscesBtn: ViewModel.HeadItemVM;
        private aquariusBtn: ViewModel.HeadItemVM;
        
        private cancelBtn: eui.Button;

		public constructor(_uiLayer?:eui.UILayer,_onCallBack?:Function) {
            super();
            this.skinName = "View.HeadMsgView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChild(this);
		}
		
        protected createChildren() {
            super.createChildren();
            var hlTween = egret.Tween.get(this.headListGroup);
            hlTween.to({ scaleX: 1,scaleY: 1 },300,egret.Ease.circIn);
            this.sagittariusBtn.headBtn.source = "01";
            this.sagittariusBtn.headBg.source = "hong";
            this.sagittariusBtn.onCallBack = () => { this.onClose(); };
            this.leoBtn.headBtn.source = "05";
            this.leoBtn.headBg.source = "hong";
            this.leoBtn.onCallBack = () => { this.onClose(); };
            this.ariesBtn.headBtn.source = "09";
            this.ariesBtn.headBg.source = "hong";
            this.ariesBtn.onCallBack = () => { this.onClose(); };
            this.scorpioBtn.headBtn.source = "02";
            this.scorpioBtn.headBg.source = "huang";
            this.scorpioBtn.onCallBack = () => { this.onClose(); };
            this.libraBtn.headBtn.source = "06";
            this.libraBtn.headBg.source = "huang";
            this.libraBtn.onCallBack = () => { this.onClose(); };
            this.cancerBtn.headBtn.source = "10";
            this.cancerBtn.headBg.source = "huang";
            this.cancerBtn.onCallBack = () => { this.onClose(); };
            this.taurusBtn.headBtn.source = "03";
            this.taurusBtn.headBg.source = "lan";
            this.taurusBtn.onCallBack = () => { this.onClose(); };
            this.geminiBtn.headBtn.source = "07";
            this.geminiBtn.headBg.source = "lan";
            this.geminiBtn.onCallBack = () => { this.onClose(); };
            this.capricornBtn.headBtn.source = "11";
            this.capricornBtn.headBg.source = "lan";
            this.capricornBtn.onCallBack = () => { this.onClose(); };
            this.virgoBtn.headBtn.source = "04";
            this.virgoBtn.headBg.source = "zi";
            this.virgoBtn.onCallBack = () => { this.onClose(); };
            this.piscesBtn.headBtn.source = "08";
            this.piscesBtn.headBg.source = "zi";
            this.piscesBtn.onCallBack = () => { this.onClose(); };
            this.aquariusBtn.headBtn.source = "12";
            this.aquariusBtn.headBg.source = "zi";
            this.aquariusBtn.onCallBack = () => { this.onClose(); };
            
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => { 
                this.onClose();
                },this);
        }
        
        private onClose() { 
            if(this.onCallBack != null) { 
                this.onCallBack();
            }
            var hlTween = egret.Tween.get(this.headListGroup);
            hlTween.to({ scaleX: 0,scaleY: 0 },300,egret.Ease.circIn).call(() => {
                this.uiLayer.removeChild(this);
            });
        }
	}
}

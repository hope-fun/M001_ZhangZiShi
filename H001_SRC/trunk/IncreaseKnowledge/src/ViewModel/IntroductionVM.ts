module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
    export class IntroductionVM extends eui.Component {
        public constructor(_uiLayer?: eui.UILayer) {
            super();
            this.uiLayer = _uiLayer;
            this.skinName = "View.IntroductionView";
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStageClick,this);
            this.uiLayer.addChildAt(this,3);
        }
        private onStageClick() {
            this.scene++;
            if(this.scene == 4) { 
                this.uiLayer.removeChild(this);
                return;
                };
            this.background.source = "introduction" + this.scene;
        }
        private scene: number = 1;
        private uiLayer: eui.UILayer;
        private uiGroup: eui.Group;
        private onCallBack: Function;
        private background: eui.Image;
        protected createChildren() {
            super.createChildren();
        }
    }

}
module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
    export class LevelUpVM extends eui.Component {
        public constructor(name?: string,_uiLayer?: eui.UILayer) {
            super();
            this.uiLayer = _uiLayer;
            this.skinName = "View.LevelUpView";
            this.levelupName.text = name;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                this.uiLayer.removeChild(this);
            },this);
            var tween = egret.Tween.get(this.light,{ loop: true });
            tween.to({ alpha: 1 },1200,egret.Ease.sineIn).to({ alpha: 0.5 },1200,egret.Ease.sineIn);
            this.uiLayer.addChild(this);
        }

        private uiLayer: eui.UILayer;
        private uiGroup: eui.Group;
        private onCallBack: Function;
        private light: eui.Image;
        private levelupName: eui.Label;

        protected createChildren() {
            super.createChildren();
        }
    }
	
}

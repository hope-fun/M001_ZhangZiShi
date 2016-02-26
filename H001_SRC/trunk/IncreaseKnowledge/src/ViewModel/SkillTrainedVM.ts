module ViewModel {

    /**
     *
     * @author cai_haotian 2015.12.15.
     *
     */
    export class SkillTrainedVM extends eui.Component{
        public constructor(imgid?:string,name?:string,detail?:string,_uiLayer?: eui.UILayer) {
            super();
            this.uiLayer = _uiLayer;
            this.skinName = "View.SkillTrainedView";
            this.skillName.text=name;
            this.skillDetail.text = detail;
            this.skillImg.source = imgid;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                this.uiLayer.removeChild(this);
            },this);
            var tween = egret.Tween.get(this.light,{loop:true});
            tween.to({ alpha: 1 },1200,egret.Ease.sineIn).to({ alpha: 0.5 },1200,egret.Ease.sineIn);
            this.uiLayer.addChild(this);
        }
        
        private uiLayer: eui.UILayer;
        private uiGroup: eui.Group;
        private onCallBack: Function;
        private light: eui.Image;
        private skillImg: eui.Image;
        private skillName: eui.Label;
        private skillDetail: eui.Label;
        
        protected createChildren() { 
            super.createChildren();
        }
    }
}
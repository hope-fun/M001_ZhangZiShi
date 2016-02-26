module ViewModel { 
    /**
     *
     * @author by cai_haotian 2015.12.17.
     *
     */
    export class SkillSpeedUpVM extends eui.Component{
        public constructor(_uiLayer?: eui.UILayer,_askill?:Model.SkillModel,_onCallBack?:Function) {
            super();
            this.uiLayer = _uiLayer;
            this.skinName = "View.SkillSpeedUpView";
            this.uiLayer.addChild(this);
            this._sModel = _askill;
            console.log("cai_haotian askill" + JSON.stringify(_askill));
            this.initDetail();
            this.use.addEventListener(egret.TouchEvent.TOUCH_BEGIN,() => { 
                    _onCallBack();
            },this);
            this.use.addEventListener(egret.TouchEvent.TOUCH_END,() => {
                this.uiLayer.removeChild(this);
            },this);
        }
        
        private _sModel: Model.SkillModel;
        private uiLayer: eui.UILayer;
        private skillLeftTime: eui.Label;
        private skillName: eui.Label;
        private diamond: eui.Label;
        private skillDetail: eui.Label;
        private noNeed: eui.Button;
        private use: eui.Button;
        private onCallBack: Function;
        
        protected createChildren() {
            super.createChildren();
            
            this.noNeed.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    this.uiLayer.removeChild(this);
            },this);

        }
        
        //初始化界面数据
        private initDetail() {
            egret.clearInterval(timer2);
            this.skillName.text = this._sModel.name + " LV." + this._sModel.level;
            this.diamond.text = this._sModel.speedCost.toString();
            this.skillDetail.text = this._sModel.des;
            var leftTime = this._sModel.leftDuring;
            var during = this._sModel.during;
            var time = during - leftTime;
            var timeSpan: Model.TimeSpan = Model.TimeSpan.FromSeconds(time);
            this.skillLeftTime.text = timeSpan.toString();
            var timer2: number = egret.setInterval(function() {
                if(leftTime == during) {
                    egret.clearInterval(timer2);
                    return;
                }
                leftTime++;
                time = during - leftTime;
                timeSpan = Model.TimeSpan.FromSeconds(time);
                this.skillLeftTime.text = timeSpan.toString();
            },this,1010);
        }
    }
}
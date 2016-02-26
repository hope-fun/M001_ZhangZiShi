module ViewModel {
    /**
     *
     * @author 
     *
     */
    export class ErrorMsgVM extends eui.Component{
        public constructor(_uiLayer?:eui.UILayer,msg?:string,cancel?:Function,yes?:Function) {
            super();
            this.skinName = "View.ErrorMsgView";
            this.uiLayer = _uiLayer;
            this.errorMsg.text = msg;
            this.uiLayer.addChild(this);
            this.Yes.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                this.uiLayer.removeChild(this);
            },this);
        }
        
        private uiLayer: eui.UILayer;
        private errorMsg: eui.Label;
        private Yes: eui.Button;
        
        protected createChildren() { 
            super.createChildren();
        }
    }
}
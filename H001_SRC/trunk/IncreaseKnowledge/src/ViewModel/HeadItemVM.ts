module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class HeadItemVM extends eui.Component{
    	
        public headBg: eui.Image;
        public headBtn: eui.Image;
        public headMask: eui.Image;
        public onCallBack: Function;
        
        public headBgSource: string;
        public headBtnSource: string;
    	
        public constructor(_headBg?:any,_headBtn?:any) {
            super();
            this.skinName = "View.HeadItemView";
        }

        protected createChildren() {
            super.createChildren();
            this.headMask.touchEnabled = false;
            //这边点击才会改头像，整套控件写的不是太好，有机会会改的.
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,() => {
                this.headMask.visible = true;
                egret.localStorage.setItem("headBtn",String(this.headBtn.source));
                egret.localStorage.setItem("headBg",this.headBg.source.toString());
            },this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                if(this.onCallBack != null) {
                    this.onCallBack();
                }
            },this);
            this.addEventListener(egret.TouchEvent.TOUCH_END,() => {
                this.headMask.visible = false;
            },this);
        }
	}
}

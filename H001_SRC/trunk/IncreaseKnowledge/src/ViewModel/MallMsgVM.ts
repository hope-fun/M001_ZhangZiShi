module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class MallMsgVM extends eui.Component{
        private uiLayer: eui.UILayer;
        private onCallBack: Function;
    	  
        private cancelBtn: eui.Button;
        private type:string="";
        private mallTitle: eui.Label;
        private iconImage: eui.Image;
        
        //goodsGroup01
        private goodsGroup01: eui.Group;
        private goodsIcon01: eui.Image;
        private goodsLabel01: eui.Label;
        private priceLabel01: eui.Label;
        
        //goodsGroup02
        private goodsGroup02: eui.Group;
        private goodsIcon02: eui.Image;
        private goodsLabel02: eui.Label;
        private priceLabel02: eui.Label;
        
        //goodsGroup03
        private goodsGroup03: eui.Group;
        private goodsIcon03: eui.Image;
        private goodsLabel03: eui.Label;
        private priceLabel03: eui.Label;
        
        //goodsGroup04
        private goodsGroup04: eui.Group;
        private goodsIcon04: eui.Image;
        private goodsLabel04: eui.Label;
        private priceLabel04: eui.Label;
        
        /*
         * _type:GCOIN,DIAMOND
         */ 
        public constructor(_uiLayer :eui.UILayer,_type:string,_onCallBack ?: Function) {
            super();
            this.skinName = "View.MallMsgView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.type = _type;
            this.uiLayer.addChild(this);
            Model.DataEyeService.onOpenMall();
		}
		
        protected createChildren() {
            super.createChildren();
            var mData = Model.WebValue.mallM;
            this.mallTitle.text = String(mData.goodsModelList[0].name+"商店");
            this.priceLabel01.text = String("RMB " + mData.goodsModelList[0].price);
            this.priceLabel02.text = String("RMB " + mData.goodsModelList[1].price);
            this.priceLabel03.text = String("RMB " + mData.goodsModelList[2].price);
            this.priceLabel04.text = String("RMB " + mData.goodsModelList[3].price);
            if(this.type == "GCOIN") {
                this.iconImage.source = "icon_jinbi";
                this.iconImage.width = 77.4;
                this.iconImage.height= 79.2;
                this.goodsIcon01.source = "icon_jinbi";
                this.goodsIcon02.source = "icon_jinbi";
                this.goodsIcon03.source = "icon_jinbi";
                this.goodsIcon04.source = "icon_jinbi";
                this.goodsLabel01.text = String("购买" + mData.goodsModelList[0].count + "金币");
                this.goodsLabel02.text = String("购买" + mData.goodsModelList[1].count + "金币");
                this.goodsLabel03.text = String("购买" + mData.goodsModelList[2].count + "金币");
                this.goodsLabel04.text = String("购买" + mData.goodsModelList[3].count + "金币");
                this.goodsIcon01.width = 43;
                this.goodsIcon01.height = 44;
                this.goodsIcon02.width = 43;
                this.goodsIcon02.height = 44;
                this.goodsIcon03.width = 43;
                this.goodsIcon03.height = 44;
                this.goodsIcon04.width = 43;
                this.goodsIcon04.height = 44;
            } else if(this.type == "DIAMOND") {
                this.iconImage.source = "icon_zuan";
                this.iconImage.width = 99.0;
                this.iconImage.height = 75.6;
                this.goodsIcon01.source = "icon_zuan";
                this.goodsIcon02.source = "icon_zuan";
                this.goodsIcon03.source = "icon_zuan";
                this.goodsIcon04.source = "icon_zuan";
                this.goodsLabel01.text = String("购买" + mData.goodsModelList[0].count + "粒宝石");
                this.goodsLabel02.text = String("购买" + mData.goodsModelList[1].count + "粒宝石");
                this.goodsLabel03.text = String("购买" + mData.goodsModelList[2].count + "粒宝石");
                this.goodsLabel04.text = String("购买" + mData.goodsModelList[3].count + "粒宝石");
                this.goodsIcon01.width = 55;
                this.goodsIcon01.height = 42;
                this.goodsIcon02.width = 55;
                this.goodsIcon02.height = 42;
                this.goodsIcon03.width = 55;
                this.goodsIcon03.height = 42;
                this.goodsIcon04.width = 55;
                this.goodsIcon04.height = 42;
            } else {
                alert("系统维护中，暂时无法充值!");
            }
            
            if(Model.Tools.getURLParam("channel") === "") {
                alert("当前平台非法,无法充值!");
                this.goodsGroup01.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[0];
                    //                    gData.price = 0.01;TODO:测试用.
                    console.log("zhujun " + JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price); //
                    //                    if(this.onCallBack != null) { //TODO:这边回调要等三方回调.
                    //                        this.onCallBack(gData.count);    
                    //                    }
                },this);
                this.goodsGroup02.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[1];
                    //                    alert(JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price);
                },this);
                this.goodsGroup03.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[2];
                    //                    alert(JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price);
                },this);
                this.goodsGroup04.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[3];
                    //                    alert(JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price);
                },this);
            } else { //如果有渠道则进入SDKService处理业务.
                this.goodsGroup01.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[0];
//                    gData.price = 0.01;TODO:测试用.
                    console.log("zhujun "+ JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price); //
//                    if(this.onCallBack != null) { //TODO:这边回调要等三方回调.
//                        this.onCallBack(gData.count);    
//                    }
                },this);
                this.goodsGroup02.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[1];
//                    alert(JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price);
                },this);
                this.goodsGroup03.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[2];
//                    alert(JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price);
                },this);
                this.goodsGroup04.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    var gData = mData.goodsModelList[3];
//                    alert(JSON.stringify(gData));
                    Model.SDKService.initPay(gData.goodsId.toString(),gData.name,gData.price);
                },this);
            }
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => { 
                this.uiLayer.removeChild(this);
                Model.DataEyeService.onCloseMall();
            },this);
            
        }
        
        
	}
}
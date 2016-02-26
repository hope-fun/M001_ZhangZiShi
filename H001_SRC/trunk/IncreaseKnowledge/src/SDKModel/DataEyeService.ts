module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class DataEyeService {
		public constructor() {
		}

		/**
		 * @初始化DataEye.
		 */ 
        public static init(_accountId:string,_channel:string): void {
            var agentConfig: DCAgentConfig = {
                appName: WebValue.appName,
                appId: "CF2AE1D27E276445E74E9440FF1C52B69",        
                appVersion: WebValue.appVer,
                channel: _channel,
                uid: _accountId,
                errorReport:true
            };
            DCAgent.init(agentConfig);
        }
        
        /**
         * @登陆统计.
         */ 
        public static login(_nickName:string){
            DCAgent.login(_nickName);
        }
        
        /**
         * @打开商城.
         */ 
        public static onOpenMall(){
            DCAgent.onEvent("OpenMall");
        }
        
        /**
         * @关闭商城.
         */ 
        public static onCloseMall(){
            DCAgent.onEvent("CloseMall");
        }
        
        /**
         * @支付统计.
         */ 
        public static onPayment(_id:string,_name:string,_price:number,_channel:number){
            var payConfig : DCAgentPaymentConfig = {
                amount : 1,
                currencyType : _name,
                payType : String("CNY: " + _price),
                iapid : _id,
                orderId : String("渠道号: " + _channel)
            };
//            payConfig.amount = 1;
//            payConfig.currencyType = _name;
//            payConfig.payType = String("CNY: "+_price);
//            payConfig.iapid = _id;
//            payConfig.orderId = String("渠道号: " + _channel);
            DCAgent.onPayment(payConfig);
        }
	}
}

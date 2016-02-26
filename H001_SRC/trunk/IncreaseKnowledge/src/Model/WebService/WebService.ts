module Model {
	/**
	 *
	 * @author 
	 * http://www.luckywings.net/game/h005/?channel=3
	 * http://www.luckywings.net/game/h005/?channel=5
	 * http://www.play68.com/play/ly_axb
	 * appid:656
     * 爱学霸
     * key:b92ababa363be1e416db0ace8f16fe33
	 */
    export class WebService{
////        zhao chao 
//        private static loginUrl: string = "http://10.20.20.1:8080/h005-login-service/mobiapi/1/";
//        private static logicUrl: string = "http://10.20.20.1:8080/h005-logical-service/mobiapi/1/";
        
    	//www.luckywings.net/game/h005?channel=3
//        private static loginUrl: string = "http://120.26.53.158:8082/h005-login-service/mobiapi/1/";  
//        private static logicUrl: string = "http://120.26.53.158:8082/h005-logical-service/mobiapi/1/";  
        
        //http://www.luckywings.com.tw/game/h005?channel=3
        //http://www.luckywings.com.tw:8082/
//        private static loginUrl: string = "http://www.luckywings.com.tw:8082/h005-login-service/mobiapi/1/";
//        private static logicUrl: string = "http://www.luckywings.com.tw:8082/h005-logical-service/mobiapi/1/";  

        /**
         * @国服登陆地址.
         */ 
        public static loginUrl: string = "http://www.luckywings.net/api/h005/login/";
        /**
         * @国服业务地址.
         */ 
        public static logicUrl: string = "http://www.luckywings.net/api/h005/logical/";
        
        /**
         * @张远地址
         */ 
//        public static loginUrl: string = "http://10.20.20.35:8081/h005-login-service/mobiapi/1/";
//        public static logicUrl: string = "http://10.20.20.35:8081/h005-logical-service/mobiapi/1/";
        
        //tao jian
//        private static loginUrl: string = "http://10.20.20.16:8080/h004-login-service/mobiapi/1/";
//        private static logicUrl: string = "http://10.20.20.1:8082/h005-logical-service/mobiapi/1/";
    	
        public static webServiceHeader: string; 
        
        private static onCompleteBack: Function;
        private static onErrorBack: Function;
        private static onProgressBack: Function;
        
		public constructor() {
            WebService.initHeader("h005");
		}
		
        private static initHeader(token: string) {
            this.webServiceHeader = token;
        }
		
        private static changeHeader(token: string){
            if(this.webServiceHeader != "" && this.webServiceHeader != token) {
                this.webServiceHeader = token;
            } else { 
                console.log("zhujun: webServerHeader is no change ! ");
            }
        }
        
		
        /*
         * 登陆接口.
         */ 
        public static userLogin(_accountM: AccountModel,_onCompleteBack?:Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.loginUrl + "user/login",egret.HttpMethod.POST);
            var hash: HashMap = new HashMap();
            hash.Set("thirdAccountId",_accountM.thirdAccountId);
            hash.Set("id",_accountM.id);
            hash.Set("time",_accountM.time);
            hash.Set("platform",_accountM.platform);
            hash.Set("sign",_accountM.sign);
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send(JSON.stringify(hash));
        }
        
        /*
         * 菜单数据.
         */ 
        public static menuData(_onCompleteBack?: Function) { 
            if(Model.WebValue.isDebug) console.log("cai_haotian token: "+this.webServiceHeader);
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "menu/data",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send();
        }
        
        /*
         * 领取银行钱币.
         */ 
        public static drawMoney(_onCompleteBack?:Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "draw/money",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send();
        }
        
        /*
         * 技能训练.by cai_haotian 2015.12.10.
         */
        public static skillTraining(skilld: number,_onCompleteBack?: Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "skill/training",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            var hash: any = new HashMap();
            hash.Set("skillId",skilld);//by cai_haotian 2015.12.10.
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send(JSON.stringify(hash));
        }
        
        /*
         * 技能加速.
         */ 
        public static skillSpeedUp(skilld: number,_onCompleteBack?: Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "skill/speedUp",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            var hash: any = new HashMap();
            hash.Set("skillId",skilld);//by cai_haotian 2015.12.18.
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send(JSON.stringify(hash));
        }

        /*
         * 技能升级完成后重新获得数据by cai_haotian 2015.12.14.
         */
        public static skillTrained(skillId: number,_onCompleteBack?: Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "skill/trained",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            var hash: any = new HashMap();
            hash.Set("skillId",skillId);
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send(JSON.stringify(hash));
        }

        /*
         * 获取商城数据.
         */ 
        public static mallData(type: string,_onCompleteBack?:Function) { 
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "mall/data",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            var hash: any = new HashMap();
            hash.Set("type",type);
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send(JSON.stringify(hash));
        }
        
        /*
         * 游戏数据.
         */ 
        public static gameData(_id?:string,_onCompleteBack?:Function) { 
            console.log("zhujun: game data id is " + _id);
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "game/data",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            var hash: any = new HashMap();
            hash.Set("id",_id);
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send(JSON.stringify(hash));
        }
        
        /*
         * 游戏账号.
         */ 
        //            by fangchao 2015.12.11
        public static gameAccount(_sceneId:string,_isWin:boolean,_maxAnswer:number,_correctTimes:number,_onCompleteBack?: Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(this.logicUrl + "game/account",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",this.webServiceHeader);
            var hash: HashMap = new HashMap();
            hash.Set("sceneId",_sceneId);
            hash.Set("isWin",_isWin);
            hash.Set("maxAnswer",_maxAnswer);
//            by fangchao 2015.12.11
            hash.Set("correctTimes",_correctTimes);
            request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
            request.send(JSON.stringify(hash));
        }
        
        /**
         * @post请求完成.
         */ 
        private static onPostComplete(event: egret.Event): void {
            var request = <egret.HttpRequest>event.currentTarget;
            if(WebValue.isDebug) console.log("post data : ",request.response);
            this.changeHeader(request.getResponseHeader("USER-TOKEN"));
            if(WebValue.isDebug) console.log("test: get token " + request.getResponseHeader("USER-TOKEN"));
            if(this.onCompleteBack != null) { 
                this.onCompleteBack(request);
//                this.onCompleteBack = null;
            }
        }

        /**
         * @系统失败回调用.
         */ 
        private static onPostIOError(event: egret.IOErrorEvent): void {
             console.log("post error : " + event);
             if(WebValue.isDebug) console.log("post error data : " + event.data);
            alert("当前浏览器存在系统缺陷，请更换浏览器尝试哦 ! ");
            if(this.onErrorBack != null) { 
                this.onErrorBack();
//                this.onErrorBack = null;
            }
        }

        private static onPostProgress(event: egret.ProgressEvent): void {
            console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
            if(this.onProgressBack != null) { 
                this.onProgressBack();
//                this.onProgressBack = null;
            }
        }
        
	}
}

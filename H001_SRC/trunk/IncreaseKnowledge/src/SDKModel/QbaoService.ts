

module Model {
	/**
	 *
	 * @author cai_haotian 2016.1.7.
	 * http://www.luckywings.net/game/h005/?channel=3
	 * Qbao
     * 爱学霸
     * appid: 1791002
     * appkey: 6bd1bbb10fab7e58a8797aaa348c41c3
	 */
    export class QbaoService {
        private static Qbaokey: string = "6bd1bbb10fab7e58a8797aaa348c41c3";
        private static onCompleteBack: Function;
        public constructor() {
        }
		
		/*
		 * 获取Qbao游戏基本信息.
		 */
        public static assignmentQbaoModel() {
            var paramKey = ["channel","userId"];
            paramKey.sort();
            var hash: any = new HashMap();
            hash.Set(paramKey[0],Tools.getURLParam(paramKey[0]));
            hash.Set(paramKey[1],Tools.getURLParam(paramKey[1]));
            QbaoValue.QbaoModel = hash;
            var md5: Model.MD5 = new Model.MD5();
            var localSign = md5.hex_md5(String(hash.Get(paramKey[0]) + hash.Get(paramKey[1]) + QbaoService.Qbaokey));
            WebValue.accountM.id = QbaoValue.QbaoModel.userId;
            WebValue.accountM.thirdAccountId = QbaoValue.QbaoModel.userId;
            WebValue.accountM.platform = QbaoValue.QbaoModel.channel;
        }
        
        /**
         * @钱宝登陆校验接口 
         * by cai_haotian 2016.1.7.
         */
        public static QbaoUserCheck(userid?: number,token?: string,_onCompleteBack?: Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open("http://www.eyuelan.com/i5you/user/check/?userid=" + userid + "&token=" + token,egret.HttpMethod.GET);
            request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
            request.send();
        }
        
        /**
         * @钱宝支付地址
         * by cai_haotian 2015.1.7.
         */
        public static QbaoPay(channelId?: string,itemId?: string,itemName?: string,_onCompleteBack?: Function) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(Model.WebService.logicUrl + "pay/index",egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN",Model.WebService.webServiceHeader);
            var hash: HashMap = new HashMap();
            hash.Set("channelId",channelId);
            hash.Set("itemId",itemId);
            hash.Set("itemName",itemName);
            console.log("cai_haotian send channelId: "+channelId);
            console.log("cai_haotian send itemName: " + itemId);
            console.log("cai_haotian send itemName: " + itemName);
            console.log("cai_haotian send JSON :" + JSON.stringify(hash));
            request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
            request.send(JSON.stringify(hash));
        }
        
        /**
         * @钱宝get回调函数
         */

        private static onGetComplete(event: egret.Event):void {
            var request = <egret.HttpRequest>event.currentTarget;
            console.log("cai_haotian Qbao connect success");
            if(this.onCompleteBack != null) {
                this.onCompleteBack(request);
//                this.onCompleteBack = null;
            }
        }
        
        /**
         * @钱宝get错误
         */
        private static onGetIOError(event: egret.IOErrorEvent):void {
            console.log("post error : " + event);
            console.log("post error data : " + event.data);
            alert("CHT 当前浏览器存在系统缺陷，请更换浏览器尝试哦 ! ");
            console.log("cai_haotian Qbao login fail !!!!!!!");
        }
        
        /**
         * @钱宝进程
         */
        private static onGetProgress(event: egret.ProgressEvent):void {
            console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        }
        
        
    }
}

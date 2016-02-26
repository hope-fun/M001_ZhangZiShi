var Model;
(function (Model) {
    /**
     *
     * @author cai_haotian 2016.1.7.
     * http://www.luckywings.net/game/h005/?channel=3
     * Qbao
     * 爱学霸
     * appid: 1791002
     * appkey: 6bd1bbb10fab7e58a8797aaa348c41c3
     */
    var QbaoService = (function () {
        function QbaoService() {
        }
        var d = __define,c=QbaoService,p=c.prototype;
        /*
         * 获取Qbao游戏基本信息.
         */
        QbaoService.assignmentQbaoModel = function () {
            var paramKey = ["channel", "userId"];
            paramKey.sort();
            var hash = new Model.HashMap();
            hash.Set(paramKey[0], Model.Tools.getURLParam(paramKey[0]));
            hash.Set(paramKey[1], Model.Tools.getURLParam(paramKey[1]));
            Model.QbaoValue.QbaoModel = hash;
            var md5 = new Model.MD5();
            var localSign = md5.hex_md5(String(hash.Get(paramKey[0]) + hash.Get(paramKey[1]) + QbaoService.Qbaokey));
            Model.WebValue.accountM.id = Model.QbaoValue.QbaoModel.userId;
            Model.WebValue.accountM.thirdAccountId = Model.QbaoValue.QbaoModel.userId;
            Model.WebValue.accountM.platform = Model.QbaoValue.QbaoModel.channel;
        };
        /**
         * @钱宝登陆校验接口
         * by cai_haotian 2016.1.7.
         */
        QbaoService.QbaoUserCheck = function (userid, token, _onCompleteBack) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open("http://www.eyuelan.com/i5you/user/check/?userid=" + userid + "&token=" + token, egret.HttpMethod.GET);
            request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
            request.send();
        };
        /**
         * @钱宝支付地址
         * by cai_haotian 2015.1.7.
         */
        QbaoService.QbaoPay = function (channelId, itemId, itemName, _onCompleteBack) {
            this.onCompleteBack = _onCompleteBack;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(Model.WebService.logicUrl + "pay/index", egret.HttpMethod.POST);
            request.setRequestHeader("USER-TOKEN", Model.WebService.webServiceHeader);
            var hash = new Model.HashMap();
            hash.Set("channelId", channelId);
            hash.Set("itemId", itemId);
            hash.Set("itemName", itemName);
            console.log("cai_haotian send channelId: " + channelId);
            console.log("cai_haotian send itemName: " + itemId);
            console.log("cai_haotian send itemName: " + itemName);
            console.log("cai_haotian send JSON :" + JSON.stringify(hash));
            request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
            request.send(JSON.stringify(hash));
        };
        /**
         * @钱宝get回调函数
         */
        QbaoService.onGetComplete = function (event) {
            var request = event.currentTarget;
            console.log("cai_haotian Qbao connect success");
            if (this.onCompleteBack != null) {
                this.onCompleteBack(request);
            }
        };
        /**
         * @钱宝get错误
         */
        QbaoService.onGetIOError = function (event) {
            console.log("post error : " + event);
            console.log("post error data : " + event.data);
            alert("CHT 当前浏览器存在系统缺陷，请更换浏览器尝试哦 ! ");
            console.log("cai_haotian Qbao login fail !!!!!!!");
        };
        /**
         * @钱宝进程
         */
        QbaoService.onGetProgress = function (event) {
            console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        };
        QbaoService.Qbaokey = "6bd1bbb10fab7e58a8797aaa348c41c3";
        return QbaoService;
    })();
    Model.QbaoService = QbaoService;
    egret.registerClass(QbaoService,'Model.QbaoService');
})(Model || (Model = {}));

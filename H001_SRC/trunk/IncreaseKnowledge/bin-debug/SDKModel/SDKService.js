var Model;
(function (Model) {
    /**
     *
     * @author
     * http://www.luckywings.net/game/h005/?channel=3
     * http://www.play68.com/play/ly_axb
     * http://www.luckywings.net/game/h005/?channel=5&userid=0&token=2cb10c5adcd6cfd1f03e52fc3932625f
     * 爱学霸
     * 68Player
     * appid:656
     * key:b92ababa363be1e416db0ace8f16fe33
     *
     * Qbao
     * appid: 1791002
     * appkey: 6bd1bbb10fab7e58a8797aaa348c41c3
     */
    var SDKService = (function () {
        function SDKService() {
        }
        var d = __define,c=SDKService,p=c.prototype;
        /**
         * @初始化平台sdk，区分平台.
         */
        SDKService.initSDK = function (_onCallBack) {
            if (Model.Tools.getURLParam("channel") == "3") {
                Model.Play68Service.assignmentPlay68Model(); //构造account参数.
                _onCallBack(); //call back直接用参数登陆.
                Model.DataEyeService.init(Model.WebValue.accountM.id, "3");
            }
            else if (Model.Tools.getURLParam("channel") == "5") {
                var userid = Model.Tools.getURLParam("userid");
                var token = Model.Tools.getURLParam("token");
                Model.QbaoService.QbaoUserCheck(Number(userid), token, function (_requset) {
                    if (JSON.parse(_requset.response).result == "success") {
                        console.log("cai_haotian Qbao response" + JSON.stringify(_requset.response));
                        Model.QbaoService.assignmentQbaoModel(); //构造acount参数
                        _onCallBack(); //call back直接用参数登陆.
                        Model.DataEyeService.init(Model.WebValue.accountM.id, "5");
                        console.log("cai_haotian login success!!!!!!!!");
                    }
                    else {
                        alert("非法登陆！！");
                    }
                });
            }
            else {
                Model.DataEyeService.init(Model.WebValue.accountM.id, "888"); //无sdk,直接初始化sdk.
                alert("当前平台非法,请勿充值!");
            }
        };
        /**
         * @sdk支付初始化.
         */
        SDKService.initPay = function (_itemId, _itemName, _price, _onCallBack) {
            if (Model.Tools.getURLParam("channel") == "3") {
                Play68.pay(_itemId, _itemName, _price, 1);
                Model.DataEyeService.onPayment(_itemId, _itemName, _price, 3);
            }
            else if (Model.Tools.getURLParam("channel") == "5") {
                console.log("cai_haotian itemid : " + _itemId);
                console.log("cai_haotian itemName : " + _itemName);
                Model.QbaoService.QbaoPay("5", _itemId, _itemName, function (_request) {
                    console.log("cai_haotian Qbao response" + JSON.stringify(_request.response));
                    if (JSON.parse(_request.response).checkOutUrl) {
                        location.href = JSON.parse(_request.response).checkOutUrl;
                        console.log("cai_haotian1 cp交易流水号" + JSON.parse(_request.response).outTradeCode);
                        console.log("cai_haotian1 qb交易流水号" + JSON.parse(_request.response).qbTradeCode);
                        Model.DataEyeService.onPayment(_itemId, _itemName, _price, 5);
                    }
                    else {
                        alert("交易出错！！");
                        console.log("cai_haotian2 cp交易流水号" + JSON.parse(_request.response).outTradeCode);
                        console.log("cai_haotian2 qb交易流水号" + JSON.parse(_request.response).qbTradeCode);
                    }
                });
            }
            else {
                alert("当前平台非法,请勿充值!");
                Model.DataEyeService.onPayment(_itemId, _itemName, _price, 888);
            }
        };
        return SDKService;
    })();
    Model.SDKService = SDKService;
    egret.registerClass(SDKService,'Model.SDKService');
})(Model || (Model = {}));

var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var DataEyeService = (function () {
        function DataEyeService() {
        }
        var d = __define,c=DataEyeService,p=c.prototype;
        /**
         * @初始化DataEye.
         */
        DataEyeService.init = function (_accountId, _channel) {
            var agentConfig = {
                appName: Model.WebValue.appName,
                appId: "CF2AE1D27E276445E74E9440FF1C52B69",
                appVersion: Model.WebValue.appVer,
                channel: _channel,
                uid: _accountId,
                errorReport: true
            };
            DCAgent.init(agentConfig);
        };
        /**
         * @登陆统计.
         */
        DataEyeService.login = function (_nickName) {
            DCAgent.login(_nickName);
        };
        /**
         * @打开商城.
         */
        DataEyeService.onOpenMall = function () {
            DCAgent.onEvent("OpenMall");
        };
        /**
         * @关闭商城.
         */
        DataEyeService.onCloseMall = function () {
            DCAgent.onEvent("CloseMall");
        };
        /**
         * @支付统计.
         */
        DataEyeService.onPayment = function (_id, _name, _price, _channel) {
            var payConfig = {
                amount: 1,
                currencyType: _name,
                payType: String("CNY: " + _price),
                iapid: _id,
                orderId: String("渠道号: " + _channel)
            };
            //            payConfig.amount = 1;
            //            payConfig.currencyType = _name;
            //            payConfig.payType = String("CNY: "+_price);
            //            payConfig.iapid = _id;
            //            payConfig.orderId = String("渠道号: " + _channel);
            DCAgent.onPayment(payConfig);
        };
        return DataEyeService;
    })();
    Model.DataEyeService = DataEyeService;
    egret.registerClass(DataEyeService,'Model.DataEyeService');
})(Model || (Model = {}));

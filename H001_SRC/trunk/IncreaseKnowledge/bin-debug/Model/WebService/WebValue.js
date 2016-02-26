var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var WebValue = (function () {
        function WebValue() {
        }
        var d = __define,c=WebValue,p=c.prototype;
        WebValue.isDebug = false;
        WebValue.appVer = "v1.0.0";
        WebValue.appName = "爱学霸";
        WebValue.isStartBank = false;
        WebValue.accountM = new Model.AccountModel();
        WebValue.menuDataM = new Model.MenuDataModel();
        WebValue.gameDataM = new Model.GameDataModel();
        WebValue.drawM = new Model.DrawMoneyModel();
        /*
         * 商城数据对象.
         */
        WebValue.mallM = new Model.MallModel();
        /*
         * 结算数据.
         */
        WebValue.settleM = new Model.SettleAccountModel();
        /*
         * 更新数据 by cai_haotian 2015.12.10
         */
        WebValue.skillM = new Model.SkillTrainingModel();
        /*
         * 技能升级后得到的数据 by fangchao 2015.12.20
         */
        WebValue.trainedM = new Model.TrainedModel();
        return WebValue;
    })();
    Model.WebValue = WebValue;
    egret.registerClass(WebValue,'Model.WebValue');
})(Model || (Model = {}));

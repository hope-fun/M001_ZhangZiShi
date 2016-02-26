var Model;
(function (Model) {
    /**
     *
     * @author cai_haotian 2016.1.7.
     * Qbao
     *
     */
    var QbaoModel = (function () {
        function QbaoModel() {
        }
        var d = __define,c=QbaoModel,p=c.prototype;
        return QbaoModel;
    })();
    Model.QbaoModel = QbaoModel;
    egret.registerClass(QbaoModel,'Model.QbaoModel');
    /**
     * @目前似乎没有，以后可能会从钱宝获得
     */
    var QbaoUserInfo = (function () {
        function QbaoUserInfo() {
        }
        var d = __define,c=QbaoUserInfo,p=c.prototype;
        return QbaoUserInfo;
    })();
    Model.QbaoUserInfo = QbaoUserInfo;
    egret.registerClass(QbaoUserInfo,'Model.QbaoUserInfo');
})(Model || (Model = {}));

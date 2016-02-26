var Model;
(function (Model) {
    /**
     *
     * @author cai_haotian 2016.1.7.
     *
     */
    var QbaoValue = (function () {
        function QbaoValue() {
        }
        var d = __define,c=QbaoValue,p=c.prototype;
        QbaoValue.QbaoModel = new Model.QbaoModel();
        QbaoValue.QbaoUserInfo = new Model.QbaoUserInfo();
        return QbaoValue;
    })();
    Model.QbaoValue = QbaoValue;
    egret.registerClass(QbaoValue,'Model.QbaoValue');
})(Model || (Model = {}));

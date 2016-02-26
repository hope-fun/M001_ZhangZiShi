var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var GameDataModel = (function () {
        function GameDataModel() {
            this.enemyModel = new Model.EnemyModel();
        }
        var d = __define,c=GameDataModel,p=c.prototype;
        return GameDataModel;
    })();
    Model.GameDataModel = GameDataModel;
    egret.registerClass(GameDataModel,'Model.GameDataModel');
})(Model || (Model = {}));

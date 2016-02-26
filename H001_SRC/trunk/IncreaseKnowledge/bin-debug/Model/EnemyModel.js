var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var EnemyModel = (function () {
        function EnemyModel() {
        }
        var d = __define,c=EnemyModel,p=c.prototype;
        d(p, "headImage"
            ,function () {
                return Model.Tools.padLeft(String(this.headId), "0", 2);
            }
        );
        d(p, "headBgImage"
            ,function () {
                if (this.headId == 1 || this.headId == 5 || this.headId == 9) {
                    return "hong";
                }
                else if (this.headId == 2 || this.headId == 6 || this.headId == 10) {
                    return "huang";
                }
                else if (this.headId == 3 || this.headId == 7 || this.headId == 11) {
                    return "lan";
                }
                else {
                    return "zi";
                }
            }
        );
        return EnemyModel;
    })();
    Model.EnemyModel = EnemyModel;
    egret.registerClass(EnemyModel,'Model.EnemyModel');
})(Model || (Model = {}));

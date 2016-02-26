var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var Mathf = (function () {
        function Mathf() {
        }
        var d = __define,c=Mathf,p=c.prototype;
        /*
         * Linearly interpolates between a and b by t.
         * The parameter t is clamped to the range [0, 1].
         *When t = 0 returns a.
         *When t = 1 return b.
         *When t = 0.5 returns the midpoint of a and b.
         */
        Mathf.lerp = function (a, b, t) {
            t = t < 0 ? 0 : t;
            t = t > 1 ? 1 : t;
            return a + (b - a) * t;
        };
        /*
         * Clamps a value between a minimum float and maximum float value.
         */
        Mathf.clamp = function (value, min, max) {
            if (value < min) {
                return min;
            }
            else if (value > max) {
                return max;
            }
            else {
                return value;
            }
        };
        return Mathf;
    })();
    Model.Mathf = Mathf;
    egret.registerClass(Mathf,'Model.Mathf');
})(Model || (Model = {}));

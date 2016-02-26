var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var Tools = (function () {
        function Tools() {
        }
        var d = __define,c=Tools,p=c.prototype;
        Tools.guid = function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
        Tools.padLeft = function (str, pad, count) {
            while (str.length < count)
                str = pad + str;
            return str;
        };
        Tools.GetQueryString = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return decodeURI(r[2]);
            return null;
        };
        Tools.getURLParam = function (paramName) {
            var paramValue = "";
            var isFound = false;
            var url = document.location.href;
            var params = document.location.search;
            var reg = new RegExp("\\?", "g");
            params = String("?" + params.substring(1, params.length).replace(reg, "&"));
            if (params.indexOf("?") == 0 && params.indexOf("=") > 1) {
                var arrSource = params.substring(1, params.length).split("&");
                var i = 0;
                while (i < arrSource.length && !isFound) {
                    if (arrSource[i].indexOf("=") > 0) {
                        if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                            paramValue = arrSource[i].split("=")[1];
                            isFound = true;
                        }
                    }
                    i++;
                }
            }
            return paramValue;
        };
        return Tools;
    })();
    Model.Tools = Tools;
    egret.registerClass(Tools,'Model.Tools');
})(Model || (Model = {}));

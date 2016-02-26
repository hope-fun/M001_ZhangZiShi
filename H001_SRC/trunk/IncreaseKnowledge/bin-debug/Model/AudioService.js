var Model;
(function (Model) {
    /**
     *
     * @author
     *
     */
    var AudioService = (function () {
        function AudioService(key, _onCallBack) {
            /*
             * 声音key.
             */
            this.soundKey = "";
            /*
             * 默认播放位置,从头开始.
             */
            this.position = 0;
            /*
             * 默认不循环，设置为负数循环.
             */
            this.loop = 1;
            /*
             * 当前状态0为空，1为播放,2为暂停,3表示加载完成,4表示加载失败.
             */
            this.status = 0;
            //            by fangchao
            if (egret.localStorage.getItem("sound")) {
                Model.WebValue.isSound = egret.localStorage.getItem("sound") === "on" ? true : false;
            }
            else {
                Model.WebValue.isSound = true;
            }
            if (Model.WebValue.isSound) {
                if (key) {
                    this.sound = RES.getRes(key);
                    this.soundChannel = this.sound.play(0, 1);
                    this.soundChannel.addEventListener(egret.Event.SOUND_COMPLETE, function soundComplete(event) {
                        console.log(event);
                        if (_onCallBack != null) {
                            _onCallBack();
                        }
                    }, this);
                }
            }
        }
        var d = __define,c=AudioService,p=c.prototype;
        /*
         * 加载音频.
         */
        p.loadSound = function () {
            this.sound = RES.getRes(this.soundKey);
            //            this.sound.once(egret.Event.COMPLETE,);
        };
        /*
         * 加载音频完成.
         */
        p.loadComplete = function (e) {
            this.status = 3;
            var waring = "加载完成";
            console.log(waring);
            //            this.dis
        };
        /*
         * 加载音频失败.
         */
        p.onLoadErr = function (e) {
            this.status = 4;
            var waring = "加载失败" + this.soundKey;
            console.log(waring);
            //TODO:
        };
        /*
         * 设置url并重新加载.
         */
        p.setKey = function (url) {
            this.soundKey = url;
            this.loadSound();
        };
        /*
         * 获取状态.
         */
        p.looped = function (e) {
            this.position = 0;
            this.status = 0;
            //            this
        };
        /*
         * 获取状态.
         */
        p.getStatus = function () {
            return this.status;
        };
        /*
         * 设置音量.
         */
        p.setVolume = function (volume) {
            if (this.status === 1) {
                this.soundChannel.volume = volume / 100;
            }
        };
        /*
         * 显示播放时间.
         */
        p.showPosition = function () {
            if (this.status === 1) {
                this.position = this.soundChannel.position;
            }
            return this.position;
        };
        p.play = function () {
            if (this.status === 4) {
                this.loadSound();
                return;
            }
            this.status = 1;
            if (this.soundChannel) {
                this.soundChannel.stop();
            }
            console.log(this.position);
            this.soundChannel = this.sound.play(this.position, this.loop);
            console.log(this.status);
        };
        /*
         * 默认一次，<=0循环，大于1传几是几.
         */
        p.setLoop = function (loop) {
            if (loop === void 0) { loop = 1; }
            this.loop = loop;
            if (loop < 0) {
                this.soundChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.looped, this);
            }
            else {
                return loop;
            }
        };
        p.pause = function () {
            console.log(this.status);
            if (this.status === 1) {
                this.position = this.soundChannel.position;
                this.soundChannel.stop();
                this.status = 2;
            }
            return this.position;
        };
        p.resume = function () {
            if (this.status === 2) {
                this.play();
            }
        };
        return AudioService;
    })();
    Model.AudioService = AudioService;
    egret.registerClass(AudioService,'Model.AudioService');
})(Model || (Model = {}));

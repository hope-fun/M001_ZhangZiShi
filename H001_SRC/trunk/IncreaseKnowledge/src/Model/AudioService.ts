module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class AudioService {
    	
        public constructor(key?: string,_onCallBack?: Function) {
//            by fangchao
            if(egret.localStorage.getItem("sound")) {
                Model.WebValue.isSound = egret.localStorage.getItem("sound")==="on"?true:false;
            } else {
                Model.WebValue.isSound = true;
            }
            if(Model.WebValue.isSound) {
                if(key) {
                    this.sound = RES.getRes(key);
                    this.soundChannel = this.sound.play(0,1);
                    this.soundChannel.addEventListener(egret.Event.SOUND_COMPLETE,function soundComplete(event: egret.Event) {
                        console.log(event);
                        if(_onCallBack != null) {
                            _onCallBack();
                        }
                    },this);
                }
            }
        }
		/*
		 * 声音控件.
		 */ 
        private sound: egret.Sound;
		/*
		 * 声音key.
		 */ 
        private soundKey: string = "";
		/*
		 * 声道.
		 */ 
        private soundChannel: egret.SoundChannel;
        /*
         * 默认播放位置,从头开始.
         */ 
        private position: number = 0;
        /*
         * 默认不循环，设置为负数循环.
         */ 
        private loop: number = 1;
        /*
         * 当前状态0为空，1为播放,2为暂停,3表示加载完成,4表示加载失败.
         */ 
        private status: number = 0;
        /*
         * 加载音频.
         */ 
        private loadSound() { 
            this.sound = RES.getRes(this.soundKey);
//            this.sound.once(egret.Event.COMPLETE,);
        }
        /*
         * 加载音频完成.
         */ 
        private loadComplete(e:egret.Event) { 
            this.status = 3;
            var waring: string = "加载完成";
            console.log(waring);
//            this.dis
        }
        /*
         * 加载音频失败.
         */ 
        private onLoadErr(e: egret.IOErrorEvent) { 
            this.status = 4;
            var waring: string = "加载失败" + this.soundKey;
            console.log(waring);
            //TODO:
        }
        /*
         * 设置url并重新加载.
         */ 
        public setKey(url: string) { 
            this.soundKey = url;
            this.loadSound();
        }
        /*
         * 获取状态.
         */ 
        private looped(e: egret.Event) { 
            this.position = 0;
            this.status = 0;
//            this
        }
        /*
         * 获取状态.
         */ 
        public getStatus() { 
            return this.status;
        }
        /*
         * 设置音量.
         */ 
        public setVolume(volume: number) { 
            if(this.status === 1) { 
                this.soundChannel.volume = volume / 100;
            }
        }
        /*
         * 显示播放时间.
         */ 
        public showPosition(): number { 
            if(this.status === 1) { 
                this.position = this.soundChannel.position;
            }
            return this.position;
        }
        
        public play() { 
            if(this.status === 4) { 
                this.loadSound();
                return;
            }
            this.status = 1;
            if(this.soundChannel) { 
                this.soundChannel.stop()
            }
            console.log(this.position);
            this.soundChannel = this.sound.play(this.position,this.loop);
            console.log(this.status);
        }
        
        /*
         * 默认一次，<=0循环，大于1传几是几.
         */ 
        public setLoop(loop: number = 1): number { 
            this.loop = loop;
            if(loop < 0) {
                this.soundChannel.addEventListener(egret.Event.SOUND_COMPLETE,this.looped,this);
            } else { 
                return loop;
            }
        }
        
        public pause() { 
            console.log(this.status);
            if(this.status === 1) { 
                this.position = this.soundChannel.position;
                this.soundChannel.stop();
                this.status = 2;
            }
            return this.position;
        }
        
        public resume() { 
            if(this.status === 2) { 
                this.play();
            }
        }
	}
}

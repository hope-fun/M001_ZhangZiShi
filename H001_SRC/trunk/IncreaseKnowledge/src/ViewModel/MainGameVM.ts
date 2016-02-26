module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
    export enum Camp { 
        Player,
        Opponent
    }
	
	export class MainGameVM extends eui.Component{
        private uiLayer: eui.UILayer;
        private onCallBack: Function;
        
        //searchGroup
        private searchGroup: eui.Group;
        private myGroup: eui.Group;
        private dotGroup: eui.Group;
        private timeLabel: eui.Label;
        private deltaDotX: number = -98;
        private timeValue: number = 0;
        private bobo_01: eui.Image;
        private headBg: eui.Image;
        private headIcon: eui.Image;
        private nameLabel: eui.Label;
        private lModel : Model.SceneModel
        private matchGroup: eui.Group;
        private shuziBg: eui.Image;
        private shuziLabel: eui.Label;

        private opponentHeadBg: eui.Image;
        private opponentHeadIcon: eui.Image;
        private opponentName: eui.Label;
        
        //gameGroup
        private gameGroup: eui.Group;
        private daojishiGroup: eui.Group;        
        private duringLabel: eui.Label;
        private myErrorImage: eui.Image;
        private opponentErrorImage: eui.Image;
        private onShowEnemyMark: Function = null;
        /*
         * 当前回合剩余时间.
         */ 
        private during: number;
        private playerSelect: number = -1;
        private opponentSelect: number = -1;
        private myScoreGroup: eui.Group;
        private opponentScoreGroup: eui.Group;
        private typeGroup: eui.Group;
        private typeLabel: eui.Label;
        private qIdLabel: eui.Label;
        private opponentScoreImage: eui.Image;
        private myScoreImage: eui.Image;
                
        //myGameHeadGroup
        private myGameHeadGroup: eui.Group;
        private myGameHead: ViewModel.HeadItemVM;
        private myNameLabel: eui.Label;
        //opponentGameHeadGroup
        private opponentGameHeadGroup: eui.Group;
        private opponentGameHead: ViewModel.HeadItemVM;
        private opponentNameLabel: eui.Label;
        //answerBtnGroup
        private answerBtnGroup: eui.Group;
        private queIndex:number = 0;
        private answerIndex: number = 0;
        private queLabel: eui.Label;
        private answer_01: eui.Button;
        private answer_02: eui.Button;
        private answer_03: eui.Button;
        private answer_04: eui.Button;
        private answerMaskGroup: eui.Group;
        private answerMask_01: eui.Image;
        private answerMask_02: eui.Image;
        private answerMask_03: eui.Image;
        private answerMask_04: eui.Image;
        private leftMarkGroup: eui.Group;
        private rightMarkGroup: eui.Group;
        
        //accountGroup
        private isResultWin: boolean;
        
        private accountGroup: eui.Group;
        private againChallengeBtn: eui.Button;
        private searchOpponentBtn: eui.Button;
        private backHomeBtn: eui.Button;
        //myAccountHeadGroup
        private myAccountHeadBg: eui.Image;
        private myAccountHead:ViewModel.HeadItemVM;
        private myAccountNameLabel: eui.Label;
        //opponentAccountHeadGroup
        private opponentAccountHeadBg: eui.Image;
        private opponentAccountHead: ViewModel.HeadItemVM;
        private opponentAccountNameLabel: eui.Label;
         //定义答对题目数量      by fangchao 2015.12.11
        private correctTimes: number = 0;
        //定义一轮回答题目次数（不超过2）
        private answerTimes: number = 0;
        public constructor(_uiLayer?: eui.UILayer,_onCallBack?: Function,_lModel?: Model.SceneModel) {
            super();
            this.skinName = "View.MainGameView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.lModel = _lModel;
            this.uiLayer.addChild(this);
        }
        
        protected createChildren() {
            super.createChildren();
            if(this.onCallBack != null) { 
                this.onCallBack();
            }
            this.initSearchGroup();
        }
        
        /*
         * 初始化搜索界面.
         */ 
        private initSearchGroup() { 
            var mTween = egret.Tween.get(this.myGroup);
            mTween.to({ x: 0 },300,egret.Ease.circIn);
            this.initHead();
            this.initDotAnim();
            this.initBoBoAnim();
            this.cancelBtnEvent();
            this.sendGameData();
        }
        
        /*
         * 搜索界面头像初始化.
         */ 
        private initHead() { 
            var iconTemp = egret.localStorage.getItem("headBtn")
            var bgTemp = egret.localStorage.getItem("headBg");
            this.headIcon.source = iconTemp == null ? "01" : iconTemp;
            this.headBg.source = bgTemp == null ? "hong" : bgTemp;
            this.nameLabel.text = Model.WebValue.menuDataM.playerModel.nickName;
        }
        
        /*
         * 初始化点点动画.
         */ 
        private initDotAnim() { 
            if(this.searchGroup.visible == false) { 
                this.timeValue = 0;
                this.timeLabel.text = "0";
                return;
            }else {
                var audio: Model.AudioService = new Model.AudioService("drop_mp3");//搜索倒计时音效.
                this.timeLabel.text = String(++this.timeValue);
                var dTween = egret.Tween.get(this.dotGroup);
                console.log(this.timeLabel.text);
                dTween.to({ x: this.deltaDotX },500).wait(1000).call(() => {
                    this.dotGroup.x = 0;
                    this.initDotAnim();
                });
            }
        }
        
        /*
         * 搜索界面泡泡循环动画.
         */ 
        private initBoBoAnim() { 
            var bTween = egret.Tween.get(this.bobo_01);
            bTween.to({ scaleX: 1,scaleY: 1 },2000).call(() => { 
                this.bobo_01.scaleX = 0;
                this.bobo_01.scaleY = 0;
                this.initBoBoAnim();
                });
        }
        
        /*
         * 終止請求，返回關卡列表.   
         */ 
        private cancelBtnEvent() { 
             
        }
        
        /*
         * 重置搜索框.
         */ 
        private resetSearchGroup() { 
            this.initDotAnim();
            this.sendGameData();
        }
        
        /*
         * 请求游戏数据.
         */ 
        private sendGameData() {
            console.log("zhujun: sendGameData ");
            Model.WebService.gameData(String(this.lModel.sceneId),(_request: egret.HttpRequest) => {
            Model.WebValue.gameDataM = JSON.parse(_request.response);
            var e = Model.WebValue.gameDataM.enemyModel;
            var t = () => {
                if(e.headId == 1 || e.headId == 5 || e.headId == 9) {
                    return "hong";
                } else if(e.headId == 2 || e.headId == 6 || e.headId == 10) {
                    return "huang";
                } else if(e.headId == 3 || e.headId == 7 || e.headId == 11) {
                    return "lan";
                } else {
                    return "zi";
                }
            };
            this.opponentHeadBg.source = t();
            this.opponentHeadIcon.source = Model.Tools.padLeft(String(e.headId),"0",2);
            this.opponentName.text = e.name;
            this.initGameHead();
            this.resetGameHead();
            this.resetDuringTurns();
            this.initScoreBar();
            this.resetTitle();
            this.initQATurn();
            this.during = this.lModel.duringTurns;
            egret.setTimeout(() => {//强制等两秒,怕网速太快.
                var mTween = egret.Tween.get(this.matchGroup);
                mTween.to({ x: 0 },1000,egret.Ease.sineIn).call(() => { //TODO: 20151201
                    this.shuziBg.visible = true;
                    var bgAlphaTween = egret.Tween.get(this.shuziBg);
                    bgAlphaTween.to({ alpha: 1 },1000,egret.Ease.sineIn);
                    var bgScaleTwenn = egret.Tween.get(this.shuziBg);
                    bgScaleTwenn.to({ scaleX: 0.2,scaleY: 0.2 },1000,egret.Ease.sineIn).call(() => { 
                            //number anim.
                            var totalGold = this.lModel.goldCost * 2;
                            var animTime = 1000;//动画时长,用于算速率和结束动画.
                            var sTime = egret.getTimer();
                            var tick = (t: number): boolean => {
                                var delta = (t - sTime) / animTime;//这边除以一千，乘以一千.单位抵消.
                                var lp = Model.Mathf.lerp(0,totalGold,delta);
                                this.shuziLabel.visible = true;
                                this.shuziLabel.text = Math.floor(lp).toString();
                                return true;
                            };
                            egret.startTick(tick,this);
                            egret.setTimeout(() => {
                                egret.stopTick(tick,this);
                                //reset ui.金币动画完成再执行这段.
                                this.matchGroup.x = 640;
                                this.searchGroup.visible = false;
                                this.gameGroup.visible = true;//打开主游戏界面.
                                this.gameheadAnim();//头像飞入动画.
                                egret.setTimeout(() => { 
                                    this.shuziLabel.text = "";
                                    this.shuziLabel.visible = false;
                                    },this,1);//防止被再次赋值，所以延时1毫秒调用.
                                this.shuziBg.alpha = 0.1;
                                this.shuziBg.scaleX = 1; 
                                this.shuziBg.scaleY = 1;
                                this.shuziBg.visible = false;
                            },this,animTime);
//                            by fangchao
                            if(egret.localStorage.getItem("sound")) {
                                Model.WebValue.isSound = egret.localStorage.getItem("sound") === "on" ? true : false;
                            } else {
                                Model.WebValue.isSound = true;
                            }
                            if(Model.WebValue.isSound) {
                                var audio: Model.AudioService = new Model.AudioService();//金币动画音效.
                                audio.setLoop(2);
                                audio.setKey("coin_mp3");
                                audio.play();
                            }
                            //gold anim.
                            var mcData: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("challengSequence_json"),RES.getRes("challengSequence_png"));
                            var mc: egret.MovieClip = new egret.MovieClip(mcData.generateMovieClipData("challengSequence"));
                            mc.scaleX = 1.8;
                            mc.scaleY = 1.8;
                            mc.x = 200.0;
                            mc.y = 0.0;
                            this.searchGroup.addChild(mc);
                            mc.addEventListener(egret.Event.COMPLETE,() => {
                                this.searchGroup.removeChild(mc);
                            },this);
                            mc.play();
                                     
                            var mcOverturnData: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("challengSequence_json"),RES.getRes("challengSequence_png"));
                            var mcOverturn: egret.MovieClip = new egret.MovieClip(mcOverturnData.generateMovieClipData("challengSequence"));
                            mcOverturn.scaleX = 1.8;
                            mcOverturn.scaleY = 1.8;
                            mcOverturn.x = 1100.0;
                            mcOverturn.y = 700.0;
                            mcOverturn.rotation = -180;
                            this.searchGroup.addChild(mcOverturn);
                            mcOverturn.addEventListener(egret.Event.COMPLETE,() => {
                                this.searchGroup.removeChild(mcOverturn);
                            },this);
                            mcOverturn.play();
                        }
                    );                    
                });  
            },this,2000);
        });
    }

        /*
         * 初始化游戏内头像.
         */ 
        private initGameHead() { 
            var p = Model.WebValue.menuDataM.playerModel;
            var e = Model.WebValue.gameDataM.enemyModel;
            this.myGameHead.enabled = false;
            var iconTemp = egret.localStorage.getItem("headBtn")
            var bgTemp = egret.localStorage.getItem("headBg");
            this.myGameHead.headBtn.source = iconTemp == null ? "01" : iconTemp;
            this.myGameHead.headBg.source = bgTemp == null ? "hong" : bgTemp;
            this.myNameLabel.text = p.nickName;
            this.opponentGameHead.enabled = false;
            var t =() => { 
                if(e.headId == 1 || e.headId == 5 || e.headId == 9) {
                    return "hong";
                } else if(e.headId == 2 || e.headId == 6 || e.headId == 10) {
                    return "huang";
                } else if(e.headId == 3 || e.headId == 7 || e.headId == 11) {
                    return "lan";
                } else {
                    return "zi";
                }
            };
            this.opponentGameHead.headBg.source = t();
            this.opponentGameHead.headBtn.source = Model.Tools.padLeft(String(e.headId),"0",2);
            this.opponentNameLabel.text = e.name;
        }
        
        /*
         * 游戏头像动画.
         */ 
        private gameheadAnim() { 
            var mTween = egret.Tween.get(this.myGameHeadGroup);
            mTween.to({ x: 20,y: 20 },500);
            var oTween = egret.Tween.get(this.opponentGameHeadGroup);
            oTween.to({ x: 1083.5,y: 20 },500).call(() => { //头像重置之后，重置分数条和倒计时坐标.

                this.scoreBarAnim();//分数动画.
                this.duringTurnsAnim();//倒计时动画.

                
                });
        }
        
        /*
         * 重置游戏内头像图标.
         */ 
        private resetGameHead() { 
            this.myGameHeadGroup.x = -197;
            this.myGameHeadGroup.y = -240;
            this.opponentGameHeadGroup.x = 1300;
            this.opponentGameHeadGroup.y = -240;
        }
        
        /*
         * 初始化问题.
         */ 
        private initQATurn() { 
            this.resetQA();//重置动画.
            var qList = Model.WebValue.gameDataM.questionListModel;
            console.log("this.queIndex " + this.queIndex);
 
            //判断答题是否完成.
            this.queLabel.text = qList[this.queIndex].question;//que
            this.answerIndex = qList[this.queIndex].answerIndex;
            
            for(var i: number = 0;i < this.answerBtnGroup.numChildren;i++){//ans 
//                if(this.answerBtnGroup.getChildAt(i) instanceof eui.Button){ //這個判斷沒什麼意義，index錯了數據也會錯.
//                    console.log(this.answerBtnGroup.getChildAt(i) instanceof eui.Button);
                    var ansBtn = <eui.Button>this.answerBtnGroup.getChildAt(i);
                    ansBtn.label = qList[this.queIndex].answerList[i];
//                }
            }
//            this.answer_01.label = qList[this.queIndex].answerList[0];
//            this.answer_02.label = qList[this.queIndex].answerList[1];
//            this.answer_03.label = qList[this.queIndex].answerList[2];
//            this.answer_04.label = qList[this.queIndex].answerList[3];
            this.answer_01.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn1,this);
            this.answer_02.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn2,this);
            this.answer_03.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn3,this);
            this.answer_04.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn4,this);
        }
        
        private titleAnim() { 
            this.duringLabel.text = String(this.during);
            this.qIdLabel.text = String("第" + (this.queIndex + 1).toString()  +"题");
            this.typeLabel.text = Model.WebValue.gameDataM.questionListModel[this.queIndex].type;
            this.typeGroup.visible = true;
            var gAlphaTween = egret.Tween.get(this.typeGroup);
            gAlphaTween.to({ alpha: 1 },800).call(() => { 
                this.reverseTitleAnim();
                });
            var gScaleTween = egret.Tween.get(this.typeGroup);
            gScaleTween.to({scaleX:1,scaleY:1},500);
            var tlAlphaTween = egret.Tween.get(this.qIdLabel);
            tlAlphaTween.to({alpha:1},500);
            var tlScaleTween = egret.Tween.get(this.qIdLabel);
            tlScaleTween.to({scaleX:1,scaleY:1},500);
        }
        
        /*
         * 反向标题动画.
         */ 
        private reverseTitleAnim() { 
            var gAlphaTween = egret.Tween.get(this.typeGroup);
            gAlphaTween.to({ alpha: 0 },500);
            var tlAlphaTween = egret.Tween.get(this.qIdLabel);
            tlAlphaTween.to({ alpha: 0 },500).call(
                () => {
                    this.typeGroup.visible = false;
                    this.typeLabel.text = "";
                    this.qIdLabel.scaleX = 0.1;
                    this.qIdLabel.scaleY = 0.1;
                    this.qIdLabel.text = "";
                    //调用题目动画.
                    this.QAAnim();
                }
            );
        }
        
        private resetTitle() { 
            this.typeGroup.alpha = 0;
            this.typeGroup.visible = false;
            this.typeLabel.text = "";
            this.qIdLabel.alpha = 0;
            this.qIdLabel.scaleX = 0.1;
            this.qIdLabel.scaleY = 0.1;
            this.qIdLabel.text = "";
        }
        
        private QAAnim() { 
            var qAlpha = egret.Tween.get(this.queLabel);
            qAlpha.to({alpha:1},500).call(
                () => { 
                    //调用答案动画.
                    this.answerBtnGroup.visible = true;
                    var aAlpha = egret.Tween.get(this.answerBtnGroup);
                    aAlpha.to({alpha:1},500);
                    var aScale = egret.Tween.get(this.answerBtnGroup);
                    aScale.to({scaleX:1,scaleY:1},500);
                    //调用倒计时.
                    this.initDuringTurns();//初始化倒计时.TODO:要放在题目选项出来之后.
                    this.initEnemyAI();//TODO和计时一起调用
                }
            );
        }
        
        /*
         * 重置问题动画.
         */ 
        private resetQA() { 
            this.queLabel.alpha = 0.0;
            this.queLabel.text = "";
            this.answerBtnGroup.alpha = 0.0;
            this.answerBtnGroup.scaleX = 0.1;
            this.answerBtnGroup.scaleY = 0.1;
            this.answerBtnGroup.visible = false;
        }
        
        /*
         * 初始化当前回合倒计时.
         */ 
        private initDuringTurns() { 
            var qList = Model.WebValue.gameDataM.questionListModel;
//            console.log("zhujun: during " +this.during);
            this.duringLabel.text = String(this.during);
//            by fangchao 2015.12.11
            if(this.during <= 0||this.answerTimes>=2) {//每一题答完,重置倒计时,按钮状态.
                this.answerTimes = 0;
//            by fangchao 2015.12.11  设置两人答完之后的暂停时间，使游戏过程不那么突兀
                setTimeout(() => { 
                console.log("答完一题,重置计时.");
                if(this.queIndex >= qList.length-1) {//如果答完所有题,终止记时
                    console.log("答完所有题目,终止计时.");
                    var isWin = ():boolean => { 
                        this.isResultWin = this.myScoreImage.height > this.opponentScoreImage.height;
                        return this.isResultWin;
                    }
                    Model.WebService.gameAccount(this.lModel.sceneId.toString(),isWin(),1,this.correctTimes,(_request: egret.HttpRequest) => { 
                        Model.WebValue.settleM = JSON.parse(_request.response);
                        this.onReplyComplete();
                     });
                    this.queIndex = 0;//重置答題數.
                    this.onShowEnemyMark = null;
                    this.onResetSelectBtn(this.playerSelect);
                    this.onResetSelectBtn(this.opponentSelect);
                    this.playerSelect = -1;
                    this.opponentSelect = -1;
                    this.resetScoreBar();
                    return;                 
                } else {
                    this.during = this.lModel.duringTurns;
//                    this.initDuringTurns();
                    this.onNextQA(); 
                    return;
                }
                },1500);
            } else {
                setTimeout(() => {
                    this.duringLabel.text = String(this.during);
                    --this.during;
                    this.initDuringTurns();
                },1000);
            }
        }
        
        /*
         * 倒计时动画.
         */ 
        private duringTurnsAnim() { 
            var duringAlphaTween = egret.Tween.get(this.daojishiGroup);
            duringAlphaTween.to({alpha:1},500,egret.Ease.sineIn);
            var duringScaleTween = egret.Tween.get(this.daojishiGroup);
            duringScaleTween.to({scaleX:1,scaleY:1},500,egret.Ease.sineIn);
        }
        
        /*
         * 重置倒计时动画.
         */ 
        private resetDuringTurns() { 
            this.daojishiGroup.scaleX = 0.3;
            this.daojishiGroup.scaleY = 0.3;
            this.daojishiGroup.alpha = 0.3;
        }
        
        /*
         * 初始化分数栏.
         */ 
        private initScoreBar() { 
              this.myScoreGroup.x= -150
              this.opponentScoreGroup.x = 1318;
        }
        
        /*
         * 分数进入栏动画.
         */ 
        private scoreBarAnim() { 
            var myTween = egret.Tween.get(this.myScoreGroup);
            myTween.to({x:10,y:290},500);
            var opponentTween = egret.Tween.get(this.opponentScoreGroup);
            opponentTween.to({ x: 1168,y: 290 },500).call(() => { 
                this.titleAnim();//播放动画.
                });
        }
        
        /*
         * 重置分数栏
         */ 
        private resetScoreBar() { 
            this.myScoreImage.height = 0;
            this.opponentScoreImage.height = 0;
        }
        
        /*
         * 进行下一题.
         */ 
        private onNextQA() {
            this.onShowEnemyMark = null;
            this.onResetSelectBtn(this.playerSelect);
            this.onResetSelectBtn(this.opponentSelect);
            this.playerSelect = -1;
            this.opponentSelect = -1;
            ++this.queIndex;
            console.log("一题结束,增加题号id: this.queIndex++" + this.queIndex);
            this.initQATurn();//下一题赋值.
            this.titleAnim();//下一题动画.
        }
        
        /*
         * 初始化敵人AI.
         */ 
        private initEnemyAI() { 
//            var qList = Model.WebValue.gameDataM.questionListModel;
            var ansDetail = Model.WebValue.gameDataM.enemyModel.answerDetailModel;
//            alert("ansDetail[this.queIndex].timeCost");
            setTimeout(() => { 
                this.onSelectAnswer(this.answerIndex,ansDetail[this.queIndex].ansIndex,Camp.Opponent);
                },ansDetail[this.queIndex].timeCost * 1000);
        }
        
        //Temp answer btn event.(无法移除匿名函数临时替代方案.)
        private addBtn1() { 
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex,0,Camp.Player);
        }
        
        private addBtn2() { 
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex,1,Camp.Player);
        }
        
        private addBtn3() { 
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex,2,Camp.Player);
            
        }
        
        private addBtn4() { 
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex,3,Camp.Player);
        }
        
        /*
         *  移除4個按鈕事件.
         */
        private clearBtnEvent() { 
//            for(var i: number = 0;i < this.answerBtnGroup.numChildren;i++) {//ans 
//                var ansBtn = <eui.Button>this.answerBtnGroup.getChildAt(i);
////                ansBtn = new eui.Button();
//            }
            this.answer_01.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn1,this);
            this.answer_02.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn2,this);
            this.answer_03.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn3,this);
            this.answer_04.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtn4,this);
        }
        //Temp end.
        
//        private addBtnEvent(_ansBtn: eui.Button,_q: Model.QuestionModel,_index: number) {//function
//            _ansBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
//                this.onSelectAnswer(_q.answerIndex,_index);
//            },this);
////            _ansBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,arguments.callee,this);
//        }
        
        /*
         * 选择答案.
         */ 
        private onSelectAnswer(_answerIndex:number,_selectIndex:number,_camp?:Camp) { 
//            by fangchao 2015.12.11
            this.answerTimes++;
            if(_answerIndex == _selectIndex) {
                var markBg = () => {
                    this.answerMaskGroup.visible = true;
                    var image: eui.Image = <eui.Image>this.answerMaskGroup.getChildAt(_selectIndex);
                    image.source = "button_lv";
                    image.visible = true;
                };
                if(_camp == Camp.Player) {
                    markBg();
                    //by fangchao 2015.12.11
                    this.correctTimes++;
                    //左圓.
                    this.playerSelect = _selectIndex;
                    this.leftMarkGroup.visible = true;
                    var mark: eui.Image = <eui.Image>this.leftMarkGroup.getChildAt(_selectIndex);
                    mark.source = "icon_dadui01";
                    mark.visible = true;
                    this.setMyScoreBar(true);
                    var audio: Model.AudioService = new Model.AudioService("user_correct_mp3");//玩家答对音效.
                } else { 
                    //右圓.
                    this.setEnemyScoreBar(true,() => { 
                        markBg();
                        this.answerMaskGroup.touchEnabled = false;
                        var image: eui.Image = <eui.Image>this.answerMaskGroup.getChildAt(_selectIndex);
                        image.touchEnabled = false;
                        this.opponentSelect = _selectIndex;
                        this.rightMarkGroup.visible = true;
                        var mark: eui.Image = <eui.Image>this.rightMarkGroup.getChildAt(_selectIndex);
                        mark.source = "icon_dadui01";
                        mark.visible = true;
                    });
                }
            } else { 
                var markBg = ()=>{                    
                    this.answerMaskGroup.visible = true;
                    var image: eui.Image = <eui.Image>this.answerMaskGroup.getChildAt(_selectIndex);
                    image.source = "button_hong";
                    image.visible = true;
                };
                if(_camp == Camp.Player) {
                    markBg();
                    //左叉.
                    this.playerSelect = _selectIndex;
                    this.leftMarkGroup.visible = true;
                    var mark: eui.Image = <eui.Image>this.leftMarkGroup.getChildAt(_selectIndex);
                    mark.source = "icon_dacuo01";
                    mark.visible = true;
                    this.setMyScoreBar(false);
                    var audio: Model.AudioService = new Model.AudioService("user_wrong_mp3");//玩家答错音效.
                } else { 
                    //右叉.
                    this.setEnemyScoreBar(false,() => { 
                        markBg();
                        this.answerMaskGroup.touchEnabled = false;
                        var image: eui.Image = <eui.Image>this.answerMaskGroup.getChildAt(_selectIndex);
                        image.touchEnabled = false;
                        this.opponentSelect = _selectIndex;
                        this.rightMarkGroup.visible = true;
                        var mark: eui.Image = <eui.Image>this.rightMarkGroup.getChildAt(_selectIndex);
                        mark.source = "icon_dacuo01";
                        mark.visible = true;
                    });
                }
            }
        }

       
        private setEnemyScoreBar(flag:boolean,_onShowEnemyMark:Function) { 
            if(flag) {
                //得分，绿色分数栏.
                this.opponentScoreImage.height += 374 * this.enemyEarnScore() / (200 * this.lModel.turns);//TODO:进度条总长度=200*（回合+1）
                console.log("enemy score " + this.enemyEarnScore());
                console.log("enemy height" + this.opponentScoreImage.height);
            } else { 
                //红色分数栏.
                this.opponentErrorImage.visible = true;
//                by fangchao 2015.12.14 处理错误条的条长和位置
                this.opponentErrorImage.height -= this.opponentScoreImage.height;
                this.opponentErrorImage.bottom += this.opponentScoreImage.height;
                var tween = egret.Tween.get(this.opponentErrorImage);
                tween.to({alpha:1},500,egret.Ease.sineIn).call(
                    () => { 
                        this.opponentErrorImage.visible = false;
//                by fangchao 2015.12.14 处理错误条的条长和位置
                        this.opponentErrorImage.height += this.opponentScoreImage.height;
                        this.opponentErrorImage.bottom -= this.opponentScoreImage.height;
                    }
                );                
            }
            if(this.playerSelect != -1) {//玩家非-1的时候.执行标记.否则等玩家选择，触发标记. 
//                alert("this.playerselect " + this.playerSelect);
                _onShowEnemyMark();
                this.onShowEnemyMark = null;
            } else { 
                this.onShowEnemyMark = _onShowEnemyMark;
            }
        }
        
         /*
         * 对手单题分数= ROUNDDOWN(200*对手倒计时时间/time，0)
         */ 
        private enemyEarnScore() {
             return Math.ceil(200 * Model.WebValue.gameDataM.enemyModel.answerDetailModel[this.queIndex].timeCost / this.lModel.duringTurns);
        }//TODO: 后台没有传 this.lModel.basicScore
        
        private setMyScoreBar(flag:boolean) { 
            if(flag) {
                console.log("this.myEarnScore() " + this.myEarnScore());
                this.myScoreImage.height += 374 * this.myEarnScore() / (200 * this.lModel.turns);//TODO:进度条总长度=200*（回合+1）
            } else { 
                this.myErrorImage.visible = true;
//                by fangchao 2015.12.14 处理错误条的条长和位置
                this.myErrorImage.height -= this.myScoreImage.height;
                this.myErrorImage.bottom += this.myScoreImage.height;
                var tween = egret.Tween.get(this.myErrorImage);
                tween.to({ alpha: 1 },500,egret.Ease.sineIn).call(
                    () => {
                        this.myErrorImage.visible = false;
//                by fangchao 2015.12.14 处理错误条的条长和位置  
                        this.myErrorImage.height += this.myScoreImage.height;
                        this.myErrorImage.bottom -= this.myScoreImage.height;
                    }
                );  
                //TODO:红色全屏,震动.
            }    
            if(this.onShowEnemyMark != null) { 
                this.onShowEnemyMark();
                this.onShowEnemyMark = null;
            }
        }
        
        /*
         * TODO:玩家单题分数=ROUNDDOWN（200*（倒计时时间/答题时间）*（1+技能加成+等级加成）,0）
         */ 
        private myEarnScore() { 
            console.log("this.basic score " + this.lModel + " this.during " + this.during + " this.lModel.duringTurns " + this.lModel.duringTurns);
            return Math.ceil(200 * (this.during / this.lModel.duringTurns));//TODO: 后台没有传 this.lModel.basicScore
        }
        
        /*
         * 重置选择按钮.
         */ 
        private onResetSelectBtn(_selectIndex: number) { 
                if(_selectIndex == -1) { 
                    console.log("此次没有选择，不需要重置.");
                    return;
                }
                this.leftMarkGroup.visible = false;
                var mark: eui.Image = <eui.Image>this.leftMarkGroup.getChildAt(_selectIndex);
                mark.visible = false;

                this.rightMarkGroup.visible = false;
                var mark: eui.Image = <eui.Image>this.rightMarkGroup.getChildAt(_selectIndex);
                mark.visible = false;

                this.answerMaskGroup.visible = false;
                var image: eui.Image = <eui.Image>this.answerMaskGroup.getChildAt(_selectIndex);
                image.visible = false;
        }
        

        /*--------------------------------------------------------------
         * 结算模块.
         -------------------------------------------------------------*/
        
        
        /*
         * 回答完成,跳轉結算界面.
         */ 
        private onReplyComplete() { 
            this.uiLayer.swapChildrenAt(0,1);
            this.initAccountHead();
            this.initResult();
            this.gameGroup.visible = false;
            this.accountGroup.visible = true;
            var onAgain = () => { 
                //回關卡列表.
                var mainMenuVM = new ViewModel.MainMenuVM(this.uiLayer,() => {
                    alert("zhujun:　main menu on call back !　"); 
                },PageName.SceneList);
                this.uiLayer.removeChild(this);
                mainMenuVM.num++;//by cai_haotian,2015.12.09.
            }
            var onSearch = () => {
                //回搜索畫面.
                var cost = Model.WebValue.settleM.gold;
                var p = Model.WebValue.menuDataM.playerModel;
                console.log(p.gold);
//                涉及到金钱是否足够下一轮的判断 by fangchao 2015.12.25
                if(p.gold>=-cost) {
                    this.uiLayer.swapChildrenAt(0,1);
                    this.accountGroup.visible = false;
                    this.searchGroup.visible = true;
                    this.resetSearchGroup();
                    this.searchOpponentBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,onSearch,this.searchOpponentBtn);
                    this.againChallengeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,onAgain,this.againChallengeBtn);
                    this.backHomeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,onBackHome,this.backHomeBtn);
                } else { 
                    new ViewModel.ErrorMsgVM(this.uiLayer,"您当前金币不足，请充值兑换哦！");
                }
            }
            var onBackHome = () => {
                this.uiLayer.removeChild(this);
                //回主頁.
                var mainMenuVM = new ViewModel.MainMenuVM(this.uiLayer);
                mainMenuVM.num++;//by cai_haotian,2015.12.09.
                //var tite = new ViewModel.TitleInfoVM(this.uiLayer);
            }
            this.againChallengeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,onAgain,this.againChallengeBtn);
            this.searchOpponentBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,onSearch,this.searchOpponentBtn); 
            this.backHomeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,onBackHome,this.backHomeBtn);
        }
        
        private initAccountHead() {
            var p = Model.WebValue.menuDataM.playerModel;
            var e = Model.WebValue.gameDataM.enemyModel;
            this.myAccountHead.enabled = false;
            var iconTemp = egret.localStorage.getItem("headBtn");
            var bgTemp = egret.localStorage.getItem("headBg");
            this.myAccountHead.headBtn.source = iconTemp == null ? "01" : iconTemp;//egret.localStorage.getItem("headBtn");
            this.myAccountHead.headBg.source = bgTemp == null ? "hong" : bgTemp;//egret.localStorage.getItem("headBg");
            this.myAccountNameLabel.text = p.nickName;
            this.opponentAccountHead.enabled = false;
            var t = () => {
                if(e.headId == 1 || e.headId == 5 || e.headId == 9) {
                    return "hong";
                } else if(e.headId == 2 || e.headId == 6 || e.headId == 10) {
                    return "huang";
                } else if(e.headId == 3 || e.headId == 7 || e.headId == 11) {
                    return "lan";
                } else {
                    return "zi";
                }
            };
            this.opponentAccountHead.headBg.source = t();
            this.opponentAccountHead.headBtn.source = Model.Tools.padLeft(String(e.headId),"0",2);
            this.opponentAccountNameLabel.text = e.name;
        }
        
        
        private resultlabel: eui.Label;
        private rightByRightLabel: eui.Label;
        private goldLabel: eui.Label;
        private expLabel: eui.Label;
        
        /*
         * 初始化结果.
         */ 
        private initResult() { 
            if(this.isResultWin) {
                this.resultlabel.text = "挑战成功";
                DCAgent.onMissionFinished(this.lModel.sceneId.toString(),888);
            } else { 
                this.resultlabel.text = "挑战失败";
                DCAgent.onMissionUnfinished(this.lModel.sceneId.toString(),888)
            }
            this.rightByRightLabel.text = "回报结算";
            this.goldLabel.text = Model.WebValue.settleM.gold.toString();
            this.expLabel.text = Model.WebValue.settleM.exp.toString();
//            TitleInfoVM.singleton.plusGold(Model.WebValue.settleM.gold);
//            TitleInfoVM.singleton.expBar.value += Model.WebValue.settleM.exp;
//            by fangchao 2015.12,11             更新界面数据
            var p = Model.WebValue.menuDataM.playerModel;
            if(p.expCurrent + Model.WebValue.settleM.exp < p.expMax) {
                p.expCurrent += Number(this.expLabel.text);
            } else {
                p.level = Model.WebValue.settleM.level;
                p.expCurrent += Number(this.expLabel.text);
                p.expCurrent -= p.expMax;
                p.expMax = Model.WebValue.settleM.expMax;
                new ViewModel.LevelUpVM("第 " + Model.WebValue.settleM.level + " 级",this.uiLayer);
            }
            var winTimes = this.isResultWin ? parseInt(p.militaryExploit.slice(p.militaryExploit.indexOf('战') + 1)) + 1 : parseInt(p.militaryExploit.slice(p.militaryExploit.indexOf('战') + 1));
            p.jackpot += Model.WebValue.settleM.gold;
            p.militaryExploit = parseInt(p.militaryExploit) + 1 + "战" + winTimes + "胜";
            p.winRate = Math.round(winTimes / parseInt(p.militaryExploit) * 1000) / 10;
            p.rightQueNum += this.correctTimes;
            this.correctTimes = 0;
            TitleInfoVM.singleton.plusGold(Model.WebValue.settleM.gold);
            TitleInfoVM.singleton.plusLevel(Model.WebValue.settleM.level);
            TitleInfoVM.singleton.expBar.value = p.expCurrent;
            TitleInfoVM.singleton.expBar.maximum = p.expMax;
            var sList = Model.WebValue.menuDataM.skillModelList;
            for(var i = 0;i <sList.length;i++) {
                if(sList[i]["unlockLevel"] <= Model.WebValue.settleM.level) { sList[i]["unlock"] = true } else { break }; 
            } 
        }
    }
}













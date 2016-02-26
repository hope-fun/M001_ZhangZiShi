var ViewModel;
(function (ViewModel) {
    /**
     *
     * @author
     *
     */
    (function (Camp) {
        Camp[Camp["Player"] = 0] = "Player";
        Camp[Camp["Opponent"] = 1] = "Opponent";
    })(ViewModel.Camp || (ViewModel.Camp = {}));
    var Camp = ViewModel.Camp;
    var MainGameVM = (function (_super) {
        __extends(MainGameVM, _super);
        function MainGameVM(_uiLayer, _onCallBack, _lModel) {
            _super.call(this);
            this.deltaDotX = -98;
            this.timeValue = 0;
            this.onShowEnemyMark = null;
            this.playerSelect = -1;
            this.opponentSelect = -1;
            this.queIndex = 0;
            this.answerIndex = 0;
            //定义答对题目数量      by fangchao 2015.12.11
            this.correctTimes = 0;
            //定义一轮回答题目次数（不超过2）
            this.answerTimes = 0;
            this.skinName = "View.MainGameView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.lModel = _lModel;
            this.uiLayer.addChild(this);
        }
        var d = __define,c=MainGameVM,p=c.prototype;
        p.createChildren = function () {
            _super.prototype.createChildren.call(this);
            if (this.onCallBack != null) {
                this.onCallBack();
            }
            this.initSearchGroup();
        };
        /*
         * 初始化搜索界面.
         */
        p.initSearchGroup = function () {
            var mTween = egret.Tween.get(this.myGroup);
            mTween.to({ x: 0 }, 300, egret.Ease.circIn);
            this.initHead();
            this.initDotAnim();
            this.initBoBoAnim();
            this.cancelBtnEvent();
            this.sendGameData();
        };
        /*
         * 搜索界面头像初始化.
         */
        p.initHead = function () {
            var iconTemp = egret.localStorage.getItem("headBtn");
            var bgTemp = egret.localStorage.getItem("headBg");
            this.headIcon.source = iconTemp == null ? "01" : iconTemp;
            this.headBg.source = bgTemp == null ? "hong" : bgTemp;
            this.nameLabel.text = Model.WebValue.menuDataM.playerModel.nickName;
        };
        /*
         * 初始化点点动画.
         */
        p.initDotAnim = function () {
            var _this = this;
            if (this.searchGroup.visible == false) {
                this.timeValue = 0;
                this.timeLabel.text = "0";
                return;
            }
            else {
                var audio = new Model.AudioService("drop_mp3"); //搜索倒计时音效.
                this.timeLabel.text = String(++this.timeValue);
                var dTween = egret.Tween.get(this.dotGroup);
                console.log(this.timeLabel.text);
                dTween.to({ x: this.deltaDotX }, 500).wait(1000).call(function () {
                    _this.dotGroup.x = 0;
                    _this.initDotAnim();
                });
            }
        };
        /*
         * 搜索界面泡泡循环动画.
         */
        p.initBoBoAnim = function () {
            var _this = this;
            var bTween = egret.Tween.get(this.bobo_01);
            bTween.to({ scaleX: 1, scaleY: 1 }, 2000).call(function () {
                _this.bobo_01.scaleX = 0;
                _this.bobo_01.scaleY = 0;
                _this.initBoBoAnim();
            });
        };
        /*
         * 終止請求，返回關卡列表.
         */
        p.cancelBtnEvent = function () {
        };
        /*
         * 重置搜索框.
         */
        p.resetSearchGroup = function () {
            this.initDotAnim();
            this.sendGameData();
        };
        /*
         * 请求游戏数据.
         */
        p.sendGameData = function () {
            var _this = this;
            console.log("zhujun: sendGameData ");
            Model.WebService.gameData(String(this.lModel.sceneId), function (_request) {
                Model.WebValue.gameDataM = JSON.parse(_request.response);
                var e = Model.WebValue.gameDataM.enemyModel;
                var t = function () {
                    if (e.headId == 1 || e.headId == 5 || e.headId == 9) {
                        return "hong";
                    }
                    else if (e.headId == 2 || e.headId == 6 || e.headId == 10) {
                        return "huang";
                    }
                    else if (e.headId == 3 || e.headId == 7 || e.headId == 11) {
                        return "lan";
                    }
                    else {
                        return "zi";
                    }
                };
                _this.opponentHeadBg.source = t();
                _this.opponentHeadIcon.source = Model.Tools.padLeft(String(e.headId), "0", 2);
                _this.opponentName.text = e.name;
                _this.initGameHead();
                _this.resetGameHead();
                _this.resetDuringTurns();
                _this.initScoreBar();
                _this.resetTitle();
                _this.initQATurn();
                _this.during = _this.lModel.duringTurns;
                egret.setTimeout(function () {
                    var mTween = egret.Tween.get(_this.matchGroup);
                    mTween.to({ x: 0 }, 1000, egret.Ease.sineIn).call(function () {
                        _this.shuziBg.visible = true;
                        var bgAlphaTween = egret.Tween.get(_this.shuziBg);
                        bgAlphaTween.to({ alpha: 1 }, 1000, egret.Ease.sineIn);
                        var bgScaleTwenn = egret.Tween.get(_this.shuziBg);
                        bgScaleTwenn.to({ scaleX: 0.2, scaleY: 0.2 }, 1000, egret.Ease.sineIn).call(function () {
                            //number anim.
                            var totalGold = _this.lModel.goldCost * 2;
                            var animTime = 1000; //动画时长,用于算速率和结束动画.
                            var sTime = egret.getTimer();
                            var tick = function (t) {
                                var delta = (t - sTime) / animTime; //这边除以一千，乘以一千.单位抵消.
                                var lp = Model.Mathf.lerp(0, totalGold, delta);
                                _this.shuziLabel.visible = true;
                                _this.shuziLabel.text = Math.floor(lp).toString();
                                return true;
                            };
                            egret.startTick(tick, _this);
                            egret.setTimeout(function () {
                                egret.stopTick(tick, _this);
                                //reset ui.金币动画完成再执行这段.
                                _this.matchGroup.x = 640;
                                _this.searchGroup.visible = false;
                                _this.gameGroup.visible = true; //打开主游戏界面.
                                _this.gameheadAnim(); //头像飞入动画.
                                egret.setTimeout(function () {
                                    _this.shuziLabel.text = "";
                                    _this.shuziLabel.visible = false;
                                }, _this, 1); //防止被再次赋值，所以延时1毫秒调用.
                                _this.shuziBg.alpha = 0.1;
                                _this.shuziBg.scaleX = 1;
                                _this.shuziBg.scaleY = 1;
                                _this.shuziBg.visible = false;
                            }, _this, animTime);
                            //                            by fangchao
                            if (egret.localStorage.getItem("sound")) {
                                Model.WebValue.isSound = egret.localStorage.getItem("sound") === "on" ? true : false;
                            }
                            else {
                                Model.WebValue.isSound = true;
                            }
                            if (Model.WebValue.isSound) {
                                var audio = new Model.AudioService(); //金币动画音效.
                                audio.setLoop(2);
                                audio.setKey("coin_mp3");
                                audio.play();
                            }
                            //gold anim.
                            var mcData = new egret.MovieClipDataFactory(RES.getRes("challengSequence_json"), RES.getRes("challengSequence_png"));
                            var mc = new egret.MovieClip(mcData.generateMovieClipData("challengSequence"));
                            mc.scaleX = 1.8;
                            mc.scaleY = 1.8;
                            mc.x = 200.0;
                            mc.y = 0.0;
                            _this.searchGroup.addChild(mc);
                            mc.addEventListener(egret.Event.COMPLETE, function () {
                                _this.searchGroup.removeChild(mc);
                            }, _this);
                            mc.play();
                            var mcOverturnData = new egret.MovieClipDataFactory(RES.getRes("challengSequence_json"), RES.getRes("challengSequence_png"));
                            var mcOverturn = new egret.MovieClip(mcOverturnData.generateMovieClipData("challengSequence"));
                            mcOverturn.scaleX = 1.8;
                            mcOverturn.scaleY = 1.8;
                            mcOverturn.x = 1100.0;
                            mcOverturn.y = 700.0;
                            mcOverturn.rotation = -180;
                            _this.searchGroup.addChild(mcOverturn);
                            mcOverturn.addEventListener(egret.Event.COMPLETE, function () {
                                _this.searchGroup.removeChild(mcOverturn);
                            }, _this);
                            mcOverturn.play();
                        });
                    });
                }, _this, 2000);
            });
        };
        /*
         * 初始化游戏内头像.
         */
        p.initGameHead = function () {
            var p = Model.WebValue.menuDataM.playerModel;
            var e = Model.WebValue.gameDataM.enemyModel;
            this.myGameHead.enabled = false;
            var iconTemp = egret.localStorage.getItem("headBtn");
            var bgTemp = egret.localStorage.getItem("headBg");
            this.myGameHead.headBtn.source = iconTemp == null ? "01" : iconTemp;
            this.myGameHead.headBg.source = bgTemp == null ? "hong" : bgTemp;
            this.myNameLabel.text = p.nickName;
            this.opponentGameHead.enabled = false;
            var t = function () {
                if (e.headId == 1 || e.headId == 5 || e.headId == 9) {
                    return "hong";
                }
                else if (e.headId == 2 || e.headId == 6 || e.headId == 10) {
                    return "huang";
                }
                else if (e.headId == 3 || e.headId == 7 || e.headId == 11) {
                    return "lan";
                }
                else {
                    return "zi";
                }
            };
            this.opponentGameHead.headBg.source = t();
            this.opponentGameHead.headBtn.source = Model.Tools.padLeft(String(e.headId), "0", 2);
            this.opponentNameLabel.text = e.name;
        };
        /*
         * 游戏头像动画.
         */
        p.gameheadAnim = function () {
            var _this = this;
            var mTween = egret.Tween.get(this.myGameHeadGroup);
            mTween.to({ x: 20, y: 20 }, 500);
            var oTween = egret.Tween.get(this.opponentGameHeadGroup);
            oTween.to({ x: 1083.5, y: 20 }, 500).call(function () {
                _this.scoreBarAnim(); //分数动画.
                _this.duringTurnsAnim(); //倒计时动画.
            });
        };
        /*
         * 重置游戏内头像图标.
         */
        p.resetGameHead = function () {
            this.myGameHeadGroup.x = -197;
            this.myGameHeadGroup.y = -240;
            this.opponentGameHeadGroup.x = 1300;
            this.opponentGameHeadGroup.y = -240;
        };
        /*
         * 初始化问题.
         */
        p.initQATurn = function () {
            this.resetQA(); //重置动画.
            var qList = Model.WebValue.gameDataM.questionListModel;
            console.log("this.queIndex " + this.queIndex);
            //判断答题是否完成.
            this.queLabel.text = qList[this.queIndex].question; //que
            this.answerIndex = qList[this.queIndex].answerIndex;
            for (var i = 0; i < this.answerBtnGroup.numChildren; i++) {
                //                if(this.answerBtnGroup.getChildAt(i) instanceof eui.Button){ //這個判斷沒什麼意義，index錯了數據也會錯.
                //                    console.log(this.answerBtnGroup.getChildAt(i) instanceof eui.Button);
                var ansBtn = this.answerBtnGroup.getChildAt(i);
                ansBtn.label = qList[this.queIndex].answerList[i];
            }
            //            this.answer_01.label = qList[this.queIndex].answerList[0];
            //            this.answer_02.label = qList[this.queIndex].answerList[1];
            //            this.answer_03.label = qList[this.queIndex].answerList[2];
            //            this.answer_04.label = qList[this.queIndex].answerList[3];
            this.answer_01.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn1, this);
            this.answer_02.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn2, this);
            this.answer_03.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn3, this);
            this.answer_04.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn4, this);
        };
        p.titleAnim = function () {
            var _this = this;
            this.duringLabel.text = String(this.during);
            this.qIdLabel.text = String("第" + (this.queIndex + 1).toString() + "题");
            this.typeLabel.text = Model.WebValue.gameDataM.questionListModel[this.queIndex].type;
            this.typeGroup.visible = true;
            var gAlphaTween = egret.Tween.get(this.typeGroup);
            gAlphaTween.to({ alpha: 1 }, 800).call(function () {
                _this.reverseTitleAnim();
            });
            var gScaleTween = egret.Tween.get(this.typeGroup);
            gScaleTween.to({ scaleX: 1, scaleY: 1 }, 500);
            var tlAlphaTween = egret.Tween.get(this.qIdLabel);
            tlAlphaTween.to({ alpha: 1 }, 500);
            var tlScaleTween = egret.Tween.get(this.qIdLabel);
            tlScaleTween.to({ scaleX: 1, scaleY: 1 }, 500);
        };
        /*
         * 反向标题动画.
         */
        p.reverseTitleAnim = function () {
            var _this = this;
            var gAlphaTween = egret.Tween.get(this.typeGroup);
            gAlphaTween.to({ alpha: 0 }, 500);
            var tlAlphaTween = egret.Tween.get(this.qIdLabel);
            tlAlphaTween.to({ alpha: 0 }, 500).call(function () {
                _this.typeGroup.visible = false;
                _this.typeLabel.text = "";
                _this.qIdLabel.scaleX = 0.1;
                _this.qIdLabel.scaleY = 0.1;
                _this.qIdLabel.text = "";
                //调用题目动画.
                _this.QAAnim();
            });
        };
        p.resetTitle = function () {
            this.typeGroup.alpha = 0;
            this.typeGroup.visible = false;
            this.typeLabel.text = "";
            this.qIdLabel.alpha = 0;
            this.qIdLabel.scaleX = 0.1;
            this.qIdLabel.scaleY = 0.1;
            this.qIdLabel.text = "";
        };
        p.QAAnim = function () {
            var _this = this;
            var qAlpha = egret.Tween.get(this.queLabel);
            qAlpha.to({ alpha: 1 }, 500).call(function () {
                //调用答案动画.
                _this.answerBtnGroup.visible = true;
                var aAlpha = egret.Tween.get(_this.answerBtnGroup);
                aAlpha.to({ alpha: 1 }, 500);
                var aScale = egret.Tween.get(_this.answerBtnGroup);
                aScale.to({ scaleX: 1, scaleY: 1 }, 500);
                //调用倒计时.
                _this.initDuringTurns(); //初始化倒计时.TODO:要放在题目选项出来之后.
                _this.initEnemyAI(); //TODO和计时一起调用
            });
        };
        /*
         * 重置问题动画.
         */
        p.resetQA = function () {
            this.queLabel.alpha = 0.0;
            this.queLabel.text = "";
            this.answerBtnGroup.alpha = 0.0;
            this.answerBtnGroup.scaleX = 0.1;
            this.answerBtnGroup.scaleY = 0.1;
            this.answerBtnGroup.visible = false;
        };
        /*
         * 初始化当前回合倒计时.
         */
        p.initDuringTurns = function () {
            var _this = this;
            var qList = Model.WebValue.gameDataM.questionListModel;
            //            console.log("zhujun: during " +this.during);
            this.duringLabel.text = String(this.during);
            //            by fangchao 2015.12.11
            if (this.during <= 0 || this.answerTimes >= 2) {
                this.answerTimes = 0;
                //            by fangchao 2015.12.11  设置两人答完之后的暂停时间，使游戏过程不那么突兀
                setTimeout(function () {
                    console.log("答完一题,重置计时.");
                    if (_this.queIndex >= qList.length - 1) {
                        console.log("答完所有题目,终止计时.");
                        var isWin = function () {
                            _this.isResultWin = _this.myScoreImage.height > _this.opponentScoreImage.height;
                            return _this.isResultWin;
                        };
                        Model.WebService.gameAccount(_this.lModel.sceneId.toString(), isWin(), 1, _this.correctTimes, function (_request) {
                            Model.WebValue.settleM = JSON.parse(_request.response);
                            _this.onReplyComplete();
                        });
                        _this.queIndex = 0; //重置答題數.
                        _this.onShowEnemyMark = null;
                        _this.onResetSelectBtn(_this.playerSelect);
                        _this.onResetSelectBtn(_this.opponentSelect);
                        _this.playerSelect = -1;
                        _this.opponentSelect = -1;
                        _this.resetScoreBar();
                        return;
                    }
                    else {
                        _this.during = _this.lModel.duringTurns;
                        //                    this.initDuringTurns();
                        _this.onNextQA();
                        return;
                    }
                }, 1500);
            }
            else {
                setTimeout(function () {
                    _this.duringLabel.text = String(_this.during);
                    --_this.during;
                    _this.initDuringTurns();
                }, 1000);
            }
        };
        /*
         * 倒计时动画.
         */
        p.duringTurnsAnim = function () {
            var duringAlphaTween = egret.Tween.get(this.daojishiGroup);
            duringAlphaTween.to({ alpha: 1 }, 500, egret.Ease.sineIn);
            var duringScaleTween = egret.Tween.get(this.daojishiGroup);
            duringScaleTween.to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineIn);
        };
        /*
         * 重置倒计时动画.
         */
        p.resetDuringTurns = function () {
            this.daojishiGroup.scaleX = 0.3;
            this.daojishiGroup.scaleY = 0.3;
            this.daojishiGroup.alpha = 0.3;
        };
        /*
         * 初始化分数栏.
         */
        p.initScoreBar = function () {
            this.myScoreGroup.x = -150;
            this.opponentScoreGroup.x = 1318;
        };
        /*
         * 分数进入栏动画.
         */
        p.scoreBarAnim = function () {
            var _this = this;
            var myTween = egret.Tween.get(this.myScoreGroup);
            myTween.to({ x: 10, y: 290 }, 500);
            var opponentTween = egret.Tween.get(this.opponentScoreGroup);
            opponentTween.to({ x: 1168, y: 290 }, 500).call(function () {
                _this.titleAnim(); //播放动画.
            });
        };
        /*
         * 重置分数栏
         */
        p.resetScoreBar = function () {
            this.myScoreImage.height = 0;
            this.opponentScoreImage.height = 0;
        };
        /*
         * 进行下一题.
         */
        p.onNextQA = function () {
            this.onShowEnemyMark = null;
            this.onResetSelectBtn(this.playerSelect);
            this.onResetSelectBtn(this.opponentSelect);
            this.playerSelect = -1;
            this.opponentSelect = -1;
            ++this.queIndex;
            console.log("一题结束,增加题号id: this.queIndex++" + this.queIndex);
            this.initQATurn(); //下一题赋值.
            this.titleAnim(); //下一题动画.
        };
        /*
         * 初始化敵人AI.
         */
        p.initEnemyAI = function () {
            var _this = this;
            //            var qList = Model.WebValue.gameDataM.questionListModel;
            var ansDetail = Model.WebValue.gameDataM.enemyModel.answerDetailModel;
            //            alert("ansDetail[this.queIndex].timeCost");
            setTimeout(function () {
                _this.onSelectAnswer(_this.answerIndex, ansDetail[_this.queIndex].ansIndex, Camp.Opponent);
            }, ansDetail[this.queIndex].timeCost * 1000);
        };
        //Temp answer btn event.(无法移除匿名函数临时替代方案.)
        p.addBtn1 = function () {
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex, 0, Camp.Player);
        };
        p.addBtn2 = function () {
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex, 1, Camp.Player);
        };
        p.addBtn3 = function () {
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex, 2, Camp.Player);
        };
        p.addBtn4 = function () {
            this.clearBtnEvent();
            this.onSelectAnswer(this.answerIndex, 3, Camp.Player);
        };
        /*
         *  移除4個按鈕事件.
         */
        p.clearBtnEvent = function () {
            //            for(var i: number = 0;i < this.answerBtnGroup.numChildren;i++) {//ans 
            //                var ansBtn = <eui.Button>this.answerBtnGroup.getChildAt(i);
            ////                ansBtn = new eui.Button();
            //            }
            this.answer_01.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn1, this);
            this.answer_02.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn2, this);
            this.answer_03.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn3, this);
            this.answer_04.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtn4, this);
        };
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
        p.onSelectAnswer = function (_answerIndex, _selectIndex, _camp) {
            var _this = this;
            //            by fangchao 2015.12.11
            this.answerTimes++;
            if (_answerIndex == _selectIndex) {
                var markBg = function () {
                    _this.answerMaskGroup.visible = true;
                    var image = _this.answerMaskGroup.getChildAt(_selectIndex);
                    image.source = "button_lv";
                    image.visible = true;
                };
                if (_camp == Camp.Player) {
                    markBg();
                    //by fangchao 2015.12.11
                    this.correctTimes++;
                    //左圓.
                    this.playerSelect = _selectIndex;
                    this.leftMarkGroup.visible = true;
                    var mark = this.leftMarkGroup.getChildAt(_selectIndex);
                    mark.source = "icon_dadui01";
                    mark.visible = true;
                    this.setMyScoreBar(true);
                    var audio = new Model.AudioService("user_correct_mp3"); //玩家答对音效.
                }
                else {
                    //右圓.
                    this.setEnemyScoreBar(true, function () {
                        markBg();
                        _this.answerMaskGroup.touchEnabled = false;
                        var image = _this.answerMaskGroup.getChildAt(_selectIndex);
                        image.touchEnabled = false;
                        _this.opponentSelect = _selectIndex;
                        _this.rightMarkGroup.visible = true;
                        var mark = _this.rightMarkGroup.getChildAt(_selectIndex);
                        mark.source = "icon_dadui01";
                        mark.visible = true;
                    });
                }
            }
            else {
                var markBg = function () {
                    _this.answerMaskGroup.visible = true;
                    var image = _this.answerMaskGroup.getChildAt(_selectIndex);
                    image.source = "button_hong";
                    image.visible = true;
                };
                if (_camp == Camp.Player) {
                    markBg();
                    //左叉.
                    this.playerSelect = _selectIndex;
                    this.leftMarkGroup.visible = true;
                    var mark = this.leftMarkGroup.getChildAt(_selectIndex);
                    mark.source = "icon_dacuo01";
                    mark.visible = true;
                    this.setMyScoreBar(false);
                    var audio = new Model.AudioService("user_wrong_mp3"); //玩家答错音效.
                }
                else {
                    //右叉.
                    this.setEnemyScoreBar(false, function () {
                        markBg();
                        _this.answerMaskGroup.touchEnabled = false;
                        var image = _this.answerMaskGroup.getChildAt(_selectIndex);
                        image.touchEnabled = false;
                        _this.opponentSelect = _selectIndex;
                        _this.rightMarkGroup.visible = true;
                        var mark = _this.rightMarkGroup.getChildAt(_selectIndex);
                        mark.source = "icon_dacuo01";
                        mark.visible = true;
                    });
                }
            }
        };
        p.setEnemyScoreBar = function (flag, _onShowEnemyMark) {
            var _this = this;
            if (flag) {
                //得分，绿色分数栏.
                this.opponentScoreImage.height += 374 * this.enemyEarnScore() / (200 * this.lModel.turns); //TODO:进度条总长度=200*（回合+1）
                console.log("enemy score " + this.enemyEarnScore());
                console.log("enemy height" + this.opponentScoreImage.height);
            }
            else {
                //红色分数栏.
                this.opponentErrorImage.visible = true;
                //                by fangchao 2015.12.14 处理错误条的条长和位置
                this.opponentErrorImage.height -= this.opponentScoreImage.height;
                this.opponentErrorImage.bottom += this.opponentScoreImage.height;
                var tween = egret.Tween.get(this.opponentErrorImage);
                tween.to({ alpha: 1 }, 500, egret.Ease.sineIn).call(function () {
                    _this.opponentErrorImage.visible = false;
                    //                by fangchao 2015.12.14 处理错误条的条长和位置
                    _this.opponentErrorImage.height += _this.opponentScoreImage.height;
                    _this.opponentErrorImage.bottom -= _this.opponentScoreImage.height;
                });
            }
            if (this.playerSelect != -1) {
                //                alert("this.playerselect " + this.playerSelect);
                _onShowEnemyMark();
                this.onShowEnemyMark = null;
            }
            else {
                this.onShowEnemyMark = _onShowEnemyMark;
            }
        };
        /*
        * 对手单题分数= ROUNDDOWN(200*对手倒计时时间/time，0)
        */
        p.enemyEarnScore = function () {
            return Math.ceil(200 * Model.WebValue.gameDataM.enemyModel.answerDetailModel[this.queIndex].timeCost / this.lModel.duringTurns);
        }; //TODO: 后台没有传 this.lModel.basicScore
        p.setMyScoreBar = function (flag) {
            var _this = this;
            if (flag) {
                console.log("this.myEarnScore() " + this.myEarnScore());
                this.myScoreImage.height += 374 * this.myEarnScore() / (200 * this.lModel.turns); //TODO:进度条总长度=200*（回合+1）
            }
            else {
                this.myErrorImage.visible = true;
                //                by fangchao 2015.12.14 处理错误条的条长和位置
                this.myErrorImage.height -= this.myScoreImage.height;
                this.myErrorImage.bottom += this.myScoreImage.height;
                var tween = egret.Tween.get(this.myErrorImage);
                tween.to({ alpha: 1 }, 500, egret.Ease.sineIn).call(function () {
                    _this.myErrorImage.visible = false;
                    //                by fangchao 2015.12.14 处理错误条的条长和位置  
                    _this.myErrorImage.height += _this.myScoreImage.height;
                    _this.myErrorImage.bottom -= _this.myScoreImage.height;
                });
            }
            if (this.onShowEnemyMark != null) {
                this.onShowEnemyMark();
                this.onShowEnemyMark = null;
            }
        };
        /*
         * TODO:玩家单题分数=ROUNDDOWN（200*（倒计时时间/答题时间）*（1+技能加成+等级加成）,0）
         */
        p.myEarnScore = function () {
            console.log("this.basic score " + this.lModel + " this.during " + this.during + " this.lModel.duringTurns " + this.lModel.duringTurns);
            return Math.ceil(200 * (this.during / this.lModel.duringTurns)); //TODO: 后台没有传 this.lModel.basicScore
        };
        /*
         * 重置选择按钮.
         */
        p.onResetSelectBtn = function (_selectIndex) {
            if (_selectIndex == -1) {
                console.log("此次没有选择，不需要重置.");
                return;
            }
            this.leftMarkGroup.visible = false;
            var mark = this.leftMarkGroup.getChildAt(_selectIndex);
            mark.visible = false;
            this.rightMarkGroup.visible = false;
            var mark = this.rightMarkGroup.getChildAt(_selectIndex);
            mark.visible = false;
            this.answerMaskGroup.visible = false;
            var image = this.answerMaskGroup.getChildAt(_selectIndex);
            image.visible = false;
        };
        /*--------------------------------------------------------------
         * 结算模块.
         -------------------------------------------------------------*/
        /*
         * 回答完成,跳轉結算界面.
         */
        p.onReplyComplete = function () {
            var _this = this;
            this.uiLayer.swapChildrenAt(0, 1);
            this.initAccountHead();
            this.initResult();
            this.gameGroup.visible = false;
            this.accountGroup.visible = true;
            var onAgain = function () {
                //回關卡列表.
                var mainMenuVM = new ViewModel.MainMenuVM(_this.uiLayer, function () {
                    alert("zhujun:　main menu on call back !　");
                }, ViewModel.PageName.SceneList);
                _this.uiLayer.removeChild(_this);
                mainMenuVM.num++; //by cai_haotian,2015.12.09.
            };
            var onSearch = function () {
                //回搜索畫面.
                var cost = Model.WebValue.settleM.gold;
                var p = Model.WebValue.menuDataM.playerModel;
                console.log(p.gold);
                //                涉及到金钱是否足够下一轮的判断 by fangchao 2015.12.25
                if (p.gold >= -cost) {
                    _this.uiLayer.swapChildrenAt(0, 1);
                    _this.accountGroup.visible = false;
                    _this.searchGroup.visible = true;
                    _this.resetSearchGroup();
                    _this.searchOpponentBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onSearch, _this.searchOpponentBtn);
                    _this.againChallengeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onAgain, _this.againChallengeBtn);
                    _this.backHomeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onBackHome, _this.backHomeBtn);
                }
                else {
                    new ViewModel.ErrorMsgVM(_this.uiLayer, "您当前金币不足，请充值兑换哦！");
                }
            };
            var onBackHome = function () {
                _this.uiLayer.removeChild(_this);
                //回主頁.
                var mainMenuVM = new ViewModel.MainMenuVM(_this.uiLayer);
                mainMenuVM.num++; //by cai_haotian,2015.12.09.
                //var tite = new ViewModel.TitleInfoVM(this.uiLayer);
            };
            this.againChallengeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, onAgain, this.againChallengeBtn);
            this.searchOpponentBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, onSearch, this.searchOpponentBtn);
            this.backHomeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, onBackHome, this.backHomeBtn);
        };
        p.initAccountHead = function () {
            var p = Model.WebValue.menuDataM.playerModel;
            var e = Model.WebValue.gameDataM.enemyModel;
            this.myAccountHead.enabled = false;
            var iconTemp = egret.localStorage.getItem("headBtn");
            var bgTemp = egret.localStorage.getItem("headBg");
            this.myAccountHead.headBtn.source = iconTemp == null ? "01" : iconTemp; //egret.localStorage.getItem("headBtn");
            this.myAccountHead.headBg.source = bgTemp == null ? "hong" : bgTemp; //egret.localStorage.getItem("headBg");
            this.myAccountNameLabel.text = p.nickName;
            this.opponentAccountHead.enabled = false;
            var t = function () {
                if (e.headId == 1 || e.headId == 5 || e.headId == 9) {
                    return "hong";
                }
                else if (e.headId == 2 || e.headId == 6 || e.headId == 10) {
                    return "huang";
                }
                else if (e.headId == 3 || e.headId == 7 || e.headId == 11) {
                    return "lan";
                }
                else {
                    return "zi";
                }
            };
            this.opponentAccountHead.headBg.source = t();
            this.opponentAccountHead.headBtn.source = Model.Tools.padLeft(String(e.headId), "0", 2);
            this.opponentAccountNameLabel.text = e.name;
        };
        /*
         * 初始化结果.
         */
        p.initResult = function () {
            if (this.isResultWin) {
                this.resultlabel.text = "挑战成功";
                DCAgent.onMissionFinished(this.lModel.sceneId.toString(), 888);
            }
            else {
                this.resultlabel.text = "挑战失败";
                DCAgent.onMissionUnfinished(this.lModel.sceneId.toString(), 888);
            }
            this.rightByRightLabel.text = "回报结算";
            this.goldLabel.text = Model.WebValue.settleM.gold.toString();
            this.expLabel.text = Model.WebValue.settleM.exp.toString();
            //            TitleInfoVM.singleton.plusGold(Model.WebValue.settleM.gold);
            //            TitleInfoVM.singleton.expBar.value += Model.WebValue.settleM.exp;
            //            by fangchao 2015.12,11             更新界面数据
            var p = Model.WebValue.menuDataM.playerModel;
            if (p.expCurrent + Model.WebValue.settleM.exp < p.expMax) {
                p.expCurrent += Number(this.expLabel.text);
            }
            else {
                p.level = Model.WebValue.settleM.level;
                p.expCurrent += Number(this.expLabel.text);
                p.expCurrent -= p.expMax;
                p.expMax = Model.WebValue.settleM.expMax;
                new ViewModel.LevelUpVM("第 " + Model.WebValue.settleM.level + " 级", this.uiLayer);
            }
            var winTimes = this.isResultWin ? parseInt(p.militaryExploit.slice(p.militaryExploit.indexOf('战') + 1)) + 1 : parseInt(p.militaryExploit.slice(p.militaryExploit.indexOf('战') + 1));
            p.jackpot += Model.WebValue.settleM.gold;
            p.militaryExploit = parseInt(p.militaryExploit) + 1 + "战" + winTimes + "胜";
            p.winRate = Math.round(winTimes / parseInt(p.militaryExploit) * 1000) / 10;
            p.rightQueNum += this.correctTimes;
            this.correctTimes = 0;
            ViewModel.TitleInfoVM.singleton.plusGold(Model.WebValue.settleM.gold);
            ViewModel.TitleInfoVM.singleton.plusLevel(Model.WebValue.settleM.level);
            ViewModel.TitleInfoVM.singleton.expBar.value = p.expCurrent;
            ViewModel.TitleInfoVM.singleton.expBar.maximum = p.expMax;
            var sList = Model.WebValue.menuDataM.skillModelList;
            for (var i = 0; i < sList.length; i++) {
                if (sList[i]["unlockLevel"] <= Model.WebValue.settleM.level) {
                    sList[i]["unlock"] = true;
                }
                else {
                    break;
                }
                ;
            }
        };
        return MainGameVM;
    })(eui.Component);
    ViewModel.MainGameVM = MainGameVM;
    egret.registerClass(MainGameVM,'ViewModel.MainGameVM');
})(ViewModel || (ViewModel = {}));

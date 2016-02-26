module ViewModel {

    export enum PageName {
        MainMenu,
        SceneList
    }
	/**
	 *
	 * @author 
	 *
	 */
    export class MainMenuVM extends eui.Component {

        private uiLayer: eui.UILayer;
        private onCallBack: Function;
        private headMsgVM: ViewModel.HeadMsgVM;
        private settingMsgVM: ViewModel.SettingMsgVM;
        private mainGameVM: ViewModel.MainGameVM;
        /*
         * 主菜单好友按钮.
         */
        private friendItemBtn: eui.Button;
        private friendMask: eui.Image;
        /*
         * 主菜单银行按钮.
         */
        private bankItemBtn: eui.Button;
        
        //bankItemGroup
        private bankItemGroup: eui.Group;
        private bankMask: eui.Image;
        private goldPercent: eui.Label;
        private goldBar: eui.ProgressBar;

        /*
         * 主菜单挑战按钮.
         */
        private challengeItemBtn: eui.Button;
        /*
         * 主菜单履历按钮.
         */
        private recordItemBtn: eui.Button;

        private menuBtnGroup: eui.Group;
        private levelGroup: eui.Group;
        private recordGroup: eui.Group;
        private headGroup: eui.Group;
        private leftTimeLabel: eui.Label;
        //infoBtnGroup
        private headSettingBtn: eui.Button;
        private systemSettingBtn: eui.Button;
        private closeBtn: eui.Button;
        private achievementBtn: eui.Button;
        private maskBg: eui.Button;
        private recordMask: eui.Image;
        //headGroup
        private headIcon: eui.Image;
        private headBg: eui.Image;
        private nameLabel: eui.Label;
        //infoGroup
        private levelValue: eui.Label;
        private expValue: eui.Label;
        private combatGainsValue: eui.Label;
        private winRateValue: eui.Label;
        private rightNumValue: eui.Label;
        private beatNumValue: eui.Label;
        private jackpotValue: eui.Label;
        private goldAdditionValue: eui.Label;
        private scoreAdditionValue: eui.Label;
        private expAdditionValue: eui.Label;
        //sceneGroup
        private backBtn: eui.Button;
        private levelListGroup: eui.Group;
        private challengeMask: eui.Image;
        /*
         * 主菜单技能按钮.
         */
        private skillItemBtn: eui.Button;
        //skillGroup
        private skillGroup: eui.Group;
        private skillListGroup: eui.Group;
        private skillBackBtn: eui.Button;
        private skillScrollerGroup: eui.Group;
        private skillMask: eui.Image;
        /*
         * 技能升级遮罩group.
         */
        private skillUpGroup: eui.Group;
        /*
         * 技能剩余时间.
         */
        private skillLeftLabel: eui.Label;
        /*
         * 技能升级条.
         */
        private skillBar: eui.ProgressBar;
        /*
         * 技能当前状态.
         */
        private skillStateLabel: eui.Label;
        
        /*
         * 全局技能升级状态
         */
        private timer: number = 0;
        /*
         * 技能全局参数by cai_haotian 2015.12.22.
         */
        private skill: Model.SkillModel;
        public num: number = 0;

        public constructor(_uiLayer?: eui.UILayer,_onCallBack?: Function,pageName?: PageName) {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
            this.skinName = "View.MainMenuView";
            this.uiLayer = _uiLayer;
            this.onCallBack = _onCallBack;
            this.uiLayer.addChildAt(this,0);
            if(pageName == PageName.SceneList) {
                this.extraInitSceneList();
            } else {

            }
        }

        private extraInitSceneList() {
            this.menuBtnGroup.x = -1280;
            this.levelGroup.x = 0;
        }

        private onComplete(): void {
            console.log("onComplete");
        }

        protected createChildren() {
            super.createChildren();
            console.log("createChildren")
            this.initHead();
            this.initRecordBtn();
            this.initSceneGroup();
            this.initSkillGroup();
            this.initInfoGroup();
            this.initBank();
            this.initBankBtn();
            this.initFriendBtn();
            /*
             * 技能加速初始化by cai_haotian 2015.12.21.
             */
            this.initSpeedUpSkill()
            this.skillItemBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3");
                this.maskBg.touchEnabled = true;
                var sTween = egret.Tween.get(this.skillGroup);
                sTween.to({ x: 0 },300,egret.Ease.circIn).call(() => { this.maskBg.touchEnabled = false; });
                this.skillMask.visible = false;
                this.skillUpGroup.visible = false;
            },this);
            this.skillBackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3");
                this.maskBg.touchEnabled = true;
                var sTween = egret.Tween.get(this.skillGroup);
                sTween.to({ x: 1280 },300,egret.Ease.circIn).call(() => { this.maskBg.touchEnabled = false; });
            },this);
            this.challengeItemBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3");
                this.maskBg.touchEnabled = true;
                var mbTween = egret.Tween.get(this.menuBtnGroup);
                mbTween.to({ x: -1280 },300,egret.Ease.circIn).call(() => { this.maskBg.touchEnabled = false; });
                var lTween = egret.Tween.get(this.levelGroup);
                lTween.to({ x: 0 },300,egret.Ease.circIn);
            },this);


        }
        
        /*
         * 初始化好友按钮.
         */
        private initFriendBtn() {
            this.friendMask.touchEnabled = false;
            this.friendItemBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,() => {
                this.friendMask.visible = true;
            },this);
            this.friendItemBtn.addEventListener(egret.TouchEvent.TOUCH_END,() => {
                this.friendMask.visible = false;
            },this);
            this.friendItemBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3",() => {
                    new ViewModel.ErrorMsgVM(this.uiLayer,"您的等级不足，此功能在30级以后开放 ! ");
                });
            },this);
        }
        
        /*
         * 初始化履历相关按钮.
         */
        private initRecordBtn() {
            this.recordMask.touchEnabled = false;
            this.recordItemBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,() => {
                this.recordMask.visible = true;
            },this);
            this.recordItemBtn.addEventListener(egret.TouchEvent.TOUCH_END,() => {
                this.recordMask.visible = false;
            },this);
            this.recordItemBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.recordBtnEvent,this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtnEvent,this);
            this.headSettingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3");
                this.headMsgVM = new ViewModel.HeadMsgVM(this.uiLayer,() => {
                    var audio: Model.AudioService = new Model.AudioService("click_mp3");
                    this.initHead();
                });
            },this);
            this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3");
                this.maskBg.touchEnabled = true;
                var mbTween = egret.Tween.get(this.menuBtnGroup);
                mbTween.to({ x: 0 },300,egret.Ease.circIn).call(() => { this.maskBg.touchEnabled = false; });
                var lTween = egret.Tween.get(this.levelGroup);
                lTween.to({ x: 1280 },300,egret.Ease.circIn);
            },this);
            this.headGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3");
                this.headMsgVM = new ViewModel.HeadMsgVM(this.uiLayer,() => {
                    var audio: Model.AudioService = new Model.AudioService("click_mp3");
                    this.initHead();
                });
            },this);
            this.achievementBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3",() => {
                    new ViewModel.ErrorMsgVM(this.uiLayer,"您的等级不足，此功能20级后开放 ! ");
                });
            },this);
            this.systemSettingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                var audio: Model.AudioService = new Model.AudioService("click_mp3");
                this.settingMsgVM = new ViewModel.SettingMsgVM(this.uiLayer,() => {
                    var audio: Model.AudioService = new Model.AudioService("click_mp3");
                });
            },this);
        }
        
        /*
         * Init info group data.
         */
        private initInfoGroup() {
            var p = Model.WebValue.menuDataM.playerModel;
            this.levelValue.text = String(p.level);
            this.expValue.text = String(p.expCurrent + "/" + p.expMax);
            this.rightNumValue.text = String(p.rightQueNum);
            this.beatNumValue.text = String(p.beatLevelOwnNum);
            this.jackpotValue.text = String(p.jackpot);
            this.goldAdditionValue.text = String(p.goldAddition + "%");
            this.scoreAdditionValue.text = String(p.scoreAddition + "%");
            this.expAdditionValue.text = String(p.expAddition + "%");
            //          by fangchao 2015.12.11
            var totalTimes = parseInt(p.militaryExploit);
            var winTimes = parseInt(p.militaryExploit.slice(p.militaryExploit.indexOf("战") + 1));
            this.combatGainsValue.text = p.militaryExploit;
            this.winRateValue.text = totalTimes ? String(Math.round(winTimes / totalTimes * 1000) / 10 + "%") : "0";
        }
        
        /*
         * 初始化关卡组.
         */
        private initSceneGroup() {
            var lList = Model.WebValue.menuDataM.sceneModelList;
            //            console.log("zhujun: " + JSON.stringify(lList));
            for(var i = 0;i < this.levelListGroup.numChildren;i++) {//只有控件少，数据多的容错.
                if(this.levelListGroup.getChildAt(i).name == "LevelItemVM" && i < lList.length) {
                    var lItem = <LevelItemVM>this.levelListGroup.getChildAt(i);
                    lItem.levelModel = lList[i];
                    lItem.onCallBack = (_lModel: Model.SceneModel) => {
                        if(Model.WebValue.menuDataM.playerModel.gold < _lModel.goldCost) {
                            new ViewModel.ErrorMsgVM(this.uiLayer,"您当前金币不足,请充值兑换哦 ! ");
                            var audio: Model.AudioService = new Model.AudioService("rival_wrong_mp3",() => {

                            });//金币不足音效.
                            return;
                        } else {
                            var audio: Model.AudioService = new Model.AudioService("start_mp3");//关卡开始音效.
                        }
                        //                        TitleInfoVM.singleton.plusGold(-_lModel.goldCost);//减钱.//by zhu_jun,2015.12.10.
                        this.mainGameVM = new MainGameVM(this.uiLayer,() => {
                            Model.WebValue.isStartBank = true;
                        },_lModel);
                        console.log("Test: this name is " + this.name);
                        this.uiLayer.removeChild(this);
                    };
                } else {
                    break;
                }
            }
        }
        /*
         * 初始化技能组.
         */
        private initSkillGroup() {
            var sList = Model.WebValue.menuDataM.skillModelList;
            //            console.log("zhujun: Model.WebValue.menuDataM.skillModelList \n" + JSON.stringify(sList));
            //            console.log("this.skillScrollerGroup.numChildren : " + this.skillScrollerGroup.numChildren);
            for(var i = 0;i < this.skillScrollerGroup.numChildren;i++) {//只有控件少，数据多的容错.
                //                console.log(" i : " + i);
                if(i < sList.length) {
                    var sItem = <SkillItemVM>this.skillScrollerGroup.getChildAt(i);
                    sItem.setSModel = sList[i];
                    //by cai_haotian 2015.12.11 初次进入游戏界面判断是否存在技能 在更新
                    if(sList[i].leftDuring != 0 && sList[i].leftDuring != sList[i].during) {
                        this.jisuan(sList[i]);
                    }
                    sItem.onCallBack = null;
                    sItem.onCallBack = (_sModel: Model.SkillModel) => {
                        //传送技能id by cai_haotian 2015.12.10. start
                        //判断钱是否够用
                        if(_sModel.dCost == 0 && _sModel.gCost == 0) {
                            new ViewModel.ErrorMsgVM(this.uiLayer,"已经升级到最高等级！");
                            return;
                        }
                        if(Model.WebValue.menuDataM.playerModel.gold >= _sModel.gCost && Model.WebValue.menuDataM.playerModel.diamond >= _sModel.dCost) {
                            Model.WebService.skillTraining(_sModel.skillId,(_request: egret.HttpRequest) => {
                                Model.WebValue.skillM = JSON.parse(_request.response);
                                Model.WebValue.menuDataM.playerModel.gold = Model.WebValue.skillM.gold;
                                Model.WebValue.menuDataM.playerModel.diamond = Model.WebValue.skillM.diamond;
                                TitleInfoVM.singleton.updateGold(Model.WebValue.skillM.gold);
                                TitleInfoVM.singleton.updateDiamond(Model.WebValue.skillM.diamond);
                                this.jisuan(_sModel,1);
                                return;
                            });
                        } else {
                            if(Model.WebValue.menuDataM.playerModel.gold >= _sModel.gCost && Model.WebValue.menuDataM.playerModel.diamond < _sModel.dCost) {
                                new ViewModel.ErrorMsgVM(this.uiLayer,"对不起，您没有足够的钻石来升级技能！");
                            } else if(Model.WebValue.menuDataM.playerModel.gold < _sModel.gCost && Model.WebValue.menuDataM.playerModel.diamond >= _sModel.dCost) {
                                new ViewModel.ErrorMsgVM(this.uiLayer,"对不起，您没有足够的金币来升级技能！");
                            } else {
                                new ViewModel.ErrorMsgVM(this.uiLayer,"对不起，您没有足够的金币和钻石来升级技能！");
                            }
                            return;
                        }
                        //end
                        console.log("this skill model call back " + _sModel.name);
                    };
                } else {
                    break;
                }
            }
        }

        //正常不加速技能 by cai_haotian 2015.12.11

        private jisuan(askill: Model.SkillModel,first?: number) {
            egret.clearInterval(this.timer);
            this.skill = askill;
            this.skillStateLabel.text = askill.name + " Lv." + askill.level;
            var sTween = egret.Tween.get(this.skillGroup);
            sTween.to({ x: 1280 },300,egret.Ease.circIn);
            this.skillItemBtn.touchEnabled = false;
            this.skillUpGroup.visible = true;
            this.skillUpGroup.touchEnabled = true;
            this.skillBar.value = Math.floor(askill.leftDuring / askill.during * 100);
            this.skillBar.maximum = 100;
            this.skillBar.minimum = 0;
            this.skillBar.labelDisplay.visible = false;
            var time = askill.during - askill.leftDuring;
            var timeSpan: Model.TimeSpan = Model.TimeSpan.FromSeconds(time);
            this.skillLeftLabel.text = timeSpan.toString();
            this.timer = egret.setInterval(function() {
                if(askill.leftDuring == askill.during) {
                    this.skillUpGroup.touchEnabled = false;
                    egret.clearInterval(this.timer);
                    this.twinkle(askill);
                    //by cai_haotian 2015.12.16.
                    Model.WebService.skillTrained(askill.skillId,(_request: egret.HttpRequest) => {
                        console.log("new content：" + JSON.stringify(JSON.parse(_request.response).skillModel));
//                      by fangchao
                        console.log("new addition" + JSON.stringify(JSON.parse(_request.response).goldAddition));
                        Model.WebValue.trainedM.goldAddition = JSON.parse(_request.response).goldAddition;
                        Model.WebValue.trainedM.scoreAddition =JSON.parse(_request.response).scoreAddition;
                        Model.WebValue.trainedM.expAddition = JSON.parse(_request.response).expAddition;
                        var p = Model.WebValue.menuDataM.playerModel;
                        p.goldAddition = Model.WebValue.trainedM.goldAddition;
                        p.scoreAddition = Model.WebValue.trainedM.scoreAddition;
                        p.expAddition = Model.WebValue.trainedM.expAddition;
                        this.goldAdditionValue.text = String(p.goldAddition + "%");
                        this.scoreAdditionValue.text = String(p.scoreAddition + "%");
                        this.expAdditionValue.text = String(p.expAddition + "%");
                        //end
                        var content: Model.SkillModel = JSON.parse(_request.response).skillModel;
                        for(var i = 0;i < this.skillScrollerGroup.numChildren;i++) {
                            if(Model.WebValue.menuDataM.skillModelList[i].skillId == content.skillId - 1) {
                                Model.WebValue.menuDataM.skillModelList[i] = content;
                                this.initSkillGroup();
                            }
                        }
                    });
                    new ViewModel.SkillTrainedVM(askill.iconImage,askill.name,"",this.uiLayer);
                    return;
                }
                if(first != 1) {
                    askill.leftDuring -= this.num * 1;
                }
                askill.leftDuring++;
                time = askill.during - askill.leftDuring;
                timeSpan = Model.TimeSpan.FromSeconds(time);
                this.skillLeftLabel.text = timeSpan.toString();
                this.skillBar.value = Math.floor(askill.leftDuring / askill.during * 100);
            },this,1010);
        }
        //技能加速
        private initSpeedUpSkill() {
            this.skillUpGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                new ViewModel.SkillSpeedUpVM(this.uiLayer,this.skill,() => {
                    if(Model.WebValue.menuDataM.playerModel.diamond >= this.skill.speedCost) {
                        egret.clearInterval(this.timer);
                        Model.WebValue.menuDataM.playerModel.diamond -= this.skill.speedCost;
                        TitleInfoVM.singleton.updateDiamond(Model.WebValue.menuDataM.playerModel.diamond);
                        Model.WebService.skillSpeedUp(this.skill.skillId,(_request: egret.HttpRequest) => {
                            this.twinkle(this.skill);
                            console.log("new content：" + JSON.stringify(JSON.parse(_request.response).skillModel));
    //                      by fangchao
                            console.log("new addition:         fangchao       " + JSON.parse(_request.response).goldAddition);
                            Model.WebValue.trainedM.goldAddition = JSON.parse(_request.response).goldAddition;
                            Model.WebValue.trainedM.scoreAddition = JSON.parse(_request.response).scoreAddition;
                            Model.WebValue.trainedM.expAddition = JSON.parse(_request.response).expAddition;
                            console.log("方超在这儿"+JSON.stringify(Model.WebValue.trainedM));    
                            console.log("fangchao 在此        " + JSON.stringify(Model.WebValue.trainedM));
                            var p = Model.WebValue.menuDataM.playerModel;
                            p.goldAddition = Model.WebValue.trainedM.goldAddition;
                            p.scoreAddition = Model.WebValue.trainedM.scoreAddition;
                            p.expAddition = Model.WebValue.trainedM.expAddition;
                            this.goldAdditionValue.text = String(p.goldAddition + "%");
                            this.scoreAdditionValue.text = String(p.scoreAddition + "%");
                            this.expAdditionValue.text = String(p.expAddition + "%");
                    //end
                            var content: Model.SkillModel = JSON.parse(_request.response).skillModel;
                            for(var i = 0;i < this.skillScrollerGroup.numChildren;i++) {
                                if(Model.WebValue.menuDataM.skillModelList[i].skillId == content.skillId - 1) {
                                    Model.WebValue.menuDataM.skillModelList[i] = content;
                                    this.initSkillGroup();
                                }
                            }
                        });
                        this.uiLayer.removeChildAt(2);
                    } else {
                        new ViewModel.ErrorMsgVM(this.uiLayer,"钻石不足！");
                    }
                    new ViewModel.SkillTrainedVM(this.skill.iconImage,this.skill.name,"",this.uiLayer);
                    return;
                });
            },this);
        }
        
        //技能时间到时闪烁动画
        private twinkle(askill: Model.SkillModel): void {
            this.skillItemBtn.touchEnabled = true;
            this.skillUpGroup.touchEnabled = false;
            this.skillBar.enabled = false;
            this.skillStateLabel.text = askill.name + " Lv." + askill.level + " 升级完成！";
            this.skillLeftLabel.text = "00:00:00";
            this.skillBar.value = 100;
            this.skillMask.visible = true;
            this.skillMask.alpha = 0.3;
            var bankMaskAlphaTween = egret.Tween.get(this.skillMask,{ loop: true });
            bankMaskAlphaTween.to({ alpha: 0.8 },1200,egret.Ease.sineIn).to({ alpha: 0.3 },1200,egret.Ease.sineIn);
        }
        
        /*
         * 初始化头像.
         */
        private initHead() {
            var iconTemp = egret.localStorage.getItem("headBtn")
            var bgTemp = egret.localStorage.getItem("headBg");
            this.headIcon.source = iconTemp == null ? "01" : iconTemp;
            this.headBg.source = bgTemp == null ? "hong" : bgTemp;
            this.nameLabel.text = Model.WebValue.menuDataM.playerModel.nickName;
        }
        
        /*
         * 银行UI初始化以及刷新.
         */
        private initBank() {
            var bankData = Model.WebValue.menuDataM.bankModel;
            //init bank left time
            var timeSpan: Model.TimeSpan = Model.TimeSpan.FromSeconds(bankData.leftTime);
            this.leftTimeLabel.text = timeSpan.toString();
            var tempGold = Model.WebValue.menuDataM.bankModel.goldMax - Math.ceil(timeSpan.totalSeconds() / 60)// - 1;
            Model.WebValue.menuDataM.bankModel.goldCurrent = tempGold;// < 0 ? 0 : tempGold;//重启时会减到-1,所以要有容错.
            this.goldPercent.text = String(bankData.goldCurrent + "/" + bankData.goldMax);
            this.goldBar.value = bankData.goldCurrent;
            this.goldBar.minimum = 0;
            this.goldBar.maximum = bankData.goldMax;
            this.goldBar.labelDisplay.visible = false;
            if(timeSpan.totalSeconds() <= 0) {//倒计时为0，直接return.
                //闪光特效.gold is full.
                this.bankMask.visible = true;
                this.bankMask.alpha = 0.3;
                var bankMaskAlphaTween = egret.Tween.get(this.bankMask,{ loop: true });
                bankMaskAlphaTween.to({ alpha: 0.8 },1200,egret.Ease.sineIn).to({ alpha: 0.3 },1200,egret.Ease.sineIn);
                return;
            }
            egret.setTimeout(() => {
                //修改项目
                Model.WebValue.menuDataM.bankModel.leftTime += this.num * 1;//by cai_haotian,2015.12.09.
                Model.WebValue.menuDataM.bankModel.leftTime -= 1;
                this.initBank();
            },this,1000);
        }
        
        /*
         * 银行按钮初始化.
         */
        private initBankBtn() {
            this.bankMask.touchEnabled = false;
            this.bankItemBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,() => {
                this.bankMask.visible = true;
            },this);
            this.bankItemBtn.addEventListener(egret.TouchEvent.TOUCH_END,() => {
                this.bankMask.visible = false;
            },this);
            this.bankItemBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {

                if(Model.WebValue.menuDataM.bankModel.goldCurrent == 0) {
                    var audio: Model.AudioService = new Model.AudioService("rival_wrong_mp3");
                    var bankMsg: BankMsgItemVM = new BankMsgItemVM(this.bankItemGroup);
                    return;
                } else {
                    var audio: Model.AudioService = new Model.AudioService("coin_mp3");
                }
                Model.WebService.drawMoney((_request: egret.HttpRequest) => {
                    //重置银行进度条.
                    console.log("zhujun: draw money _request " + _request);
                    //数字飘升动画.
                    var bankMsg: BankMsgItemVM = new BankMsgItemVM(this.bankItemGroup,String(Model.WebValue.menuDataM.bankModel.goldCurrent));
                    Model.WebValue.menuDataM.bankModel.goldCurrent = 0;//重置数据.
                    Model.WebValue.menuDataM.bankModel.leftTime = Model.WebValue.menuDataM.bankModel.goldMax * 60;
                    var bankData = Model.WebValue.menuDataM.bankModel;//更新UI.
                    this.goldPercent.text = String(bankData.goldCurrent + "/" + bankData.goldMax);
                    this.goldBar.value = bankData.goldCurrent;
                    //如果金币已经满格,initBank已经return，需要重启倒计时.
                    if(this.leftTimeLabel.text == "00:00:00") {
                        this.initBank();
                    }
                    //金币增长动画.
                    Model.WebValue.drawM = JSON.parse(_request.response);
                    var tGold = Model.WebValue.menuDataM.playerModel.gold;
                    Model.WebValue.menuDataM.playerModel.gold += Model.WebValue.drawM.gold;
                    var animTime = 500;//动画时长,用于算速率和结束动画.
                    var sTime = egret.getTimer();
                    var tick = (t: number): boolean => {
                        var delta = (t - sTime) / animTime;//这边除以一千，乘以一千.单位抵消.
                        var lp = Model.Mathf.lerp(tGold,Model.WebValue.menuDataM.playerModel.gold,delta);
                        TitleInfoVM.singleton.updateGold(Math.floor(lp));
                        return true;
                    };
                    egret.startTick(tick,this);
                    egret.setTimeout(() => {
                        egret.stopTick(tick,this);
                        egret.setTimeout(() => {//by cai_haotian,2015.12.10.
                            console.log("cht : final2 " + Model.WebValue.menuDataM.playerModel.gold);
                            TitleInfoVM.singleton.updateGold(Model.WebValue.menuDataM.playerModel.gold);
                        },this,1);
                    },this,animTime);
                    //点击动画.
                    var mcData: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("goldBankSequence_json"),RES.getRes("goldBankSequence_png"));
                    var mc: egret.MovieClip = new egret.MovieClip(mcData.generateMovieClipData("goldBankSequence"));
                    mc.scaleX = 1.8;
                    mc.scaleY = 1.8;
                    mc.x = -90.0;
                    mc.y = -80.0;
                    this.bankItemGroup.addChild(mc);
                    mc.addEventListener(egret.Event.COMPLETE,() => {
                        this.bankItemGroup.removeChild(mc);
                    },this);
                    mc.play();
                });
            },this);
        }

        private recordBtnEvent() {
            var audio: Model.AudioService = new Model.AudioService("click_mp3");
            this.maskBg.touchEnabled = true;//先打開遮罩.
            var rTw = egret.Tween.get(this.recordGroup);
            rTw.to({ x: 0 },500,egret.Ease.circIn);
            var rmTw = egret.Tween.get(this.maskBg);
            rmTw.to({ alpha: 0.5 },500,egret.Ease.circIn).call(() => {
                //延時0.5秒后委託方法.
                this.maskBg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtnEvent,this);
            });
        }

        private closeBtnEvent() {
            var audio: Model.AudioService = new Model.AudioService("click_mp3");
            this.closeBtn.touchEnabled = false;//close touchenabled 
            this.maskBg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtnEvent,this);//right now remove function.
            var rTw = egret.Tween.get(this.recordGroup);
            rTw.to({ x: -1280 },500,egret.Ease.circIn);
            var rmTw = egret.Tween.get(this.maskBg);
            rmTw.to({ alpha: 0 },500,egret.Ease.circIn).call(() => {
                this.maskBg.touchEnabled = false;
                this.closeBtn.touchEnabled = true;
            });
        }
    }
}
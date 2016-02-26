var View;
(function (View) {
	var MainMenuView=(function (_super) {
		__extends(MainMenuView, _super);
		function MainMenuView() {
			_super.call(this);
			
			this.height = 720;
			this.width = 1280;
			this.elementsContent = [this.menuBtnGroup_i(),this.recordGroup_i(),this.levelGroup_i(),this.skillGroup_i()];
		}
		var _proto = MainMenuView.prototype;
	
		_proto.menuBtnGroup_i = function () {
			var t = new eui.Group();
			this.menuBtnGroup = t;
			t.height = 720;
			t.verticalCenter = 0;
			t.width = 1280;
			t.x = 0;
			t.elementsContent = [this.lvliGroup_i(),this.friendGroup_i(),this.jinengGroup_i(),this.tiaozhanGroup_i(),this.yinhangGroup_i(),this.maskBg_i()];
			return t;
		};
		_proto.lvliGroup_i = function () {
			var t = new eui.Group();
			this.lvliGroup = t;
			t.height = 305;
			t.left = 20;
			t.top = 70;
			t.width = 305;
			t.elementsContent = [this.lvliBtn_i(),this.lvliLabel_i(),this.lvliEnLabel_i()];
			return t;
		};
		_proto.lvliBtn_i = function () {
			var t = new eui.Image();
			this.lvliBtn = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "lvli_png";
			t.top = 0;
			return t;
		};
		_proto.lvliLabel_i = function () {
			var t = new eui.Label();
			this.lvliLabel = t;
			t.fontFamily = "黑体";
			t.left = 20;
			t.size = 44;
			t.text = "履歷";
			t.top = 20;
			return t;
		};
		_proto.lvliEnLabel_i = function () {
			var t = new eui.Label();
			this.lvliEnLabel = t;
			t.fontFamily = "黑体";
			t.left = 25;
			t.size = 20;
			t.text = "PROFILE";
			t.top = 65;
			return t;
		};
		_proto.friendGroup_i = function () {
			var t = new eui.Group();
			this.friendGroup = t;
			t.bottom = 20;
			t.height = 305;
			t.left = 20;
			t.width = 305;
			t.elementsContent = [this.haoyouBtn_i(),this.haoyouLabel_i(),this.haoyouEnLabel_i()];
			return t;
		};
		_proto.haoyouBtn_i = function () {
			var t = new eui.Image();
			this.haoyouBtn = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "haoyou_png";
			t.top = 0;
			return t;
		};
		_proto.haoyouLabel_i = function () {
			var t = new eui.Label();
			this.haoyouLabel = t;
			t.fontFamily = "黑体";
			t.left = 20;
			t.size = 44;
			t.text = "好友";
			t.top = 20;
			return t;
		};
		_proto.haoyouEnLabel_i = function () {
			var t = new eui.Label();
			this.haoyouEnLabel = t;
			t.fontFamily = "黑体";
			t.left = 23;
			t.size = 20;
			t.text = "FRIENDS";
			t.top = 65;
			return t;
		};
		_proto.jinengGroup_i = function () {
			var t = new eui.Group();
			this.jinengGroup = t;
			t.height = 305;
			t.right = 20;
			t.top = 70;
			t.width = 305;
			t.elementsContent = [this.jinengBtn_i(),this.jinengLabel_i(),this.jinengEnLabel_i()];
			return t;
		};
		_proto.jinengBtn_i = function () {
			var t = new eui.Image();
			this.jinengBtn = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "jineng_png";
			t.top = 0;
			return t;
		};
		_proto.jinengLabel_i = function () {
			var t = new eui.Label();
			this.jinengLabel = t;
			t.fontFamily = "黑体";
			t.left = 20;
			t.size = 44;
			t.text = "技能";
			t.top = 20;
			return t;
		};
		_proto.jinengEnLabel_i = function () {
			var t = new eui.Label();
			this.jinengEnLabel = t;
			t.fontFamily = "黑体";
			t.left = 25;
			t.size = 20;
			t.text = "S K I L L";
			t.top = 65;
			return t;
		};
		_proto.tiaozhanGroup_i = function () {
			var t = new eui.Group();
			this.tiaozhanGroup = t;
			t.bottom = 20;
			t.height = 630;
			t.horizontalCenter = 0;
			t.width = 590;
			t.elementsContent = [this.tiaozhanBtn_i(),this.tiaozhanLabel_i(),this.tiaozhanEnLabel_i()];
			return t;
		};
		_proto.tiaozhanBtn_i = function () {
			var t = new eui.Image();
			this.tiaozhanBtn = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "tiaozhan_png";
			t.top = 0;
			return t;
		};
		_proto.tiaozhanLabel_i = function () {
			var t = new eui.Label();
			this.tiaozhanLabel = t;
			t.fontFamily = "黑体";
			t.left = 20;
			t.size = 80;
			t.text = "挑戰";
			t.top = 20;
			return t;
		};
		_proto.tiaozhanEnLabel_i = function () {
			var t = new eui.Label();
			this.tiaozhanEnLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = -195.5;
			t.size = 20;
			t.text = "C H A L L E N G E";
			t.verticalCenter = -201;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.yinhangGroup_i = function () {
			var t = new eui.Group();
			this.yinhangGroup = t;
			t.bottom = 20;
			t.height = 305;
			t.right = 20;
			t.width = 305;
			t.elementsContent = [this.yinhangBtn_i(),this.yinhangLabel_i(),this.yinhangEnLabel_i(),this.bankGoldIcon_i(),this.goldPercent_i(),this.goldBar_i(),this.leftTimeLabel_i(),this.bankMask_i()];
			return t;
		};
		_proto.yinhangBtn_i = function () {
			var t = new eui.Image();
			this.yinhangBtn = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "yinhang_png";
			t.top = 0;
			return t;
		};
		_proto.yinhangLabel_i = function () {
			var t = new eui.Label();
			this.yinhangLabel = t;
			t.fontFamily = "黑体";
			t.left = 20;
			t.size = 44;
			t.text = "銀行";
			t.top = 20;
			return t;
		};
		_proto.yinhangEnLabel_i = function () {
			var t = new eui.Label();
			this.yinhangEnLabel = t;
			t.fontFamily = "黑体";
			t.left = 28;
			t.size = 20;
			t.text = "B A N K";
			t.top = 65;
			return t;
		};
		_proto.bankGoldIcon_i = function () {
			var t = new eui.Image();
			this.bankGoldIcon = t;
			t.left = 21;
			t.source = "icon_jinbi";
			t.verticalCenter = 37.5;
			return t;
		};
		_proto.goldPercent_i = function () {
			var t = new eui.Label();
			this.goldPercent = t;
			t.fontFamily = "黑体";
			t.left = 75;
			t.size = 30;
			t.text = "0/30";
			t.textAlign = "left";
			t.verticalAlign = "bottom";
			t.verticalCenter = 38.5;
			t.width = 242;
			return t;
		};
		_proto.goldBar_i = function () {
			var t = new eui.ProgressBar();
			this.goldBar = t;
			t.height = 31;
			t.left = 20;
			t.skinName = "skins.ProgressBarSkin";
			t.verticalCenter = 79;
			t.width = 140;
			return t;
		};
		_proto.leftTimeLabel_i = function () {
			var t = new eui.Label();
			this.leftTimeLabel = t;
			t.fontFamily = "黑体";
			t.left = 20;
			t.multiline = true;
			t.size = 30;
			t.text = "00：00：00";
			t.verticalCenter = 119.5;
			t.width = 272;
			return t;
		};
		_proto.bankMask_i = function () {
			var t = new eui.Image();
			this.bankMask = t;
			t.alpha = 0.5;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.maskBg_i = function () {
			var t = new eui.Image();
			this.maskBg = t;
			t.alpha = 0;
			t.bottom = 0;
			t.left = -3;
			t.right = 3;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_01";
			t.top = 0;
			t.touchEnabled = false;
			return t;
		};
		_proto.recordGroup_i = function () {
			var t = new eui.Group();
			this.recordGroup = t;
			t.height = 720;
			t.touchEnabled = false;
			t.verticalCenter = 0;
			t.width = 1280;
			t.x = -1280;
			t.elementsContent = [this.recordRectGroup_i()];
			return t;
		};
		_proto.recordRectGroup_i = function () {
			var t = new eui.Group();
			this.recordRectGroup = t;
			t.bottom = 20;
			t.left = 20;
			t.right = 450;
			t.top = 70;
			t.elementsContent = [this.recordBg_i(),this.recordIcon_i(),this.recordTitle_i(),this.headGroup_i(),this.infoGroup_i(),this.infoBtnGroup_i()];
			return t;
		};
		_proto.recordBg_i = function () {
			var t = new eui.Image();
			this.recordBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,630);
			t.source = "bg_tiankuang01";
			t.top = 0;
			return t;
		};
		_proto.recordIcon_i = function () {
			var t = new eui.Image();
			this.recordIcon = t;
			t.height = 52;
			t.left = 21;
			t.source = "icon_lvli";
			t.top = 9;
			t.width = 52;
			return t;
		};
		_proto.recordTitle_i = function () {
			var t = new eui.Label();
			this.recordTitle = t;
			t.fontFamily = "黑体";
			t.left = 84;
			t.size = 45;
			t.text = "履历";
			t.top = 13;
			return t;
		};
		_proto.headGroup_i = function () {
			var t = new eui.Group();
			this.headGroup = t;
			t.height = 300;
			t.left = 20;
			t.top = 95;
			t.width = 250;
			t.elementsContent = [this.headBorder_i(),this.headBg_i(),this.headIconGroup_i(),this.nameLabel_i()];
			return t;
		};
		_proto.headBorder_i = function () {
			var t = new eui.Image();
			this.headBorder = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.top = 0;
			return t;
		};
		_proto.headBg_i = function () {
			var t = new eui.Image();
			this.headBg = t;
			t.bottom = 65;
			t.left = 15;
			t.right = 15;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "hong";
			t.top = 15;
			return t;
		};
		_proto.headIconGroup_i = function () {
			var t = new eui.Group();
			this.headIconGroup = t;
			t.bottom = 65;
			t.left = 15;
			t.right = 15;
			t.top = 15;
			t.elementsContent = [this.headIcon_i()];
			return t;
		};
		_proto.headIcon_i = function () {
			var t = new eui.Image();
			this.headIcon = t;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "01";
			t.verticalCenter = 0;
			return t;
		};
		_proto.nameLabel_i = function () {
			var t = new eui.Label();
			this.nameLabel = t;
			t.bottom = 15;
			t.fontFamily = "黑体";
			t.horizontalCenter = 1;
			t.size = 35;
			t.text = "参赛者";
			t.textColor = 0x403F3F;
			t.top = 250;
			return t;
		};
		_proto.infoGroup_i = function () {
			var t = new eui.Group();
			this.infoGroup = t;
			t.bottom = 230;
			t.left = 275;
			t.right = 0;
			t.top = 70;
			t.elementsContent = [this.levelLabel_i(),this.levelValue_i(),this.expLabel_i(),this.expValue_i(),this.combatGainsLabel_i(),this.combatGainsValue_i(),this.winRateLabel_i(),this.winRateValue_i(),this.rightNumLabel_i(),this.rightNumValue_i(),this.beatNumLabel_i(),this.beatNumValue_i(),this.jackpotLabel_i(),this.jackpotValue_i(),this.goldAdditionLabel_i(),this.goldAdditionValue_i(),this.scoreAdditionLabel_i(),this.scoreAdditionValue_i(),this.expAdditionLabel_i(),this.expAdditionValue_i(),this.goldIcon_i()];
			return t;
		};
		_proto.levelLabel_i = function () {
			var t = new eui.Label();
			this.levelLabel = t;
			t.fontFamily = "黑体";
			t.height = 30;
			t.left = 26;
			t.text = "等級：";
			t.top = 25;
			t.width = 90;
			return t;
		};
		_proto.levelValue_i = function () {
			var t = new eui.Label();
			this.levelValue = t;
			t.bold = true;
			t.border = false;
			t.fontFamily = "黑体";
			t.size = 50;
			t.text = "1";
			t.x = 114;
			t.y = 10;
			return t;
		};
		_proto.expLabel_i = function () {
			var t = new eui.Label();
			this.expLabel = t;
			t.fontFamily = "黑体";
			t.height = 30;
			t.left = 26;
			t.text = "經驗：";
			t.top = 70;
			return t;
		};
		_proto.expValue_i = function () {
			var t = new eui.Label();
			this.expValue = t;
			t.fontFamily = "黑体";
			t.height = 30;
			t.left = 119;
			t.size = 34;
			t.text = "0/0";
			t.textAlign = "left";
			t.top = 70;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.combatGainsLabel_i = function () {
			var t = new eui.Label();
			this.combatGainsLabel = t;
			t.fontFamily = "黑体";
			t.left = 26;
			t.text = "戰績：";
			t.top = 115;
			return t;
		};
		_proto.combatGainsValue_i = function () {
			var t = new eui.Label();
			this.combatGainsValue = t;
			t.fontFamily = "黑体";
			t.left = 120;
			t.size = 30;
			t.text = "0戰0勝";
			t.textAlign = "left";
			t.top = 115;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.winRateLabel_i = function () {
			var t = new eui.Label();
			this.winRateLabel = t;
			t.fontFamily = "黑体";
			t.left = 28;
			t.text = "勝率：";
			t.top = 162;
			return t;
		};
		_proto.winRateValue_i = function () {
			var t = new eui.Label();
			this.winRateValue = t;
			t.fontFamily = "黑体";
			t.left = 118;
			t.size = 34;
			t.text = "0.0%";
			t.textAlign = "left";
			t.top = 162;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.rightNumLabel_i = function () {
			var t = new eui.Label();
			this.rightNumLabel = t;
			t.fontFamily = "黑体";
			t.left = 27;
			t.text = "答對題述：";
			t.top = 207;
			return t;
		};
		_proto.rightNumValue_i = function () {
			var t = new eui.Label();
			this.rightNumValue = t;
			t.fontFamily = "黑体";
			t.left = 168;
			t.size = 34;
			t.text = "1";
			t.textAlign = "left";
			t.top = 207;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.beatNumLabel_i = function () {
			var t = new eui.Label();
			this.beatNumLabel = t;
			t.fontFamily = "黑体";
			t.left = 26;
			t.text = "擊敗關主：";
			t.top = 253;
			return t;
		};
		_proto.beatNumValue_i = function () {
			var t = new eui.Label();
			this.beatNumValue = t;
			t.fontFamily = "黑体";
			t.left = 167;
			t.size = 34;
			t.text = "0";
			t.textAlign = "left";
			t.top = 253;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.jackpotLabel_i = function () {
			var t = new eui.Label();
			this.jackpotLabel = t;
			t.fontFamily = "黑体";
			t.left = 25;
			t.text = "累積獎金：";
			t.top = 299;
			return t;
		};
		_proto.jackpotValue_i = function () {
			var t = new eui.Label();
			this.jackpotValue = t;
			t.fontFamily = "黑体";
			t.left = 192;
			t.size = 34;
			t.text = "0";
			t.textAlign = "left";
			t.top = 299;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.goldAdditionLabel_i = function () {
			var t = new eui.Label();
			this.goldAdditionLabel = t;
			t.fontFamily = "黑体";
			t.left = 302;
			t.text = "金幣加成：";
			t.top = 207;
			return t;
		};
		_proto.goldAdditionValue_i = function () {
			var t = new eui.Label();
			this.goldAdditionValue = t;
			t.fontFamily = "黑体";
			t.left = 444;
			t.size = 34;
			t.text = "0%";
			t.textAlign = "left";
			t.top = 207;
			return t;
		};
		_proto.scoreAdditionLabel_i = function () {
			var t = new eui.Label();
			this.scoreAdditionLabel = t;
			t.fontFamily = "黑体";
			t.left = 302;
			t.text = "分數加成：";
			t.top = 253;
			return t;
		};
		_proto.scoreAdditionValue_i = function () {
			var t = new eui.Label();
			this.scoreAdditionValue = t;
			t.fontFamily = "黑体";
			t.left = 447;
			t.size = 34;
			t.text = "0%";
			t.textAlign = "left";
			t.top = 253;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.expAdditionLabel_i = function () {
			var t = new eui.Label();
			this.expAdditionLabel = t;
			t.fontFamily = "黑体";
			t.left = 302;
			t.text = "經驗加成：";
			t.top = 300;
			return t;
		};
		_proto.expAdditionValue_i = function () {
			var t = new eui.Label();
			this.expAdditionValue = t;
			t.fontFamily = "黑体";
			t.left = 446;
			t.size = 34;
			t.text = "0%";
			t.top = 300;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.goldIcon_i = function () {
			var t = new eui.Image();
			this.goldIcon = t;
			t.height = 22;
			t.left = 165;
			t.source = "icon_jinbi";
			t.top = 303;
			t.width = 22;
			return t;
		};
		_proto.infoBtnGroup_i = function () {
			var t = new eui.Group();
			this.infoBtnGroup = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 410;
			t.layout = this._BasicLayout1_i();
			t.elementsContent = [this.headSettingBtn_i(),this.systemSettingBtn_i(),this.closeBtn_i(),this.achievementBtn_i()];
			return t;
		};
		_proto._BasicLayout1_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.headSettingBtn_i = function () {
			var t = new eui.Button();
			this.headSettingBtn = t;
			t.height = 71;
			t.label = "頭像設定";
			t.left = 149;
			t.skinName = "skins.ButtonSkin";
			t.top = 30;
			t.width = 236;
			return t;
		};
		_proto.systemSettingBtn_i = function () {
			var t = new eui.Button();
			this.systemSettingBtn = t;
			t.height = 71;
			t.label = "系統設定";
			t.right = 149;
			t.skinName = "skins.ButtonSkin";
			t.top = 30;
			t.width = 236;
			return t;
		};
		_proto.closeBtn_i = function () {
			var t = new eui.Button();
			this.closeBtn = t;
			t.height = 71;
			t.label = "關閉";
			t.right = 149;
			t.skinName = "skins.ButtonSkin";
			t.top = 124;
			t.width = 236;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.achievementBtn_i = function () {
			var t = new eui.Button();
			this.achievementBtn = t;
			t.height = 71;
			t.label = "成就";
			t.right = 425;
			t.skinName = "skins.ButtonSkin";
			t.top = 124;
			t.width = 236;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.levelGroup_i = function () {
			var t = new eui.Group();
			this.levelGroup = t;
			t.height = 720;
			t.verticalCenter = 0;
			t.width = 1280;
			t.x = 1280;
			t.elementsContent = [this.challengeTemp_i(),this.backBtn_i(),this._Scroller1_i()];
			return t;
		};
		_proto.challengeTemp_i = function () {
			var t = new eui.Image();
			this.challengeTemp = t;
			t.alpha = 0.5;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "challengeTemp";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.backBtn_i = function () {
			var t = new eui.Button();
			this.backBtn = t;
			t.height = 60;
			t.horizontalCenter = -505.5;
			t.label = "回首頁";
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = -255;
			t.width = 189;
			return t;
		};
		_proto._Scroller1_i = function () {
			var t = new eui.Scroller();
			t.bottom = 23;
			t.left = 3;
			t.right = -3;
			t.top = 147;
			t.viewport = this.levelListGroup_i();
			return t;
		};
		_proto.levelListGroup_i = function () {
			var t = new eui.Group();
			this.levelListGroup = t;
			t.height = 157;
			t.width = 1041;
			t.layout = this._HorizontalLayout2_i();
			t.elementsContent = [this.levelItem_01_i(),this.levelItem_02_i(),this.levelItem_03_i(),this.levelItem_04_i(),this.levelItem_05_i(),this.levelItem_06_i(),this.levelItem_07_i(),this.levelItem_08_i(),this.shenglvehaoIcon_i(),this.wenhaoIcon_i()];
			return t;
		};
		_proto._HorizontalLayout2_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 15;
			t.horizontalAlign = "center";
			t.paddingLeft = 15;
			t.paddingRight = 15;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.levelItem_01_i = function () {
			var t = new ();
			t.height = 550;
			t.horizontalCenter = -517;
			t.levelImageSource = level_01_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			return t;
		};
		_proto.levelItem_02_i = function () {
			var t = new ();
			t.height = 550;
			t.horizontalCenter = -293;
			t.levelImageSource = level_02_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			return t;
		};
		_proto.levelItem_03_i = function () {
			var t = new ();
			t.height = 550;
			t.horizontalCenter = -65;
			t.levelImageSource = level_03_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			return t;
		};
		_proto.levelItem_04_i = function () {
			var t = new ();
			t.height = 550;
			t.levelImageSource = level_04_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			t.x = 693;
			t.y = 10;
			return t;
		};
		_proto.levelItem_05_i = function () {
			var t = new ();
			t.height = 550;
			t.horizontalCenter = 388;
			t.levelImageSource = level_05_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			t.y = 20;
			return t;
		};
		_proto.levelItem_06_i = function () {
			var t = new ();
			t.height = 550;
			t.horizontalCenter = 388;
			t.levelImageSource = level_06_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			t.x = 10;
			t.y = 30;
			return t;
		};
		_proto.levelItem_07_i = function () {
			var t = new ();
			t.height = 550;
			t.horizontalCenter = 388;
			t.levelImageSource = level_07_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			t.x = 20;
			t.y = 40;
			return t;
		};
		_proto.levelItem_08_i = function () {
			var t = new ();
			t.height = 550;
			t.horizontalCenter = 388;
			t.levelImageSource = level_08_png;
			t.skinName = View.LevelItemView;
			t.verticalCenter = 0;
			t.width = 212;
			t.x = 30;
			t.y = 50;
			return t;
		};
		_proto.shenglvehaoIcon_i = function () {
			var t = new eui.Group();
			this.shenglvehaoIcon = t;
			t.height = 200;
			t.width = 200;
			t.x = 567;
			t.y = 209;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this.dot01_i(),this.dot02_i(),this.dot03_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 15;
			t.horizontalAlign = "center";
			t.verticalAlign = "middle";
			return t;
		};
		_proto.dot01_i = function () {
			var t = new eui.Image();
			this.dot01 = t;
			t.source = "shengnuehao";
			t.x = 588;
			t.y = 270;
			return t;
		};
		_proto.dot02_i = function () {
			var t = new eui.Image();
			this.dot02 = t;
			t.source = "shengnuehao";
			t.x = 598;
			t.y = 280;
			return t;
		};
		_proto.dot03_i = function () {
			var t = new eui.Image();
			this.dot03 = t;
			t.source = "shengnuehao";
			t.x = 608;
			t.y = 290;
			return t;
		};
		_proto.wenhaoIcon_i = function () {
			var t = new eui.Image();
			this.wenhaoIcon = t;
			t.source = "icon_wenhao";
			t.x = 467;
			t.y = 170;
			return t;
		};
		_proto.skillGroup_i = function () {
			var t = new eui.Group();
			this.skillGroup = t;
			t.height = 720;
			t.verticalCenter = 0;
			t.width = 1280;
			t.x = 1280;
			t.elementsContent = [this.skillTemp_i(),this.skillListGroup_i()];
			return t;
		};
		_proto.skillTemp_i = function () {
			var t = new eui.Image();
			this.skillTemp = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "skillTemp";
			t.top = 0;
			return t;
		};
		_proto.skillListGroup_i = function () {
			var t = new eui.Group();
			this.skillListGroup = t;
			t.bottom = 20;
			t.right = 20;
			t.top = 70;
			t.width = 811;
			t.elementsContent = [this.skillListBg_i(),this.skillBackBtn_i(),this._Scroller2_i()];
			return t;
		};
		_proto.skillListBg_i = function () {
			var t = new eui.Image();
			this.skillListBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,630);
			t.source = "bg_tiankuang01";
			t.top = 0;
			return t;
		};
		_proto.skillBackBtn_i = function () {
			var t = new eui.Button();
			this.skillBackBtn = t;
			t.height = 60;
			t.label = "回上页";
			t.left = 23;
			t.skinName = "skins.ButtonSkin";
			t.top = 5;
			t.width = 188;
			return t;
		};
		_proto._Scroller2_i = function () {
			var t = new eui.Scroller();
			t.bottom = 1;
			t.left = 29;
			t.right = 32;
			t.skinName = "skins.ScrollerSkin";
			t.top = 71;
			t.viewport = this.skillScrollerGroup_i();
			return t;
		};
		_proto.skillScrollerGroup_i = function () {
			var t = new eui.Group();
			this.skillScrollerGroup = t;
			t.layout = this._VerticalLayout1_i();
			t.elementsContent = [this.skillItem_01_i(),this.skillItem_02_i(),this.skillItem_03_i(),this.skillItem_04_i(),this.skillItem_05_i()];
			return t;
		};
		_proto._VerticalLayout1_i = function () {
			var t = new eui.VerticalLayout();
			t.gap = 15;
			t.horizontalAlign = "center";
			t.verticalAlign = "middle";
			return t;
		};
		_proto.skillItem_01_i = function () {
			var t = new ();
			t.skillIconSource = skillIcon_01;
			t.skinName = View.SkillItemView;
			return t;
		};
		_proto.skillItem_02_i = function () {
			var t = new ();
			t.skillIconSource = skillIcon_02;
			t.skinName = View.SkillItemView;
			return t;
		};
		_proto.skillItem_03_i = function () {
			var t = new ();
			t.skillIconSource = skillIcon_03;
			t.skinName = View.SkillItemView;
			return t;
		};
		_proto.skillItem_04_i = function () {
			var t = new ();
			t.skillIconSource = skillIcon_04;
			t.skinName = View.SkillItemView;
			return t;
		};
		_proto.skillItem_05_i = function () {
			var t = new ();
			t.skillIconSource = skillIcon_05;
			t.skinName = View.SkillItemView;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["lvliBtn","lvliLabel","lvliEnLabel","lvliGroup","haoyouBtn","haoyouLabel","haoyouEnLabel","friendGroup","jinengBtn","jinengLabel","jinengEnLabel","jinengGroup","tiaozhanBtn","tiaozhanLabel","tiaozhanEnLabel","tiaozhanGroup","yinhangBtn","yinhangLabel","yinhangEnLabel","bankGoldIcon","goldPercent","goldBar","leftTimeLabel","bankMask","yinhangGroup","maskBg","menuBtnGroup","recordBg","recordIcon","recordTitle","headBorder","headBg","headIcon","headIconGroup","nameLabel","headGroup","levelLabel","levelValue","expLabel","expValue","combatGainsLabel","combatGainsValue","winRateLabel","winRateValue","rightNumLabel","rightNumValue","beatNumLabel","beatNumValue","jackpotLabel","jackpotValue","goldAdditionLabel","goldAdditionValue","scoreAdditionLabel","scoreAdditionValue","expAdditionLabel","expAdditionValue","goldIcon","infoGroup","headSettingBtn","systemSettingBtn","closeBtn","achievementBtn","infoBtnGroup","recordRectGroup","recordGroup","challengeTemp","backBtn","levelItem_01","levelItem_02","levelItem_03","levelItem_04","levelItem_05","levelItem_06","levelItem_07","levelItem_08","dot01","dot02","dot03","shenglvehaoIcon","wenhaoIcon","levelListGroup","levelGroup","skillTemp","skillListBg","skillBackBtn","skillItem_01","skillItem_02","skillItem_03","skillItem_04","skillItem_05","skillScrollerGroup","skillListGroup","skillGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return MainMenuView;
	})(eui.Skin);
})(View || (View = {}));
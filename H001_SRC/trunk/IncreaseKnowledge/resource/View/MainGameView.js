var View;
(function (View) {
	var MainGameView=(function (_super) {
		__extends(MainGameView, _super);
		function MainGameView() {
			_super.call(this);
			
			this.height = 720;
			this.width = 1280;
			this.elementsContent = [this.searchGroup_i(),this.gameGroup_i(),this.accountGroup_i()];
		}
		var _proto = MainGameView.prototype;
	
		_proto.searchGroup_i = function () {
			var t = new eui.Group();
			this.searchGroup = t;
			t.height = 720;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.width = 1280;
			t.elementsContent = [this.searchBg_i(),this.matchTemp_i(),this.opponentTemp_i(),this.opponentGroup_i(),this.myGroup_i(),this.shuziLabel_i(),this.shuziBg_i()];
			return t;
		};
		_proto.searchBg_i = function () {
			var t = new eui.Image();
			this.searchBg = t;
			t.bottom = 0;
			t.fillMode = "scale";
			t.left = 0;
			t.right = 0;
			t.source = "hui";
			t.top = 0;
			return t;
		};
		_proto.matchTemp_i = function () {
			var t = new eui.Image();
			this.matchTemp = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "matchTemp";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.opponentTemp_i = function () {
			var t = new eui.Image();
			this.opponentTemp = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "opponentTemp";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.opponentGroup_i = function () {
			var t = new eui.Group();
			this.opponentGroup = t;
			t.height = 720;
			t.verticalCenter = 0;
			t.width = 640;
			t.x = 640;
			t.elementsContent = [this._HeadItemVM1_i(),this.cancelBtn_i(),this.boboGroup_i(),this.dotGroup_i(),this.searchLabel_i(),this.timeLabel_i()];
			return t;
		};
		_proto._HeadItemVM1_i = function () {
			var t = new ();
			t.visible = false;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.cancelBtn_i = function () {
			var t = new eui.Button();
			this.cancelBtn = t;
			t.height = 72;
			t.horizontalCenter = 0;
			t.label = "取消";
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 290;
			t.visible = false;
			t.width = 235;
			return t;
		};
		_proto.boboGroup_i = function () {
			var t = new eui.Group();
			this.boboGroup = t;
			t.height = 636;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.width = 610;
			t.elementsContent = [this.bobo_01_i(),this.bobo_02_i(),this.bobo_03_i()];
			return t;
		};
		_proto.bobo_01_i = function () {
			var t = new eui.Image();
			this.bobo_01 = t;
			t.height = 636;
			t.horizontalCenter = 0;
			t.scaleX = 0;
			t.scaleY = 0;
			t.source = "bobo";
			t.verticalCenter = 0;
			t.width = 610;
			return t;
		};
		_proto.bobo_02_i = function () {
			var t = new eui.Image();
			this.bobo_02 = t;
			t.height = 636;
			t.horizontalCenter = 0;
			t.source = "bobo";
			t.verticalCenter = 0;
			t.visible = false;
			t.width = 610;
			return t;
		};
		_proto.bobo_03_i = function () {
			var t = new eui.Image();
			this.bobo_03 = t;
			t.height = 636;
			t.horizontalCenter = 0;
			t.source = "bobo";
			t.verticalCenter = 0;
			t.visible = false;
			t.width = 610;
			return t;
		};
		_proto.dotGroup_i = function () {
			var t = new eui.Group();
			this.dotGroup = t;
			t.height = 636;
			t.verticalCenter = 0;
			t.width = 610;
			t.x = 15;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this.dot_01_i(),this.dot_02_i(),this.dot_03_i(),this.dot_04_i(),this.dot_05_i(),this.dot_06_i(),this.dot_07_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 4;
			t.horizontalAlign = "center";
			t.verticalAlign = "middle";
			return t;
		};
		_proto.dot_01_i = function () {
			var t = new eui.Image();
			this.dot_01 = t;
			t.height = 96;
			t.horizontalCenter = 0;
			t.source = "shengnuehao_da";
			t.verticalCenter = 3;
			t.width = 96;
			return t;
		};
		_proto.dot_02_i = function () {
			var t = new eui.Image();
			this.dot_02 = t;
			t.height = 96;
			t.horizontalCenter = 0;
			t.source = "shengnuehao_da";
			t.verticalCenter = 2;
			t.width = 96;
			return t;
		};
		_proto.dot_03_i = function () {
			var t = new eui.Image();
			this.dot_03 = t;
			t.height = 96;
			t.horizontalCenter = 0;
			t.source = "shengnuehao_da";
			t.verticalCenter = 0;
			t.width = 96;
			return t;
		};
		_proto.dot_04_i = function () {
			var t = new eui.Image();
			this.dot_04 = t;
			t.height = 96;
			t.horizontalCenter = 0;
			t.source = "shengnuehao_da";
			t.verticalCenter = 0;
			t.width = 96;
			return t;
		};
		_proto.dot_05_i = function () {
			var t = new eui.Image();
			this.dot_05 = t;
			t.height = 96;
			t.horizontalCenter = 0;
			t.source = "shengnuehao_da";
			t.verticalCenter = 0;
			t.width = 96;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.dot_06_i = function () {
			var t = new eui.Image();
			this.dot_06 = t;
			t.height = 96;
			t.horizontalCenter = 0;
			t.source = "shengnuehao_da";
			t.verticalCenter = 0;
			t.width = 96;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.dot_07_i = function () {
			var t = new eui.Image();
			this.dot_07 = t;
			t.height = 96;
			t.horizontalCenter = 0;
			t.source = "shengnuehao_da";
			t.verticalCenter = 0;
			t.width = 96;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.searchLabel_i = function () {
			var t = new eui.Label();
			this.searchLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0;
			t.text = "正在搜尋對手";
			t.y = 114;
			return t;
		};
		_proto.timeLabel_i = function () {
			var t = new eui.Label();
			this.timeLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0;
			t.size = 108;
			t.text = "1";
			t.x = 10;
			t.y = 212;
			return t;
		};
		_proto.myGroup_i = function () {
			var t = new eui.Group();
			this.myGroup = t;
			t.height = 720;
			t.verticalCenter = 0;
			t.width = 640;
			t.x = -640;
			t.elementsContent = [this.myBg_i(),this.headGroup_i()];
			return t;
		};
		_proto.myBg_i = function () {
			var t = new eui.Image();
			this.myBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "level_01_png";
			t.top = 0;
			return t;
		};
		_proto.headGroup_i = function () {
			var t = new eui.Group();
			this.headGroup = t;
			t.height = 300;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
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
		_proto.shuziLabel_i = function () {
			var t = new eui.Label();
			this.shuziLabel = t;
			t.fontFamily = "黑体";
			t.height = 70;
			t.horizontalCenter = -2.5;
			t.size = 72;
			t.text = "25";
			t.textAlign = "center";
			t.textColor = 0xFF9D00;
			t.verticalAlign = "middle";
			t.verticalCenter = 32;
			t.visible = false;
			t.width = 79;
			return t;
		};
		_proto.shuziBg_i = function () {
			var t = new eui.Image();
			this.shuziBg = t;
			t.height = 184;
			t.source = "bg_shuzi";
			t.visible = false;
			t.width = 184;
			t.x = 544;
			t.y = 298;
			return t;
		};
		_proto.gameGroup_i = function () {
			var t = new eui.Group();
			this.gameGroup = t;
			t.height = 720;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			t.width = 1280;
			t.elementsContent = [this.mainGameBg_i(),this.game03_i(),this.myGameHeadGroup_i(),this.opponentGameHeadGroup_i(),this.myScoreGroup_i(),this.opponentScoreGroup_i(),this.daojishiGroup_i(),this.queLabel_i(),this.typeGroup_i(),this.qIdLabel_i(),this.answerBtnGroup_i(),this.answerMaskGroup_i(),this.leftMarkGroup_i(),this.rightMarkGroup_i()];
			return t;
		};
		_proto.mainGameBg_i = function () {
			var t = new eui.Image();
			this.mainGameBg = t;
			t.height = 1321;
			t.horizontalCenter = 0;
			t.source = "level_02_png";
			t.verticalCenter = 0.5;
			t.width = 1280;
			return t;
		};
		_proto.game03_i = function () {
			var t = new eui.Image();
			this.game03 = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "game03";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.myGameHeadGroup_i = function () {
			var t = new eui.Group();
			this.myGameHeadGroup = t;
			t.height = 212;
			t.left = 20;
			t.top = 20;
			t.width = 177;
			t.elementsContent = [this.myGameHeadBg_i(),this.myGameHead_i(),this.myNameLabel_i()];
			return t;
		};
		_proto.myGameHeadBg_i = function () {
			var t = new eui.Image();
			this.myGameHeadBg = t;
			t.height = 212;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.verticalCenter = 0;
			t.width = 177;
			return t;
		};
		_proto.myGameHead_i = function () {
			var t = new ();
			t.bottom = 50;
			t.left = 10;
			t.right = 10;
			t.top = 10;
			return t;
		};
		_proto.myNameLabel_i = function () {
			var t = new eui.Label();
			this.myNameLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0.5;
			t.size = 26;
			t.text = "參賽者";
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.verticalAlign = "middle";
			t.verticalCenter = 81;
			return t;
		};
		_proto.opponentGameHeadGroup_i = function () {
			var t = new eui.Group();
			this.opponentGameHeadGroup = t;
			t.height = 212;
			t.right = 20;
			t.top = 20;
			t.width = 177;
			t.elementsContent = [this.opponentGameHeadBg_i(),this.opponentGameHead_i(),this.opponentNameLabel_i()];
			return t;
		};
		_proto.opponentGameHeadBg_i = function () {
			var t = new eui.Image();
			this.opponentGameHeadBg = t;
			t.height = 212;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.verticalCenter = 0;
			t.width = 177;
			return t;
		};
		_proto.opponentGameHead_i = function () {
			var t = new ();
			t.bottom = 50;
			t.left = 10;
			t.right = 10;
			t.skinName = View.HeadItemView;
			t.top = 10;
			return t;
		};
		_proto.opponentNameLabel_i = function () {
			var t = new eui.Label();
			this.opponentNameLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0.5;
			t.size = 26;
			t.text = "參賽者";
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.verticalAlign = "middle";
			t.verticalCenter = 81;
			return t;
		};
		_proto.myScoreGroup_i = function () {
			var t = new eui.Group();
			this.myScoreGroup = t;
			t.bottom = 10;
			t.height = 420;
			t.left = 10;
			t.width = 102;
			t.elementsContent = [this._Image1_i(),this.myScoreImage_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(49,49,8,8);
			t.source = "bg_defentiao";
			t.top = 0;
			return t;
		};
		_proto.myScoreImage_i = function () {
			var t = new eui.Image();
			this.myScoreImage = t;
			t.bottom = 37;
			t.height = 346;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_defentiao_lv";
			t.width = 30;
			return t;
		};
		_proto.opponentScoreGroup_i = function () {
			var t = new eui.Group();
			this.opponentScoreGroup = t;
			t.bottom = 10;
			t.height = 420;
			t.right = 10;
			t.width = 102;
			t.y = 10;
			t.elementsContent = [this._Image2_i(),this.opponentScoreImage_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(49,49,8,8);
			t.source = "bg_defentiao";
			t.top = 0;
			return t;
		};
		_proto.opponentScoreImage_i = function () {
			var t = new eui.Image();
			this.opponentScoreImage = t;
			t.bottom = 37;
			t.height = 346;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_defentiao_lv";
			t.width = 30;
			return t;
		};
		_proto.daojishiGroup_i = function () {
			var t = new eui.Group();
			this.daojishiGroup = t;
			t.height = 160;
			t.horizontalCenter = -1;
			t.verticalCenter = -253;
			t.width = 160;
			t.elementsContent = [this._Group1_i(),this.duringLabel_i()];
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.bottom = 44;
			t.left = -15;
			t.right = 15;
			t.top = -44;
			t.elementsContent = [this.daojishi01_i(),this.daojishi02_i(),this.daojishi03_i(),this.daojishi04_i(),this.daojishi05_i(),this.daojishi06_i(),this.daojishi07_i(),this.daojishi08_i(),this.daojishi09_i(),this.daojishi10_i(),this.daojishi11_i(),this.daojishi12_i()];
			return t;
		};
		_proto.daojishi01_i = function () {
			var t = new eui.Image();
			this.daojishi01 = t;
			t.height = 31;
			t.horizontalCenter = 27;
			t.rotation = 30;
			t.source = "daojishi01";
			t.verticalCenter = -3.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi02_i = function () {
			var t = new eui.Image();
			this.daojishi02 = t;
			t.height = 31;
			t.horizontalCenter = 48;
			t.rotation = 60;
			t.source = "daojishi01";
			t.verticalCenter = 6.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi03_i = function () {
			var t = new eui.Image();
			this.daojishi03 = t;
			t.height = 31;
			t.horizontalCenter = 63;
			t.rotation = 90;
			t.source = "daojishi01";
			t.verticalCenter = 29.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi04_i = function () {
			var t = new eui.Image();
			this.daojishi04 = t;
			t.height = 31;
			t.horizontalCenter = 63;
			t.rotation = 120;
			t.source = "daojishi01";
			t.verticalCenter = 54.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi05_i = function () {
			var t = new eui.Image();
			this.daojishi05 = t;
			t.height = 31;
			t.horizontalCenter = 54;
			t.rotation = 150;
			t.source = "daojishi01";
			t.verticalCenter = 77.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi06_i = function () {
			var t = new eui.Image();
			this.daojishi06 = t;
			t.height = 31;
			t.horizontalCenter = 30;
			t.rotation = 180;
			t.source = "daojishi01";
			t.verticalCenter = 90.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi07_i = function () {
			var t = new eui.Image();
			this.daojishi07 = t;
			t.height = 31;
			t.horizontalCenter = 6;
			t.rotation = 210;
			t.source = "daojishi01";
			t.verticalCenter = 92.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi08_i = function () {
			var t = new eui.Image();
			this.daojishi08 = t;
			t.height = 31;
			t.horizontalCenter = -18;
			t.rotation = 240;
			t.source = "daojishi01";
			t.verticalCenter = 81.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi09_i = function () {
			var t = new eui.Image();
			this.daojishi09 = t;
			t.height = 31;
			t.horizontalCenter = -30;
			t.rotation = 270;
			t.source = "daojishi01";
			t.verticalCenter = 59.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi10_i = function () {
			var t = new eui.Image();
			this.daojishi10 = t;
			t.height = 31;
			t.horizontalCenter = -33;
			t.rotation = 300;
			t.source = "daojishi01";
			t.verticalCenter = 33.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi11_i = function () {
			var t = new eui.Image();
			this.daojishi11 = t;
			t.height = 31;
			t.horizontalCenter = -21;
			t.rotation = 330;
			t.source = "daojishi01";
			t.verticalCenter = 11.5;
			t.width = 10;
			return t;
		};
		_proto.daojishi12_i = function () {
			var t = new eui.Image();
			this.daojishi12 = t;
			t.height = 31;
			t.horizontalCenter = 0;
			t.rotation = 360;
			t.source = "daojishi01";
			t.verticalCenter = -2.5;
			t.width = 10;
			return t;
		};
		_proto.duringLabel_i = function () {
			var t = new eui.Label();
			this.duringLabel = t;
			t.bottom = 40;
			t.fontFamily = "黑体";
			t.left = 40;
			t.right = 40;
			t.size = 60;
			t.text = "10";
			t.textAlign = "center";
			t.top = 40;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.queLabel_i = function () {
			var t = new eui.Label();
			this.queLabel = t;
			t.bottom = 384;
			t.fontFamily = "黑体";
			t.left = 160;
			t.right = 160;
			t.size = 34;
			t.textAlign = "center";
			t.top = 154;
			t.verticalAlign = "middle";
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.typeGroup_i = function () {
			var t = new eui.Group();
			this.typeGroup = t;
			t.height = 61;
			t.horizontalCenter = -1.5;
			t.verticalCenter = -125.5;
			t.visible = false;
			t.width = 189;
			t.elementsContent = [this._Image3_i(),this._Label1_i()];
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(13,13,6,6);
			t.source = "button_hong";
			t.top = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = 10;
			t.fontFamily = "黑体";
			t.left = 10;
			t.right = 10;
			t.size = 34;
			t.text = "南京";
			t.textAlign = "center";
			t.top = 10;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.qIdLabel_i = function () {
			var t = new eui.Label();
			this.qIdLabel = t;
			t.fontFamily = "黑体";
			t.height = 113;
			t.horizontalCenter = -0.5;
			t.size = 108;
			t.text = "第1題";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -22.5;
			t.visible = false;
			t.width = 377;
			return t;
		};
		_proto.answerBtnGroup_i = function () {
			var t = new eui.Group();
			this.answerBtnGroup = t;
			t.height = 295;
			t.horizontalCenter = -4;
			t.verticalCenter = 154.5;
			t.width = 1060;
			t.layout = this._BasicLayout1_i();
			t.elementsContent = [this.answer_01_i(),this.answer_02_i(),this.answer_03_i(),this.answer_04_i()];
			return t;
		};
		_proto._BasicLayout1_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.answer_01_i = function () {
			var t = new eui.Button();
			this.answer_01 = t;
			t.height = 115;
			t.horizontalCenter = -261;
			t.verticalCenter = -76;
			t.width = 496;
			t.skinName = this.undefined_i();
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Skin();
			t.states = up,down,disabled;
			t.elementsContent = [this.undefined_i(),this.labelDisplay_i()];
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Image();
			t.height = 115;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(14,14,4,4);
			t.source = "button_on";
			t.verticalCenter = 0;
			t.width = 496;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			t.bottom = 8;
			t.fontFamily = "黑体";
			t.left = 8;
			t.right = 8;
			t.size = 32;
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.top = 8;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.answer_02_i = function () {
			var t = new eui.Button();
			this.answer_02 = t;
			t.height = 115;
			t.horizontalCenter = 271;
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = -73;
			t.width = 496;
			t.skinName = this.undefined_i();
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Skin();
			t.states = up,down,disabled;
			t.elementsContent = [this.undefined_i(),this.labelDisplay_i()];
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Image();
			t.height = 115;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(14,14,4,4);
			t.source = "button_on";
			t.verticalCenter = 0;
			t.width = 496;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			t.bottom = 8;
			t.fontFamily = "黑体";
			t.left = 8;
			t.right = 8;
			t.size = 32;
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.top = 8;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.answer_03_i = function () {
			var t = new eui.Button();
			this.answer_03 = t;
			t.height = 115;
			t.horizontalCenter = -265;
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 71;
			t.width = 496;
			t.skinName = this.undefined_i();
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Skin();
			t.states = up,down,disabled;
			t.elementsContent = [this.undefined_i(),this.labelDisplay_i()];
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Image();
			t.height = 115;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(14,14,4,4);
			t.source = "button_on";
			t.verticalCenter = 0;
			t.width = 496;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			t.bottom = 8;
			t.fontFamily = "黑体";
			t.left = 8;
			t.right = 8;
			t.size = 32;
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.top = 8;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.answer_04_i = function () {
			var t = new eui.Button();
			this.answer_04 = t;
			t.height = 115;
			t.horizontalCenter = 271;
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 71;
			t.width = 496;
			t.skinName = this.undefined_i();
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Skin();
			t.states = up,down,disabled;
			t.elementsContent = [this.undefined_i(),this.labelDisplay_i()];
			return t;
		};
		_proto.undefined_i = function () {
			var t = new eui.Image();
			t.height = 115;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(14,14,4,4);
			t.source = "button_on";
			t.verticalCenter = 0;
			t.width = 496;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			t.bottom = 8;
			t.fontFamily = "黑体";
			t.left = 8;
			t.right = 8;
			t.size = 32;
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.top = 8;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.answerMaskGroup_i = function () {
			var t = new eui.Group();
			this.answerMaskGroup = t;
			t.height = 295;
			t.horizontalCenter = -4;
			t.verticalCenter = 154.5;
			t.visible = false;
			t.width = 1060;
			t.x = 10;
			t.y = 10;
			t.layout = this._BasicLayout2_i();
			t.elementsContent = [this.answerMask_01_i(),this.answerMask_02_i(),this.answerMask_03_i(),this.answerMask_04_i()];
			return t;
		};
		_proto._BasicLayout2_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.answerMask_01_i = function () {
			var t = new eui.Image();
			this.answerMask_01 = t;
			t.height = 115;
			t.horizontalCenter = -261;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "button_lv";
			t.verticalCenter = -76;
			t.visible = false;
			t.width = 496;
			return t;
		};
		_proto.answerMask_02_i = function () {
			var t = new eui.Image();
			this.answerMask_02 = t;
			t.height = 115;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "button_lv";
			t.visible = false;
			t.width = 496;
			t.x = 553;
			t.y = 17;
			return t;
		};
		_proto.answerMask_03_i = function () {
			var t = new eui.Image();
			this.answerMask_03 = t;
			t.height = 115;
			t.horizontalCenter = -265;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "button_lv";
			t.verticalCenter = 71;
			t.visible = false;
			t.width = 496;
			return t;
		};
		_proto.answerMask_04_i = function () {
			var t = new eui.Image();
			this.answerMask_04 = t;
			t.height = 115;
			t.horizontalCenter = 271;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "button_lv";
			t.verticalCenter = 71;
			t.visible = false;
			t.width = 496;
			return t;
		};
		_proto.leftMarkGroup_i = function () {
			var t = new eui.Group();
			this.leftMarkGroup = t;
			t.height = 295;
			t.horizontalCenter = -4;
			t.verticalCenter = 154.5;
			t.visible = false;
			t.width = 1060;
			t.x = 10;
			t.y = 10;
			t.layout = this._BasicLayout3_i();
			t.elementsContent = [this.leftMark_01_i(),this.leftMark_02_i(),this.leftMark_03_i(),this.leftMark_04_i()];
			return t;
		};
		_proto._BasicLayout3_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.leftMark_01_i = function () {
			var t = new eui.Image();
			this.leftMark_01 = t;
			t.left = 50;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.top = 55;
			t.visible = false;
			return t;
		};
		_proto.leftMark_02_i = function () {
			var t = new eui.Image();
			this.leftMark_02 = t;
			t.right = 450;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.top = 55;
			t.visible = false;
			return t;
		};
		_proto.leftMark_03_i = function () {
			var t = new eui.Image();
			this.leftMark_03 = t;
			t.bottom = 55;
			t.left = 50;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.visible = false;
			return t;
		};
		_proto.leftMark_04_i = function () {
			var t = new eui.Image();
			this.leftMark_04 = t;
			t.bottom = 55;
			t.right = 450;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.visible = false;
			return t;
		};
		_proto.rightMarkGroup_i = function () {
			var t = new eui.Group();
			this.rightMarkGroup = t;
			t.height = 295;
			t.horizontalCenter = -4;
			t.touchEnabled = false;
			t.verticalCenter = 154.5;
			t.visible = false;
			t.width = 1060;
			t.x = 20;
			t.y = 20;
			t.layout = this._BasicLayout4_i();
			t.elementsContent = [this.rightMark_01_i(),this.rightMark_02_i(),this.rightMark_03_i(),this.rightMark_04_i()];
			return t;
		};
		_proto._BasicLayout4_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.rightMark_01_i = function () {
			var t = new eui.Image();
			this.rightMark_01 = t;
			t.left = 450;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.top = 55;
			t.touchEnabled = false;
			t.visible = false;
			return t;
		};
		_proto.rightMark_02_i = function () {
			var t = new eui.Image();
			this.rightMark_02 = t;
			t.right = 50;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.top = 55;
			t.touchEnabled = false;
			t.visible = false;
			return t;
		};
		_proto.rightMark_03_i = function () {
			var t = new eui.Image();
			this.rightMark_03 = t;
			t.bottom = 55;
			t.left = 450;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.touchEnabled = false;
			t.visible = false;
			return t;
		};
		_proto.rightMark_04_i = function () {
			var t = new eui.Image();
			this.rightMark_04 = t;
			t.bottom = 55;
			t.right = 50;
			t.scale9Grid = new egret.Rectangle(12,12,8,8);
			t.source = "icon_dadui01";
			t.touchEnabled = false;
			t.visible = false;
			return t;
		};
		_proto.accountGroup_i = function () {
			var t = new eui.Group();
			this.accountGroup = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.visible = false;
			t.x = 10;
			t.y = 10;
			t.elementsContent = [this.game09Temp_i(),this.accountBg_i(),this.myAccountHeadGroup_i(),this.opponentAccountHeadGroup_i(),this.rightByRightGroup_i(),this.againChallengeBtn_i(),this.searchOpponentBtn_i(),this.backHomeBtn_i(),this.resultGroup_i(),this.goldGroup_i(),this.expGroup_i()];
			return t;
		};
		_proto.game09Temp_i = function () {
			var t = new eui.Image();
			this.game09Temp = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "game09";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.accountBg_i = function () {
			var t = new eui.Image();
			this.accountBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,630);
			t.source = "bg_tiankuang01";
			t.top = 70;
			return t;
		};
		_proto.myAccountHeadGroup_i = function () {
			var t = new eui.Group();
			this.myAccountHeadGroup = t;
			t.height = 212;
			t.left = 180;
			t.top = 200;
			t.width = 177;
			t.elementsContent = [this.myAccountHeadBg_i(),this.myAccountHead_i(),this.myAccountNameLabel_i()];
			return t;
		};
		_proto.myAccountHeadBg_i = function () {
			var t = new eui.Image();
			this.myAccountHeadBg = t;
			t.height = 212;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.verticalCenter = 0;
			t.width = 177;
			return t;
		};
		_proto.myAccountHead_i = function () {
			var t = new ();
			t.bottom = 50;
			t.left = 10;
			t.right = 10;
			t.top = 10;
			return t;
		};
		_proto.myAccountNameLabel_i = function () {
			var t = new eui.Label();
			this.myAccountNameLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0.5;
			t.size = 26;
			t.text = "參賽者";
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.verticalAlign = "middle";
			t.verticalCenter = 81;
			return t;
		};
		_proto.opponentAccountHeadGroup_i = function () {
			var t = new eui.Group();
			this.opponentAccountHeadGroup = t;
			t.height = 212;
			t.right = 180;
			t.top = 200;
			t.width = 177;
			t.elementsContent = [this.opponentAccountHeadBg_i(),this.opponentAccountHead_i(),this.opponentAccountNameLabel_i()];
			return t;
		};
		_proto.opponentAccountHeadBg_i = function () {
			var t = new eui.Image();
			this.opponentAccountHeadBg = t;
			t.height = 212;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.verticalCenter = 0;
			t.width = 177;
			return t;
		};
		_proto.opponentAccountHead_i = function () {
			var t = new ();
			t.bottom = 50;
			t.left = 10;
			t.right = 10;
			t.skinName = View.HeadItemView;
			t.top = 10;
			return t;
		};
		_proto.opponentAccountNameLabel_i = function () {
			var t = new eui.Label();
			this.opponentAccountNameLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0.5;
			t.size = 26;
			t.text = "參賽者";
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.verticalAlign = "middle";
			t.verticalCenter = 81;
			return t;
		};
		_proto.rightByRightGroup_i = function () {
			var t = new eui.Group();
			this.rightByRightGroup = t;
			t.height = 61;
			t.horizontalCenter = -1;
			t.verticalCenter = -10;
			t.width = 360;
			t.elementsContent = [this._Image4_i(),this.rightByRightLabel_i()];
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.alpha = 0.3;
			t.height = 61;
			t.horizontalCenter = 6;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_01";
			t.verticalCenter = 0;
			t.width = 318;
			return t;
		};
		_proto.rightByRightLabel_i = function () {
			var t = new eui.Label();
			this.rightByRightLabel = t;
			t.horizontalCenter = 0;
			t.text = "XX連對答對X題";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		_proto.againChallengeBtn_i = function () {
			var t = new eui.Button();
			this.againChallengeBtn = t;
			t.height = 71;
			t.horizontalCenter = -313.5;
			t.label = "再次挑戰";
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 257.5;
			t.width = 237;
			return t;
		};
		_proto.searchOpponentBtn_i = function () {
			var t = new eui.Button();
			this.searchOpponentBtn = t;
			t.height = 71;
			t.label = "找新對手";
			t.skinName = "skins.ButtonSkin";
			t.width = 235;
			t.x = 520;
			t.y = 583;
			return t;
		};
		_proto.backHomeBtn_i = function () {
			var t = new eui.Button();
			this.backHomeBtn = t;
			t.height = 71;
			t.label = "回首頁";
			t.skinName = "skins.ButtonSkin";
			t.width = 235;
			t.x = 820;
			t.y = 583;
			return t;
		};
		_proto.resultGroup_i = function () {
			var t = new eui.Group();
			this.resultGroup = t;
			t.height = 152;
			t.horizontalCenter = 0;
			t.top = 149;
			t.width = 512;
			t.elementsContent = [this._Image5_i(),this.resultlabel_i()];
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.alpha = 0.1;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.top = 0;
			return t;
		};
		_proto.resultlabel_i = function () {
			var t = new eui.Label();
			this.resultlabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0;
			t.size = 108;
			t.text = "挑戰XX";
			t.verticalCenter = 0;
			return t;
		};
		_proto.goldGroup_i = function () {
			var t = new eui.Group();
			this.goldGroup = t;
			t.height = 43;
			t.horizontalCenter = 0;
			t.width = 200;
			t.y = 421;
			t.elementsContent = [this._Label2_i(),this._Image6_i(),this.goldLabel_i()];
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			t.fontFamily = "黑体";
			t.horizontalCenter = -34;
			t.size = 40;
			t.text = "金幣：";
			t.textAlign = "left";
			t.verticalAlign = "middle";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto._Image6_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 39;
			t.source = "icon_jinbi";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto.goldLabel_i = function () {
			var t = new eui.Label();
			this.goldLabel = t;
			t.fontFamily = "黑体";
			t.left = 174;
			t.size = 40;
			t.text = "0";
			t.textAlign = "left";
			t.verticalAlign = "middle";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto.expGroup_i = function () {
			var t = new eui.Group();
			this.expGroup = t;
			t.height = 43;
			t.horizontalCenter = 0;
			t.width = 200;
			t.x = 10;
			t.y = 491;
			t.elementsContent = [this._Label3_i(),this._Image7_i(),this.expLabel_i()];
			return t;
		};
		_proto._Label3_i = function () {
			var t = new eui.Label();
			t.fontFamily = "黑体";
			t.horizontalCenter = -34;
			t.size = 40;
			t.text = "經驗：";
			t.textAlign = "left";
			t.verticalAlign = "middle";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto._Image7_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 39;
			t.source = "icon_zuan";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto.expLabel_i = function () {
			var t = new eui.Label();
			this.expLabel = t;
			t.fontFamily = "黑体";
			t.left = 174;
			t.size = 40;
			t.text = "0";
			t.textAlign = "left";
			t.verticalAlign = "middle";
			t.verticalCenter = 0.5;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["searchBg","matchTemp","opponentTemp","cancelBtn","bobo_01","bobo_02","bobo_03","boboGroup","dot_01","dot_02","dot_03","dot_04","dot_05","dot_06","dot_07","dotGroup","searchLabel","timeLabel","opponentGroup","myBg","headBorder","headBg","headIcon","headIconGroup","nameLabel","headGroup","myGroup","shuziLabel","shuziBg","searchGroup","mainGameBg","game03","myGameHeadBg","myGameHead","myNameLabel","myGameHeadGroup","opponentGameHeadBg","opponentGameHead","opponentNameLabel","opponentGameHeadGroup","myScoreImage","myScoreGroup","opponentScoreImage","opponentScoreGroup","daojishi01","daojishi02","daojishi03","daojishi04","daojishi05","daojishi06","daojishi07","daojishi08","daojishi09","daojishi10","daojishi11","daojishi12","duringLabel","daojishiGroup","queLabel","typeGroup","qIdLabel","answer_01","answer_02","answer_03","answer_04","answerBtnGroup","answerMask_01","answerMask_02","answerMask_03","answerMask_04","answerMaskGroup","leftMark_01","leftMark_02","leftMark_03","leftMark_04","leftMarkGroup","rightMark_01","rightMark_02","rightMark_03","rightMark_04","rightMarkGroup","gameGroup","game09Temp","accountBg","myAccountHeadBg","myAccountHead","myAccountNameLabel","myAccountHeadGroup","opponentAccountHeadBg","opponentAccountHead","opponentAccountNameLabel","opponentAccountHeadGroup","rightByRightLabel","rightByRightGroup","againChallengeBtn","searchOpponentBtn","backHomeBtn","resultlabel","resultGroup","goldLabel","goldGroup","expLabel","expGroup","accountGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return MainGameView;
	})(eui.Skin);
})(View || (View = {}));
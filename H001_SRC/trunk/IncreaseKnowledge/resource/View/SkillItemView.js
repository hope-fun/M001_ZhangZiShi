var View;
(function (View) {
	var SkillItemView=(function (_super) {
		__extends(SkillItemView, _super);
		function SkillItemView() {
			_super.call(this);
			
			this.height = 165;
			this.width = 750;
			this.elementsContent = [this._Group1_i()];
		}
		var _proto = SkillItemView.prototype;
	
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 165;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.width = 750;
			t.elementsContent = [this.skillBg_i(),this.skillIcon_i(),this.maskBottom_i(),this.skillGold_i(),this.skillGoldLabel_i(),this.skillDiamond_i(),this.skillDiamondLabel_i(),this.skillClock_i(),this.skillClockLabel_i(),this.skillDes_i(),this.skillLv_i(),this.skillName_i(),this.lockMaskGroup_i()];
			return t;
		};
		_proto.skillBg_i = function () {
			var t = new eui.Image();
			this.skillBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "skillBg_01_png";
			t.top = 0;
			return t;
		};
		_proto.skillIcon_i = function () {
			var t = new eui.Image();
			this.skillIcon = t;
			t.height = 108;
			t.left = 10;
			t.source = "01";
			t.top = 10;
			t.width = 120;
			return t;
		};
		_proto.maskBottom_i = function () {
			var t = new eui.Image();
			this.maskBottom = t;
			t.alpha = 0.5;
			t.bottom = 0;
			t.height = 50;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_01";
			t.width = 749;
			return t;
		};
		_proto.skillGold_i = function () {
			var t = new eui.Image();
			this.skillGold = t;
			t.horizontalCenter = -189;
			t.source = "icon_jinbi";
			t.verticalCenter = 56.5;
			return t;
		};
		_proto.skillGoldLabel_i = function () {
			var t = new eui.Label();
			this.skillGoldLabel = t;
			t.fontFamily = "����";
			t.left = 212;
			t.text = "0";
			t.textAlign = "left";
			t.verticalCenter = 58.5;
			return t;
		};
		_proto.skillDiamond_i = function () {
			var t = new eui.Image();
			this.skillDiamond = t;
			t.horizontalCenter = 22;
			t.source = "icon_zuan";
			t.verticalCenter = 55.5;
			return t;
		};
		_proto.skillDiamondLabel_i = function () {
			var t = new eui.Label();
			this.skillDiamondLabel = t;
			t.fontFamily = "����";
			t.left = 430;
			t.text = "0";
			t.textAlign = "left";
			t.verticalCenter = 58.5;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.skillClock_i = function () {
			var t = new eui.Image();
			this.skillClock = t;
			t.horizontalCenter = 205;
			t.source = "icon_shijian";
			t.verticalCenter = 57.5;
			return t;
		};
		_proto.skillClockLabel_i = function () {
			var t = new eui.Label();
			this.skillClockLabel = t;
			t.fontFamily = "����";
			t.left = 612;
			t.text = "0";
			t.textAlign = "left";
			t.verticalCenter = 58.5;
			t.y = 20;
			return t;
		};
		_proto.skillDes_i = function () {
			var t = new eui.Label();
			this.skillDes = t;
			t.fontFamily = "����";
			t.height = 30;
			t.left = 166;
			t.textAlign = "left";
			t.verticalCenter = 7.5;
			t.width = 247;
			return t;
		};
		_proto.skillLv_i = function () {
			var t = new eui.Label();
			this.skillLv = t;
			t.fontFamily = "����";
			t.left = 335;
			t.size = 50;
			t.text = "LV.";
			t.textAlign = "left";
			t.verticalCenter = -38.5;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.skillName_i = function () {
			var t = new eui.Label();
			this.skillName = t;
			t.fontFamily = "����";
			t.left = 163;
			t.size = 50;
			t.text = "������";
			t.textAlign = "left";
			t.verticalCenter = -43.5;
			return t;
		};
		_proto.lockMaskGroup_i = function () {
			var t = new eui.Group();
			this.lockMaskGroup = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this.lockMask_i(),this.lockIcon_i(),this.unlockLabel_i()];
			return t;
		};
		_proto.lockMask_i = function () {
			var t = new eui.Image();
			this.lockMask = t;
			t.alpha = 0.5;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_01";
			t.top = 0;
			return t;
		};
		_proto.lockIcon_i = function () {
			var t = new eui.Image();
			this.lockIcon = t;
			t.horizontalCenter = 0;
			t.source = "icon_suo";
			t.verticalCenter = -17.5;
			return t;
		};
		_proto.unlockLabel_i = function () {
			var t = new eui.Label();
			this.unlockLabel = t;
			t.fontFamily = "����";
			t.horizontalCenter = 0;
			t.text = "�ȼ�  ����";
			t.textAlign = "center";
			t.y = 131;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["skillBg","skillIcon","maskBottom","skillGold","skillGoldLabel","skillDiamond","skillDiamondLabel","skillClock","skillClockLabel","skillDes","skillLv","skillName","lockMask","lockIcon","unlockLabel","lockMaskGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return SkillItemView;
	})(eui.Skin);
})(View || (View = {}));
var View;
(function (View) {
	var SettingMsgView=(function (_super) {
		__extends(SettingMsgView, _super);
		function SettingMsgView() {
			_super.call(this);
			
			this.height = 720;
			this.width = 1280;
			this.elementsContent = [this.settingMsgGroup_i()];
		}
		var _proto = SettingMsgView.prototype;
	
		_proto.settingMsgGroup_i = function () {
			var t = new eui.Group();
			this.settingMsgGroup = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this._Image1_i(),this.settingRectGroup_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.alpha = 0.5;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "setTemp";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.settingRectGroup_i = function () {
			var t = new eui.Group();
			this.settingRectGroup = t;
			t.height = 630;
			t.horizontalCenter = -215;
			t.scaleX = 0;
			t.scaleY = 0;
			t.verticalCenter = 25;
			t.width = 810;
			t.elementsContent = [this.settingBg_i(),this.intervalLine0_i(),this.intervalLine1_i(),this.intervalLine2_i(),this.intervalLine3_i(),this.settingIcon_i(),this.settingLabel_i(),this.musicLabel_i(),this.musicBtn_i(),this.soundEffectLabel_i(),this.soundEffectBtn_i(),this.shakeLabel_i(),this.shakeBtn_i(),this.dialogueLabel_i(),this.dialogueBtn_i(),this.instructionBtn_i(),this.problemReportBtn_i(),this.closeBtn_i()];
			return t;
		};
		_proto.settingBg_i = function () {
			var t = new eui.Image();
			this.settingBg = t;
			t.height = 630;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,630);
			t.source = "bg_tiankuang03";
			t.verticalCenter = 0;
			t.width = 810;
			return t;
		};
		_proto.intervalLine0_i = function () {
			var t = new eui.Image();
			this.intervalLine0 = t;
			t.height = 2;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,2);
			t.source = "jiangexian02";
			t.verticalCenter = -165;
			t.width = 510;
			return t;
		};
		_proto.intervalLine1_i = function () {
			var t = new eui.Image();
			this.intervalLine1 = t;
			t.height = 2;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,2);
			t.source = "jiangexian02";
			t.verticalCenter = -74;
			t.width = 510;
			return t;
		};
		_proto.intervalLine2_i = function () {
			var t = new eui.Image();
			this.intervalLine2 = t;
			t.height = 2;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,2);
			t.source = "jiangexian02";
			t.verticalCenter = 20;
			t.width = 510;
			return t;
		};
		_proto.intervalLine3_i = function () {
			var t = new eui.Image();
			this.intervalLine3 = t;
			t.height = 2;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,2);
			t.source = "jiangexian02";
			t.verticalCenter = 113;
			t.width = 510;
			return t;
		};
		_proto.settingIcon_i = function () {
			var t = new eui.Image();
			this.settingIcon = t;
			t.horizontalCenter = -356;
			t.source = "icon_shezhi";
			t.verticalCenter = -281;
			return t;
		};
		_proto.settingLabel_i = function () {
			var t = new eui.Label();
			this.settingLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = -263;
			t.size = 44;
			t.text = "設定";
			t.verticalCenter = -280;
			return t;
		};
		_proto.musicLabel_i = function () {
			var t = new eui.Label();
			this.musicLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = -168;
			t.size = 36;
			t.text = "音樂";
			t.verticalCenter = -202;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.musicBtn_i = function () {
			var t = new eui.ToggleSwitch();
			this.musicBtn = t;
			t.height = 58;
			t.horizontalCenter = 91.5;
			t.label = "切换按钮";
			t.skinName = "skins.ToggleSwitchSkin";
			t.verticalCenter = -205;
			t.width = 161;
			return t;
		};
		_proto.soundEffectLabel_i = function () {
			var t = new eui.Label();
			this.soundEffectLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = -168;
			t.size = 36;
			t.text = "音效";
			t.verticalCenter = -120;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.soundEffectBtn_i = function () {
			var t = new eui.ToggleSwitch();
			this.soundEffectBtn = t;
			t.height = 58;
			t.horizontalCenter = 91.5;
			t.label = "切换按钮";
			t.skinName = "skins.ToggleSwitchSkin";
			t.verticalCenter = -118;
			t.width = 161;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.shakeLabel_i = function () {
			var t = new eui.Label();
			this.shakeLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = -168;
			t.size = 36;
			t.text = "震動";
			t.verticalCenter = -27;
			t.x = 30;
			t.y = 30;
			return t;
		};
		_proto.shakeBtn_i = function () {
			var t = new eui.ToggleSwitch();
			this.shakeBtn = t;
			t.height = 58;
			t.horizontalCenter = 91.5;
			t.label = "切换按钮";
			t.skinName = "skins.ToggleSwitchSkin";
			t.verticalCenter = -24;
			t.width = 161;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.dialogueLabel_i = function () {
			var t = new eui.Label();
			this.dialogueLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = -132;
			t.size = 36;
			t.text = "挑釁對話";
			t.verticalCenter = 71;
			t.x = 40;
			t.y = 40;
			return t;
		};
		_proto.dialogueBtn_i = function () {
			var t = new eui.ToggleSwitch();
			this.dialogueBtn = t;
			t.height = 58;
			t.horizontalCenter = 91.5;
			t.label = "切换按钮";
			t.skinName = "skins.ToggleSwitchSkin";
			t.verticalCenter = 69;
			t.width = 161;
			t.x = 30;
			t.y = 30;
			return t;
		};
		_proto.instructionBtn_i = function () {
			var t = new eui.Button();
			this.instructionBtn = t;
			t.height = 71;
			t.horizontalCenter = -142;
			t.label = "使用說明";
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 170.5;
			t.width = 234;
			return t;
		};
		_proto.problemReportBtn_i = function () {
			var t = new eui.Button();
			this.problemReportBtn = t;
			t.height = 71;
			t.horizontalCenter = 142;
			t.label = "問題回報";
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 168.5;
			t.width = 234;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.closeBtn_i = function () {
			var t = new eui.Button();
			this.closeBtn = t;
			t.height = 71;
			t.horizontalCenter = 0;
			t.label = "關閉";
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 263.5;
			t.width = 234;
			t.x = 20;
			t.y = 20;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["settingBg","intervalLine0","intervalLine1","intervalLine2","intervalLine3","settingIcon","settingLabel","musicLabel","musicBtn","soundEffectLabel","soundEffectBtn","shakeLabel","shakeBtn","dialogueLabel","dialogueBtn","instructionBtn","problemReportBtn","closeBtn","settingRectGroup","settingMsgGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return SettingMsgView;
	})(eui.Skin);
})(View || (View = {}));
var View;
(function (View) {
	var TitleInfoView=(function (_super) {
		__extends(TitleInfoView, _super);
		function TitleInfoView() {
			_super.call(this);
			
			this.height = 70;
			this.width = 1280;
			this.elementsContent = [this._Image1_i(),this.expGroup_i(),this.diamondGroup_i(),this.goldGroup_i()];
		}
		var _proto = TitleInfoView.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 720;
			t.horizontalCenter = 0;
			t.source = "headTemp";
			t.top = 0;
			t.visible = false;
			t.width = 1280;
			return t;
		};
		_proto.expGroup_i = function () {
			var t = new eui.Group();
			this.expGroup = t;
			t.height = 70;
			t.horizontalCenter = -440;
			t.verticalCenter = 0;
			t.width = 400;
			t.layout = this._BasicLayout1_i();
			t.elementsContent = [this.levelLabel_i(),this.expBar_i()];
			return t;
		};
		_proto._BasicLayout1_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.levelLabel_i = function () {
			var t = new eui.Label();
			this.levelLabel = t;
			t.fontFamily = "黑体";
			t.left = 19;
			t.size = 40;
			t.text = "LV:9";
			t.verticalCenter = 1;
			return t;
		};
		_proto.expBar_i = function () {
			var t = new eui.ProgressBar();
			this.expBar = t;
			t.height = 25;
			t.horizontalCenter = 24.5;
			t.skinName = "skins.ProgressBarSkin";
			t.verticalCenter = 2.5;
			t.width = 201;
			return t;
		};
		_proto.diamondGroup_i = function () {
			var t = new eui.Group();
			this.diamondGroup = t;
			t.height = 47;
			t.horizontalCenter = 105.5;
			t.verticalCenter = -0.5;
			t.width = 287;
			t.layout = this._BasicLayout2_i();
			t.elementsContent = [this.diamondBg_i(),this.diamondImage_i(),this.diamondeLabel_i(),this.diamondPlus_i()];
			return t;
		};
		_proto._BasicLayout2_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.diamondBg_i = function () {
			var t = new eui.Image();
			this.diamondBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(22,22,2,2);
			t.source = "bg_03";
			t.top = 0;
			return t;
		};
		_proto.diamondImage_i = function () {
			var t = new eui.Image();
			this.diamondImage = t;
			t.horizontalCenter = -102.5;
			t.source = "icon_zuan";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto.diamondeLabel_i = function () {
			var t = new eui.Label();
			this.diamondeLabel = t;
			t.fontFamily = "黑体";
			t.left = 104;
			t.size = 40;
			t.text = "999999";
			t.textAlign = "left";
			t.verticalCenter = 1;
			return t;
		};
		_proto.diamondPlus_i = function () {
			var t = new eui.Image();
			this.diamondPlus = t;
			t.horizontalCenter = 116.5;
			t.source = "button_+";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto.goldGroup_i = function () {
			var t = new eui.Group();
			this.goldGroup = t;
			t.height = 47;
			t.horizontalCenter = 452.5;
			t.verticalCenter = -0.5;
			t.width = 339;
			t.x = 10;
			t.y = 10;
			t.layout = this._BasicLayout3_i();
			t.elementsContent = [this.goldBg_i(),this.goldImage_i(),this.goldLabel_i(),this.goldPlus_i()];
			return t;
		};
		_proto._BasicLayout3_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.goldBg_i = function () {
			var t = new eui.Image();
			this.goldBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(22,22,2,2);
			t.source = "bg_03";
			t.top = 0;
			return t;
		};
		_proto.goldImage_i = function () {
			var t = new eui.Image();
			this.goldImage = t;
			t.horizontalCenter = -136.5;
			t.source = "icon_jinbi";
			t.verticalCenter = 0.5;
			return t;
		};
		_proto.goldLabel_i = function () {
			var t = new eui.Label();
			this.goldLabel = t;
			t.fontFamily = "黑体";
			t.left = 92;
			t.size = 40;
			t.text = "99999999";
			t.textAlign = "left";
			t.verticalCenter = 1.5;
			return t;
		};
		_proto.goldPlus_i = function () {
			var t = new eui.Image();
			this.goldPlus = t;
			t.horizontalCenter = 139.5;
			t.source = "button_+";
			t.verticalCenter = 0.5;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["levelLabel","expBar","expGroup","diamondBg","diamondImage","diamondeLabel","diamondPlus","diamondGroup","goldBg","goldImage","goldLabel","goldPlus","goldGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return TitleInfoView;
	})(eui.Skin);
})(View || (View = {}));
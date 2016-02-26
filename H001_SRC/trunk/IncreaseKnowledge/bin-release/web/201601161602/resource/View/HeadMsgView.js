var View;
(function (View) {
	var HeadMsgView=(function (_super) {
		__extends(HeadMsgView, _super);
		function HeadMsgView() {
			_super.call(this);
			
			this.height = 720;
			this.width = 1280;
			this.elementsContent = [this.headMsgGroup_i()];
		}
		var _proto = HeadMsgView.prototype;
	
		_proto.headMsgGroup_i = function () {
			var t = new eui.Group();
			this.headMsgGroup = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this.headListGroup_i(),this.temp_i()];
			return t;
		};
		_proto.headListGroup_i = function () {
			var t = new eui.Group();
			this.headListGroup = t;
			t.height = 630;
			t.horizontalCenter = -215;
			t.scaleX = 1;
			t.scaleY = 1;
			t.verticalCenter = 25;
			t.width = 810;
			t.elementsContent = [this.headBg_i(),this.listBg_i(),this.headTitle_i(),this.cancelBtn_i(),this._Scroller1_i()];
			return t;
		};
		_proto.headBg_i = function () {
			var t = new eui.Image();
			this.headBg = t;
			t.height = 630;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,0,1,630);
			t.source = "mainGame_json.bg_tiankuang03";
			t.verticalCenter = 0;
			t.width = 810;
			return t;
		};
		_proto.listBg_i = function () {
			var t = new eui.Image();
			this.listBg = t;
			t.height = 456;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_tiankuang04";
			t.verticalCenter = -17;
			t.width = 810;
			return t;
		};
		_proto.headTitle_i = function () {
			var t = new eui.Label();
			this.headTitle = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0;
			t.size = 44;
			t.text = "設定頭像";
			t.verticalCenter = -280;
			return t;
		};
		_proto.cancelBtn_i = function () {
			var t = new eui.Button();
			this.cancelBtn = t;
			t.height = 71;
			t.horizontalCenter = 0;
			t.label = "取消";
			t.skinName = "skins.ButtonSkin";
			t.verticalCenter = 264.5;
			t.width = 233;
			return t;
		};
		_proto._Scroller1_i = function () {
			var t = new eui.Scroller();
			t.height = 456;
			t.horizontalCenter = 0;
			t.verticalCenter = -17;
			t.width = 810;
			t.viewport = this._Group1_i();
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 692;
			t.layout = this._BasicLayout1_i();
			t.elementsContent = [this.sagittariusBtn_i(),this.leoBtn_i(),this.ariesBtn_i(),this.scorpioBtn_i(),this.libraBtn_i(),this.cancerBtn_i(),this.taurusBtn_i(),this.geminiBtn_i(),this.capricornBtn_i(),this.virgoBtn_i(),this.piscesBtn_i(),this.aquariusBtn_i()];
			return t;
		};
		_proto._BasicLayout1_i = function () {
			var t = new eui.BasicLayout();
			return t;
		};
		_proto.sagittariusBtn_i = function () {
			var t = new ();
			t.horizontalCenter = -287;
			t.skinName = View.HeadItemView;
			t.verticalCenter = -116;
			return t;
		};
		_proto.leoBtn_i = function () {
			var t = new ();
			t.horizontalCenter = -287;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 72;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.ariesBtn_i = function () {
			var t = new ();
			t.horizontalCenter = -287;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 261;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.scorpioBtn_i = function () {
			var t = new ();
			t.horizontalCenter = -98;
			t.skinName = View.HeadItemView;
			t.verticalCenter = -116;
			return t;
		};
		_proto.libraBtn_i = function () {
			var t = new ();
			t.horizontalCenter = -98;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 72;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.cancerBtn_i = function () {
			var t = new ();
			t.horizontalCenter = -98;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 261;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.taurusBtn_i = function () {
			var t = new ();
			t.horizontalCenter = 88;
			t.skinName = View.HeadItemView;
			t.verticalCenter = -116;
			return t;
		};
		_proto.geminiBtn_i = function () {
			var t = new ();
			t.horizontalCenter = 88;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 72;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.capricornBtn_i = function () {
			var t = new ();
			t.horizontalCenter = 88;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 261;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.virgoBtn_i = function () {
			var t = new ();
			t.horizontalCenter = 275;
			t.skinName = View.HeadItemView;
			t.verticalCenter = -116;
			return t;
		};
		_proto.piscesBtn_i = function () {
			var t = new ();
			t.horizontalCenter = 275;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 72;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.aquariusBtn_i = function () {
			var t = new ();
			t.horizontalCenter = 275;
			t.skinName = View.HeadItemView;
			t.verticalCenter = 261;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.temp_i = function () {
			var t = new eui.Image();
			this.temp = t;
			t.alpha = 0.5;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "headTemp";
			t.top = 0;
			t.visible = false;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["headBg","listBg","headTitle","cancelBtn","sagittariusBtn","leoBtn","ariesBtn","scorpioBtn","libraBtn","cancerBtn","taurusBtn","geminiBtn","capricornBtn","virgoBtn","piscesBtn","aquariusBtn","headListGroup","temp","headMsgGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return HeadMsgView;
	})(eui.Skin);
})(View || (View = {}));
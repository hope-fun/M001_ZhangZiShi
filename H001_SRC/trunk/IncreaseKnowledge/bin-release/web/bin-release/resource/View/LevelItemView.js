var View;
(function (View) {
	var LevelItemView=(function (_super) {
		__extends(LevelItemView, _super);
		function LevelItemView() {
			_super.call(this);
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this.levelItemGroup_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("levelMask","source","bg_02"),
						new eui.SetProperty("levelMask","alpha",0.5)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("levelImage","alpha",0.5)
					])
			];
		}
		var _proto = LevelItemView.prototype;
	
		_proto.levelItemGroup_i = function () {
			var t = new eui.Group();
			this.levelItemGroup = t;
			t.height = 550;
			t.left = 0;
			t.top = 0;
			t.width = 212;
			t.elementsContent = [this.levelImage_i(),this.levelMask_i(),this.levelName_i(),this.costLabel_i(),this.costImage_i(),this.costValue_i(),this.duringValue_i(),this.turnValue_i(),this.sceneOwnImage_i(),this.lockGroup_i()];
			return t;
		};
		_proto.levelImage_i = function () {
			var t = new eui.Image();
			this.levelImage = t;
			t.height = 630;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(14,14,4,4);
			t.source = "level_01_png";
			t.verticalCenter = 0;
			t.width = 610;
			return t;
		};
		_proto.levelMask_i = function () {
			var t = new eui.Image();
			this.levelMask = t;
			t.alpha = 0.01;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_02";
			t.percentWidth = 100;
			return t;
		};
		_proto.levelName_i = function () {
			var t = new eui.Label();
			this.levelName = t;
			t.fontFamily = "黑体";
			t.height = 90;
			t.left = 8;
			t.right = 72;
			t.size = 40;
			t.text = "埃菲爾鐵塔";
			t.textAlign = "left";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 147;
			return t;
		};
		_proto.costLabel_i = function () {
			var t = new eui.Label();
			this.costLabel = t;
			t.fontFamily = "黑体";
			t.height = 24;
			t.left = 6;
			t.size = 25;
			t.text = "入場費：";
			t.textAlign = "left";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 214;
			return t;
		};
		_proto.costImage_i = function () {
			var t = new eui.Image();
			this.costImage = t;
			t.horizontalCenter = 8;
			t.scaleX = 0.65;
			t.scaleY = 0.65;
			t.source = "icon_jinbi";
			t.verticalCenter = 215;
			return t;
		};
		_proto.costValue_i = function () {
			var t = new eui.Label();
			this.costValue = t;
			t.fontFamily = "黑体";
			t.height = 24;
			t.left = 138;
			t.size = 26;
			t.text = "125";
			t.textAlign = "left";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 214;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.duringValue_i = function () {
			var t = new eui.Label();
			this.duringValue = t;
			t.fontFamily = "黑体";
			t.height = 24;
			t.left = 7;
			t.size = 25;
			t.text = "10秒";
			t.textAlign = "left";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 248;
			t.x = 10;
			t.y = 10;
			return t;
		};
		_proto.turnValue_i = function () {
			var t = new eui.Label();
			this.turnValue = t;
			t.fontFamily = "黑体";
			t.height = 24;
			t.left = 86;
			t.size = 25;
			t.text = "4回合";
			t.textAlign = "left";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 248;
			t.x = 20;
			t.y = 20;
			return t;
		};
		_proto.sceneOwnImage_i = function () {
			var t = new eui.Image();
			this.sceneOwnImage = t;
			t.horizontalCenter = 0;
			t.source = "01";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto.lockGroup_i = function () {
			var t = new eui.Group();
			this.lockGroup = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this.lockBg_i(),this.lockImage_i(),this.lockLabel_i()];
			return t;
		};
		_proto.lockBg_i = function () {
			var t = new eui.Image();
			this.lockBg = t;
			t.alpha = 0.5;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "bg_01";
			t.top = 0;
			return t;
		};
		_proto.lockImage_i = function () {
			var t = new eui.Image();
			this.lockImage = t;
			t.horizontalCenter = 0;
			t.source = "icon_suo";
			t.verticalCenter = 0;
			return t;
		};
		_proto.lockLabel_i = function () {
			var t = new eui.Label();
			this.lockLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 2;
			t.size = 24;
			t.text = "尚未解鎖";
			t.verticalCenter = 74;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["levelImage","levelMask","levelName","costLabel","costImage","costValue","duringValue","turnValue","sceneOwnImage","lockBg","lockImage","lockLabel","lockGroup","levelItemGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return LevelItemView;
	})(eui.Skin);
})(View || (View = {}));
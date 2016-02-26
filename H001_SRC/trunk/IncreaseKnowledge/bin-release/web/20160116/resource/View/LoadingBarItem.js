var View;
(function (View) {
	var LoadingBarItem=(function (_super) {
		__extends(LoadingBarItem, _super);
		function LoadingBarItem() {
			_super.call(this);
			
			this.height = 34;
			this.width = 380;
			this.elementsContent = [this.loadingBg_i(),this.loadingBar_i(),this.loadingLabel_i()];
		}
		var _proto = LoadingBarItem.prototype;
	
		_proto.loadingBg_i = function () {
			var t = new eui.Image();
			this.loadingBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(4,4,8,8);
			t.source = "loading01";
			t.top = 0;
			return t;
		};
		_proto.loadingBar_i = function () {
			var t = new eui.Image();
			this.loadingBar = t;
			t.bottom = 4;
			t.left = 4;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "loading02";
			t.top = 4;
			t.width = 372;
			return t;
		};
		_proto.loadingLabel_i = function () {
			var t = new eui.Label();
			this.loadingLabel = t;
			t.fontFamily = "黑体";
			t.horizontalCenter = 0;
			t.size = 24;
			t.text = "标签";
			t.verticalCenter = 1;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["loadingBg","loadingBar","loadingLabel"];
			},
			enumerable: true,
			configurable: true
		});
		return LoadingBarItem;
	})(eui.Skin);
})(View || (View = {}));
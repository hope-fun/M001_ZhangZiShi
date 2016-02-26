var View;
(function (View) {
	var LogoView=(function (_super) {
		__extends(LogoView, _super);
		function LogoView() {
			_super.call(this);
			
			this.height = 720;
			this.width = 1280;
			this.elementsContent = [this.loadingTemp_i(),this.logoGroup_i()];
		}
		var _proto = LogoView.prototype;
	
		_proto.loadingTemp_i = function () {
			var t = new eui.Image();
			this.loadingTemp = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "loadingTemp";
			t.top = 0;
			t.visible = false;
			return t;
		};
		_proto.logoGroup_i = function () {
			var t = new eui.Group();
			this.logoGroup = t;
			t.alpha = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this.logoImage_i(),this.loadingBarItem_i()];
			return t;
		};
		_proto.logoImage_i = function () {
			var t = new eui.Image();
			this.logoImage = t;
			t.alpha = 1;
			t.height = 137;
			t.horizontalCenter = 0;
			t.source = "logo_png";
			t.verticalCenter = 0;
			t.width = 460;
			return t;
		};
		_proto.loadingBarItem_i = function () {
			var t = new ();
			t.alpha = 1;
			t.height = 32;
			t.horizontalCenter = -1;
			t.skinName = View.LoadingBarItem;
			t.verticalCenter = 171;
			t.visible = false;
			t.width = 378;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["loadingTemp","logoImage","loadingBarItem","logoGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return LogoView;
	})(eui.Skin);
})(View || (View = {}));
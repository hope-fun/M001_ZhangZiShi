var View;
(function (View) {
	var HeadItemView=(function (_super) {
		__extends(HeadItemView, _super);
		function HeadItemView() {
			_super.call(this);
			
			this.height = 166;
			this.width = 166;
			this.elementsContent = [this.headGroup_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
			];
		}
		var _proto = HeadItemView.prototype;
	
		_proto.headGroup_i = function () {
			var t = new eui.Group();
			this.headGroup = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this.headBg_i(),this.headBtn_i(),this.headMask_i()];
			return t;
		};
		_proto.headBg_i = function () {
			var t = new eui.Image();
			this.headBg = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(1,1,1,1);
			t.source = "hong";
			t.top = 0;
			return t;
		};
		_proto.headBtn_i = function () {
			var t = new eui.Image();
			this.headBtn = t;
			t.fillMode = "scale";
			t.horizontalCenter = 0;
			t.source = "01";
			t.verticalCenter = 0;
			return t;
		};
		_proto.headMask_i = function () {
			var t = new eui.Image();
			this.headMask = t;
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
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["headBg","headBtn","headMask","headGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return HeadItemView;
	})(eui.Skin);
})(View || (View = {}));
var View;
(function (View) {
	var TestView=(function (_super) {
		__extends(TestView, _super);
		function TestView() {
			_super.call(this);
			
			this.height = 720;
			this.width = 1280;
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
		}
		var _proto = TestView.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "mainGame_json.bg_defentiao_lv";
			t.x = 247;
			t.y = 139;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 147;
			t.horizontalCenter = 0.5;
			t.scale9Grid = new egret.Rectangle(1,2,2,1);
			t.source = "mainGame_json.bg_defentiao_lv";
			t.verticalCenter = 0.5;
			t.width = 141;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return [];
			},
			enumerable: true,
			configurable: true
		});
		return TestView;
	})(eui.Skin);
})(View || (View = {}));
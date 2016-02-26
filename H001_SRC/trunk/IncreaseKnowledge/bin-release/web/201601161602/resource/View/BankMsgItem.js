var View;
(function (View) {
	var BankMsgItem=(function (_super) {
		__extends(BankMsgItem, _super);
		function BankMsgItem() {
			_super.call(this);
			
			this.height = 100;
			this.width = 200;
			this.elementsContent = [this.bankMsgGroup_i()];
		}
		var _proto = BankMsgItem.prototype;
	
		_proto.bankMsgGroup_i = function () {
			var t = new eui.Group();
			this.bankMsgGroup = t;
			t.alpha = 0.5;
			t.height = 100;
			t.horizontalCenter = 0;
			t.width = 200;
			t.y = 0;
			t.elementsContent = [this.backMsgImage_i(),this.backMsgLabel_i()];
			return t;
		};
		_proto.backMsgImage_i = function () {
			var t = new eui.Image();
			this.backMsgImage = t;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(14,14,5,5);
			t.source = "mainGame_json.button_hong";
			t.top = 0;
			return t;
		};
		_proto.backMsgLabel_i = function () {
			var t = new eui.Label();
			this.backMsgLabel = t;
			t.bottom = 10;
			t.fontFamily = "黑体";
			t.left = 28;
			t.right = 28;
			t.size = 30;
			t.text = "余额不足稍后再领";
			t.textAlign = "center";
			t.top = 10;
			t.verticalAlign = "middle";
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["backMsgImage","backMsgLabel","bankMsgGroup"];
			},
			enumerable: true,
			configurable: true
		});
		return BankMsgItem;
	})(eui.Skin);
})(View || (View = {}));
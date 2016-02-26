var View;
(function (View) {
	var SearchOpponentView=(function (_super) {
		__extends(SearchOpponentView, _super);
		function SearchOpponentView() {
			_super.call(this);
			
			this.height = 720;
			this.width = 1280;
		}
		var _proto = SearchOpponentView.prototype;
	
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return [];
			},
			enumerable: true,
			configurable: true
		});
		return SearchOpponentView;
	})(eui.Skin);
})(View || (View = {}));
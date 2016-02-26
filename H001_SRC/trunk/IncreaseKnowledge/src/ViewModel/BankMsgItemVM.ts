module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class BankMsgItemVM extends eui.Component {
        private uiGroup: eui.Group;
        private bankMsgGroup: eui.Group;
        private backMsgImage: eui.Image;
        private backMsgLabel: eui.Label;
        private str: string;
                
        public constructor(_uiGroup: eui.Group,_str?: string) {
            super();
            this.skinName = "View.BankMsgItemView";
            this.uiGroup = _uiGroup;
            this.str = _str;
            this.x = 52.5;
            this.y = 102.5;
            this.uiGroup.addChild(this);
		}
		
        protected createChildren() {
            super.createChildren();
            if(this.str != undefined) {
                this.backMsgImage.visible = false;
                this.backMsgLabel.size = 92;
                this.backMsgLabel.text = String("+" + this.str);
            } else { 
                console.log("Test: bank no earn ! ");
            }
            //淡入动画0.5-1.0
            var gourpAlphaTween = egret.Tween.get(this.bankMsgGroup);
            gourpAlphaTween.to({ alpha: 1.0 },1500)//egret.Ease.cubicInOut
            //上移动画
            var groupMoveTween = egret.Tween.get(this.bankMsgGroup);
            groupMoveTween.to({ y: -200 },1500).call(() => {
                this.uiGroup.removeChild(this);
            });
        }
	}
}


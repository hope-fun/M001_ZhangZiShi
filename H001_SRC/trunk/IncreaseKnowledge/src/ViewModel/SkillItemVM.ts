module ViewModel {

	/**

	 *

	 * @author 

	 *

	 */

    export class SkillItemVM extends eui.ItemRenderer {
        
        public onCallBack: Function;
        private skillItemGroup: eui.Group;
        private lockMaskGroup: eui.Group;
        
        private skillName: eui.Label;
        private skillLv: eui.Label;        
        private skillGoldLabel: eui.Label;
        private skillDiamondLabel: eui.Label;
        private skillClockLabel: eui.Label;
        private unlockLabel: eui.Label;
        
        private skillIcon: eui.Image;
        /*
         * 在exml里面，给技能Icon默认图.
         */
        public set skillIconSource(_name: string) {
            this.skillIcon.source = _name;
        }
        
        private sModel: Model.SkillModel;
        
        private i: number = 0;
        public set setSModel(_data: Model.SkillModel) {
            this.sModel = _data;
            if(Model.WebValue.isDebug) console.log("zhujun: set skill model " + JSON.stringify(_data));

            if(_data.unlock) {
                this.lockMaskGroup.visible = false;//已解锁.
                this.skillItemGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    if(this.i % 2 == 0) {
                        if(this.onCallBack != null) {
                            this.onCallBack(this.sModel);
                        }
                    }
                    this.i++;
                },this);
            } else {
                this.lockMaskGroup.visible = true; //未解锁.
            }
            this.skillName.text = _data.name;
            this.skillLv.text = String("LV." + _data.level);
            this.skillGoldLabel.text = String(_data.gCost);
            this.skillDiamondLabel.text = String(_data.dCost);
            this.skillClockLabel.text = String(_data.speedCost);
            this.unlockLabel.text = String("等级" + _data.unlockLevel + " 解锁");
        }

        
        public constructor() {
            super();
            this.skinName = "View.SkillItemView";
        }

        protected createChildren() {
            super.createChildren();
        }
    }
}


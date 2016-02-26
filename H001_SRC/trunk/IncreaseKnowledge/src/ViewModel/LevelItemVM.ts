module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class LevelItemVM extends eui.ItemRenderer {
    	 
        public onCallBack: Function;
        private levelItemGroup: eui.Group;
        private levelImage: eui.Image;
        /*
         * 在exml里面，给关卡背景默认图.
         */ 
        public set levelImageSource(_name: string) {
            this.levelImage.source = _name;
        }
        private levelMask: eui.Image;
//        private costLabel: eui.Label;
        private levelName: eui.Label;
        private costValue: eui.Label;
        private duringValue: eui.Label;
        private turnValue: eui.Label;
        private lockGroup: eui.Group;
        private lockLabel: eui.Label;
        
        private lModel: Model.SceneModel;
        
        public set levelModel(_data: Model.SceneModel) { 
            this.lModel = _data;
            this.levelImage.source = _data.imageName;
            this.levelName.text = this.lModel.name;
            this.costValue.text = String(this.lModel.goldCost);
            this.duringValue.text = String(this.lModel.duringTurns + "秒");
            this.turnValue.text = String(this.lModel.turns + "回合");
            if(Model.WebValue.menuDataM.playerModel.level >= this.lModel.unlockLevel) {//已解鎖.
                this.lockGroup.visible = false;
                this.levelItemGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    if(this.onCallBack != null) {
                        this.onCallBack(this.lModel);
                    }
                },this);
            } else {//未解鎖.
                this.lockLabel.text = String("等级"+this.lModel.unlockLevel+" 解锁");
                this.levelMask.visible = false;
                this.levelItemGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
                    
                },this);
            }
        }
        
        public constructor() {
            super();
            this.skinName = "View.LevelItemView";
            this.name = "LevelItemVM";//用來取標識對象判斷用.
        }
        
        protected createChildren() {
            super.createChildren();
            var rect: egret.Rectangle = new egret.Rectangle(0,0,212,550);
            this.levelItemGroup.mask = rect;
           
        }
	}
}

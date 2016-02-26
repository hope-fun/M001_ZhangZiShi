module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class MainMenuItemVM extends eui.Button{
//    	/*
//    	 * 控件按钮图片.
//    	 */ 
//        private menuItemBtn: eui.Image;
//        
//        /*
//         * 在exml里面,给图片赋值.
//         */
//        public set menuItemSource(_name: string) {
//            this.menuItemBtn.source = _name;
//        } 
        
        
    	/*
    	 * 控件按钮图片.
    	 */ 
    	private menuItemBtn: eui.Image;
        /*
         * 在exml里面,给图片赋值.
         */ 
        public menuItemSource:string = "";         
        /*
         * 菜单按钮文字.
         */ 
        private menuItemLabel: eui.Label;
        /*
         * 文字内容.
         */ 
        public menuItemText: string = "";
        /*
         * 菜单按钮英文字.
         */ 
        private menuItemEnLabel: eui.Label;
        /*
         * 英文文字内容.
         */ 
        public menuItemEnText: string = "";
        /*
         * 菜单白色遮罩.
         */ 
        private menuItemMask: eui.Image;
    	
		public constructor() {
            super();
            this.skinName = "View.MainMenuItemView";
            this.setSkinPart("menuItemSource",this.menuItemSource);
            this.setSkinPart("menuItemText",this.menuItemText);
            this.setSkinPart("menuItemEnText",this.menuItemEnText);
		}
		
        protected childrenCreated(): void {
            this.menuItemBtn.source = this.menuItemSource;
            this.menuItemLabel.text = this.menuItemText;
            this.menuItemEnLabel.text = this.menuItemEnText;
        }
    }
}
				


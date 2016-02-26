module ViewModel {
	/**
	 *
	 * @author 
	 *
	 */
	export class LoadingBarItemVM extends eui.ProgressBar{
    	/*
    	 * 进度条组.
    	 */ 
//        private loadingGroup: eui.Group;
    	/*
    	 * 进度条.
    	 */ 
        private loadingBar : eui.Image;
    	/*
    	 * 百分比.
    	 */ 
        private loadingLabel : eui.Label;
        /*
         * 进度条末端icon.
         */ 
        private handleIcon: eui.Image;
        
		public constructor() {
            super();
		}
		
        protected createChildren() {
            super.createChildren();
            this.skinName = "View.LoadingBarItem";
            this.thumb = this.loadingBar;
            this.labelDisplay = this.loadingLabel;
            this.minimum = 0;
            this.value = 0;
            this.maximum = 100;
        }
        
        /*
         * 设置进度.
         */ 
        public setProgress(current,total): void {
//            console.log("Test: current value is " + current + " total " + total + " value is " + Math.floor(current / total * 100));
            this.value = Math.floor(current / total*100);
            this.handleIcon.x = 380 * current / total - 35;
        }
	}
}

module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class SkillModel {
		public constructor() {
		}
		/*
		 * 技能静态id.
		 */ 
        public skillId: number;
        
        public name: string;
        
        public level: string;
        
        public des: string;
        /*
         * 技能图标图片名.
         */ 
        public iconImage: string;
        
        public gCost: number;
        
        public dCost: number;
        
        public speedCost: number;
        
        public during: number;
        
        public leftDuring: number;
        
        public unlockLevel: number;
        /*
         * false:锁定
         * true:解锁
         */ 
        public unlock: boolean;        
	}
}

module Model {
	/**
	 *
	 * @author fangchao 
	 *
	 */
	export class TrainedModel {
		public constructor() {
            
		}
		/*
		 * 升级参数
		 */ 
        public skillModel: Model.SkillModel;
        /*
         * 技能升级后的金币加成
         */ 
        public goldAddition: number;
        /*
         * 技能升级后的分数加成
         */
        public scoreAddition: number;
        /*
         * 技能升级后的经验加成
         */ 
        public expAddition: number;
	}
}

module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class WebValue {
		public constructor() {
		}
		
		public static isDebug :boolean = false;
		
        public static appVer: string = "v1.0.0";
        
        public static appName: string = "爱学霸";
		
        public static isStartBank: boolean = false;
        
        public static accountM: AccountModel = new AccountModel();
		
        public static menuDataM: MenuDataModel = new MenuDataModel();
        
        public static gameDataM: GameDataModel = new GameDataModel();
        
        public static drawM: DrawMoneyModel = new DrawMoneyModel();
        
        /*
         * 商城数据对象.
         */ 
        public static mallM: MallModel = new MallModel();
        
        /*
         * 结算数据.
         */ 
        public static settleM: SettleAccountModel = new SettleAccountModel();
        
        /*
         * 更新数据 by cai_haotian 2015.12.10
         */
        public static skillM: SkillTrainingModel = new SkillTrainingModel();
        /*
         * 音效开关 by fangchao 2015.12.20
         */
        public static isSound: boolean;
        /*
         * 技能升级后得到的数据 by fangchao 2015.12.20
         */ 
        public static trainedM: TrainedModel = new TrainedModel();
	}
}

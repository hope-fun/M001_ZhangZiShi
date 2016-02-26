module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class MenuDataModel {
		public constructor() {
		}
		
        public playerModel: PlayerModel;
        
        public sceneModelList: Array<SceneModel>;
        
        public skillModelList: Array<SkillModel>;
        
        public bankModel: BankModel;
	}
}

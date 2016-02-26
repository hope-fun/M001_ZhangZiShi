module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class GameDataModel {
		public constructor() {
    		
		}
		
        public questionListModel: Array<QuestionModel>;
        
        public enemyModel: EnemyModel = new EnemyModel();
		
	}
}

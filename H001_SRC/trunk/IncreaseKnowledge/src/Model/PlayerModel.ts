module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class PlayerModel {
		public constructor() {
		}
		
        public id: string;
        
        public nickName: string;
        
        public headId: number;
        
        public gold: number;
        
        public diamond: number;
        
        public level: number;
        
        public expCurrent: number;
        
        public expMax: number;
        /*
         * 戰績(示例:X戰X勝)
         */ 
        public militaryExploit: string;
        
        public winRate: number;
        
        public rightQueNum: number;
        
        public beatLevelOwnNum: number;
        
        public jackpot: number;
        
        public goldAddition: number;
        
        public scoreAddition: number;
        
        public expAddition: number;
	}
}

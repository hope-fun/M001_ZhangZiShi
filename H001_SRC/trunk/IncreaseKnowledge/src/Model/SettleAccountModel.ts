module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class SettleAccountModel {
		public constructor() {
		}
//		当前一轮获得的金币数  by fangchao
        public gold: number;
//      当前一轮获得的经验数  by fangchao     
        public exp: number;
//      当前一轮后的等级    by fangchao
        public level: number;
//      当前等级的经验上限值    by fangchao
        public expMax: number;
	}
}

module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class QuestionModel {
		public constructor() {
		}
		
        public questionId: number;
        
        public question: string;
        
        public answerList: Array<string>;
        
        public answerIndex: number;
        
        public type: string;
        
        public adImage: string;
	}
}

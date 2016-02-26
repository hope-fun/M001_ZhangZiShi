module Model {
	/**
	 *
	 * @author 
	 *
	 */
    export class EnemyModel {
        
        public constructor() {
            
        }

        public name: string;

        public headId: number;

        public get headImage(): any {
            return Tools.padLeft(String(this.headId),"0",2);
        }
        
        public headBg: string;
        
        public get headBgImage() :string{ 
            if(this.headId == 1 || this.headId == 5 || this.headId == 9) {
                return "hong";
            } else if(this.headId == 2 || this.headId == 6 || this.headId == 10) {
                return "huang";
            } else if(this.headId == 3 || this.headId == 7 || this.headId == 11) {
                return "lan";
            } else { 
                return "zi"; 
            }
        }
//        public set levelImageSource(_name: string) {
//            this.levelImage.source = _name;
//}
        
        public answerDetailModel: Array<AnswerDetailModel>;
	}
	
    
}

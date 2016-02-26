module Model {
	/**
	 *
	 * @author 
	 *
	 */
	export class AccountModel {
		public constructor(_id?:string) {
            this.id = _id;
		}
		/*
		 * 三方平台id.
		 */ 
        public thirdAccountId: string;
		/*
		 * 快速登陆udid.
		 */ 
        public id: string;
        /*
         * 时间戳.
         */ 
        public time: string;
        /*
         * 平台标志.
         */ 
        public platform: string;
        /*
         * 三方接口签名.
         */ 
        public sign: string;
	}
}

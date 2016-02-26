module Model {
	/**
	 *
	 * @author cai_haotian 2016.1.7.
	 * Qbao
	 *
	 */
    export class QbaoModel {
        public constructor() {
        }
        /**
         * @userID唯一ID
         */ 
        public userId:string;
        
        /**
         * @channel号
         */ 
        public channel:string;
        
//        /*
//        * 平台分配的appid.
//       */ 
//        public appid: number;
//        /*
//         * 平台标志.
//         */
//        public pf: string;
//        
//        /*
//         * 用户唯一识别ID.
//         */
//        public openid: string;
//        /*
//         * 当前系统时间.
//         */
//        public ts: string;
//        /*
//         * 接口签名.
//         */
//        public sign: string;
    }
    
    /**
     * @目前似乎没有，以后可能会从钱宝获得
     */ 
    
    export class QbaoUserInfo {
        /*
         * 返回结果码.
         */
        public ret: number;
        /*
         * 返回提示信息.
         */
        public msg: string;
        /*
         * 用户昵称.
         */
        public nickname: string;
        /*
         * 用户头像.
         */
        public headimg: string;
    }


}


var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/dragonbones/dragonbones.js",
	"libs/dcagent/dcagent.v2.min.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/Model/AccountModel.js",
	"bin-debug/Model/AnswerDetailModel.js",
	"bin-debug/Model/AudioService.js",
	"bin-debug/Model/BankModel.js",
	"bin-debug/Model/EnemyModel.js",
	"bin-debug/Model/GameDataModel.js",
	"bin-debug/Model/GoodsModel.js",
	"bin-debug/Model/MallModel.js",
	"bin-debug/Model/MenuDataModel.js",
	"bin-debug/Model/PlayerModel.js",
	"bin-debug/Model/QuestionModel.js",
	"bin-debug/Model/SceneModel.js",
	"bin-debug/Model/SettleAccountModel.js",
	"bin-debug/Model/SkillModel.js",
	"bin-debug/Model/SkillTrainingModel.js",
	"bin-debug/Model/Tools/HashMap.js",
	"bin-debug/Model/Tools/Mathf.js",
	"bin-debug/Model/Tools/MD5.js",
	"bin-debug/Model/Tools/MovieClip.js",
	"bin-debug/Model/Tools/TimeSpan.js",
	"bin-debug/Model/Tools/Tools.js",
	"bin-debug/Model/TrainedModel.js",
	"bin-debug/Model/WebService/WebService.js",
	"bin-debug/Model/WebService/WebValue.js",
	"bin-debug/SDKModel/DataEyeService.js",
	"bin-debug/SDKModel/Play68Model.js",
	"bin-debug/SDKModel/Play68Service.js",
	"bin-debug/SDKModel/Play68Value.js",
	"bin-debug/SDKModel/QbaoModel.js",
	"bin-debug/SDKModel/QbaoService.js",
	"bin-debug/SDKModel/QbaoValue.js",
	"bin-debug/SDKModel/SDKService.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/ViewModel/BankMsgItemVM.js",
	"bin-debug/ViewModel/ErrorMsgVM.js",
	"bin-debug/ViewModel/HeadItemVM.js",
	"bin-debug/ViewModel/HeadMsgVM.js",
	"bin-debug/ViewModel/IntroductionVM.js",
	"bin-debug/ViewModel/LevelItemVM.js",
	"bin-debug/ViewModel/LevelUpVM.js",
	"bin-debug/ViewModel/LoadingBarItemVM.js",
	"bin-debug/ViewModel/LogoVM.js",
	"bin-debug/ViewModel/MainGameVM.js",
	"bin-debug/ViewModel/MainMenuItemVM.js",
	"bin-debug/ViewModel/MainMenuVM.js",
	"bin-debug/ViewModel/MallMsgVM.js",
	"bin-debug/ViewModel/SettingMsgVM.js",
	"bin-debug/ViewModel/SkillItemVM.js",
	"bin-debug/ViewModel/SkillSpeedUpVM.js",
	"bin-debug/ViewModel/SkillTrainedVM.js",
	"bin-debug/ViewModel/TestVM.js",
	"bin-debug/ViewModel/TitleInfoVM.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1280,
		contentHeight: 720,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    /**
     * 加载进度界面
     * loading process interface
     */
    private logoVM : ViewModel.LogoVM;
    public mainMenuVM: ViewModel.MainMenuVM;
    private titleInfoView: ViewModel.TitleInfoVM;
    
    private headMsgVM: ViewModel.HeadMsgVM;
    private mainGameVM: ViewModel.MainGameVM;
//    by fangchao
    private introductionView: ViewModel.IntroductionVM;
    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter",assetAdapter);
        this.stage.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
   
    
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    }
    /*
     * 主题是否加载完成.
     */ 
    private isThemeLoadEnd: boolean = false;
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the 
     */
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createLogoScene();
    }
    
//    private gameInit() { 
////        Model.Play68Service.assignmentPlay68Model();
//        this.createLogoScene();
//    }
    
    /*
     * 创建资源加载以及logo场景.
     */
    private createLogoScene() {
        this.logoVM = new ViewModel.LogoVM(this,() => {
            console.log("Test: Logo and loading scene init finish ! ");
        });
        var tw = egret.Tween.get(this.logoVM.logoGroup);
        tw.to({ alpha: 1 },2000).call(() => {
            this.logoVM.loadingBarItem.visible = true;
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
            RES.loadGroup("preload");
        });
    }
    /*
     * 资源是否加载完成.
     */ 
    private isResourceLoadEnd: boolean = false;
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.isResourceLoadEnd = true;
            this.logoVM.loadingBarItem.visible = false;
            var tw = egret.Tween.get(this.logoVM.logoGroup);
            tw.to({ alpha: 0 },2000).call(() => {
                this.removeChild(this.logoVM);
                this.createScene();
            });
        }
    }
    
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if(event.groupName == "preload") {
//            this.logoVM.setAlpha(event.itemsLoaded,event.itemsTotal);
            this.logoVM.loadingBarItem.setProgress(event.itemsLoaded,event.itemsTotal);
        }
    }
    
    private createScene() {
        if(this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    }

    /**
     * @创建场景界面
     * @Create scene interface
     */
    protected startCreateScene(): void {
        if(Model.Tools.getURLParam("channel") === "") {
            if(egret.localStorage.getItem("guid") == null) {
                egret.localStorage.setItem("guid",Model.Tools.guid());    
            }
            Model.WebValue.accountM = new Model.AccountModel(egret.localStorage.getItem("guid"));
            Model.WebService.userLogin(Model.WebValue.accountM,(_request: egret.HttpRequest) => {
                this.sendMenuData();
            });
        } else { //如果有渠道则进入SDKService处理业务.
            Model.SDKService.initSDK(() => { 
                Model.WebService.userLogin(Model.WebValue.accountM,(_request: egret.HttpRequest) => {
                    this.sendMenuData();
                });
             });
        }
    }
    
    private sendMenuData() { 
        Model.WebService.menuData((_request: egret.HttpRequest) => { 
            Model.WebValue.menuDataM = JSON.parse(_request.response);
            Model.DataEyeService.login(Model.WebValue.menuDataM.playerModel.nickName);
            this.createMainMenuScene();
        });
    }
    
    private createMainMenuScene() { 
        this.mainMenuVM = new ViewModel.MainMenuVM(this,() => {
            alert("zhujun:　main menu on call back !　");
        });
        this.titleInfoView = new ViewModel.TitleInfoVM(this);
        //        by fangchao
        var p = Model.WebValue.menuDataM.playerModel;
        if(p.level === 1 && p.gold === 0) {
            this.introductionView = new ViewModel.IntroductionVM(this);
            console.log("fangchao zai ci");
        };
    }
}

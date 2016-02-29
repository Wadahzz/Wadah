$(function() {
    var startupView = "ItmesDirs";

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    if(DevExpress.devices.real().platform === "win") {
        $("body").css("background-color", "#000");
    }

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if (window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if(e.isHardwareButton && !OsamaOpticV2.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }

    OsamaOpticV2.app = new DevExpress.framework.html.HtmlApplication({
        namespace: OsamaOpticV2,
        layoutSet: DevExpress.framework.html.layoutSets[OsamaOpticV2.config.layoutSet],
        animationSet: DevExpress.framework.html.animationSets[OsamaOpticV2.config.animationSet],
        navigation: OsamaOpticV2.config.navigation,
        commandMapping: OsamaOpticV2.config.commandMapping,
        navigateToRootViewMode: "keepHistory",
        useViewTitleAsBackText: true
    });

    $(window).unload(function() {
        OsamaOpticV2.app.saveState();
    });

    OsamaOpticV2.app.router.register(":view/:id", { view: startupView, id: undefined });
    OsamaOpticV2.app.on("navigatingBack", onNavigatingBack);
    OsamaOpticV2.app.navigate();
});
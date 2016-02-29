OsamaOpticV2.ItmesDirs = function(params, viewInfo) {
    "use strict";

    var shouldReload = false,
		openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        dataSourceObservable = ko.observable(),
        dataSource;

    function handleItmesDirsModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        if(!dataSourceObservable()) {
            dataSourceObservable(dataSource);
            dataSource.load().always(function() {
                isReady.resolve();
            });
        }
        else if(shouldReload) {
            refreshList();
        }
    }

    function handleViewDisposing() {
        OsamaOpticV2.db.ItmesDirs.off("modified", handleItmesDirsModification);
    }

    function refreshList() {
        shouldReload = false;
        dataSource.pageIndex(0);
        dataSource.load();
    }

    dataSource = new DevExpress.data.DataSource({
        store: OsamaOpticV2.db.ItmesDirs,
        map: function(item) {
            return new OsamaOpticV2.ItmesDirViewModel(item);
        }
    });

    OsamaOpticV2.db.ItmesDirs.on("modified", handleItmesDirsModification);

    return {
        isReady: isReady.promise(),
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
		openCreateViewAsRoot: openCreateViewAsRoot
    };   
};
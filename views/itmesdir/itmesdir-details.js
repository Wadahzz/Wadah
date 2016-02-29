OsamaOpticV2.ItmesDirDetails = function(params, viewInfo) {
    "use strict";

    var id = params.id,
        itmesdir = new OsamaOpticV2.ItmesDirViewModel(),
        isReady = $.Deferred();

    function handleDelete() {
        DevExpress.ui.dialog.confirm("Are you sure you want to delete this item?", "Delete item").then(function(result) {
            if(result)
                handleConfirmDelete();
        });
    }

    function handleConfirmDelete() {        
        OsamaOpticV2.db.ItmesDirs.remove(id).done(function() {
            if(viewInfo.canBack) {
                OsamaOpticV2.app.navigate("ItmesDirs", { target: "back" });
            }
            else {
                OsamaOpticV2.app.navigate("Blank", { target: "current" });
            }
        });
    }

    function handleViewShowing() {
        OsamaOpticV2.db.ItmesDirs.byKey(id).done(function(data) {
            itmesdir.fromJS(data);
            isReady.resolve();
        });
    }

    return {
        id: id,
        itmesdir: itmesdir,
        handleDelete: handleDelete,        
        viewShowing: handleViewShowing,
        isReady: isReady.promise()
    };
};
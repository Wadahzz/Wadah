OsamaOpticV2.ItmesDirEdit = function(params, viewInfo) {
    "use strict";

    var id = params.id,
        isNew = (id === undefined),
        isSplitLayout = viewInfo.layoutController.name === "split",
        itmesdir = new OsamaOpticV2.ItmesDirViewModel(),
        isReady = $.Deferred();

    function load() {
        return OsamaOpticV2.db.ItmesDirs.byKey(id).done(function(data) {
            itmesdir.fromJS(data);
        });
    }

    function update() {
        OsamaOpticV2.db.ItmesDirs.update(id, itmesdir.toJS()).done(function() {
            OsamaOpticV2.app.back();
        });
    }

    function insert() {
        OsamaOpticV2.db.ItmesDirs.insert(itmesdir.toJS()).done(function(values, newId) {
            OsamaOpticV2.app.navigate({ view: "ItmesDirDetails", id: newId }, { target: "current" });
        });
    }

    function handleSave() {
        if(isNew)
            insert();            
        else
            update();
    }

    function handleCancel() {
        if(!isNew) {
            OsamaOpticV2.app.back();
        }
        else {
            if(isSplitLayout) {
                OsamaOpticV2.app.navigate("Blank", { target: "current" });
            }
            else {
                OsamaOpticV2.app.back();
            }
        }
    }

    function handleViewShowing() {
        itmesdir.clear();
        if(!isNew)
            load().done(function() {
                isReady.resolve();
            });
        else {
            isReady.resolve();
        }
    }

    return {
        itmesdir: itmesdir,
        handleSave: handleSave,
        handleCancel: handleCancel,
        viewShowing: handleViewShowing,
        isReady: isReady.promise()
    };
};
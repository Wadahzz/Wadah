(function() {
    OsamaOpticV2.ItmesDirViewModel = function(data) {
            this.itmid = ko.observable();
            this.itmname = ko.observable();
            this.barcode = ko.observable();
            this.grid = ko.observable();
            this.untid = ko.observable();
            this.sizee = ko.observable();
            this.openstoke = ko.observable();
            this.qstoke = ko.observable();
            this.opanesalse = ko.observable();
            this.qsales = ko.observable();
            this.openshowroom = ko.observable();
            this.qshowroom = ko.observable();
            this.tyid = ko.observable();
            this.colores = ko.observable();
            this.pakeg = ko.observable();
            this.buyprise = ko.observable();
            this.salesratio = ko.observable();
            this.salesprise = ko.observable();
            this.lastbuybillid = ko.observable();
            this.lastbuydate = ko.observable();
            this.lastexchangeid = ko.observable();
            this.lastexchangedate = ko.observable();
            this.cutter = ko.observable();
            this.box = ko.observable();
            this.Shelf = ko.observable();
            this.indexid = ko.observable();
            this.Cyl = ko.observable();
            this.PSH = ko.observable();
            this.minimum = ko.observable();
            this.Expirydate = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(OsamaOpticV2.ItmesDirViewModel.prototype, {
        toJS: function() {
            return {
                itmid: this.itmid(),
                itmname: this.itmname(),
                barcode: this.barcode(),
                grid: this.grid(),
                untid: this.untid(),
                sizee: this.sizee(),
                openstoke: this.openstoke(),
                qstoke: this.qstoke(),
                opanesalse: this.opanesalse(),
                qsales: this.qsales(),
                openshowroom: this.openshowroom(),
                qshowroom: this.qshowroom(),
                tyid: this.tyid(),
                colores: this.colores(),
                pakeg: this.pakeg(),
                buyprise: this.buyprise(),
                salesratio: this.salesratio(),
                salesprise: this.salesprise(),
                lastbuybillid: this.lastbuybillid(),
                lastbuydate: this.lastbuydate(),
                lastexchangeid: this.lastexchangeid(),
                lastexchangedate: this.lastexchangedate(),
                cutter: this.cutter(),
                box: this.box(),
                Shelf: this.Shelf(),
                indexid: this.indexid(),
                Cyl: this.Cyl(),
                PSH: this.PSH(),
                minimum: this.minimum(),
                Expirydate: this.Expirydate(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.itmid(data.itmid);
                this.itmname(data.itmname);
                this.barcode(data.barcode);
                this.grid(data.grid);
                this.untid(data.untid);
                this.sizee(data.sizee);
                this.openstoke(data.openstoke);
                this.qstoke(data.qstoke);
                this.opanesalse(data.opanesalse);
                this.qsales(data.qsales);
                this.openshowroom(data.openshowroom);
                this.qshowroom(data.qshowroom);
                this.tyid(data.tyid);
                this.colores(data.colores);
                this.pakeg(data.pakeg);
                this.buyprise(data.buyprise);
                this.salesratio(data.salesratio);
                this.salesprise(data.salesprise);
                this.lastbuybillid(data.lastbuybillid);
                this.lastbuydate(data.lastbuydate);
                this.lastexchangeid(data.lastexchangeid);
                this.lastexchangedate(data.lastexchangedate);
                this.cutter(data.cutter);
                this.box(data.box);
                this.Shelf(data.Shelf);
                this.indexid(data.indexid);
                this.Cyl(data.Cyl);
                this.PSH(data.PSH);
                this.minimum(data.minimum);
                this.Expirydate(data.Expirydate);
            }
        },

        clear: function() {
            this.itmid(undefined);
            this.itmname(undefined);
            this.barcode(undefined);
            this.grid(undefined);
            this.untid(undefined);
            this.sizee(undefined);
            this.openstoke(undefined);
            this.qstoke(undefined);
            this.opanesalse(undefined);
            this.qsales(undefined);
            this.openshowroom(undefined);
            this.qshowroom(undefined);
            this.tyid(undefined);
            this.colores(undefined);
            this.pakeg(undefined);
            this.buyprise(undefined);
            this.salesratio(undefined);
            this.salesprise(undefined);
            this.lastbuybillid(undefined);
            this.lastbuydate(undefined);
            this.lastexchangeid(undefined);
            this.lastexchangedate(undefined);
            this.cutter(undefined);
            this.box(undefined);
            this.Shelf(undefined);
            this.indexid(undefined);
            this.Cyl(undefined);
            this.PSH(undefined);
            this.minimum(undefined);
            this.Expirydate(undefined);
        }
    });
})();
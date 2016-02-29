// NOTE object below must be a valid JSON
window.OsamaOpticV2 = $.extend(true, window.OsamaOpticV2, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://localhost:3489/DataService.svc",
                "production": "http://localhost:3489/DataService.svc"
            }
        },
        "services": {
            "db": {
                "entities": {
					"ItmesDirs": { 
						"key": "itmid", 
						"keyType": "Int32" 
					}
                }
            }
        }
    }
});

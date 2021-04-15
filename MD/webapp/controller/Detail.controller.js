sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("msap.MD.controller.Detail", {
        onInit: function () {
            console.log("Hello from detail");
        }
    });
});
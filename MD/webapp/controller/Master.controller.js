sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("msap.MD.controller.Master", {
        onInit: function () {
            console.log("Hello world")
        },

        onExit: function () {
            console.log("Bye World")
        }
    })
});
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		"use strict";

		return Controller.extend("msap.MD.controller.Main", {
			onInit: function () {
                console.log("Hello from Main Page");
			}
		});
	});

// import Controller from "sap/ui/core/mvc/Controller";

// /**
//  * @namespace ui5project1.controller
//  */
// export default class App extends Controller {

//     /*eslint-disable @typescript-eslint/no-empty-function*/
//     public onInit(): void {

//     }
// }


// webapp/controller/App.controller.js
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Button"
], function(Controller) {
  "use strict";

  return Controller.extend("ui5project1.controller.App", {
    onHomePress: function (oEvent) {
      var oButton = oEvent.getSource();
      
      // Hide the button
      oButton.setVisible(false);

      // Show the button again after 2 seconds
      setTimeout(function () {
        oButton.setVisible(true);
      }, 2000);
    }
  });
});
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
  "sap/m/Button",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/odata/ODataModel",
  "sap/ui/model/Model",
  "sap/m/MessageToast"
], function(Controller, Button, JSONModel, ODataModel, Model, MessageToast) {
  "use strict";

  return Controller.extend("ui5project1.controller.Main", {

    onInit: function () {
      console.log("Controller initialized");

      var oModel = new JSONModel();
      oModel.setData({
        "empStr": {
          "empNo": 1000,
          "empName": "Rahul",
          "empDept": "Finance",  // added for dept binding
          "salary": 9500,
          "currency": "EUR"
        },
        "empTab": [
          {
            "empNo": 900,
            "empName": "Rebbeca",
            "salary": 8000,
            "currency": "USD"
          },
          {
            "empNo": 901,
            "empName": "Rahul",
            "salary": 8500,
            "currency": "INR"
          }
        ]
      });

      this.getView().setModel(oModel); // Local view model binding
    },

    onHomePress: function (oEvent) {
      var oButton = oEvent.getSource();
      oButton.setVisible(false);

      setTimeout(function () {
        oButton.setVisible(true);
      }, 2000);
    },

    onDisplayPress: function () {
      var oModel = this.getView().getModel();
      var empData = oModel.getProperty("/empStr");

      MessageToast.show("Employee: " + empData.empName + " | Salary: " + empData.salary);
    }

  });
});


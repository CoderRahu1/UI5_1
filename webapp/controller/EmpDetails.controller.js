sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ], function (Controller, MessageBox) {
    "use strict";
  
    return Controller.extend("ui5project1.controller.EmpDetails", {
      onDisplayPress: function () {
        const empName = this.byId("empName").getValue();
        const salary = this.byId("empSalary").getValue();
  
        if (empName && salary) {
          MessageBox.information(`Welcome ${empName}, your salary is ${salary}`);
        } else {
          MessageBox.warning("Please enter both Employee Name and Salary.");
        }
      }
    });
  });
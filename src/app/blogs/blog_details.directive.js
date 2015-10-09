require("../app.js");

(function() {
  "use strict";

  angular.module("blogapp").directive("blogDetails", function () {
    return {
      scope: {
        ngModel: "=", // ng-model
      }
    };
  });
}());

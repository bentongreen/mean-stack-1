require("../app.js");

(function() {
  "use strict";

  angular.module("blogapp")
  .directive("blogDetails", function () {
    return {
      scope: {
        blog: "=blog",
      }
      templateUrl: "partials/blogs/blog_details.html",
    };
  });
}());

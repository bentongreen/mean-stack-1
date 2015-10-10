require("angular");
require("angular-route");

// require("./entry.js");

(function () {
  "use strict";

  var app = angular.module("blogapp", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/blogs", {
      templateUrl: "partials/blogs/blog_form.html",
      controller: "BlogCtrl as vm",
    })
    .when("/blogs/new", {
      templateUrl: "/partials/blogs/blog_form.html",
      controller: "BlogFormCtrl as vm",
    })
    .when("/blogs/:blog_id/edit", {
      templateUrl: "/partials/blogs/blog_form.html",
      controller: "BlogFormCtrl as vm",
    })
    .when("/blogs/:blog_id", {
      templateUrl: "/partials/blogs/blog_detail.html",
      controller: "BlogCtrl as vm",
    })
    .otherwise({
      redirectTo: "/blogs"
    });
  }]);
}());
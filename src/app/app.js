require("angular");
require("angular-route");
require("./index.js");

(function () {
  "use strict";

  var app = angular.module("blogapp", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/blogs", {
      templateUrl: "partials/blogs/blogs_list.html",
      controller: "BlogsCtrl as vm",
    })
    .when("/blogs/new", {
      templateUrl: "partials/blog/blog_form.html",
      controller: "BlogFormCtrl as vm",
    })
    .when("/blogs/:blog_id/edit", {
      templateUrl: "partials/blog/blog_form.html",
      controller: "BlogFormCtrl as vm",
    })
    .when("/blogs/:blog_id", {
      templateUrl: "partials/blog/blog_detail.html",
      controller: "BlogCtrl as vm",
    })
    .otherwise({
      redirectTo: "/blogs"
    });
  }]);
}());



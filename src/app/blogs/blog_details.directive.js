(function() {
  "use strict";

  angular.module("blogapp").directive("blogDetails", function () {
    return {
      scope: {
        ngModel: "=", // ng-model
      },
      template: "<dl><dt>Title</dt><dd>{{vm.blog.title}}</dd><dt>Content</dt><dd>{{vm.blog.content}}</dd></dl>",
    };
  });
}());

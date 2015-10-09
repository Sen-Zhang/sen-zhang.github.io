'use strict';

angular.module('AppDirectives', []).
  directive('prism', [function () {
    return {
      restrict: 'A',
      link: function ($scope, element) {
        element.ready(function () {
          Prism.highlightElement(element[0]);
        });
      }
    }
  }]);

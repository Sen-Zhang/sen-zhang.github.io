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
  }]).
  directive('collapse', [function () {
    return {
      restrict: 'A',
      link: function ($scope, element) {
        element.on('click', function () {
          var $this = element.find('.fa');

          if ($this.hasClass('fa-plus')) {
            $this.removeClass('fa-plus').addClass('fa-minus');
          } else {
            $this.removeClass('fa-minus').addClass('fa-plus');
          }
        });
      }
    }
  }]).
  directive('toggle', [function () {
    return {
      restrict: 'A',
      scope: true,
      link: function ($scope, element) {
        element.find('.toggle_btn').on('click', function () {
          $scope.show = !$scope.show;
          $scope.$apply();
        });
      }
    }
  }]);

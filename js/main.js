'use strict';

var myBlog = angular.module('myBlog', [
  'ui.router'
]);

myBlog.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/templates/home.html'
    })
    .state('bvg', {
      url: '/bvg',
      templateUrl: 'js/templates/bvg.html'
    });
});

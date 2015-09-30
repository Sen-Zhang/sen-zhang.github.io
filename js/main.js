'use strict';

var myBlog = angular.module('myBlog', [
  'ui.router'
]);

myBlog.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/templates/home.html'
    })
    .state('articles', {
      url: '/articles',
      templateUrl: 'js/templates/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/templates/about.html'
    })
    .state('bvg', {
      url: '/articles/bootstrap_view_generator',
      templateUrl: 'js/templates/articles/bootstrap_view_generator.html'
    });
});

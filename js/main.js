'use strict';

var myBlog = angular.module('myBlog', [
  'ui.router',
  'AppDirectives'
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
      views: {
        '': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/index.html'
        },
        'alerts@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/alerts.html'
        },
        'badges@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/badges.html'
        },
        'labels@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/labels.html'
        },
        'panels@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/panels.html'
        },
        'panelRows@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/panel_rows.html'
        },
        'modals@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/modals.html'
        },
        'navs@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/navs.html'
        },
        'navbars@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/navbars.html'
        },
        'dropdowns@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/dropdowns.html'
        },
        'icons@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/icons.html'
        },
        'progressBars@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/progress_bars.html'
        },
        'breadcrumbs@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/breadcrumbs.html'
        },
        'buttons@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/buttons.html'
        },
        'forms@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_view_generator/forms.html'
        }
      }
    });
});

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
    .state('tools', {
      url: '/tools',
      templateUrl: 'js/templates/tools.html'
    })
    .state('base64', {
      url: '/tools/base64',
      templateUrl: 'js/templates/tools/base64.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/templates/about.html'
    })
    .state('bvg', {
      url: '/articles/bootstrap_ui_helper',
      views: {
        '': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/index.html'
        },
        'alerts@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/alerts.html'
        },
        'badges@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/badges.html'
        },
        'labels@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/labels.html'
        },
        'panels@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/panels.html'
        },
        'panelRows@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/panel_rows.html'
        },
        'modals@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/modals.html'
        },
        'navs@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/navs.html'
        },
        'navbars@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/navbars.html'
        },
        'dropdowns@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/dropdowns.html'
        },
        'icons@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/icons.html'
        },
        'progressBars@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/progress_bars.html'
        },
        'breadcrumbs@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/breadcrumbs.html'
        },
        'buttons@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/buttons.html'
        },
        'forms@bvg': {
          templateUrl: 'js/templates/articles/bootstrap_ui_helper/forms.html'
        }
      }
    });
});

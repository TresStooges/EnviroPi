(function() {
  'use strict';

  angular.module('app').config(config)

  // TODO: figure out how to configure the app correctly
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
     .state({
       name: 'home',
       url: '/',
       component: 'landingPage',
     })
     .state({
       name: 'location',
       url: '/environment',
       component: 'location'
     })
    //  .state({
    //    name: 'showHouse',
    //    url: '/house/:id',
    //    component: 'houseShow'
    //  })
  }

}());

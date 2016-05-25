'use strict';

/**
 * @ngdoc function
 * @name millionadsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the millionadsApp
 */
angular.module('millionadsApp')
  .controller('MainCtrl', function(weatherService) {
    var self = this
    
    	weatherService.getWeather().then(function(response){
        self.weather = response.data.query.results.channel
      });
    
  });

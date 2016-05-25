'use strict';

/**
 * @ngdoc function
 * @name millionadsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the millionadsApp
 */
angular.module('millionadsApp')
  .controller('AboutCtrl', function (weatherService) {
  	var self = this
    weatherService.getWeather().then(function(response){
        self.forecast = response.data.query.results.channel.item.forecast
      });
    
  });

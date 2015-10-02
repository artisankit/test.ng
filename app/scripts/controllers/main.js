'use strict';

/**
 * @ngdoc function
 * @name testngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testngApp
 */
angular.module('testngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.test = function(){
    	console.log($scope.guitars);
    	console.log($scope.namez);
    };
  });

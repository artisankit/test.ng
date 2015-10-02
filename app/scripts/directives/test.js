'use strict';

/**
 * @ngdoc directive
 * @name testngApp.directive:test
 * @description
 * # test
 */
angular.module('testngApp')
  .directive('test', function () {
    return {
      template: '<input ng-model="value" type="text"></input>',
      restrict: 'E',
      scope: {
      	value : '=ngModel'
      },
      link: function postLink(scope, element, attrs) {
        // element.text('this is the test directive');
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name quixamCommonStylesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quixamCommonStylesApp
 */
angular.module('quixamCommonStylesApp')
  .controller('MainCtrl', function () {

    var vm = this;

    var colors = ['green', 'orange', 'blue', 'yellow', 'pink'];
    var numberOfClasses = 5;

    var init = function () {
      generateColorClasses();
    };

    function generateColorClasses() {
     vm.colorClasses = [];
     angular.forEach(colors, function(color) {
       var colorClass = {};
       colorClass.name = color;
       colorClass.classes = [];
       for(var i=1; i<=numberOfClasses; i++) {
         colorClass.classes.push({class:'quixam-color__'+color+'-d'+i, color:'quixam-bgcolor__'+color+'-d'+i});
       }
       for(var j=1; j<=numberOfClasses; j++) {
         colorClass.classes.push({class:'quixam-color__'+color+'-l'+j, color:'quixam-bgcolor__'+color+'-l'+j});
       }
       vm.colorClasses.push(colorClass);
     });
      console.log(vm.colorClasses);
    }

    init();
  });

angular.module('anchorScroll', [])
  .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.gotoBottom = function() {
        $location.hash('bottom');
        $anchorScroll();
      };
    }]);

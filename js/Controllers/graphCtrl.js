angular.module('graphCtrl', [])
.controller('graphCtrl', function ($scope, userData, Calculation){
    // Options
    $scope.width = 700;
    $scope.height = 500;
    // Data

  $scope.data = userData.user.months;
$scope.calcStat = function () {
    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    $scope.max = 0;
    var mas = [];
    var arrLength = $scope.data.length;

     for (var i = 0; i < arrLength; i++) {
         mas[i] = $scope.data[i].value - $scope.data[0].value;
         (i < 4) ? Calculation.oldTarif=true : Calculation.oldTarif=false;
        $scope.data[i].coast = Calculation.selectConsumers(mas[i] - mas[i-1]);
      };

      for(var j = 1; j < arrLength-1; j++) {
         // Find Maximum X Axis Value
        if ($scope.data[j].coast > $scope.max)

        $scope.max = $scope.data[j].coast;
    };
  };
});

var user;
var app = angular
    .module('app', [])
    .controller('formCtrl', function ($scope, userData, Calculation, donutChart) {

        $scope.user = userData.user;
        $scope.newForm = false;
        $scope.kwh = function () {
            userData.user.kWh = userData.user.thisMonth - userData.user.lastMonth;
            userData.user.coast = Calculation.selectConsumers(userData.user.kWh);
        };

        //$scope.changeDonut = donutChart.change();

        $scope.addItem = function (itemName, itemCol, itemTime, itemPower) {
            if (userData.user.items.length < 16) userData.user.items.push({
                name: itemName,
                color: donutChart.getRandCol(),
                col: itemCol || 1,
                time: itemTime || 60,
                power: itemPower || 200
            });
            donutChart.changeData();
        };
        $scope.removeItem = function (item) {
            for (var i = 0, ii = userData.user.items.length; i < ii; i++) {
                if (item === userData.user.items[i]) {
                    userData.user.items.splice(i, 1);
                    donutChart.changeData();
                }
            }
        };
    });

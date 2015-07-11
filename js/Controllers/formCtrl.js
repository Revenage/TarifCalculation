angular.module('formCtrl', ['ngAnimate'])
    .controller('formCtrl', function ($scope, userData, Calculation, donutChart) {
        $scope.user = userData.user;
        donutChart.toChange();
        $scope.kwh = function () {
            userData.user.kWh = userData.user.thisMonth - userData.user.lastMonth;
            userData.user.coast = Calculation.selectConsumers(userData.user.kWh);
        };
        $scope.addItem = function (itemName, itemCol, itemTime, itemPower, itemWattHour) {
            if (userData.user.items.length < 16)
                userData.user.items.push({
                    name: itemName || "Электроприбор",
                    color: donutChart.getRandCol(),
                    col: itemCol || 1,
                    time: itemTime || 60,
                    power: itemPower || 200,
                });
            donutChart.toChange();
        };

        $scope.removeItem = function (item) {
            for (var i = 0, ii = userData.user.items.length; i < ii; i++) {
                if (item === userData.user.items[i]) {
                    userData.user.items.splice(i, 1);
                    donutChart.toChange();
                }
            }
        };
    });

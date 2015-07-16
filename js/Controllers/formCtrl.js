angular.module('formCtrl', ['ngAnimate'])
    .controller('formCtrl', function ($scope, userData, Calculation, donutChart) {
        $scope.user = userData.user;
        $scope.newForm = false;
        donutChart.toChange();
        $scope.kwh = function () {
            userData.user.kWh = userData.user.thisMonth - userData.user.lastMonth;
            userData.user.coast = Calculation.selectConsumers(userData.user.kWh);
        };
        $scope.addItem = function (itemName, itemCol, itemTime, itemPower) {
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
        $scope.changeItem = function (index) {
            $scope.numButton = index;
            $scope.newForm = !$scope.newForm;
            $scope.newName = userData.user.items[index].name;
            $scope.newCol = userData.user.items[index].col;
            $scope.newTime = userData.user.items[index].time;
            $scope.newPower = userData.user.items[index].power;
        };
        $scope.checkNewItem = function (index, newName, newCol, newTime, newPower) {
            userData.user.items[index].name = newName;
            userData.user.items[index].col = newCol;
            userData.user.items[index].time = newTime;
            userData.user.items[index].power = newPower;
            $scope.newForm = !$scope.newForm;
            donutChart.toChange();
        }

    });

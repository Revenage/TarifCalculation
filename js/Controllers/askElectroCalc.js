var user;
var app = angular
    .module('app', [])
    .controller('formCtrl', function ($scope, userData, Calculation, donutChart) {

        $scope.user = userData.user;

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

app.service('userData', function ($rootScope) {

    this.user = {
        consumersType: "1",
        lastMonth: "",
        thisMonth: "",
        kWh: "0",
        coast: "0",
        items: [
            {name: 'Телевизор', color: "#DDD000", col: 1, time: 240, power: 100},
            {name: 'Стиральная машина', color: "#5B50C3", col: 1, time: 10, power: 1500},
            {name: 'Холодильник', color: "#D7325B", col: 1, time: 1440, power: 700},
            {name: 'Утюг', color: "#264E56", col: 1, time: 20, power: 2000}
        ],
        months: [
            {name: 'Декабрь', value: ''},
            {name: 'Январь'},
            {name: 'Февраль'},
            {name: 'Март'},
            {name: 'Апрель'},
            {name: 'Май'},
            {name: 'Июнь'},
            {name: 'Июль'},
            {name: 'Август'},
            {name: 'Сентябрь'},
            {name: 'Октябрь'},
            {name: 'Ноябрь'},
            {name: 'Декабрь'}
        ]
    };
});

app.service('Calculation', function (userData) {

// var tarif1 = 0.3084;
// var tarif2 = 0.4194;
    var tarif1 = 0.366;
    var tarif2 = 0.63;
    var tarif3 = 1.407;

    this.selectConsumers = function (diff) {
        switch (userData.user.consumersType) {
            case "1":
                return one(diff);
                break;
            case '2':
                return two(diff);
                break;
            case '3':
                return threeFour(diff);
                break;
            case '4':
                return threeFour(diff);
                break;
            // ДОДЕЛАТЬ!!
            case '5':
                return fiveSeven(diff);
                break;
            case '6':
                return six(diff);
                break;
            case '7':
                return fiveSeven(diff);
                break;
        }
    };


    var one = function (x) {
        if (x <= 100) {
            return x * tarif1;
        }
        if (x > 100 && x <= 600) {
            return 100 * tarif1 + (x - 100) * tarif2;
        }
        else {
            return 100 * tarif1 + 500 * tarif2 + (x - 600) * tarif3;
        }
    };
    var two = function (x) {
        if (x <= 150) {
            return x * tarif1;
        }
        if (x > 150 && x <= 600) {
            return 150 * tarif1 + (x - 150) * tarif2;
        }
        else {
            return 150 * tarif1 + 450 * tarif2 + (x - 600) * tarif3;
        }
    };
    var threeFour = function (x) {
        if (x <= 3600) {
            return x * tarif1;
        }
        else {
            return 3600 * tarif1 + (x - 3600) * tarif3;
        }
    };
    var fiveSeven = function (x) {
        return x * tarif1;
    };
    var six = function (x) {
        return x * tarif2;
    };


});

app.controller('graphController', function ($scope, userData, Calculation) {
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
            $scope.data[i].coast = Calculation.selectConsumers(mas[i] - mas[i - 1]);
        }
        for (var j = 1; j < arrLength - 1; j++) {
            // Find Maximum X Axis Value
            if ($scope.data[j].coast > $scope.max)

                $scope.max = $scope.data[j].coast;
        }
    };
    // End Controller
});

// PIE CHART
app.service('donutChart', function (userData) {

    var getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 3; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    this.getRandCol = function () {
        return getRandomColor();
    };

    this.changeData = function () {
        return changeData();
    };

    var salesData = userData.user.items;

    var svg = d3.select("div.donutbody").append("svg").attr("width", 300).attr("height", 300);

    svg.append("g").attr("id", "salesDonut");

    Donut3D.draw("salesDonut", insertData(), 150, 150, 130, 100, 30, 0.4);

    var changeData = function () {
        Donut3D.transition("salesDonut", insertData(), 150, 100, 30, 0.4);
    };

    function insertData() {
        return salesData.map(function (d) {
            return {label: d.name, value: d.power, color: d.color};
        });
    }
});

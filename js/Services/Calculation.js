app.service('Calculation', function (userData) {

        var tarif1 = 0.366;
        var tarif2 = 0.63;
        var tarif3 = 1.407;

    this.selectConsumers = function (diff) {
        if (this.oldTarif == true) {
            tarif1 = 0.3084;
            tarif2 = 0.4194;
        } else {
            tarif1 = 0.366;
            tarif2 = 0.63;
        };
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

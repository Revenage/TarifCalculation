angular.module('carousel', ['ui.bootstrap'])
    .controller('CarouselCtrl', function ($scope) {
    $scope.slides = [{
        image: '../img/elektriba.png',
        name: 'Расчет электроэнергии',
        text: 'Интерактивный калькулятор, для расчета затрат на электроэнергию, а также способов их экономии',
        button: {
            color: 'btn btn-warning btn-lg',
            ico: 'glyphicon glyphicon-flash'
        }
    }, {
        image: '../img/vodosnabjenie.jpg',
        name: 'Расчет водоснабжения',
        text: 'Интерактивный калькулятор, для расчета затрат на горячую и холодную воду, а также способов их экономии',
        button: {
            color: 'btn btn-primary btn-lg',
            ico: 'glyphicon glyphicon-tint'
        }
    }, {
        image: '../img/otopl.jpg',
        name: 'Расчет отопления',
        text: 'Интерактивный калькулятор, для расчета затрат на отопление, а также способов их экономии',
        button: {
            color: 'btn btn-danger btn-lg',
            ico: 'glyphicon glyphicon-fire'
        }
    }];
})

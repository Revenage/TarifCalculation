var app = angular
    .module('app', ["ngRoute",'ui.bootstrap','carousel','anchorScroll', 'formCtrl', 'graphCtrl'])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
        url: "/home",
        templateUrl: "views/home.html"
    })
        .when('/about', {
        url: "/about",
        templateUrl: "views/about.html"
    })
        .when('/contact', {
        url: "/contact",
        templateUrl: "views/contact.html"
    })
        .when('#', {
        url: "/home",
        templateUrl: "views/home.html"
    })
        .when('/Electro', {
        url: "/Electro",
        templateUrl: "views/template_Electro.html",
        controller: "formCtrl",
	controller: "graphCtrl"
    })
        .otherwise({
    redirectTo: '/home' 
    });
});







var app = angular
    .module('app', ["ngRoute", 'carousel','anchorScroll'])
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
        .otherwise({
	redirectTo: '/home'	
	});
});







app.config(function ($routeProvider) {
    $routeProvider
    .when ('/', {
        templateUrl: '/views/home.html'
    })
    .otherwise({
        template: "<h1>Sorry </h1>"
    })
});
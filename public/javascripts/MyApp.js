var app = angular.module('myApp',['ngRoute']);

app
  .config(function($routeProvider){
    $routeProvider
      .when('/ddd',{
        templateUrl: '/nuevo.html'
      })
      .otherwise({redirecTo: '/'});
  });

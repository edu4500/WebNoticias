
var pruebaData = function ($http) {return $http.get('/api/noticias');}
var dataPolitica = function ($http) {return $http.get('/api/noticias/tipo?tipoid=politica');}


function config ($routeProvider,$locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'nuevo.html',
			controller: 'myPrueba'
		})
		.when('/politica', {
			templateUrl: 'nuevo.html',
			controller: 'PoliticaCrl'
		})
		.otherwise({redirectTo: '/'});
	//$locationProvider.html5Mode({enabled: true, requireBase: false});
}

var myPrueba = function($scope,pruebaData){
	pruebaData
		.success(function(data) {
			$scope.noticias = data;
			//console.log(data);
		})
		.error(function (e) {
			console.log(e);
		});
}
var PoliticaCrl = function($scope,dataPolitica){
	dataPolitica
		.success(function(data) {
			$scope.noticias = data;
			console.log(data);
		})
		.error(function (e) {
			console.log(e);
		});
}
angular.module('myApp',['ngRoute'])
  .controller('myPrueba',myPrueba)
  .controller('PoliticaCrl',PoliticaCrl)
  .service('pruebaData', pruebaData)
  .service('dataPolitica', dataPolitica)
  .config(['$routeProvider','$locationProvider',config]);

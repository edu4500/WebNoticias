(function () {

	angular.module('wnApp',['ngRoute', 'ui.bootstrap','flow']);

	function config ($routeProvider,$locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/home/home.view.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.when('/politica', {
				templateUrl: '/home/home.view.html',
				controller: 'pageCtrl',
				controllerAs: 'vm'
			})
			.when('/deportes', {
				templateUrl: '/home/home.view.html',
				controller: 'pageCtrl',
				controllerAs: 'vm'
			})
			.when('/farandula', {
				templateUrl: '/home/home.view.html',
				controller: 'pageCtrl',
				controllerAs: 'vm'
			})
			.when('/social', {
				templateUrl: '/home/home.view.html',
				controller: 'pageCtrl',
				controllerAs: 'vm'
			})
			.when('/noticia/:idnoticia', {
				templateUrl: '/noticiaDetalle/noticiaDetalle.view.html',
				controller: 'noticiaDetalleCtrl',
				controllerAs: 'vm'
			})
			.when('/login', {
				templateUrl: '/aunt/login/login.view.html',
				controller: 'loginCtrl',
				controllerAs: 'vm'
			})
			.when('/registro', {
				templateUrl: '/aunt/registro/registro.view.html',
				controller: 'registerCtrl',
				controllerAs: 'vm'
			})
			.when('/about', {
				templateUrl: '/home/about.view.html'
			})//*/
			.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}//*/

	angular
	  .module('wnApp')
	  //.controller('PoliticaCrl',PoliticaCrl)
	  .config(['$routeProvider','$locationProvider',config]);
})();
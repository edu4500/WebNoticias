(function () {

	var pageCtrl = function($location,$uibModal,wnData, authentication){
		var vm = this;

		vm.isLoggedIn = authentication.isLoggedIn();
		var path = $location.path().split("/");

		wnData.tipoData(path[1])
			.success(function(data) {
				vm.noticias = data;
				//console.log(data);
			})
			.error(function (e) {
				console.log(e);
			});

		vm.popupPublForm = function () {
			var modalInstance = $uibModal.open({
				templateUrl: '/publicarModal/publicarModal.view.html',
				controller: 'publicarModalCtrl as vm'
			});
			modalInstance.result.then(function (data) {
				vm.noticias.push(data);
			});
		};
	}
	pageCtrl.$inject = ['$location', '$uibModal','wnData','authentication'];
	angular
		.module('wnApp')
		.controller('pageCtrl',pageCtrl);

})();